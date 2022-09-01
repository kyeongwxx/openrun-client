import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import "../styles/globals.css";

import ApolloSetting from "../src/components/commons/apollo";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/components/commons/styles/globalStyles";
import Container from "@mui/material/Container";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
