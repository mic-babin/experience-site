import React from "react";
import Header from "../common/header/header.component";

import SEO from "../seo";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/normalize.css";
import "../../assets/styles/main.scss";
import { ShouldStickProvider } from "../../context/shouldStick.context";

const Layout = ({ children, navData }) => {
  return (
    <>
      <ShouldStickProvider>
        <Header navData={navData} />
        {children}
      </ShouldStickProvider>
    </>
  );
};
export const Head = () => <SEO />;

export default Layout;
