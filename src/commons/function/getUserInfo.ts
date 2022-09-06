import { GraphQLClient } from "graphql-request";
import { FETCH_LOGIN_USER } from "../../components/units/signIn/signIn.queries";

export async function getUserInfo(parm: string) {
  if (!parm) return;
  try {
    const graphQlClient = new GraphQLClient(
      "https://openrunbackend.shop/graphql",
      { credentials: "include", headers: { Authorization: `Bearer ${parm}` } }
    );
    const result = await graphQlClient.request(FETCH_LOGIN_USER);

    const newUserInfo = result.fetchLoginUser;

    return newUserInfo;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}
