export enum FlightStatuses {
  Arrived = "Arrived",
  Landing = "Landing",
  "On Time" = "On Time",
  Delayed = "Delayed",
  Cancelled = "Cancelled",
}

export interface FlightModel {
  code: string;
  origin: string;
  destination: string;
  status: FlightStatuses;
  passengers?: string[];
}
