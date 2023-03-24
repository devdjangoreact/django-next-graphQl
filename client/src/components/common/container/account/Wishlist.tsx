import { avatar, product5, product6 } from "@/assets";
import Image from "next/image";
import React from "react";

function Wishlist() {
  return (
    <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16 ">
      <div className="col-span-3">
        <div className="px-4 py-3 shadow flex bg-gray-100 items-center gap-4 ">
          <div className="flex-shrink-0">
            <Image
              src={avatar}
              alt="profile"
              className="rounded-full w-14 h14 p-1 border border-gray-200 object-cover "
            />
          </div>
          <div>
            <p className="text-gray-600">Hello..</p>
            <h4 className="text-gray-800 capitalize font-semibold">
              MahabubGAMER
            </h4>
          </div>
        </div>

        <div className="mt-6 bg-gray-100 shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600 ">
          <div className="space-y-1 pl-8">
            <a
              href="#"
              className="relative text-base font-medium capitalize hover:text-primary transition block text-primary"
            >
              Manage Account
              <span className="absolute -left-8 top-0 text-base ">
                <i className="far fa-address-card"></i>
              </span>
            </a>
            <a
              href="#"
              className="hover:text-primary transition capitalize block"
            >
              Profile Information{" "}
            </a>
            <a
              href="#"
              className="hover:text-primary transition capitalize block"
            >
              Manage Address{" "}
            </a>
            <a
              href="#"
              className="hover:text-primary transition capitalize block"
            >
              Change password{" "}
            </a>
          </div>

          <div className="space-y-1 pl-8 pt-4">
            <a
              href="#"
              className="relative text-base font-medium capitalize hover:text-primary transition block text-primary"
            >
              My order History
              <span className="absolute -left-8 top-0 text-base ">
                <i className="fas fa-gift"></i>
              </span>
            </a>
            <a
              href="#"
              className="hover:text-primary transition capitalize block"
            >
              My returns{" "}
            </a>
            <a
              href="#"
              className="hover:text-primary transition capitalize block"
            >
              my cancellations{" "}
            </a>
            <a
              href="#"
              className="hover:text-primary transition capitalize block"
            >
              my review{" "}
            </a>
          </div>

          <div className="space-y-1 pl-8 pt-4">
            <a
              href="#"
              className="relative text-base font-medium capitalize hover:text-primary transition block text-primary"
            >
              Payment Method
              <span className="absolute -left-8 top-0 text-base ">
                <i className="far fa-credit-card"></i>
              </span>
            </a>
            <a
              href="#"
              className="hover:text-primary transition capitalize block"
            >
              Voucher
            </a>
          </div>

          <div className="space-y-1 pl-8 pt-4">
            <a
              href="#"
              className="relative text-base font-medium capitalize hover:text-primary transition block text-primary"
            >
              My wishlist
              <span className="absolute -left-8 top-0 text-base ">
                <i className="far fa-heart"></i>
              </span>
            </a>
          </div>

          <div className="space-y-1 pl-8 pt-4">
            <a
              href="#"
              className="relative text-base font-medium capitalize hover:text-primary transition block text-primary"
            >
              Logout
              <span className="absolute -left-8 top-0 text-base ">
                <i className="fas fa-sign-out-alt"></i>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="col-span-9 mt-6 lg:mt-0 space-y-4  ">
        <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-300 rounded bg-gray-100 flex-wrap md:flex-nowrap ">
          <div className="w-28 flex-shrink-0 ">
            <Image src={product6} alt="product 6" className="w-full" />
          </div>

          <div className="md:w-1/3 w-full">
            <h2 className="text-gray-800 mb-1 xl:text-xl text-lg font-medium uppercase ">
              GUYER CHAIR
            </h2>
            <p className="text-gray-500 text-sm">
              Availability : <span className="text-green-600">In Stock</span>{" "}
            </p>
          </div>
          <div>
            <p className="text-primary text-lg font-semibold">$521</p>
          </div>
          <a
            href="#"
            className="ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium "
          >
            Add to Cart
          </a>
          <div className="text-gray-700 hover:text-primary cursor-pointer">
            <i className="fas fa-trash"></i>
          </div>
        </div>

        <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-300 rounded bg-gray-100 flex-wrap md:flex-nowrap ">
          <div className="w-28 flex-shrink-0 ">
            <Image src={product5} alt="product 6" className="w-full" />
          </div>

          <div className="md:w-1/3 w-full">
            <h2 className="text-gray-800 mb-1 xl:text-xl text-lg font-medium uppercase ">
              GUYER CHAIR
            </h2>
            <p className="text-gray-500 text-sm">
              Availability : <span className="text-red-600">Out of Stock</span>{" "}
            </p>
          </div>
          <div>
            <p className="text-primary text-lg font-semibold">$431</p>
          </div>
          <a
            href="#"
            className="ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium cursor-not-allowed bg-opacity-80 "
          >
            Add to Cart
          </a>
          <div className="text-gray-700 hover:text-primary cursor-pointer">
            <i className="fas fa-trash"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
