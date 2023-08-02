import BillboardClient from "./components/BillboardClient"

const BillboardsPage = () => {
    return (
        <div className="flex flex-col">
            <div className="flex-1 mt-4 gap-x-4">
                <BillboardClient />
            </div>
            
        </div>
    )
}
export default BillboardsPage