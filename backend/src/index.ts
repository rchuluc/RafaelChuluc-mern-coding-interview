import 'reflect-metadata'
require('dotenv').config()

import {
    createExpressServer,
    RoutingControllersOptions,
} from 'routing-controllers'
import { db } from './memory-database'
const port = process.env.PORT

const routingControllersOptions: RoutingControllersOptions = {
    routePrefix: '/v1',
    controllers: [`${__dirname}/controllers/*.controller.*`],
    validation: true,
    classTransformer: true,
    cors: true,
    defaultErrorHandler: true,
}

const app = createExpressServer(routingControllersOptions)

// Connect to In-Memory DB
;async () => await db({ test: false })

app.listen(port, () => {
    console.log(`[Live Coding Challenge] Running at http://localhost:${port}`)
})

export default app
