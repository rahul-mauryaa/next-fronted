import { HEADER_QUERY } from "@/apollo/queries/header";
import {
  HeaderpageQuery,
  ResourcesPageQuery,
  ResourcesPageQueryVariables,
} from "@/apollo/types/gql/graphql";
import { getClient } from "@/lib/client";

import TopHeader from "@/common/components/topheader/topheader";
import Footer from "../(home)/_components/footer/Footer";
import { FILTER_PAGE_QUERY } from "@/apollo/queries/resources";
import ResourcesComponent from "./_components/ResourcesComponent";
export const dynamic = "force-dynamic";
export default async function Resources() {
  const {
    data: { pages },
    loading,
    error,
  } = await getClient().query<ResourcesPageQuery, ResourcesPageQueryVariables>({
    query: FILTER_PAGE_QUERY,
    variables: {
      slug: "resources",
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
      ComponentCardsResourcesSection: (
        <ResourcesComponent data={content} key={index} />
      ),
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
