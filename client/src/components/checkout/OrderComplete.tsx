import { complete } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function OrderComplete() {
  return (
    <div className="max-w-3xl mx-auto px-4 pt-16 pb-24 text-center">
      <div className="mb-8">
        <Image src={complete} alt="complete" className="w-16 inline-block" />
      </div>
      <h2 className="text-gray-800 font-medium text-3xl mb-3">
        YOUR ORDER IS COMPLETED!
      </h2>
      <p className="text-gray-600">
        Thank you for your order! Your order is being processed and will be
        complete with 3-6 hours. You will receive and email confirmation when
        you order is completed{" "}
      </p>

      <div className="mt-10">
        <Link
          href="/"
          className="bg-primary border border-primary text-white px-6 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition text-center "
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default OrderComplete;
