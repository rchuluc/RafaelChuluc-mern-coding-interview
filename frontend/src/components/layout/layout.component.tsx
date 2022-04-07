import { styled as muStyled } from "@material-ui/core";
import React from "react";

import { NavBar } from "./navbar";

const LayoutWrapper = muStyled("main")(({ theme }) => ({
  display: "flex",
  flex: "1",
  overflow: "hidden",
}));

const LayoutContainer = muStyled("div")({
  display: "flex",
  flex: "1",
  overflow: "hidden",
});

const LayoutContent = muStyled("div")({
  flex: "1",
  overflow: "auto",
  position: "relative",
  WebkitOverflowScrolling: "touch",
  display: "flex",
  flexDirection: "column",

  "> *": {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
});

export const Layout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <NavBar />
      <LayoutWrapper>
        <LayoutContainer>
          <LayoutContent>{children}</LayoutContent>
        </LayoutContainer>
      </LayoutWrapper>
    </>
  );
};
