import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <>
      {/* <section className="adept_work_section bg-[#2B2B2B] pb-14 pt-8 lg:pb-20  px-5 xl:px-10 border-b-2 border-b-[#616161]">
        <div className="w-full mx-auto max-width">
          <div className="flex items-center gap-8 justify-between pb-8 flex-col lg:flex-row">
            <div className="work_wrap">
              <h4 className="text-white text-4xl font-semibold mb-5">
                how does adept<sup>TM</sup> work?
              </h4>
              <p className="text-lg font-normal text-white">
                our platform empowers business users to easily create,test and
                deploy new data workflows.
              </p>
            </div>
            <div className="img_wrap max-w-80 w-full">
              <Image
                src="/wheel1-connect.png"
                height={300}
                width={300}
                quality={90}
                alt="Wheel_Connect_Image"
                className="mx-auto w-full h-full"
              />
            </div>
            <div className="connect_wrap">
              <h4 className="text-[#218FCE] text-4xl font-semibold mb-5 ">
                Connect
              </h4>
              <p className="text-base text-white font-normal mb-10">
                Connect your disparate data sources to the platform using secure
                APIs. Easily connect both new cloud legacy systems and
                databases.
              </p>
              <Link
                href="#"
                className="whitespace-nowrap bg-white text-black text-lg p-2 rounded-md border shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] px-10 py-[6px] font-medium"
              >
                Next
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <footer className="bg-[#2B2B2B] py-10 lg:py-16 px-5 xl:px-10">
        <div className="w-full mx-auto max-width">
          <div className="flex flex-col justify-center items-center">
            <div className="flex w-full justify-between gap-8 flex-wrap lg:flex-nowrap">
              <Link
                href="#hero"
                className="max-w-[200px] h-[38px] lg:w-[auto] w-3/6"
              >
                <Image
                  src="/logo.png"
                  alt="Xinthesys_Logo"
                  width={200}
                  height={200}
                />
              </Link>
              <ul className="flex flex-col gap-2 lg:w-[auto] w-3/6">
                <li>
                  <Link
                    href=""
                    className="text-white text-lg hover:text-[#00C8FB]"
                  >
                    Why Xinthesys
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="text-white text-lg hover:text-[#00C8FB]"
                  >
                    Resources
                  </Link>
                </li>
              </ul>
              <div className="w-full lg:w-[auto]">
                <h6 className="text-white pb-2 text-lg">Mailing Address</h6>
                <p className="text-white text-sm">
                  Xinthesys, LLC 845 Third Avenue 6th Floor New York, NY 10022
                </p>
                <Link
                  href=""
                  className="text-white text-xs hover:text-[#00C8FB]"
                >
                  sales@xinthesys.com
                </Link>
                <h6 className="text-white pt-3 text-lg">Contact Us</h6>
                <Link
                  href="tel: (646) 722-2600"
                  className="text-white text-sm hover:text-[#00C8FB]"
                >
                  (646) 722-2600
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
