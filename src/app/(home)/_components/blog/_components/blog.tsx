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

const Blog: React.FC<HeaderProps> = ({ data }) => {
  const { tabsItems } = data || {};
  const [activeTab, setActiveTab] = useState("compliance");
  const [hoverTab, setHoverTab] = useState("");

  const handleTabClick = (tabTitle: string) => setActiveTab(tabTitle);
  const handleTabOver = (tabTitle: string) => setHoverTab(tabTitle);

  const tabHeadingClasses = (title: string) => {
    const isActiveTab = activeTab === title;
    const isHoveredTab = hoverTab === title;
    return `tab_heading pl-12 pb-14 pt-8 text-left justify-start border-l-2 ${
      isActiveTab
        ? " border-black text-black items-center transition-border duration-500 ease-in-out"
        : ` hover:text-gray-700 hover:border-gray-700`
    } ${
      !isHoveredTab
        ? isActiveTab
          ? `${
              hoverTab === ""
                ? "border-black text-black"
                : "text-gray-500 border-gray-500"
            }`
          : `text-gray-400 border-gray-400 `
        : ``
    }`;
  };

  return (
    <section className="tab_section sm:px-10 px-5 py-10 sm:py-14 lg:py-20 bg-gray-100">
      <div className="flex flex-col grid-rows-2 grid-flow-row gap-6 xl:flex-row xl:mx-16 xl:gap-48 ">
        <h2 className="text-[#0b0b0b] font-normal text-5xl p-0 w-full leading-[1.231] xl:w-2/5 xl:p-6">
          What makes our bank stand out from the rest?
        </h2>
        <div className="w-full max-h-full flex flex-col justify-end xl:w-1/2">
          <p className="text-[#3a3a3a] mb-5">
            Interdum in nec scelerisque nunc et sit venenatis pretium enim
            tellus aliquet in lectus rhoncus non nisl feugiat velit odio
            volutpat eget mattis nisl tincidunt ornare commodo scelerisque quis.
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-4">
        <Tabs
          value={activeTab}
          orientation="vertical"
          className="gap-5 sm:gap-10 bg-transparent flex-col lg:flex-row"
        >
          <TabsHeader
            className="bg-transparent relative flex-col rounded-none box-border p-0 "
            placeholder={undefined}
            indicatorProps={{
              className: "hover:bg-transparent z-[-1] shadow-none rounded-none",
            }}
          >
            {tabsItems?.map(({ title, description }: any) => (
              <Tab
                key={title}
                placeholder={undefined}
                value={title}
                onMouseEnter={() => handleTabOver(title)}
                onMouseLeave={() => setHoverTab("")}
                onClick={() => handleTabClick(title)}
                className={tabHeadingClasses(title)}
              >
                <div>
                  <h2 className="text-2xl mb-3 font-medium">{title}</h2>
                  {activeTab === title && (
                    <p className="text-base">{description}</p>
                  )}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            className="max-w-3xl w-full mx-auto"
            placeholder={undefined}
          >
            {tabsItems?.map(({ title, artical }: any, index: any) => (
              <div key={index}>
                <TabPanel key={title} value={title} className="py-0">
                  <div key={artical?.data?.attributes?.mainTitle}>
                    <h3 className="text-[#00C8FB] text-3xl font-semibold mb-8 text-center">
                      {artical?.data?.attributes?.mainTitle}
                    </h3>
                    <div className="img_wrapper mb-10">
                      {artical?.data?.attributes?.image?.data?.attributes
                        ?.url && (
                        <Image
                          src={
                            getStrapiMediaURL(
                              artical?.data?.attributes?.image?.data?.attributes
                                ?.url
                            )!
                          }
                          width={400}
                          height={350}
                          quality={70}
                          alt="Article Image"
                          style={{ margin: "auto" }}
                        />
                      )}
                    </div>
                    {artical?.data?.attributes?.details?.map(
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
              </div>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </section>
  );
};

export default Blog;
