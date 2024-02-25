"use client";
import { HeaderSection } from "@/apollo/types/gql/graphql";
import Link from "next/link";
import React, { useEffect } from "react";
import Navbar from "../navbar/navbar";
interface HeaderProps {
  headerdata?: HeaderSection;
}

export default function TopHeader({ headerdata }: HeaderProps) {
  return (
    <>
      {headerdata?.toggle && (
        <div
          className={`bg-[#7FD642] px-5 xl:px-10 py-3 flex flex-col lg:flex-row justify-center items-center lg:gap-5 gap-2 offer_wrapper`}
        >
          <p className="text-white text-sm lg:text-base font-medium text-center lg:text-left">
            {`${headerdata?.title}:${headerdata?.description}`}
            partnership
          </p>
          <Link
            href={headerdata?.offerButton?.redirectTo as any}
            className="bg-black text-white py-2 px-3 rounded-md text-sm lg:text-base"
          >
            {" "}
            {headerdata?.offerButton?.btnText}
          </Link>
        </div>
      )}
      <Navbar headerToggle={headerdata?.toggle} />
    </>
  );
}
