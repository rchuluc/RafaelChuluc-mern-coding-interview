import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { Container, Box, Typography } from "@material-ui/core";

import { FlightCard } from "../components/flights/flight-card";
import { FlightModel } from "../models/flight.model";

import { useFlights } from "../hooks/flights.hook";

export const FlightsPage: React.FC<RouteComponentProps> = () => {
  const flights = useFlights();

  return (
    <Box>
      <Box>
        <Typography
          style={{ marginLeft: "15px", marginTop: "15px" }}
          variant="h4"
        >
          Scheduled Flights
        </Typography>
      </Box>

      <Box>
        {flights?.length
          ? flights.map((flight: FlightModel) => (
              <FlightCard
                origin={flight.origin}
                destination={flight.destination}
                code={flight.code}
                status={flight.status}
              />
            ))
          : null}
      </Box>
    </Box>
  );
};
