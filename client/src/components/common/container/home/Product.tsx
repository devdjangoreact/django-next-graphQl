import { product1, product3, product2, product4 } from "@/assets";
import Image from "next/image";
import React from "react";

function Product() {
  return (
    <div className="container pb-16 ">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6  ">
        Top New Arrival{" "}
      </h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 ">
        <div className="group rounded bg-white shadow overflow-hidden ">
          <div className="relative ">
            <Image src={product1} alt="product 1" className="w-full" />

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
            <Image src={product2} alt="product 1" className="w-full" />

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
            <Image src={product3} alt="product 1" className="w-full" />

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
            <Image src={product4} alt="product 1" className="w-full" />

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
  );
}

export default Product;
