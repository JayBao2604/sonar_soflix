import { ReactNode } from "react";
import Link from "next/link"; 
import Image from "next/image";
import BackgroundImage from "../../public/background_app.jpg";
import Logo from "../../public/sonar.png";
export default function AuthLayout({children}: {children: ReactNode}) {
    return (
        <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={BackgroundImage}
        alt="background image"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        priority
        fill
      />

      <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={200}
            height={200}
            priority
            className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
          />
      </Link>
      {children}
    </div>
    );
}