import { HttpClient } from "./base-http.client";
import Environment from "../environment";

import { FlightModel } from "../models/flight.model";

const base = Environment.backendApi;
const httpClient = new HttpClient();

export class BackendClient {
  private static _instance: BackendClient;

  static getInstance() {
    if (!BackendClient._instance) {
      BackendClient._instance = new BackendClient();
    }

    return BackendClient._instance;
  }

  async getFlights() {
    return await httpClient.get(`${base}/flights`);
  }

  async createPerson(person: any) {
    return await httpClient.post(`${base}/persons`, person);
  }
}
