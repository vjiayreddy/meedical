import React, { Fragment } from "react";
import UiAppBar from "../components/AppBar/appBar";
import UiFooter from "../components/footer/footer";

interface UiMainLayoutProps {
  children: React.ReactNode;
}

const UiMainLayout = ({ children }: UiMainLayoutProps) => {
  return (
    <Fragment>
      <UiAppBar />
      <main>{children}</main>
    </Fragment>
  );
};

export default UiMainLayout;
