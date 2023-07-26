import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prismadb from "@/lib/primsdb";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { name } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const newStore = await prismadb.store.create({
      data: {
        name,
        userId,
      },
    });
    return NextResponse.json(newStore);
  } catch (error) {
    console.log("[STORES_POST]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
