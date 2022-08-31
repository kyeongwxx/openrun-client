import { ReactNode } from "react";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <LayoutHeader />
      <LayoutNavigation />
      <div>{props.children}</div>
      <LayoutFooter />
    </>
  );
}
