import Image from "next/image";
import Link from "next/link";
import { getClient } from "@/lib/client";
import { FOOTER_QUERY } from "@/apollo/queries/footer";
import { FooterpageQuery, FooterSection } from "@/apollo/types/gql/graphql";
import { getStrapiMediaURL } from "@/utils/helper";
async function Footer() {
  const { data: footer } = await getClient().query<FooterpageQuery>({
    query: FOOTER_QUERY,
  });

  const res = footer?.footerSection?.data?.attributes;
  const footerData = res as FooterSection;

  return (
    <>
      <footer className="bg-[#2B2B2B] py-10 lg:py-16 px-5 xl:px-10">
        <div className="w-full mx-auto max-width">
          <div className="flex flex-col justify-center items-center">
            <div className="flex w-full justify-between gap-8 flex-wrap lg:flex-nowrap">
              <div className="logo_wrapper max-w-lg w-full">
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
                <div className="border-l border-white pl-10 mt-8">
                  <p className="text-white pb-5 text-sm">
                    {footerData?.description}
                  </p>
                  <div className="social_wrapper flex gap-5">
                    {footerData?.socialItems &&
                      footerData?.socialItems?.map((social: any, i) => (
                        <Link
                          href={social?.link}
                          className="text-white"
                          key={i}
                        >
                          <Image
                            src={
                              getStrapiMediaURL(
                                social?.image?.data?.attributes?.url
                              )!
                            }
                            alt="Xinthesys_Logo"
                            width={20}
                            height={20}
                          />
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
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
                    href="/"
                    className="text-white text-lg hover:text-[#00C8FB]"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-white text-lg hover:text-[#00C8FB]"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/technology"
                    className="text-white text-lg hover:text-[#00C8FB]"
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
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
