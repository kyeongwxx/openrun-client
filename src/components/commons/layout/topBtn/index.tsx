import * as s from "./topBtn.styles";
export default function LayoutTopBtn() {
  const onClickTop = () => {
    document
      .getElementById("scroll")
      .scrollTo({ left: 0, top: 250, behavior: "smooth" });
  };
  return (
    <s.Button onClick={onClickTop}>
      <div>Top</div>
    </s.Button>
  );
}
