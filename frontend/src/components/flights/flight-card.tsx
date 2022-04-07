import React, { FC } from "react";
import { Box, Card, Container, Typography } from "@material-ui/core";

import { FlightStatuses } from "../../models/flight.model";

interface FlightCardProps {
  code: string;
  origin: string;
  destination: string;
  passengers?: string[];
  status: FlightStatuses;
}

const mapFlightStatusToColor = (status: FlightStatuses) => {
  const mappings = {
    [FlightStatuses.Arrived]: "#1ac400",
    [FlightStatuses.Delayed]: "##c45800",
    [FlightStatuses["On Time"]]: "#1ac400",
    [FlightStatuses.Landing]: "#1ac400",
    [FlightStatuses.Cancelled]: "#ff2600",
  };

  return mappings[status] || "#000000";
};

export const FlightCard: React.FC<FlightCardProps> = (
  props: FlightCardProps
) => {
  return (
    <Card
      style={{
        backgroundColor: "#f5f5f5",
        margin: "15px",
        padding: "35px",
        justifyContent: "center",
      }}
    >
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5">{props.code} </Typography>
        <Typography style={{ color: mapFlightStatusToColor(props.status) }}>
          Status: {props.status}
        </Typography>
      </Box>

      <Box>
        <Typography>Origin: {props.origin}</Typography>
      </Box>
      <Box>
        <Typography>Destination: {props.destination}</Typography>
      </Box>
    </Card>
  );
};
