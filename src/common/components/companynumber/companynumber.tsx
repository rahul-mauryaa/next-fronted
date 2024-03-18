"use client";
import React from "react";
import Link from "next/link";
import { ComponentCardsCompanyNumberSection } from "@/apollo/types/gql/graphql";
interface HeaderProps {
  data?: ComponentCardsCompanyNumberSection;
}
const Companynumber = ({ data }: HeaderProps) => {
  return (
    <>
      <section className="py-20 px-5 sm:px-10">
        <div className="max-width w-full">
          <div className="flex flex-col lg:flex-row lg:gap-5 sm:gap-14 gap-5 ">
            <h3 className="sm:text-[48px]  text-[36px] font-normal leading-[1.231] lg:max-w-[300px]  w-full">
              {data?.title}
            </h3>
            <div className="flex sm:gap-8 gap-5 lg:max-w-5xl w-full justify-between items-end flex-col ">
              <div className="flex md:gap-8 gap-5 lg:max-w-5xl w-full justify-between items-end flex-col sm:flex-row mb-20 lg:mb-32">
                <div className="xl:pl-16 lg:pl-12 lg:border-s-2 lg:border-s-gray-400">
                  <p className="m-0 sm:max-w-xs xl:max-w-lg lg:max-w-sm w-full">
                    {data?.description}
                  </p>
                </div>
                <Link
                  href={data?.btn_url1 as string}
                  className="bg-black hover:bg-gray-700 rounded-lg text-white text-sm px-7 py-6 leading-3 h-fit uppercase transform transition-all hover:translate-y-[-5px] hover:translate-z-[.02px] w-full sm:w-auto flex justify-center"
                >
                  {data?.btn_text1}
                </Link>
              </div>
              <div className="grid sm:grid-cols-2  max-w-5xl w-full ml-auto mr-0 xl:gap-y-28 md:gap-x-24 gap-y-12">
                {data?.companyNumber &&
                  data?.companyNumber?.map((e, index) => (
                    <div
                      key={index}
                      className="2xl:pl-20 sm:pl-12 pl-8 border-s-2 border-s-black h-auto"
                    >
                      <h3 className="xl:text-[10.25rem] mb-2 text-6xl md:text-8xl md:leading-[10.75rem] font-normal text-black leading-[5rem] flex  items-end">
                        {e?.title}
                        <small className="text-gray-600 sm:text-5xl text-3xl font-normal">
                          {e?.highlightedTitleText}
                        </small>
                      </h3>
                      <div className="md:text-3xl text-2xl text-black">
                        {e?.description}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Companynumber;
