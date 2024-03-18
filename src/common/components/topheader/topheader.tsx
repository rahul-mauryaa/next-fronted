"use client";
import { ComponentCardsHeaderSection } from "@/apollo/types/gql/graphql";
import Link from "next/link";
import React, { useEffect } from "react";
interface HeaderProps {
  data: ComponentCardsHeaderSection;
}

export default function TopHeader() {
  // console.log(data, "Header Data");
  useEffect(() => {
    const handleTopScroll = () => {
      const scroll = window.scrollY;
      const header = document.querySelector(".offer_wrapper");
      header.style.display =
        scroll >= 144 ? "none" : scroll === 0 ? "flex" : "";
    };
    window.addEventListener("scroll", handleTopScroll);
  }, []);
  return (
    <div className="bg-[#7FD642] px-5 xl:px-10 py-3 flex justify-center items-center gap-5 offer_wrapper">
      <p className="text-white text-base font-medium">
        JUST ANNOUNCED: Refinitiv extends offerings with Xinthesys ADEPT™
        partnership
      </p>
      <Link
        href={"#"}
        className="bg-black text-white py-2 px-3 rounded-md text-base"
      >
        {" "}
        See Announcement Here
      </Link>
    </div>
  );
}
