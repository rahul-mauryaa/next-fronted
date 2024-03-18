"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ForwardArrow from "@/common/assets/icons/forward-arrow-white.svg";
import { useAppContext } from "@/context/AppContext";

export default function Navbar({ headerToggle }: any) {
  const { isMobile } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`w-full sticky_header ${
        headerToggle ? "sm:top-18 top-18 xl:top-16" : "top-0"
      } py-5 px-0 xl:px-10 z-[60]  bg-[#0B0B0B] border-b-[#D7E3E9]/20 shadow-lg backdrop-blur-2xl`}
    >
      <nav className="flex justify-between items-center w-full m-auto max-width h-10">
        <Link href="/" className="xl:pl-0 pl-5 flex gap-2">
          <Image src="/logo.svg" alt="logo" width={30} height={30} />
          <span className="text-white text-3xl">Xinthesys</span>
        </Link>
        <ul
          className={`flex justify-center max-w-lg items-center transition-all duration-500 ease-in-out w-full gap-14 xl:relative top-0 absolute xl:right-0 h-screen  xl:h-full ${
            isOpen ? "flex-col bg-[#0B0B0B] xl:hidden" : "hidden  xl:flex"
          }`}
        >
          <li>
            {isMobile && (
              <button
                className={`bg-transparent  text-white font-medium text-3xl flex items-center ${
                  isOpen ? "block z-10" : "hidden"
                }`}
                onClick={() => setIsOpen(false)}
              >
                X
              </button>
            )}
          </li>
          <li>
            <Link href="/" className="whitespace-nowrap text-white text-lg p-2">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="whitespace-nowrap text-white text-lg p-2"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              href="/technology"
              className="whitespace-nowrap text-white text-lg p-2"
            >
              Technology
            </Link>
          </li>
          <li>
            <Link
              href="/resources"
              className="whitespace-nowrap text-white text-lg p-2"
            >
              Resources
            </Link>
          </li>

          <li className={`${isOpen ? "block" : "hidden"} `}>
            <div className="flex flex-col gap-14">
              <Link
                href={process.env.NEXT_PUBLIC_CUSTOMER_LOGIN || "#"}
                target={process.env.NEXT_PUBLIC_CUSTOMER_LOGIN ? "_blank" : ""}
                className="text-lg text-white rounded-full text-ds-primary bg-transparent border-2 border-white py-2 px-7  flex items-center justify-center gap-3"
              >
                Customer Login
                <Image src={ForwardArrow} alt="forward arrow" />
              </Link>
            </div>
          </li>
        </ul>
        <div className="xl:flex items-center justify-center gap-4  hidden ">
          <Link
            href={process.env.NEXT_PUBLIC_CUSTOMER_LOGIN || "#"}
            target={process.env.NEXT_PUBLIC_CUSTOMER_LOGIN ? "_blank" : ""}
            className="text-lg text-white rounded-full text-ds-primary bg-transparent border-2 border-white py-2 px-7  flex items-center justify-center gap-3"
          >
            Customer Login
            <Image src={ForwardArrow} alt="forward arrow" />
          </Link>
        </div>
        {isMobile && !isOpen && (
          <button
            className={`bg-transparent block menu pr-5`}
            onClick={handleMenuClick}
          >
            <Image
              src="/menu.svg"
              alt="Xinthesys_Logo"
              width={50}
              height={50}
              className="invert"
            />
          </button>
        )}
      </nav>
    </header>
  );
}
