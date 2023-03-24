import { bed, logo, office, outdoor, sofa, terrace } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { useState } from "react";

function Navbar() {
  const router = useRouter();

  const [menu, setMenu] = useState(false);

  const hendlerMenu = (e: any) => {
    e.preventDefault();
    setMenu(!menu);
  };

  const hendlerMenuLink = (link: string) => {
    setMenu(!menu);
    router.push(link);
  };

  return (
    <>
      <header className="py-4 shadow-sm bg-pink-100 lg:bg-white ">
        <div className="container flex items-center justify-between ">
          <Link href="/" className="block w-32">
            <Image src={logo} alt="logo" className="w-full" />
          </Link>

          <div className="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden ">
            <span className="absolute left-4 top-3 text-lg text-gray-400 ">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              className="pl-12 w-full border border-r-0 border-primary  py-3 px-3 rounded-l-md focus:ring-primary "
              placeholder="Search"
            />
            <button
              type="submit"
              className="bg-primary border border-primary text-white px-8 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition  "
            >
              Search
            </button>
          </div>

          <div className="space-x-4 flex items-center">
            <Link
              href="/account/wishlist"
              className="block text-center text-gray-700 hover:text-primary transition relative "
            >
              <span className=" absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center  bg-primary text-white text-xs ">
                3
              </span>
              <div className="text-2xl">
                <i className="far fa-heart "></i>
              </div>
              <div className="text-sm  font-semibold leading-3 ">Wish List</div>
            </Link>

            <Link
              href="/order/cart"
              className="block text-center text-gray-700 hover:text-primary transition relative "
            >
              <span className=" absolute -right-2 -top-1 w-5 h-5 rounded-full flex items-center justify-center  bg-primary text-white text-xs ">
                5
              </span>
              <div className="text-2xl">
                <i className="fas fa-shopping-bag "></i>
              </div>
              <div className="text-sm font-semibold leading-3 ">Cart</div>
            </Link>

            <Link
              href="/account"
              className="block text-center text-gray-700 hover:text-primary transition relative "
            >
              <div className="text-2xl">
                <i className="fas fa-user "></i>
              </div>
              <div className="text-sm font-semibold leading-3 ">Account</div>
            </Link>
          </div>
        </div>
      </header>

      <nav className="bg-gray-800 hidden lg:block ">
        <div className="container">
          <div className="flex">
            <div className="px-8 py-4 bg-primary flex items-center cursor-pointer group relative ">
              <span className="text-white ">
                <i className="fas fa-bars"></i>
              </span>
              <span className="capitalize ml-2 text-white font-semibold">
                All categories
              </span>

              <div className="absolute left-0 top-full w-full bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed  ">
                <Link
                  href="/category/product"
                  className="px-6 py-3 flex items-center hover:bg-gray-100 transition "
                >
                  <Image
                    src={bed}
                    alt="bed"
                    className="w-5 h-5 object-contain "
                  />
                  <span className="ml-6 text-gray-700 text-sm font-semibold ">
                    BedRoom
                  </span>
                </Link>

                <Link
                  href="/product"
                  className="px-6 py-3 flex items-center hover:bg-gray-100 transition "
                >
                  <Image
                    src={sofa}
                    alt="sofa"
                    className="w-5 h-5 object-contain "
                  />
                  <span className="ml-6 text-gray-700 text-sm font-semibold ">
                    Sofa
                  </span>
                </Link>

                <Link
                  href="/product"
                  className="px-6 py-3 flex items-center hover:bg-gray-100 transition "
                >
                  <Image
                    src={office}
                    alt="office"
                    className="w-5 h-5 object-contain "
                  />
                  <span className="ml-6 text-gray-700 text-sm font-semibold ">
                    Office
                  </span>
                </Link>

                <Link
                  href="/product"
                  className="px-6 py-3 flex items-center hover:bg-gray-100 transition "
                >
                  <Image
                    src={outdoor}
                    alt="outdoor"
                    className="w-5 h-5 object-contain "
                  />
                  <span className="ml-6 text-gray-700 text-sm font-semibold ">
                    OutDoor
                  </span>
                </Link>

                <Link
                  href="/product"
                  className="px-6 py-3 flex items-center hover:bg-gray-100 transition "
                >
                  <Image
                    src={terrace}
                    alt="terrace"
                    className="w-5 h-5 object-contain "
                  />
                  <span className="ml-6 text-gray-700 text-sm font-semibold ">
                    Mattress
                  </span>
                </Link>

                <Link
                  href="/product"
                  className="px-6 py-3 flex items-center hover:bg-gray-100 transition "
                >
                  <Image
                    src={sofa}
                    alt="sofa"
                    className="w-5 h-5 object-contain "
                  />
                  <span className="ml-6 text-gray-700 text-sm font-semibold ">
                    Sofa
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-between flex-grow pl-12 ">
              <div className="flex items-center space-x-6 text-base capitalize ">
                <Link
                  href="/"
                  className="text-gray-200 hover:text-red-600 transition font-semibold "
                >
                  Home
                </Link>
                <Link
                  href="/category/shop"
                  className="text-gray-200 hover:text-red-600 transition font-semibold "
                >
                  Shop
                </Link>
                <Link
                  href="/about-us"
                  className="text-gray-200 hover:text-red-600 transition font-semibold "
                >
                  About Us
                </Link>
                <Link
                  href="/contant-form"
                  className="text-gray-200 hover:text-red-600 transition font-semibold "
                >
                  Contact Us
                </Link>
              </div>

              <div>
                <Link
                  href="/auth/login"
                  className="ml-auto text-gray-200 hover:text-white transition font-semibold "
                >
                  Login
                </Link>
                <Link
                  href=""
                  className="text-gray-200 hover:text-white transition font-semibold"
                >
                  /
                </Link>
                <Link
                  href="/auth/register"
                  className="ml-auto text-gray-200 hover:text-white transition font-semibold "
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="fixed w-full border-t border-gray-200 shadow-sm bg-white py-3 bottom-0 left-0 flex justify-around items-start px-6 lg:hidden  z-40  ">
        <button
          onClick={(e) => hendlerMenu(e)}
          className="block text-center text-gray-700 hover:text-primary transition relative "
        >
          <div className="text-2xl" id="menuBar">
            <i className="fas fa-bars"></i>
          </div>
          <div className="text-xs leading-3">Menu</div>
        </button>

        <Link
          href="/"
          className="block text-center text-gray-700 hover:text-primary transition relative "
        >
          <div className="text-2xl">
            <i className="fas fa-list-ul"></i>
          </div>
          <div className="text-xs leading-3">Category</div>
        </Link>

        <Link
          href="/"
          className="block text-center text-gray-700 hover:text-primary transition relative "
        >
          <div className="text-2xl">
            <i className="fas fa-search"></i>
          </div>
          <div className="text-xs leading-3">Search</div>
        </Link>

        <Link
          href="/order/cart"
          className="block text-center text-gray-700 hover:text-primary transition relative "
        >
          <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs ">
            5
          </span>
          <div className="text-2xl">
            <i className="fas fa-shopping-bag"></i>
          </div>
          <div className="text-xs leading-3">Cart</div>
        </Link>
      </div>
      {/* mobile */}
      <div
        className={`fixed left-0 top-0 w-full h-full z-50 bg-black bg-opacity-30 shadow ${
          menu ? "" : "hidden"
        }`}
        id="mobileMenu"
      >
        <div className="absolute left-0 top-0 w-72 h-full z-50 bg-white shadow">
          <button
            id="closeMenu"
            onClick={(e) => hendlerMenu(e)}
            className="text-gray-400 hover:text-primary text-lg absolute right-3 top-3 cursor-pointer "
          >
            <i className="fas fa-times"></i>
          </button>
          <h3 className="text-xl font-semibold text-white mb-2 font-roboto pl-4 pt-4 pb-4 bg-primary ">
            Menu
          </h3>
          <div>
            <Link
              href="/"
              onClick={(e) => hendlerMenuLink("/")}
              className="block px-4 py-4 font-medium transition hover:bg-gray-200 "
            >
              Home
            </Link>
            <Link
              href="/category/shop"
              onClick={(e) => hendlerMenuLink("/category/shop")}
              className="block px-4 py-4 font-medium transition hover:bg-gray-200 "
            >
              Shop
            </Link>

            <Link
              href="/about-us"
              onClick={(e) => hendlerMenuLink("/about-us")}
              className="block px-4 py-4 font-medium transition hover:bg-gray-200 "
            >
              About Us
            </Link>
            <Link
              href="/contant-form"
              onClick={(e) => hendlerMenuLink("/contant-form")}
              className="block px-4 py-4 font-medium transition hover:bg-gray-200 "
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
