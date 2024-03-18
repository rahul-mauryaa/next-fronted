"use client";
import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@/common/components/materialTailwind/materialtailwind";

import Image from "next/image";
import { getStrapiMediaURL } from "@/utils/helper";
import { ComponentCardsTabSection } from "@/apollo/types/gql/graphql";

interface HeaderProps {
  data: ComponentCardsTabSection;
}

export default function Blog({ data }: HeaderProps) {
  const { tabsItems } = data || {};
  const [tabs] = useState(tabsItems || []);
  const [activeTab, setActiveTab] = useState("compliance");
  const handleTabClick = (tabTitle: string) => {
    if (tabTitle) {
      setActiveTab(tabTitle);
    }
    return;
  };

  return (
    <>
      <section className="tab_section sm:px-10 px-5 py-10 sm:py-14 lg:py-20 bg-gray-100">
        <div className="container mx-auto">
          <Tabs
            value={activeTab}
            orientation="vertical"
            className="gap-5 sm:gap-10 bg-transparent flex-col lg:flex-row"
          >
            <TabsHeader
              className="bg-transparent gap-5 lg:gap-8 relative flex-col"
              indicatorProps={{
                className:
                  "hover:bg-transparent z-[-1] shadow-none rounded-none",
              }}
            >
              {tabs?.map(({ title, description }: any) => (
                <Tab
                  key={title}
                  value={title}
                  onClick={() => handleTabClick(title)}
                  className={
                    activeTab === title
                      ? "p-5 lg:p-8 text-left text-white bg-[#00C8FB] justify-start tabactive"
                      : "p-5 lg:p-8 bg-white text-left  justify-start"
                  }
                >
                  <div>
                    <h2 className="text-2xl mb-3 font-medium">{title}</h2>
                    <p className="text-base">{description}</p>
                  </div>
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody className="max-w-3xl w-full mx-auto">
              {tabs &&
                tabs?.map(({ title, artical }: any) => (
                  <TabPanel key={title} value={title} className="py-0">
                    <div key={artical?.data?.attributes?.mainTitle}>
                      <h3 className="text-[#00C8FB] text-3xl font-semibold mb-8 text-center">
                        {artical?.data?.attributes?.mainTitle}
                      </h3>
                      <div className="img_wrapper mb-10">
                        <Image
                          src={
                            getStrapiMediaURL(
                              artical?.data?.attributes?.image?.data?.attributes
                                ?.url
                            )!
                          }
                          width={400}
                          height={400}
                          quality={100}
                          alt="Article Image"
                          className="mx-auto"
                        />
                      </div>
                      {artical?.data?.attributes?.details &&
                        artical?.data?.attributes?.details?.map(
                          (detailItem: any) => (
                            <div key={detailItem?.title} className="mb-5">
                              <h4 className="text-2xl font-medium mb-3 text-gray-800">
                                {detailItem?.title}
                              </h4>
                              <p className="text-base font-normal tracking-wider text-gray-800">
                                {detailItem.description}
                              </p>
                            </div>
                          )
                        )}
                    </div>
                  </TabPanel>
                ))}
            </TabsBody>
          </Tabs>
        </div>
      </section>
    </>
  );
}
