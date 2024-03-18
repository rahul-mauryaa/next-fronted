import { HeaderpageQuery, HeaderSection } from "@/apollo/types/gql/graphql";
import Link from "next/link";
import React, { useEffect } from "react";
import Navbar from "../navbar/navbar";
import { getClient } from "@/lib/client";
import { HEADER_QUERY } from "@/apollo/queries/header";

export default async function TopHeader() {
  const { data: header } = await getClient().query<HeaderpageQuery>({
    query: HEADER_QUERY,
  });
  const res = header?.headerSection?.data?.attributes;
  const headerdata = res as HeaderSection;
  return (
    <>
      {headerdata?.toggle && (
        <div
          className={`bg-[#1D1D1D] px-5 xl:px-10 py-3 flex flex-col lg:flex-row justify-center items-center lg:gap-5 gap-2 offer_wrapper`}
        >
          <p className="text-white text-sm lg:text-base font-semibold text-center lg:text-left">
            {`${headerdata?.title}:${headerdata?.description}`}
            partnership
          </p>
          <Link
            href={headerdata?.offerButton?.redirectTo as any}
            className="bg-[#BABABA] text-black py-2 px-3 rounded-md text-sm lg:text-base"
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
