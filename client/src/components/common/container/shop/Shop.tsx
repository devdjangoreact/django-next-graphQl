import {
  avatar,
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
} from "@/assets";
import Image from "next/image";
import React from "react";

function Shop() {
  return (
    <div className="container grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative">
      <div className="col-span-1 bg-gray-100 px-4 pt-4 pb-6 shadow-sm rounded overflow-hidden absolute lg:static left-4 top-16 z-10 w-72 lg:w-full lg:block">
        <div className="divide-gray-300 divide-y space-y-5 relative">
          <div className="relative">
            <div className="lg:hidden text-gray-400 hover:text-primary text-lg absolute right-0 top-0 cursor-pointer "></div>
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium ">
              Categories{" "}
            </h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="Bedroom"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer "
                />
                <label
                  htmlFor="Bedroom"
                  className="text-gray-600 ml-3 cursor-pointer  "
                >
                  Bedroom
                </label>
                <div className="ml-auto text-gray-600 text-sm ">(15)</div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="Sofa"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer "
                />
                <label
                  htmlFor="Sofa"
                  className="text-gray-600 ml-3 cursor-pointer  "
                >
                  Sofa
                </label>
                <div className="ml-auto text-gray-600 text-sm ">(5)</div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="Office"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer "
                />
                <label
                  htmlFor="Office"
                  className="text-gray-600 ml-3 cursor-pointer  "
                >
                  Office
                </label>
                <div className="ml-auto text-gray-600 text-sm ">(8)</div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="Outdoor"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer "
                />
                <label
                  htmlFor="Outdoor"
                  className="text-gray-600 ml-3 cursor-pointer  "
                >
                  Outdoor
                </label>
                <div className="ml-auto text-gray-600 text-sm ">(10)</div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium ">
              Brand{" "}
            </h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="Dominik"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer "
                />
                <label
                  htmlFor="Dominik"
                  className="text-gray-600 ml-3 cursor-pointer  "
                >
                  Dominik
                </label>
                <div className="ml-auto text-gray-600 text-sm ">(12)</div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="Karl"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer "
                />
                <label
                  htmlFor="Karl"
                  className="text-gray-600 ml-3 cursor-pointer  "
                >
                  Karl
                </label>
                <div className="ml-auto text-gray-600 text-sm ">(3)</div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="Maxing"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer "
                />
                <label
                  htmlFor="Maxing"
                  className="text-gray-600 ml-3 cursor-pointer  "
                >
                  Maxing
                </label>
                <div className="ml-auto text-gray-600 text-sm ">(5)</div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="Zara"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer "
                />
                <label
                  htmlFor="Zara"
                  className="text-gray-600 ml-3 cursor-pointer  "
                >
                  Zara
                </label>
                <div className="ml-auto text-gray-600 text-sm ">(8)</div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium ">
              Price{" "}
            </h3>

            <div className="mt-4 flex items-center ">
              <input
                type="text"
                className="w-full border-gray-300 focus:ring-0 focus:border-primary px-3 py-1 text-gray-600 text-sm shadow-sm rounded "
                placeholder="Min"
              />
              <span className="mx-3 text-gray-500"> - </span>
              <input
                type="text"
                className="w-full border-gray-300 focus:ring-0 focus:border-primary px-3 py-1 text-gray-600 text-sm shadow-sm rounded "
                placeholder="Mix"
              />
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium ">
              Size{" "}
            </h3>
            <div className="flex items-center gap-2">
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  className="hidden"
                  id="size-s"
                />
                <label
                  htmlFor="size-s"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 "
                >
                  S
                </label>
              </div>

              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  className="hidden"
                  id="size-m"
                />
                <label
                  htmlFor="size-m"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 "
                >
                  M
                </label>
              </div>

              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  className="hidden"
                  id="size-l"
                />
                <label
                  htmlFor="size-l"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 "
                >
                  L
                </label>
              </div>

              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  className="hidden"
                  id="size-xs"
                />
                <label
                  htmlFor="size-xs"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 "
                >
                  XS
                </label>
              </div>

              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  className="hidden"
                  id="size-xl"
                />
                <label
                  htmlFor="size-xl"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 "
                >
                  XL
                </label>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium ">
              Color{" "}
            </h3>

            <div className="flex items-center gap-2">
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  className="hidden"
                  id="color-red"
                  checked
                />
                <label
                  htmlFor="color-red"
                  // style="background-color: brown;"
                  className="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"
                ></label>
              </div>

              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  className="hidden"
                  id="color-white"
                />
                <label
                  htmlFor="color-white"
                  // style="background-color:blueviolet;"
                  className="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"
                ></label>
              </div>

              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  className="hidden"
                  id="color-black"
                />
                <label
                  htmlFor="color-black"
                  // style={{background-color: "#000000"}}
                  className="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"
                ></label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-3">
        <div className="mb-4 flex items-center ">
          <select className="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary ">
            <option>Default sorting</option>
            <option>Price low-high</option>
            <option>Price high-low</option>
            <option>Latest product</option>
          </select>
          <div className="flex gap-2 ml-auto ">
            <div className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer ">
              <i className="fas fa-th"></i>
            </div>

            <div className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer ">
              <i className="fas fa-list"></i>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6">
          <div className="group rounded bg-white shadow overflow-hidden ">
            <div className="relative ">
              <Image src={product1} alt="product1" className="w-full" />

              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition ">
                <a
                  href="view.html"
                  className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex  items-center justify-center "
                >
                  <i className="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center "
                >
                  <i className="fas fa-heart"></i>
                </a>
              </div>
            </div>

            <div className="pt-4 pb-3 px-4 ">
              <a href="view.html">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition ">
                  Guyer Chair{" "}
                </h4>
              </a>

              <div className="flex items-baseline mb-1 space-x-2 ">
                <p className="text-xl text-primary font-roboto font-semibold ">
                  {" "}
                  $45.00{" "}
                </p>
                <p className="text-sm text-gray-400 font-roboto  line-through ">
                  {" "}
                  $55.00{" "}
                </p>
              </div>
              <div className="flex items-center ">
                <div className="flex gap-1 text-sm text-yellow-400 ">
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3 ">(120)</div>
              </div>
            </div>

            <a
              href="#"
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b font-medium hover:bg-transparent hover:text-primary transition "
            >
              Add To Cart
            </a>
          </div>

          <div className="group rounded bg-white shadow overflow-hidden ">
            <div className="relative ">
              <Image src={product2} alt="product2" className="w-full" />

              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition ">
                <a
                  href="view.html"
                  className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex  items-center justify-center "
                >
                  <i className="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center "
                >
                  <i className="fas fa-heart"></i>
                </a>
              </div>
            </div>

            <div className="pt-4 pb-3 px-4 ">
              <a href="view.html">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition ">
                  Guyer Chair{" "}
                </h4>
              </a>

              <div className="flex items-baseline mb-1 space-x-2 ">
                <p className="text-xl text-primary font-roboto font-semibold ">
                  {" "}
                  $45.00{" "}
                </p>
                <p className="text-sm text-gray-400 font-roboto  line-through ">
                  {" "}
                  $55.00{" "}
                </p>
              </div>
              <div className="flex items-center ">
                <div className="flex gap-1 text-sm text-yellow-400 ">
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3 ">(120)</div>
              </div>
            </div>

            <a
              href="#"
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b font-medium hover:bg-transparent hover:text-primary transition "
            >
              Add To Cart
            </a>
          </div>

          <div className="group rounded bg-white shadow overflow-hidden ">
            <div className="relative ">
              <Image src={product3} alt="product3" className="w-full" />

              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition ">
                <a
                  href="view.html"
                  className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex  items-center justify-center "
                >
                  <i className="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center "
                >
                  <i className="fas fa-heart"></i>
                </a>
              </div>
            </div>

            <div className="pt-4 pb-3 px-4 ">
              <a href="view.html">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition ">
                  Guyer Chair{" "}
                </h4>
              </a>

              <div className="flex items-baseline mb-1 space-x-2 ">
                <p className="text-xl text-primary font-roboto font-semibold ">
                  {" "}
                  $45.00{" "}
                </p>
                <p className="text-sm text-gray-400 font-roboto  line-through ">
                  {" "}
                  $55.00{" "}
                </p>
              </div>
              <div className="flex items-center ">
                <div className="flex gap-1 text-sm text-yellow-400 ">
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3 ">(120)</div>
              </div>
            </div>

            <a
              href="#"
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b font-medium hover:bg-transparent hover:text-primary transition "
            >
              Add To Cart
            </a>
          </div>

          <div className="group rounded bg-white shadow overflow-hidden ">
            <div className="relative ">
              <Image src={product4} alt="product4" className="w-full" />

              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition ">
                <a
                  href="view.html"
                  className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex  items-center justify-center "
                >
                  <i className="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center "
                >
                  <i className="fas fa-heart"></i>
                </a>
              </div>
            </div>

            <div className="pt-4 pb-3 px-4 ">
              <a href="view.html">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition ">
                  Guyer Chair{" "}
                </h4>
              </a>

              <div className="flex items-baseline mb-1 space-x-2 ">
                <p className="text-xl text-primary font-roboto font-semibold ">
                  {" "}
                  $45.00{" "}
                </p>
                <p className="text-sm text-gray-400 font-roboto  line-through ">
                  {" "}
                  $55.00{" "}
                </p>
              </div>
              <div className="flex items-center ">
                <div className="flex gap-1 text-sm text-yellow-400 ">
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3 ">(120)</div>
              </div>
            </div>

            <a
              href="#"
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b font-medium hover:bg-transparent hover:text-primary transition "
            >
              Add To Cart
            </a>
          </div>

          <div className="group rounded bg-white shadow overflow-hidden ">
            <div className="relative ">
              <Image src={product5} alt="product5" className="w-full" />

              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition ">
                <a
                  href="view.html"
                  className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex  items-center justify-center "
                >
                  <i className="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center "
                >
                  <i className="fas fa-heart"></i>
                </a>
              </div>
            </div>

            <div className="pt-4 pb-3 px-4 ">
              <a href="view.html">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition ">
                  Guyer Chair{" "}
                </h4>
              </a>

              <div className="flex items-baseline mb-1 space-x-2 ">
                <p className="text-xl text-primary font-roboto font-semibold ">
                  {" "}
                  $45.00{" "}
                </p>
                <p className="text-sm text-gray-400 font-roboto  line-through ">
                  {" "}
                  $55.00{" "}
                </p>
              </div>
              <div className="flex items-center ">
                <div className="flex gap-1 text-sm text-yellow-400 ">
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3 ">(120)</div>
              </div>
            </div>

            <a
              href="#"
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b font-medium hover:bg-transparent hover:text-primary transition "
            >
              Add To Cart
            </a>
          </div>

          <div className="group rounded bg-white shadow overflow-hidden ">
            <div className="relative ">
              <Image src={product6} alt="product6" className="w-full" />

              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition ">
                <a
                  href="view.html"
                  className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex  items-center justify-center "
                >
                  <i className="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center "
                >
                  <i className="fas fa-heart"></i>
                </a>
              </div>
            </div>

            <div className="pt-4 pb-3 px-4 ">
              <a href="view.html">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition ">
                  Guyer Chair{" "}
                </h4>
              </a>

              <div className="flex items-baseline mb-1 space-x-2 ">
                <p className="text-xl text-primary font-roboto font-semibold ">
                  {" "}
                  $45.00{" "}
                </p>
                <p className="text-sm text-gray-400 font-roboto  line-through ">
                  {" "}
                  $55.00{" "}
                </p>
              </div>
              <div className="flex items-center ">
                <div className="flex gap-1 text-sm text-yellow-400 ">
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                  <span>
                    <i className="fas fa-star"></i>{" "}
                  </span>
                </div>
                <div className="text-xs text-gray-500 ml-3 ">(120)</div>
              </div>
            </div>

            <a
              href="#"
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b font-medium hover:bg-transparent hover:text-primary transition "
            >
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
