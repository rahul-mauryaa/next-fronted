import {
  ResourcesPageQuery,
  ResourcesPageQueryVariables,
} from "@/apollo/types/gql/graphql";
import { getClient } from "@/lib/client";

import TopHeader from "@/common/components/topheader/topheader";
import Footer from "../../common/components/footer/Footer";
import { FILTER_PAGE_QUERY } from "@/apollo/queries/resources";
import ResourcesComponent from "../../common/components/resources/ResourcesComponent";
export const revalidate = 59;
export default async function Resources() {
  const {
    data: { pages },
  } = await getClient().query<ResourcesPageQuery, ResourcesPageQueryVariables>({
    query: FILTER_PAGE_QUERY,
    variables: {
      slug: "resources",
    },
  });

  const response = pages?.data[0];
  const contents = response?.attributes?.contentSection;

  function getPageSectionData(
    name: string | undefined,
    content: unknown | any,
    index: any
  ) {
    const componentReturnType: { [name: string]: JSX.Element } = {
      ComponentCardsResourcesSection: (
        <ResourcesComponent data={content} key={index} />
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
