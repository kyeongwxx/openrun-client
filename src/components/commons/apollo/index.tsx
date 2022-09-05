import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
// @ts-ignore
import { createUploadLink } from "apollo-upload-client";
import { ReactNode } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../store";

const APOLLO_CACHE = new InMemoryCache();
interface IApolloSettingProps {
  children: ReactNode;
}
export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const uploadLink = createUploadLink({
    uri: "https://openrunbackend.shop/graphql",

    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: APOLLO_CACHE,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
