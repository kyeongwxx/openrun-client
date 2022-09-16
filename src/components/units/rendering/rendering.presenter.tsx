import * as s from "./rendering.styles";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import * as React from "react";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";
import A from "./renderingA";
import B from "./renderingB";
import C from "./renderingC";
import D from "./renderingD";
import E from "./renderingE";

export default function RenderingUI() {
  const [ref, inView] = useInView({
    // root: null,
    rootMargin: "800px",
    threshold: 0.1,
  });

  return (
    <s.Main className="scroll-controller">
      <A />
      <B />
      <C />
      <D />
      <E />
    </s.Main>
  );
}
