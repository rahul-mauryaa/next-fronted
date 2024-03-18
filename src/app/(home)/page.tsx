import Footer from "./_components/footer/Footer";
import Header from "./_components/header/Header";

import { FILTER_PAGE_QUERY } from "@/apollo/queries/home";
import {
  HomePageQuery,
  HomePageQueryVariables,
} from "@/apollo/types/gql/graphql";
import { getClient } from "@/lib/client";
import Bloglist from "./_components/blog/bloglist";
import TopHeader from "@/common/components/topheader/topheader";
export const dynamic = "force-dynamic";
export default async function Home() {
  const {
    data: { pages },
    loading,
    error,
  } = await getClient().query<HomePageQuery, HomePageQueryVariables>({
    query: FILTER_PAGE_QUERY,
    variables: {
      slug: "home",
    },
  });

  if (loading) return <span>Loading...</span>;

  if (error) return <span>{error?.message}</span>;

  const response = pages?.data[0];
  const contents = response?.attributes?.contentSection;

  function getPageSectionData(
    name: string | undefined,
    content: unknown | any
  ) {
    const componentReturnType: { [name: string]: JSX.Element } = {
      // ComponentCardsHeaderSection: <TopHeader data={content} />,
      ComponentCardsHeroSection: <Header data={content} />,
      ComponentCardsTabSection: <Bloglist data={content} />,
    };

    return name ? componentReturnType[name] : null;
  }

  return (
    <main className="mx-auto text-[16px] scroll-smooth font-bariolRegular xl:text-lg">
      {contents &&
        contents.map((content, index) => {
          // eslint-disable-next-line no-underscore-dangle
          return getPageSectionData(content?.__typename, content);
        })}

      <Footer />
    </main>
  );
}
