"use client";

import Image from "next/image";
import React, { useState } from "react";

import { ComponentCardsHeroSection } from "@/apollo/types/gql/graphql";
import ForwardArrow from "@/common/assets/icons/forward-arrow.svg";
import { getStrapiMediaURL } from "@/utils/helper";
import { Carousel } from "@material-tailwind/react";

interface HeaderProps {
  data?: ComponentCardsHeroSection;
}

export const replaceWithSupTM = (text: any, searchString: any) => {
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
        <Carousel
          autoplay={true}
          autoplayDelay={5000}
          loop={true}
          placeholder={undefined}
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
                      height={900}
                      quality={100}
                      alt="Hero Image"
                      className="w-full h-full object-cover"
                    />
                  )}

                  <div className="absolute inset-0 grid h-full w-full sm:items-center pt-28 sm:pt-0">
                    <div className="w-full px-5 sm:w-2/4 md:pl-20 lg:pl-30">
                      <h2 className="text-4xl lg:text-5xl mb-4 flex flex-col">
                        <span className="mb-4  text-[#FEFEFE]">
                          {slider?.title}
                        </span>
                        <span className="text-[#3FA5F7]">
                          {slider?.subtitle}
                        </span>
                      </h2>
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
      </section>
    </>
  );
}

export default Hero;
