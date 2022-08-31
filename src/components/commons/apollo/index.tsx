import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode } from "react";

const APOLLO_CACHE = new InMemoryCache();
interface IApolloSettingProps {
  children: ReactNode;
}
export default function ApolloSetting(props: IApolloSettingProps) {
  const uploadLink = createUploadLink({
    uri: "https://openrunbackend.shop/graphql",
    // 백엔드에 Bearer 이 맞는지 확인 필요함
    // headers: { Authorization: `Bearer ${accessToken}` },
    // credentials: "include",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: APOLLO_CACHE,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
