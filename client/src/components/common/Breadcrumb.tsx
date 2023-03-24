import React from "react";
import { useRouter } from "next/router";

export interface Props {
  name: string;
}

function Breadcrumb({ name }: Props) {
  const router = useRouter();
  return (
    <div className="container py-4 flex justify-between ">
      <div className="flex gap-3 items-center ">
        <a href="index.html" className="text-primary text-base">
          <i className="fas fa-home"></i>
        </a>
        <span className="text-sm text-gray-500 ">
          <i className="fas fa-chevron-right"></i>
        </span>
        <p className="text-gray-500 font-medium uppercase">
          {router.asPath.substring(1)}
        </p>
      </div>
    </div>
  );
}

export default Breadcrumb;
