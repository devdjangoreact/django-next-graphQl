import { avatar } from "@/assets";
import Image from "next/image";
import React from "react";

function Address() {
  return (
    <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16 ">
      <div className="col-span-3">
        <div className="px-4 py-3 shadow flex bg-gray-100 items-center gap-4 ">
          <div className="flex-shrink-0">
            <Image
              src={avatar}
              alt="avatar"
              className="rounded-full w-14 h14 p-1 border border-gray-200 object-cover "
            />
          </div>
          <div>
            <p className="text-gray-600">Hello..</p>
            <h4 className="text-gray-800 capitalize font-semibold">Mahabub</h4>
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
            Manage Address
          </h3>

          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-600 mb-2 block">Full Name </label>
                <input type="text" className="input-box" value="Mahabub" />
              </div>

              <div>
                <label className="text-gray-600 mb-2 block">
                  Phone Number{" "}
                </label>
                <input type="text" className="input-box" value="01765444480" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-600 mb-2 block">Country</label>
                <select className="input-box">
                  <option>Bangladesh</option>
                  <option>India</option>
                  <option>USA</option>
                </select>
              </div>

              <div>
                <label className="text-gray-600 mb-2 block">Region</label>
                <select className="input-box">
                  <option>Dhaka</option>
                  <option>Uttara</option>
                  <option>South </option>
                </select>
              </div>

              <div>
                <label className="text-gray-600 mb-2 block">City</label>
                <select className="input-box">
                  <option>South City</option>
                  <option>North City</option>
                </select>
              </div>

              <div>
                <label className="text-gray-600 mb-2 block">Area </label>
                <select className="input-box">
                  <option>South Area</option>
                  <option>North Area</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-gray-600 mb-2 block">Address </label>
              <input
                type="text"
                className="input-box"
                value="new puratan paltion"
              />
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

export default Address;
