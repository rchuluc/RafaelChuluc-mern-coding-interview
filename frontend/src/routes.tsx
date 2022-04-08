import { Redirect, Router } from "@reach/router";
import React from "react";

import { Layout } from "./components/layout/layout.component";
import { FlightsPage } from "./pages/flights.page";

export function Routes() {
  return (
    <Layout>
      <Router>
      <Redirect
        from="/"
        to="flights"
      />  
        <FlightsPage path="flights" />
      </Router>
    </Layout>
  );
}
