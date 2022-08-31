import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import "../styles/globals.css";

import ApolloSetting from "../src/components/commons/apollo";
import Layout from "../src/components/commons/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
