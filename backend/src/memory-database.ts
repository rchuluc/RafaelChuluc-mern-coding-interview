import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { loadData } from '../scripts/base-data'

export const db = async ({ test = false }) => {
    try {
        const mongo = await MongoMemoryServer.create()
        const uri = mongo.getUri()

        const mongooseOpts = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        }

        ;(async () => {
            await mongoose.connect(uri, mongooseOpts)
            console.log(
                '« Connected to In-Memory database. Loading base data... »'
            )

            if (!test) {
                console.log('« ...Loading base data... »')
                await loadData()
                console.log('« Base data loaded to In-Memory database! »')
            }
        })()
    } catch (e) {
        console.log('ERROR', e)
    }
}
