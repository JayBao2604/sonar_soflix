import { auth } from "@/auth"
import { redirect } from "next/navigation";

export default async function CheckSession() {
    const session = await auth();
    
    if(!session) {
        return redirect("/login");
    }
     else {
        return redirect("/home");
     }
}