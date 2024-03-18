"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

import ForwardArrow from "@/common/assets/icons/forward-arrow.svg";
// import { clientEnv } from "@/helper/env";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const header = document.querySelector("header");

      if (header) {
        header.classList.toggle("sticky_header", scroll >= 64);
        header.classList.toggle("absolute", scroll < 64);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="w-full absolute top-20 xl:top-16 lg:top-18 py-5 px-5 xl:px-10 z-30  bg-gradient-to-b from-[#0e7490] to-[#00C8FB] border-b-[#D7E3E9]/20 shadow-lg backdrop-blur-2xl ">
      <nav className="flex justify-between items-center w-full m-auto max-width h-10">
        <Link href="#hero" className="w-[200px] h-[38px]">
          <Image
            src="/logo.png"
            alt="Xinthesys_Logo"
            width={200}
            height={200}
          />
        </Link>
        <ul
          className={`flex justify-center max-w-lg items-center transition-all duration-500 ease-in-out w-full gap-14 xl:relative top-0 absolute xl:right-0 h-screen xl:h-full ${
            isOpen ? "flex-col bg-[#00C8FB] right-0" : "inactive"
          } ${isOpen ? "xl:hidden" : ""}`}
        >
          <li>
            <Link
              href="#features"
              className="whitespace-nowrap text-white text-lg p-2"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#technology"
              className="whitespace-nowrap text-white text-lg p-2"
            >
              Technology
            </Link>
          </li>
          <li>
            <Link
              href="#security"
              className="whitespace-nowrap text-white text-lg p-2"
            >
              Security
            </Link>
          </li>
          <li className={`${isOpen ? "block" : "hidden"} `}>
            <div className="flex flex-col gap-14">
              <Link href={"#"} className="text-white text-lg">
                Go to Dashboard
              </Link>
              <Link
                href={`${"#"}/auth/register`}
                className="text-lg text-white rounded-full text-ds-primary bg-transparent border-2 border-white py-2 px-7  flex items-center justify-center gap-3"
              >
                Log in
                <Image
                  src={ForwardArrow}
                  alt="forward arrow"
                  className="brightness-300"
                />
              </Link>
            </div>
          </li>
        </ul>
        <div className="xl:flex items-center justify-center gap-4  hidden ">
          <Link href={"#"} className="text-white text-lg">
            Go to Dashboard
          </Link>
          <Link
            href={`${"#"}/auth/register`}
            className="text-lg text-white rounded-full text-ds-primary bg-transparent border-2 border-white py-2 px-7  flex items-center justify-center gap-3"
          >
            Log in
            <Image
              src={ForwardArrow}
              alt="forward arrow"
              className="brightness-300 hover:brightness-50"
            />
          </Link>
        </div>
        {!isOpen && (
          <button
            className="bg-transparent block xl:hidden menu"
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

        <button
          className={`bg-transparent block xl:hidden text-white font-medium text-3xl ${
            isOpen ? "block z-10" : "hidden"
          }`}
          onClick={() => setIsOpen(false)}
        >
          X
        </button>
      </nav>
    </header>
  );
}
