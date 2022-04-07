import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";

import { RouteComponentProps } from "@reach/router";

export const NavBar: React.FC<RouteComponentProps> = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex" }}>
        <img
          src="https://beon.studio/assets/img/logo_beon_white.png"
          style={{ marginRight: "auto", width: "150px" }}
        />

        <Button color="inherit" href="/">
          Flights
        </Button>
      </Toolbar>
    </AppBar>
  );
};
