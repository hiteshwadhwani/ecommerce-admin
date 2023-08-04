import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prismadb from "@/lib/primsdb";

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }
    const storeWithId = await prismadb.store.findUnique({
      where: {
        id: params.storeId,
        userId: userId,
      },
    });
    if (!storeWithId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const { label, imageUrl } = await req.json();

    if (!label || !imageUrl) {
      return new NextResponse("label or imageUrl missing", { status: 400 });
    }

    const newBillboard = await prismadb.billboard.create({
      data: {
        label,
        imageUrl,
        storeId: params.storeId,
      },
    });

    return NextResponse.json(newBillboard);
  } catch (error) {
    console.log("[BILLBOARDS_POST]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
