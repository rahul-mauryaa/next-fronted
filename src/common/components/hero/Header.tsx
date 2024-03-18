import React from "react";

import Hero from "@/common/components/hero/Hero";

import { ComponentCardsHeroSection } from "@/apollo/types/gql/graphql";

interface HeaderProps {
  data?: ComponentCardsHeroSection;
}

function Header({ data }: HeaderProps) {
  return (
    <>
      <div className=" bg-[#1D1D1D]  text-white  xl:text-lg">
        <Hero data={data} />
      </div>
    </>
  );
}

export default Header;
