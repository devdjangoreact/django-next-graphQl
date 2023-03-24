import {
  category1,
  category2,
  category3,
  category4,
  category5,
  category6,
} from "@/assets";
import Image from "next/image";
import React from "react";

function Categories() {
  return (
    <div className="container pb-16 ">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6  ">
        {" "}
        Shop by Category{" "}
      </h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3 ">
        <div className="relative group rounded-sm overflow-hidden ">
          <Image src={category1} alt="category 1" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide transition "
          >
            Bedroom
          </a>
        </div>

        <div className="relative group rounded-sm overflow-hidden ">
          <Image src={category2} alt="category 1" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide transition "
          >
            Sofa
          </a>
        </div>

        <div className="relative group rounded-sm overflow-hidden ">
          <Image src={category3} alt="category 1" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide transition "
          >
            Office
          </a>
        </div>

        <div className="relative group rounded-sm overflow-hidden ">
          <Image src={category4} alt="category 1" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide transition "
          >
            OutDoor
          </a>
        </div>

        <div className="relative group rounded-sm overflow-hidden ">
          <Image src={category5} alt="category 1" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide transition "
          >
            Mattress
          </a>
        </div>

        <div className="relative group rounded-sm overflow-hidden ">
          <Image src={category6} alt="category 1" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium tracking-wide transition "
          >
            Dinings
          </a>
        </div>
      </div>
    </div>
  );
}

export default Categories;
