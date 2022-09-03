README는 배포 시, 수정할 예정 - 프로젝트 설명으로 작성

현재는 개발 시, 공통 사항 작성하는 걸로 이용

반응형 사이즈
container 파일에서 반응형 쓰려면
(isTablet 그냥 작성함)
/\*
import { useMediaQuery } from "react-responsive";

    const isPc = useMediaQuery({
        query: "(min-width:1200px)",
    });
    const isTablet = useMediaQuery({
        query: "(min-width:768px) and (max-width:1023px)",
    });
    const isMobile = useMediaQuery({
        query: "(max-width:767px)",
    });

\*/

style 파일에서 반응형 쓰려면
/
@media (max-width: 767px) {
height: 300px;
}
@media (min-width: 1200px) {
height: 300px;
}

/

반응형 폰드사이즈 기준

데스크탑: 16px
모바일: 8px

global.css에 적용함 => 각각 styles 파일에 rem 단위로 적용하면됨( 폰트 사이즈만)
