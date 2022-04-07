import { FlightsModel } from '../models/flights.model'

export class FlightsService {
    async getAll() {
        return await FlightsModel.find()
    }
}
