"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/sonar.png";
import { usePathname } from "next/navigation";
import { Bell, Search, Bot } from "lucide-react";
import UserNav from "./UserNav";
import { useState } from "react";


interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href: "/home" },
  { name: "Podcasts", href: "/home/podcast" },
  { name: "OST", href: "/home/ost" },
  { name: "Playlist", href: "/home/playlist" },
  { name: "Liked song", href: "/home/user/liked" }  
];
const linksLeft: linkProps[] = [
  { name: "Search", href: "/search" }
];

export default function Navbar() {
  const pathName = usePathname();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  }

  return (
    <div className="w-full max-w-[2000px] mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src={Logo} alt="Sonar logo" priority />
        </Link>
        <ul className={`${menuVisible ? "" : "hidden"} sm:flex flex flex-col gap-x-6 ml-14 sm:bg-transparent sm:h-auto sm:flex-row sm:justify-between sm:static bg-black/0 bg-opacity-90`}>
          {links.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="text-sky-500 font-semibold underline text-lg hover:text-white sm:text-sky-500 sm:hover:text-white transition duration-200 ease-in"
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
        <div id="menu-button" className="z-20 sm:hidden cursor-pointer" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

      <div className="flex right-0 top-0 items-center gap-x-8">
        <Link href="/boxchat">
          <Bot className="h-5 w-5 text-gray-300 cursor-pointer hover:text-sky-700 duration-200" />
        </Link>
        <div className="flex items-center">
          <div className="md:flex gap-x-6 ml-14">
            {linksLeft.map((link, idx) => (
              <div key={idx}>
                {pathName === link.href ? (
                  <Link
                    href={link.href}
                    className="text-sky-500 font-semibold underline text-lg hover:text-white"
                  >
                    <Search className="h-5 w-5 text-gray-300 cursor-pointer" />
                  </Link>
                ) : (
                  <Link
                      className="text-gray-300 font-normal text-lg hover:text-sky-700"
                      href={link.href}
                    >
                      <Search className="h-5 w-5 text-gray-300 hover:text-sky-700 cursor-pointer duration-200" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
        <Bell className="h-5 w-5 text-gray-300 cursor-pointer" />
        <UserNav />
      </div>
    </div>
  );
}