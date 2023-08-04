import prismadb from "@/lib/primsdb";
import BillboardIdClient from "./components/BillboardIdClient";

const BillboardIdPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  });

  return (
    <div className="flex-col">
            <div className="flex-1 p-8 pt-6 space-y-4">
                <BillboardIdClient initialData={billboard} />
            </div>
            
        </div>
  );
};
export default BillboardIdPage;
