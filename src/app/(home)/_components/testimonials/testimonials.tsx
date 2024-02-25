"use client";
import { ComponentCardsTestimonialsSection } from "@/apollo/types/gql/graphql";
import { getStrapiMediaURL } from "@/utils/helper";
import Image from "next/image";
import React from "react";

import Slider from "react-slick";

interface HeaderProps {
  data: ComponentCardsTestimonialsSection;
}

const Testimonials = ({ data }: HeaderProps) => {
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
    <section className="slider_section">
      <div className="relative">
        <div className="absolute pt-12 pl-10 w-full sm:pt-11 lg:pt-12">
          <h2 className="font-normal text-[#0b0b0b] text-2xl  xl:text-4xl  sm:text-xl">
            You’re in good company
          </h2>
        </div>
        <Slider
          {...settings}
          className="py-32                                                                                                                                                                                  "
        >
          {data &&
            data?.testimonialsitems?.map((testimonials, key) => (
              <div
                className="rounded-2xl lg:border-gray-500 bg-[#E7E7E7] flex flex-col justify-between leading-normal sm:p-12 p-8 h-full"
                key={key}
              >
                <div className="mb-8">
                  <h3 className="text-[#0b0b0b] font-medium text-3xl mb-3 line">
                    {testimonials?.title}
                  </h3>
                  <p className="text-[#3a3a3a] text-base leading-7">
                    {testimonials?.description}
                  </p>
                </div>
                <div className="flex items-center gap-4">
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

                  <div className="text-sm">
                    <h4 className="text-base">{testimonials?.name}</h4>
                    <span className="text-gray-600 text-sm">
                      {testimonials?.position}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
