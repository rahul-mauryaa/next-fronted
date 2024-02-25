import { HEADER_QUERY } from "@/apollo/queries/header";
import {
  HeaderpageQuery,
  TechnologyPageQuery,
  TechnologyPageQueryVariables,
} from "@/apollo/types/gql/graphql";
import { getClient } from "@/lib/client";

import TopHeader from "@/common/components/topheader/topheader";
import Footer from "../(home)/_components/footer/Footer";
import { FILTER_PAGE_QUERY } from "@/apollo/queries/technology";
import TechnologyComponent from "./_component/TechnologyComponent";
import Hero from "@/app/(home)/_components/header/_components/hero/Hero";
import BlogList from "./_component/BlogList";
export const dynamic = "force-dynamic";
export default async function Technology() {
  const {
    data: { pages },
    loading,
    error,
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

  const { data } = await getClient().query<HeaderpageQuery>({
    query: HEADER_QUERY,
  });

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
      ComponentCardsTabSection: <BlogList data={content} key={index} />,
    };

    return name ? componentReturnType[name] : null;
  }

  if (loading) return <span>Loading...</span>;

  if (error) return <span>{error?.message}</span>;

  function getPageHeaderData(name: string | undefined, content: unknown | any) {
    const componentReturnType: { [name: string]: JSX.Element } = {
      HeaderSection: <TopHeader headerdata={content} />,
    };

    return name ? componentReturnType[name] : null;
  }

  return (
    <main className="mx-auto text-[16px] scroll-smooth font-bariolRegular xl:text-lg">
      {data &&
        // eslint-disable-next-line no-underscore-dangle
        getPageHeaderData(
          data?.headerSection?.data?.attributes?.__typename,
          data?.headerSection?.data?.attributes
        )}

      {contents &&
        contents.map((content, index) => {
          // eslint-disable-next-line no-underscore-dangle
          return getPageSectionData(content?.__typename, content, index);
        })}
      <Footer />
    </main>
  );
}
