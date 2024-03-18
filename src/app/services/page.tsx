import { FILTER_PAGE_QUERY } from "@/apollo/queries/services";
import {
  ServicesPageQuery,
  ServicesPageQueryVariables,
} from "@/apollo/types/gql/graphql";
import { getClient } from "@/lib/client";
import TopHeader from "@/common/components/topheader/topheader";
import Footer from "../../common/components/footer/Footer";
import Servicestestimonials from "@/common/components/testimonials/servicestestimonials";
export const revalidate = 10;

export default async function Service() {
  const {
    data: { pages },
  } = await getClient().query<ServicesPageQuery, ServicesPageQueryVariables>({
    query: FILTER_PAGE_QUERY,
    variables: {
      slug: "services",
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
      ComponentCardsTestimonialsSection1: (
        <Servicestestimonials
          data={content}
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
