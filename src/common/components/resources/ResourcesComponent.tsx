"use client";
import { ComponentCardsResourcesSection } from "@/apollo/types/gql/graphql";
import { formatDate, getStrapiMediaURL } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface HeaderProps {
  data: ComponentCardsResourcesSection;
}
export default function ResourcesComponent({ data }: HeaderProps) {
  const handleDownload = async (url: any) => {
    const pdfUrl = getStrapiMediaURL(url)!;
    try {
      const response = await fetch(pdfUrl);
      if (response.ok) {
        const blob = await response.blob();
        if (blob) {
          const urlLink = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = urlLink;
          const urlParts = url.split("/");
          const fileName = urlParts[urlParts.length - 1];
          link.download = fileName;
          link.click();
        }
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  return (
    <>
      <section className="bg-gray-100 pt-12 pb-10 px-4">
        <div className="grid grid-cols-3 sm:gap-6 gap-0 lg:16 w-full max-width mx-auto sm:pt-20 pt-16 ">
          <article className="relative w-full sm:col-span-2 col-span-3">
            <h1 className="text-2xl lg:text-4xl sm:text-3xl sm:pb-10 pb-5 text-black sm:max-w-2xl max-w-full width-full">
              {data?.mainTitle}
            </h1>
            {data?.groupNames &&
              data?.groupNames.map((resources, index) => (
                <div key={index}>
                  <h2 className="mb-4 block text-xl font-medium text-gray-900">
                    {resources?.groupName}
                  </h2>
                  <div
                    className="flex flex-col mb-10 sm:mb-16 gap-5 sm:gap-10"
                    key={index}
                  >
                    {resources?.selectresource?.data &&
                      resources?.selectresource?.data?.map((resItems, i) => (
                        <div key={i}>
                          <Link
                            href="#"
                            className="mb-2 block text-base font-medium text-[#454545]"
                          >
                            {resItems?.attributes?.title}
                          </Link>
                          {resItems?.attributes?.image?.data?.attributes
                            ?.url && (
                            <div className="mb-4 md:max-w-screen-xl w-full">
                              <Image
                                src={
                                  getStrapiMediaURL(
                                    resItems?.attributes?.image?.data
                                      ?.attributes?.url as any
                                  )!
                                }
                                width={400}
                                height={400}
                                quality={70}
                                alt="resources Image"
                                className="rounded-lg"
                              />
                            </div>
                          )}
                          <p className="mb-4 text-gray-900 text-base max-w-full w-full sm:max-w-screen-md leading-6">
                            {resItems?.attributes?.description}
                          </p>

                          <div className="flex items-center gap-4">
                            {resItems?.attributes?.fileToggle &&
                              resItems?.attributes?.file?.data?.attributes
                                ?.url && (
                                <button
                                  onClick={() =>
                                    handleDownload(
                                      resItems?.attributes?.file?.data
                                        ?.attributes?.url as any
                                    )!
                                  }
                                  className="py-2 px-4 bg-[#0B0B0B] text-white rounded-3xl border border-transparent font-medium hover:border-[#0B0B0B] hover:bg-transparent hover:text-[#0B0B0B]"
                                >
                                  Download
                                </button>
                              )}

                            {resItems?.attributes?.readMoreToggle &&
                              resItems?.attributes?.readMoreLink && (
                                <Link
                                  href={
                                    resItems?.attributes?.readMoreLink as any
                                  }
                                  className="bg-transparent py-2 px-4 text-[#0B0B0B] font-medium border border-[#0B0B0B] rounded-3xl hover:border-transparent hover:bg-[#0B0B0B] hover:text-white"
                                >
                                  Read More
                                </Link>
                              )}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
          </article>
          <div className="sm:col-span-1 col-span-3">
            <h4 className="text-lg pb-5 text-black sm:max-w-2xl max-w-full width-full">
              IMPORTANT DATES
            </h4>
            {data?.resourcesDateItems &&
              data?.resourcesDateItems.map((recourceDate, index) => (
                <div className="text-black mb-5" key={index}>
                  <h5 className="font-medium text-base pb-2">
                    {formatDate(recourceDate?.date)}
                  </h5>
                  <p className="text-sm pb-1">{recourceDate?.title}</p>
                  <p className="text-sm">{recourceDate?.subTitle}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
