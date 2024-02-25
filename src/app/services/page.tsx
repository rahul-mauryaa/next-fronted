import { FILTER_PAGE_QUERY } from "@/apollo/queries/home";
import {
  ServicesPageQuery,
  ServicesPageQueryVariables,
  HeaderpageQuery,
} from "@/apollo/types/gql/graphql";
import { getClient } from "@/lib/client";

import TopHeader from "@/common/components/topheader/topheader";

import Footer from "../(home)/_components/footer/Footer";

import { HEADER_QUERY } from "@/apollo/queries/header";
import Testimonials from "@/app/(home)/_components/testimonials/testimonials";
export const dynamic = "force-dynamic";
export default async function Service() {
  const {
    data: { pages },
    loading,
    error,
  } = await getClient().query<ServicesPageQuery, ServicesPageQueryVariables>({
    query: FILTER_PAGE_QUERY,
    variables: {
      slug: "services",
    },
  });

  const { data: header } = await getClient().query<HeaderpageQuery>({
    query: HEADER_QUERY,
  });

  if (loading) return <span>Loading...</span>;

  if (error) return <span>{error?.message}</span>;

  const response = pages?.data[0];
  const contents = response?.attributes?.contentSection;

  function getPageSectionData(
    name: string | undefined,
    content: unknown | any,
    index: unknown | any
  ) {
    const componentReturnType: { [name: string]: JSX.Element } = {
      ComponentCardsTestimonialsSection: (
        <Testimonials data={content} key={index} />
      ),
    };

    return name ? componentReturnType[name] : null;
  }

  function getPageHeaderData(name: string | undefined, content: unknown | any) {
    const componentReturnType: { [name: string]: JSX.Element } = {
      HeaderSection: <TopHeader headerdata={content} />,
    };

    return name ? componentReturnType[name] : null;
  }

  return (
    <main className="mx-auto text-[16px] scroll-smooth font-bariolRegular xl:text-lg">
      {header &&
        // eslint-disable-next-line no-underscore-dangle
        getPageHeaderData(
          header?.headerSection?.data?.attributes?.__typename,
          header?.headerSection?.data?.attributes
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
