import { auth, signOut } from "@/auth";
import { use } from "react";
import { Button } from "@/components/ui/button";

const LogOutPage = async () => {
    const session = await auth();

    return (
        <div className="flex items-center h-screen flex-col mt-20">
            <img src="/farewell.png" alt="Farewell" className="h-[300px] mb-10"/>
            <h1 className="text-white mb-4 text-4xl font-semibold"> Are you sure you want to log out?</h1>
            
            <form action={async () => {
                "use server";
    
                await signOut();
            }}>
                <Button type="submit" className="text-white bg-blue-400 text-xl p-8" size="lg" variant="secondary">Yes I am sure.</Button>
            </form>
        </div>
    )
}

export default LogOutPage;