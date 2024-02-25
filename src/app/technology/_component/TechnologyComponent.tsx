"use client";
import { ComponentCardsTechnologySection } from "@/apollo/types/gql/graphql";
import { replaceWithSupTM } from "@/app/(home)/_components/header/_components/hero/Hero";
import { getStrapiMediaURL } from "@/utils/helper";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface HeaderProps {
  data: ComponentCardsTechnologySection;
}

const TechnologyComponent = ({ data }: HeaderProps) => {
  const headData = data?.head;
  const sectionData = data?.section;
  const [currentIndex, setCurrentIndex] = useState(0);

  const titlesAndColors: any = {
    Adjust: "#EEEC5F",
    Connect: "#218FCE",
    Engineer: "#48C5E0",
    Capture: "#31B66A",
    React: "#99CC5B",
  };

  const nextSection = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (sectionData as any).length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSection(); // Call the function to go to the next section
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => {
      clearInterval(intervalId); // Clear the interval when the component is unmounted
    };
  }, [sectionData]);
  return (
    <div>
      <section className="adept_work_section bg-[#2B2B2B] pb-14 pt-28 lg:pb-20 px-5 xl:px-10 border-b-2 border-b-[#616161]">
        <div className="w-full mx-auto max-width">
          <div className="flex flex-col lg:flex-row items-center gap-6 justify-between pb-8">
            <div className="flex-shrink-0 w-full lg:w-1/4">
              <h4
                className="text-white text-4xl font-semibold mb-5"
                dangerouslySetInnerHTML={{
                  __html: replaceWithSupTM(headData?.title, "Adept"),
                }}
              />

              <p className="text-lg font-normal text-white">
                {headData?.description}
              </p>
            </div>

            {sectionData && sectionData[currentIndex] && (
              <div className="img_wrap max-w-80 w-full lg:w-1/3">
                {sectionData[currentIndex]?.image?.data?.attributes && (
                  <Image
                    src={
                      getStrapiMediaURL(
                        sectionData[currentIndex]?.image?.data?.attributes
                          ?.url as any
                      )!
                    }
                    height={300}
                    width={300}
                    quality={90}
                    alt="Wheel_Connect_Image"
                    className="w-full h-full"
                  />
                )}
              </div>
            )}

            <div className="connect_wrap w-full lg:w-1/3">
              <h4
                className="text-4xl font-semibold mb-5 "
                style={{
                  color:
                    titlesAndColors[
                      sectionData && (sectionData[currentIndex]?.title as any)
                    ],
                }}
              >
                {sectionData && sectionData[currentIndex]?.title}
              </h4>

              <p className="text-base text-white font-normal mb-10">
                {sectionData && sectionData[currentIndex]?.description}
              </p>

              <button
                onClick={nextSection}
                className="whitespace-nowrap bg-white text-black text-lg p-2 rounded-md border shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] px-10 py-[6px] font-medium"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyComponent;
