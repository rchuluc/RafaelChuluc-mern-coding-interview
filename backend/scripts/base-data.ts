import { FlightsModel } from '../src/models/flights.model'

import flightsJson from './flights.json'

export const loadData = async () => {
    for (const flight of flightsJson) {
        await FlightsModel.create(flight)
    }

    console.log(` --- Loaded ${flightsJson.length} flights ---`)
}
