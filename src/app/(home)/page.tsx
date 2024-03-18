import Footer from "../../common/components/footer/Footer";
import Header from "../../common/components/hero/Header";
import { FILTER_PAGE_QUERY } from "@/apollo/queries/home";
import {
  HomePageQuery,
  HomePageQueryVariables,
} from "@/apollo/types/gql/graphql";
import { getClient } from "@/lib/client";
import Bloglist from "@/common/components/blog/bloglist";
import TopHeader from "@/common/components/topheader/topheader";
import Testimonials from "../../common/components/testimonials/testimonials";
export const revalidate = 10;

export default async function Home() {
  const {
    data: { pages },
  } = await getClient().query<HomePageQuery, HomePageQueryVariables>({
    query: FILTER_PAGE_QUERY,
    variables: {
      slug: "home",
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
      ComponentCardsHeroSection: <Header data={content} key={index} />,
      ComponentCardsTabSection: <Bloglist data={content} key={index} />,
      ComponentCardsTestimonialsSection: (
        <Testimonials
          data={content}
          sliderName={"homeslider"}
          title={"You’re in good company"}
          key={index}
        />
      ),
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
