import { logo, methods } from "@/assets";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-white pt-16 pb-12 border-t border-gray-100 ">
        <div className="container">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8 ">
            <div className="space-y-8 xl:col-span-1 ">
              <Image src={logo} alt="ads" className="w-30" />
              <p className="text-gray-500 text-base font-roboto ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                consectetur adipiscing.
              </p>
              <div className="flex space-x-5">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <i className="fab fa-twitter"></i>
                </a>

                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <i className="fab fa-instagram"></i>
                </a>

                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8 ">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wide uppercase ">
                    {" "}
                    Solutions{" "}
                  </h3>
                  <div className="mt-4 space-y-4 ">
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold "
                    >
                      Marketing
                    </a>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold "
                    >
                      Analytics
                    </a>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold "
                    >
                      Commerce
                    </a>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold "
                    >
                      Insights
                    </a>
                  </div>
                </div>

                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wide uppercase ">
                    {" "}
                    Support{" "}
                  </h3>
                  <div className="mt-4 space-y-4 ">
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold "
                    >
                      Pricing
                    </a>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold "
                    >
                      Documentation
                    </a>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold "
                    >
                      Guides
                    </a>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold "
                    >
                      API Status
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:grid md:grid-cols-2 md:gap-8 ">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wide uppercase ">
                    {" "}
                    Company{" "}
                  </h3>
                  <div className="mt-4 space-y-4 ">
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold "
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold "
                    >
                      Blog
                    </a>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold "
                    >
                      Jobs
                    </a>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold "
                    >
                      Service
                    </a>
                  </div>
                </div>

                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wide uppercase ">
                    {" "}
                    Legal{" "}
                  </h3>
                  <div className="mt-4 space-y-4 ">
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold "
                    >
                      Claim
                    </a>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold "
                    >
                      Privacy
                    </a>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold "
                    >
                      Policy
                    </a>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold "
                    >
                      Terms
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-gray-800 py-4 ">
        <div className="container flex items-center justify-between ">
          <p className="text-white font-semibold ">© Easy Learning 2022</p>

          <div>
            <Image src={methods} alt="methods" className="h-5" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
