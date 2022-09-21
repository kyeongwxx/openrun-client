import { useEffect } from "react";
import styled from "@emotion/styled";

declare const window: typeof globalThis & {
  kakao: any;
};

const Wrapper = styled.div`
  border-radius: 8px;
  border: none;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
`;

export default function Map(props: any) {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=0c784202955170ce9660de667cc69c1e&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        var mapContainer = document.getElementById("map"), // 지도를 표시할 div
          mapOption = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
          };

        // 지도를 생성합니다
        var map = new window.kakao.maps.Map(mapContainer, mapOption);

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          `${props.address}`,
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              var coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              var marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.address]);

  return (
    <>
      <Wrapper id="map" style={{ width: "100%", height: "252px" }}></Wrapper>
    </>
  );
}
