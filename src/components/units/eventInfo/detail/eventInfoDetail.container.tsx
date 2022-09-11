import EventInfoDetailUI from "./eventInfoDetail.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_EVENT } from "./eventInfoDetail.queries";

export default function EventInfoDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_EVENT, {
    variables: { eventId: router.query.id },
  });

  return <EventInfoDetailUI data={data} />;
}
