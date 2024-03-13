import React from "react";
import Link from "next/link";

import Image from "next/image";
import { ComponentCardsCompanyStorySection } from "@/apollo/types/gql/graphql";
import { getStrapiMediaURL } from "@/utils/helper";

interface HeaderProps {
  data?: ComponentCardsCompanyStorySection;
}
const Companystory = ({ data }: HeaderProps) => {
  return (
    <>
      <section className="about_section">
        <div className="flex flex-col-reverse lg:flex-row ">
          {data?.image?.data?.attributes?.url && (
            <Image
              src={getStrapiMediaURL(data?.image?.data?.attributes?.url)!}
              height={300}
              width={500}
              alt="Employee_Image"
              className="sm:h-[945px] object-cover lg:w-2/4 w-full"
            />
          )}
          <div className="lg:w-2/4 w-full bg-gray-100">
            <div className="lg:max-w-2xl  max-w-full w-full flex flex-col lg:py-36 sm:py-20 py-10 2xl:pl-32 xl:pl-20 sm:pl-10 pl-5 pr-5 xl:pr-0 lg:min-h-screen justify-between gap-10">
              <div className=" flex justify-between flex-col pr-5 md:pr-0 ">
                <h2 className="font-normal text-[#0b0b0b]  md:text-5xl text-3xl text-left border-s-2 border-s-black mb-10 xl:pl-16 sm:pl-10 pl-5">
                  {data?.title}
                </h2>
                <p className="text-base xl:pl-16 lg:pl-10">
                  {data?.description}
                </p>
              </div>
              <div className="flex xl:pl-16 lg:pl-10 flex-col md:flex-row">
                <Link
                  href={data?.btn_url1 as string}
                  className="bg-black hover:bg-gray-700 rounded-lg text-white text-sm px-7 py-6 leading-3 h-fit uppercase transform transition-all duration-700 hover:translate-y-[-5px] hover:translate-z-[.02px] w-full sm:w-auto flex justify-center"
                >
                  {data?.btn_text1}
                </Link>
                <Link
                  href={data?.btn_url2 as string}
                  className=" rounded-lg text-black hover:text-gray-600 text-sm px-7 py-6 leading-3 h-fit  w-full sm:w-auto flex justify-center items-center gap-2 hover:gap-5 transition-all duration-500"
                >
                  {data?.btn_text2}
                  <Image
                    src={"/next_arrow.svg"}
                    alt="Arrow"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Companystory;
