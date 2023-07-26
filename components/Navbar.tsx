import { UserButton, auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import MainNav from "./MainNav"

const Navbar = () => {
    const {userId} = auth()

    if(!userId){
        redirect('/sign-in')
    }
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <div>store switcher</div>
                <MainNav />
                <div className="ml-auto flex items-center space-x-4">
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>
        </div>
    )
}
export default Navbar