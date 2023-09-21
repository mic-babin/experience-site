import React from "react";
import Header from "../common/header/header.component";
import SEO from "../seo";
import { SectionProvider } from "../../context/section.context";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/normalize.css";
import "../../assets/styles/main.scss";
import { MenuProvider } from "../../context/menu.context";
import { ShouldStickProvider } from "../../context/shouldStick.context";

const Layout = ({ children }) => {
  return (
    <>
      <ShouldStickProvider>
        <MenuProvider>
          <SectionProvider>
            <Header />
            {children}
          </SectionProvider>
        </MenuProvider>
      </ShouldStickProvider>
    </>
  );
};
export const Head = () => <SEO />;

export default Layout;
