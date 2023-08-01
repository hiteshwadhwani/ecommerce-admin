import { auth } from "@clerk/nextjs";
import SettingsForm from "./components/SettingsForm";
import { redirect } from "next/navigation";
import prismadb from "@/lib/primsdb";

const SettingsPage = async ({ params }: { params: { storeId: string } }) => {
    const {userId} = auth()

    if(!userId){
        redirect('/sign-in')
    }
    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId,
            userId
        }
    })

    if(!store){
        redirect("/")
    }
  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <SettingsForm store={store} />
      </div>
    </div>
  );
};
export default SettingsPage;
