import React from "react";
import Blog from "./_components/blog";
import { ComponentCardsTabSection } from "@/apollo/types/gql/graphql";
interface HeaderProps {
  data: ComponentCardsTabSection;
}
function Bloglist({ data }: any) {
  return (
    <div>
      <Blog data={data} />
    </div>
  );
}

export default Bloglist;
