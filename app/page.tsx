import { Button } from "@/components/ui/button";
import { auth } from "@/auth"
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  
  if(!session) {
    return redirect("/login");
  }
   else {
    return redirect("/home");
   } 
}
