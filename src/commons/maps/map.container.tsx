import { useEffect } from "react";
import styled from "@emotion/styled";

declare const window: typeof globalThis & {
  kakao: any;
};

const Wrapper = styled.div`
  width: 45%;
  height: 252px;
  border-radius: 8px;
  border: none;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export default function Map(props: any) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=0c784202955170ce9660de667cc69c1e&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        var mapContainer = document.getElementById("map"),
          mapOption = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
          };

        var map = new window.kakao.maps.Map(mapContainer, mapOption);
        var geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          `${props.address}`,
          function (result: any, status: any) {
            if (status === window.kakao.maps.services.Status.OK) {
              var coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );
              var marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.address]);

  return (
    <>
      <Wrapper id="map"></Wrapper>
    </>
  );
}
