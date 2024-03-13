"use client";
import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Image from "next/image";
import { getStrapiMediaURL } from "@/utils/helper";
import { ComponentCardsTabSection } from "@/apollo/types/gql/graphql";

interface HeaderProps {
  data: ComponentCardsTabSection;
}

const Blog: React.FC<HeaderProps> = ({ data }) => {
  const { tabsItems, Head } = data || {};
  const commonimagetoggle = Head?.commonimagetoggle;
  const [activeTab, setActiveTab] = useState<string>(
    (tabsItems && tabsItems[0]?.title) || ""
  );
  const [hoverTab, setHoverTab] = useState("");

  const handleTabClick = (tabTitle: string) => setActiveTab(tabTitle);
  const handleTabOver = (tabTitle: string) => setHoverTab(tabTitle);

  const tabHeadingClasses = (title: string) => {
    const isActiveTab = activeTab === title;
    const isHoveredTab = hoverTab === title;

    return `
      tab_heading pl-12 pb-14 pt-8 text-left justify-start border-l-2
      ${
        isActiveTab
          ? "border-black text-black items-center transition-border duration-500 ease-in-out"
          : "hover:text-gray-700 hover:border-gray-700"
      }
      ${
        !isHoveredTab &&
        (isActiveTab
          ? hoverTab === ""
            ? "border-black text-black"
            : "text-gray-500 border-gray-500"
          : `${hoverTab ? "text-gray-500" : "text-gray-700"} border-gray-400`)
      }
    `;
  };

  return (
    <section className="tab_section sm:px-10 px-5 py-10 sm:py-14 lg:py-20 bg-gray-100">
      <div className="container mx-auto flex flex-col grid-rows-2 grid-flow-row gap-6 xl:flex-row xl:gap-44 ">
        <h2 className="text-[#0b0b0b] font-normal text-3xl md:text-5xl p-0 w-full leading-[1.231] xl:w-2/5 xl:p-6  xl:ps-0">
          {Head?.title}
        </h2>
        <div className="w-full max-h-full flex flex-col justify-end xl:w-5/12">
          <p className="text-[#3a3a3a] mb-5">{Head?.description}</p>
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
            {tabsItems?.map(({ title, description }: any, index: any) => (
              <div key={index}>
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
                      <div
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                        className="overflow-hidden w-full"
                      >
                        <p className="text-base">{description}</p>
                      </div>
                    )}
                  </div>
                </Tab>
              </div>
            ))}
          </TabsHeader>
          <TabsBody
            className="max-w-3xl w-full mx-auto"
            placeholder={undefined}
          >
            {tabsItems &&
              tabsItems?.map(({ title, artical }: any, index: any) => (
                <div key={index}>
                  <TabPanel key={title} value={title} className="py-0">
                    {!commonimagetoggle && (
                      <div key={artical?.data?.attributes?.mainTitle}>
                        <h3 className="text-[#00C8FB] text-3xl font-semibold mb-8 text-center">
                          {artical?.data?.attributes?.mainTitle}
                        </h3>
                        <div className="img_wrapper mb-10">
                          {artical?.data?.attributes?.image?.data?.map(
                            (image: any, index: any) => (
                              <Image
                                src={getStrapiMediaURL(image.attributes?.url)!}
                                width={400}
                                height={350}
                                quality={70}
                                alt="Article Image"
                                style={{ margin: "auto" }}
                                key={index}
                              />
                            )
                          )}
                        </div>
                        {artical?.data?.attributes?.details?.map(
                          (detailItem: any, index: any) => (
                            <div key={index} className="mb-5">
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
                    )}

                    {commonimagetoggle && (
                      <div className="flex gap-5 justify-center lg:justify-end">
                        <div className="flex flex-col gap-5 w-2/5">
                          <div className="h-auto rounded-3xl">
                            {Head?.commonImage?.data[0]?.attributes?.url && (
                              <Image
                                src={
                                  getStrapiMediaURL(
                                    Head?.commonImage?.data[0]?.attributes
                                      ?.url as any
                                  )!
                                }
                                width={300}
                                height={200}
                                quality={70}
                                alt="Article Image"
                                style={{
                                  margin: "auto",
                                  objectFit: "cover",
                                  height: "100%",
                                  borderRadius: "24px",
                                }}
                              />
                            )}
                          </div>

                          <div className="h-auto ">
                            {Head?.commonImage?.data[1]?.attributes?.url && (
                              <Image
                                src={
                                  getStrapiMediaURL(
                                    Head?.commonImage?.data[1]?.attributes
                                      ?.url as string
                                  )!
                                }
                                width={300}
                                height={200}
                                quality={70}
                                alt="Article Image"
                                style={{
                                  margin: "auto",
                                  objectFit: "cover",
                                  height: "100%",
                                  borderRadius: "24px",
                                }}
                              />
                            )}
                          </div>
                        </div>
                        <div className="h-auto w-2/4">
                          {Head?.commonImage?.data[2]?.attributes?.url && (
                            <Image
                              src={
                                getStrapiMediaURL(
                                  Head?.commonImage?.data[2]?.attributes
                                    ?.url as string
                                )!
                              }
                              width={300}
                              height={200}
                              quality={70}
                              alt="Article Image"
                              style={{
                                margin: "auto",
                                width: "100%",
                                objectFit: "cover",
                                height: "100%",
                                borderRadius: "24px",
                              }}
                            />
                          )}
                        </div>
                      </div>
                    )}
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
