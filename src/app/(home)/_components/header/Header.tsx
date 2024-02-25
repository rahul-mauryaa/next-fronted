import React from "react";

import Hero from "./_components/hero/Hero";

import { ComponentCardsHeroSection } from "@/apollo/types/gql/graphql";

interface HeaderProps {
  data?: ComponentCardsHeroSection;
}

function Header({ data }: HeaderProps) {
  return (
    <div className=" bg-gradient-to-b from-[#22d3ee] to-[#00C8FB]  text-white  xl:text-lg">
      <Hero data={data} />
    </div>
  );
}

export default Header;
