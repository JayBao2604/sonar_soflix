import { auth } from "@/auth"
import { redirect } from "next/navigation";
import HomePage from "./components/HomePage";

export default async function Home() {
  return (
    <HomePage />
  );
  /*const session = await auth();
  
  if(!session) {
    return redirect("/login");
  }
   else {
    return redirect("/home");
   }*/
}
