import {
  TechnologyPageQuery,
  TechnologyPageQueryVariables,
} from "@/apollo/types/gql/graphql";
import { getClient } from "@/lib/client";

import TopHeader from "@/common/components/topheader/topheader";
import Footer from "../../common/components/footer/Footer";
import { FILTER_PAGE_QUERY } from "@/apollo/queries/technology";
import TechnologyComponent from "../../common/components/technology/TechnologyComponent";
import Hero from "@/common/components/header/Hero";
import Bloglist from "@/common/components/blog/bloglist";

export const dynamic = "force-dynamic";
export default async function Technology() {
  const {
    data: { pages },
  } = await getClient().query<
    TechnologyPageQuery,
    TechnologyPageQueryVariables
  >({
    query: FILTER_PAGE_QUERY,
    variables: {
      slug: "technology",
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
      ComponentCardsHeroSection: <Hero data={content} key={index} />,
      ComponentCardsTechnologySection: (
        <TechnologyComponent data={content} key={index} />
      ),
      ComponentCardsTabSection: <Bloglist data={content} key={index} />,
    };

    return name ? componentReturnType[name] : null;
  }

  return (
    <main className="mx-auto text-[16px] scroll-smooth font-bariolRegular xl:text-lg">
      <TopHeader />
      {contents &&
        contents.map((content, index) => {
          // eslint-disable-next-line no-underscore-dangle
          return getPageSectionData(content?.__typename, content, index);
        })}
      <Footer />
    </main>
  );
}
