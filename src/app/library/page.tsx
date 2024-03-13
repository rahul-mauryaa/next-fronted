import React from "react";

import Bloglist from "@/common/components/blog/bloglist";

import Testimonials from "../../common/components/testimonials/testimonials";
import { getClient } from "@/lib/client";
import {
  LibraryPageQuery,
  LibraryPageQueryVariables,
} from "@/apollo/types/gql/graphql";
import { FILTER_PAGE_QUERY } from "@/apollo/queries/library";
import Header from "../../common/components/header/Header";
import Companynumber from "@/common/components/companynumber/companynumber";
import Companystory from "@/common/components/companystory/companystory";
import Overservices from "@/common/components/overservices/ouverservices";
export const dynamic = "force-dynamic";
async function Library() {
  const {
    data: { pages },
  } = await getClient().query<LibraryPageQuery, LibraryPageQueryVariables>({
    query: FILTER_PAGE_QUERY,
    variables: {
      slug: "library",
    },
  });

  const response = pages?.data[0];
  const contents = response?.attributes?.contentSection;

  function getPageSectionData(
    name: string | undefined,
    content: unknown | any,
    index: unknown | any
  ) {
    const componentReturnType: { [name: string]: JSX.Element } = {
      ComponentCardsHeroSection: (
        <div className="w-full space-y-6 pb-10" key={index}>
          <h1 className="text-center">
            Component Name: <span className="underline">Slider Component</span>
          </h1>
          <Header data={content} />
        </div>
      ),
      ComponentCardsTabSection: (
        <div className="w-full space-y-6 pb-10" key={index}>
          <h1 className="text-center">
            Component Name: <span className="underline">Tab Component</span>
          </h1>
          <Bloglist data={content} />
        </div>
      ),
      ComponentCardsTestimonialsSection: (
        <div className="w-full space-y-6 pb-10" key={index}>
          <h1 className="text-center">
            Component Name:{" "}
            <span className="underline">Testiomonial Component</span>
          </h1>
          <Testimonials
            data={content}
            sliderName={"homeslider"}
            title={"You’re in demo company"}
          />
        </div>
      ),
      ComponentCardsCompanyNumberSection: (
        <div className="w-full space-y-6 pb-10" key={index}>
          <h1 className="text-center">
            Component Name:{" "}
            <span className="underline">Company Number Component</span>
          </h1>
          <Companynumber data={content} />
        </div>
      ),
      ComponentCardsCompanyStorySection: (
        <div className="w-full space-y-6 pb-10" key={index}>
          <h1 className="text-center">
            Component Name:{" "}
            <span className="underline">Company Story Component</span>
          </h1>
          <Companystory data={content} />
        </div>
      ),
      ComponentCardsOverServicesSection: (
        <div className="w-full space-y-6 pb-10" key={index}>
          <h1 className="text-center">
            Component Name:{" "}
            <span className="underline">Company OverServices Component</span>
          </h1>
          <Overservices data={content} />
        </div>
      ),
    };

    return name ? componentReturnType[name] : null;
  }

  return (
    <div className="mx-auto text-[16px] scroll-smooth font-bariolRegular flex flex-col items-center xl:text-lg mt-6">
      <p className="font-medium text-2xl p-4">Component List</p>
      {contents &&
        contents.map((content, index) => {
          // eslint-disable-next-line no-underscore-dangle
          return getPageSectionData(content?.__typename, content, index);
        })}
      {/* <Companystory /> */}
    </div>
  );
}

export default Library;
