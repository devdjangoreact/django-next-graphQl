import { avatar } from "@/assets";
import Image from "next/image";
import React from "react";

function Changepassword() {
  return (
    <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16 ">
      <div className="col-span-3">
        <div className="px-4 py-3 shadow flex bg-gray-100 items-center gap-4 ">
          <div className="flex-shrink-0">
            <Image
              src={avatar}
              alt="product 1"
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

      <div className="col-span-9 shadow rounded px-6 bg-gray-100 pt-5 pb-7 mt-6 lg:mt-0 ">
        <form method="" action="">
          <h3 className="text-lg font-medium capitalize mb-4">
            Change Password
          </h3>

          <div className="space-y-4 max-w-lg ">
            <div className=" ">
              <div>
                <label className="text-gray-600 mb-2 block">
                  Current Password{" "}
                </label>
                <div className="relative">
                  <span className="absolute right-3 top-3 text-sm text-gray-500 cursor-pointer ">
                    <i className="far fa-eye-slash"></i>
                  </span>
                  <input
                    type="password"
                    className="input-box"
                    placeholder="Enter current password"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-600 mb-2 mt-2 block">
                  New Password{" "}
                </label>
                <div className="relative">
                  <span className="absolute right-3 top-3 text-sm text-gray-500 cursor-pointer ">
                    <i className="far fa-eye-slash"></i>
                  </span>
                  <input
                    type="password"
                    className="input-box"
                    placeholder="Enter new password"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-600 mb-2  mt-2  block">
                  Confirm Password{" "}
                </label>
                <div className="relative">
                  <span className="absolute right-3 top-3 text-sm text-gray-500 cursor-pointer ">
                    <i className="far fa-eye-slash"></i>
                  </span>
                  <input
                    type="password"
                    className="input-box"
                    placeholder="Enter Confirm password"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="px-6 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium "
            >
              Save Change{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Changepassword;
