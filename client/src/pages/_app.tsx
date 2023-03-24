import Breadcrumb from "@/components/common/Breadcrumb";
import MainContainer from "@/components/common/MainContainer";
import "@/styles/globals.css";
import "@/styles/main.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  console.log(Component.propTypes);
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Project s </title>
      </Head>
      <MainContainer>
        <Breadcrumb name="Checkout" />
        <Component {...pageProps} />
      </MainContainer>
    </React.Fragment>
  );
}
