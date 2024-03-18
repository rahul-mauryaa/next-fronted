"use client";

import Image from "next/image";
import React, { useState } from "react";

import { ComponentCardsHeroSection } from "@/apollo/types/gql/graphql";
import ForwardArrow from "@/common/assets/icons/forward-arrow.svg";
import { getStrapiMediaURL } from "@/utils/helper";
import { Carousel } from "@material-tailwind/react";
interface HeaderProps {
  data: ComponentCardsHeroSection;
}

const replaceWithSupTM = (text: any, searchString: any) => {
  const regex = new RegExp(searchString + "TM", "g");
  const modifiedText = text.replace(regex, `${searchString}<sup>TM</sup>`);
  return modifiedText;
};

function Hero({ data }: HeaderProps) {
  const { sliderItems } = data || {};

  return (
    <>
      <section
        id="hero"
        className=" m-auto w-full flex sm:h-screen h-[80vh] relative"
      >
        <div>
          <Carousel
            autoplay={true}
            autoplayDelay={2000}
            className="hero_slider"
          >
            {sliderItems &&
              sliderItems.map((slider, index) => {
                const bgImageSrc = slider?.image?.data?.attributes?.url || "";
                return (
                  <div className="relative w-full h-full" key={index}>
                    {bgImageSrc && (
                      <Image
                        src={getStrapiMediaURL(bgImageSrc)!}
                        width={900}
                        height={500}
                        alt="Hero Image"
                        className=" w-full h-full object-cover"
                      />
                    )}

                    <div className="absolute inset-0 grid h-full w-full sm:items-center pt-28 sm:pt-0 bg-black/75">
                      <div className="w-full px-5 sm:w-2/4 md:pl-20 lg:pl-30">
                        <p className="mb-4 text-4xl lg:text-5xl text-[#FEFEFE]">
                          {slider?.title}
                        </p>
                        <p className="mb-4 text-4xl lg:text-5xl text-[#3FA5F7]">
                          {slider?.subtitle}
                        </p>
                        {/* <p>{slider?.description}</p> */}
                        <p
                          className="text-white"
                          dangerouslySetInnerHTML={{
                            __html: replaceWithSupTM(
                              slider?.description,
                              "Adept"
                            ),
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default Hero;
