import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prismadb from "@/lib/primsdb";

export async function PATCH(
  req: Request,
  { params }: { params: { storeId: string; billboardId: string } }
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

    const updatedBillboard = await prismadb.billboard.update({
      data: {
        label,
        imageUrl,
        storeId: params.storeId,
      },
      where: {
        id: params.billboardId,
      },
    });

    return NextResponse.json(updatedBillboard);
  } catch (error) {
    console.log("[BILLBOARDSID_PATCH]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { storeId: string; billboardId: string } }
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
    if (!params.storeId || !params.billboardId) {
      return new NextResponse("some field missing", { status: 400 });
    }

    const deletedBillboard = await prismadb.billboard.delete({
      where: {
        id: params.billboardId,
      },
    });

    return NextResponse.json(deletedBillboard);
  } catch (error) {
    console.log("[BILLBOARDSID_DELETE]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
