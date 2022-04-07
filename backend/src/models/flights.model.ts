import mongoose, { Schema } from 'mongoose'

enum FlightStatuses {
    arrived = 'Arrived',
    landing = 'Landing',
    onTime = 'On Time',
    delayed = 'Delayed',
    cancelled = 'Cancelled',
}

interface Flight {
    code: string
    origin: string
    destination: string
    passengers: string[]
    status: FlightStatuses
}

const schema = new Schema<Flight>(
    {
        code: { required: true, type: String },
        origin: { required: true, type: String },
        destination: { required: true, type: String },
        passengers: { type: Array },
        status: String,
    },
    { timestamps: true }
)

export const FlightsModel = mongoose.model('Flights', schema)
