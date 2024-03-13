"use client";
import { ComponentCardsTestimonialsSection1 } from "@/apollo/types/gql/graphql";
import { getStrapiMediaURL } from "@/utils/helper";
import Image from "next/image";
import React from "react";

import Slider from "react-slick";

interface HeaderProps {
  data: ComponentCardsTestimonialsSection1;

  title: any;
}

const Servicestestimonials = ({ data, title }: HeaderProps) => {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <button className={className} style={{ ...style }} onClick={onClick}>
        {" "}
        <Image
          src={"/next_arrow.svg"}
          alt="Prev_Arrow"
          width={40}
          height={40}
        />
      </button>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <button className={className} style={{ ...style }} onClick={onClick}>
        {" "}
        <Image
          src={"/prev_arrow.svg"}
          alt="Next_Arrow"
          width={40}
          height={40}
        />
      </button>
    );
  }
  var settings: any = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    swipeToSlide: 1,
    speed: 500,
    easing: "ease",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 576,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
    ],
  };
  return (
    <section className={`slider_section pt-12 pb-20 bg-[#FFFFFF]`}>
      <div className="relative">
        <div className="lg:ps-16 ps-5 sm:pe-40 md:pe-72 pe-24 pb-8 w-full md:pt-10 pt-0 max-w-[1180px] ">
          <h2 className="font-normal text-[#0b0b0b] xl:text-4xl md:text-3xl text-2xl text-left">
            {title}
          </h2>
        </div>
        <Slider {...settings} className="">
          {data &&
            data?.testimonialsitems?.map((testimonials, key) => (
              <div
                className="card_wrapper rounded-2xl lg:border-gray-500 bg-[#E7E7E7] flex flex-col justify-between leading-normal lg:p-12 p-8 h-full gap-2.5"
                key={key}
              >
                <div className="flex items-center gap-4 card_icon">
                  {testimonials?.image?.data?.attributes?.url && (
                    <Image
                      src={
                        getStrapiMediaURL(
                          testimonials?.image?.data?.attributes?.url
                        )!
                      }
                      height={40}
                      width={40}
                      alt="logo"
                      className="rounded-full"
                    />
                  )}
                </div>
                <div className="mb-8 card_info">
                  <h3 className="text-[#0b0b0b] font-medium text-2xl lg:text-3xl mb-3 line">
                    {testimonials?.title}
                  </h3>
                  <p className="text-[#3a3a3a] text-base leading-7">
                    {testimonials?.description}
                  </p>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Servicestestimonials;
