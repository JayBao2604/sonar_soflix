import { auth } from "@/auth"
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import Navbar from "../components/NavBar";

export default async function HomeLayout({children}: {children: ReactNode}) {
    
    return (
        <>
          <Navbar />
          <main className="w-full max-w-[2000px] mx-auto sm:px-6 lg:px-8">
            {children}
          </main>
        </>
      );
}