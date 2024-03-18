"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ComponentCardsOverServicesSection } from "@/apollo/types/gql/graphql";
import { getStrapiMediaURL } from "@/utils/helper";

interface HeaderProps {
  data: ComponentCardsOverServicesSection;
}
const Overservicestestimonials = ({ data }: HeaderProps) => {
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
    slidesToShow: 2,
    swipeToSlide: 1,
    speed: 500,
    easing: "ease",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: { slidesToShow: 1.5, slidesToScroll: 1 },
      },
      {
        breakpoint: 991,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 800,
        settings: { slidesToShow: 1.5, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} className="">
        {data &&
          data?.testimonialsitems?.map((e, key) => (
            <div
              className={`rounded-3xl lg:border-gray-500 bg-[#E7E7E7] flex flex-col justify-between leading-normal  h-full card_wrapper`}
              key={key}
            >
              <div className={` py-14 px-10`}>
                <h3 className="text-[#0b0b0b] font-medium text-2xl mb-3 ">
                  {e?.title}
                </h3>
                <p className="text-[#3a3a3a] text-base leading-7">
                  {e?.description}
                </p>
              </div>
              <div className={`flex items-center gap-4 rounded-b-3xl`}>
                {e?.image?.data?.attributes?.url && (
                  <Image
                    src={getStrapiMediaURL(e?.image?.data?.attributes?.url)!}
                    height={300}
                    width={300}
                    alt="Services_Image"
                    className="w-full rounded-b-3xl h-72 object-cover"
                  />
                )}
              </div>
            </div>
          ))}
      </Slider>
    </>
  );
};

export default Overservicestestimonials;
