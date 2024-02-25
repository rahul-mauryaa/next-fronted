import React from "react";
import dynamic from "next/dynamic";

import { ComponentCardsTabSection } from "@/apollo/types/gql/graphql";
interface HeaderProps {
  data: ComponentCardsTabSection;
}
const Blog = dynamic(() => import("./_components/blog"));
function Bloglist({ data }: HeaderProps) {
  return (
    <>
      <Blog data={data} />
    </>
  );
}

export default Bloglist;
