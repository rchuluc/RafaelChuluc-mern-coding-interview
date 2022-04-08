import React, { useState } from "react";
import { Box, Card, Container, Typography, InputLabel, Select, MenuItem } from "@material-ui/core";

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

  const [status, setStatus] = useState(props.status)

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
        <InputLabel id="demo-simple-select-label">Change status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="status-change"
          onChange={(e) => { setStatus(e.target.value) }}
        >
        
          <MenuItem  value={FlightStatuses.Arrived}>{FlightStatuses.Arrived}</MenuItem>
          <MenuItem value={FlightStatuses.Cancelled}>{FlightStatuses.Cancelled}</MenuItem>
          <MenuItem value={FlightStatuses.Delayed}>{FlightStatuses.Delayed}</MenuItem>
          <MenuItem value={FlightStatuses.Landing}>{FlightStatuses.Landing}</MenuItem>
          <MenuItem value={FlightStatuses["On Time"]}>{FlightStatuses["On Time"]}</MenuItem>
        </Select>
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
