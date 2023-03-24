import React from "react";

function Banner() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center py-36 relative bg-banner-bg"
      // style="background-image: url('images/banner-bg.jpg');"
    >
      <div className="container">
        <h1 className="xl:text-6xl md:text-5xl text-4xl text-gray-800 font-semibold mb-4 ">
          Best Collection For <br className="hidden sm:block " /> Home
          Decoration
        </h1>
        <p className="text-base text-gray-600 leading-6 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate{" "}
          <br className="hidden sm:block " /> rhoncus pellentesque id integer
          neque, vel accumsan dolor diam.
        </p>
        <div className="mt-12">
          <a
            href="shop.html"
            className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition "
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
