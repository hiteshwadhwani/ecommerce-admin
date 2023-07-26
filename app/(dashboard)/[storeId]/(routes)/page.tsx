import React from "react"

interface DashboardPageProps{
    params: {
        storeId: string
    }
}

const DashboardPage: React.FC<DashboardPageProps> = ({params}) => {
    return <div>Dashboard page</div>
}
export default DashboardPage