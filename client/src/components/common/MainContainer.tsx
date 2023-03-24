import { ChildrenProps } from "@/types/components/ChildrenProps";
import React from "react";

import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

function MainContainer({ children }: ChildrenProps) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default MainContainer;
