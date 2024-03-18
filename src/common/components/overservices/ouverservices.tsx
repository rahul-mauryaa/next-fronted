"use client";
import React from "react";
import Link from "next/link";
import { ComponentCardsOverServicesSection } from "@/apollo/types/gql/graphql";
import Overservicestestimonials from "../testimonials/overservicestestimonials";
interface HeaderProps {
  data: ComponentCardsOverServicesSection;
}
const Overservices = ({ data }: HeaderProps) => {
  return (
    <>
      <section className="md:py-36 py-12 relative lg:pl-10 ">
        <div className="max-width w-full">
          <div className="flex w-full flex-col lg:flex-row gap-14 justify-between">
            <div className="lg:w-2/5 w-full flex flex-col gap-10 lg:px-0 px-5">
              <div className=" flex justify-between flex-col md:pr-0">
                <h2 className="font-normal text-[#0b0b0b] md:leading-[3.5rem] md:text-5xl text-3xl text-left">
                  {data?.title}
                </h2>
              </div>
              <div className="flex md:pl-10 pl-5 flex-col  border-s-2 border-s-black gap-10">
                <p className="text-base">{data?.description}</p>
                <Link
                  href={data?.btn_url1 as string}
                  className="bg-black hover:bg-gray-700 rounded-lg text-white text-sm px-7 py-6 leading-3 h-fit uppercase transform transition-all duration-700 hover:translate-y-[-5px] hover:translate-z-[.02px] flex justify-center md:max-w-40 w-full"
                >
                  {data?.btn_text1}
                </Link>
              </div>
            </div>
            <div className="lg:w-2/4 w-full services_slider_section relative lg:absolute right-0 lg:top-2/4 lg:translate-y-[-50%]">
              {data?.testimonialsitems && (
                <Overservicestestimonials data={data} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overservices;
