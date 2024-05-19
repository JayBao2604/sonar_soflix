"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/sonar.png";
import { usePathname } from "next/navigation";
import { Search, Bot } from "lucide-react";
import UserNav from "./UserNav";
import { useState } from "react";


interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href: "/home" },
  { name: "Podcast", href: "/home/podcast" },
  { name: "OST", href: "/home/ost" },
  { name: "Playlist", href: "/home/playlist" },
  { name: "Top Rated", href: "/home/top-rated" },
];

export default function Navbar() {
  const pathName = usePathname();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  }

  return (
    <div className="w-full max-w-[2000px] mx-auto items-center justify-between px-2 md:px-4 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-20">
          <Image src={Logo} alt="Sonar logo" priority />
        </Link>
        <ul className={`${menuVisible ? "" : "hidden"} md:flex flex flex-col gap-x-6 md:gap-x-8 ml-14 md:bg-transparent md:h-auto md:flex-row md:justify-between md:static bg-black/0 bg-opacity-90`}>
          {links.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="text-sky-500 font-semibold underline text-lg hover:text-white md:text-sky-500 md:hover:text-white transition duration-200 ease-in"
                  >
                    {link.name}
                  </Link>
                </li>
                ) : (
                <li>
                  <Link
                    className="text-gray-300 sm:text-gray-300 font-normal text-lg hover:text-sky-700 sm:hover:text-sky-700 transition duration-200 ease-in"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
        <div id="menu-button" className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
             strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    
      <div className="flex right-0 top-0 items-center gap-x-6 md:gap-x-8">
        <Link href="/boxchat">
          <Bot className="h-5 w-5 text-gray-300 cursor-pointer hover:text-sky-700 duration-200" />
        </Link>
        <Link href="/search">
          <Search className="h-5 w-5 text-gray-300 cursor-pointer hover:text-sky-700 duration-200" />
        </Link>
        <UserNav /> 
      </div>
    </div>
  );
}