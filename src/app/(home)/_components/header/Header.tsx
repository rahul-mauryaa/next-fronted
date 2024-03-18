import React from "react";

import Hero from "./_components/hero/Hero";

import {
  ComponentCardsHeaderSection,
  ComponentCardsHeroSection,
} from "@/apollo/types/gql/graphql";
import Navbar from "@/common/components/navbar/navbar";
import TopHeader from "@/common/components/topheader/topheader";
interface HeaderProps {
  data: ComponentCardsHeroSection;
}

function Header({ data }: HeaderProps) {
  return (
    <>
      <TopHeader />
      <Navbar />
      <div className=" bg-gradient-to-b from-[#22d3ee] to-[#00C8FB]  text-white  xl:text-lg">
        <Hero data={data} />
      </div>
    </>
  );
}

export default Header;
