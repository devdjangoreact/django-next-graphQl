import {
  Ads,
  Banner,
  Categories,
  Features,
  Product,
} from "@/components/common/container/home";
import MainContainer from "@/components/common/MainContainer";

import React from "react";

function index() {
  return (
    <>
      <Banner />
      <Features />
      <Categories />
      <Product />

      <Ads />
      <Product />
    </>
  );
}

export default index;
