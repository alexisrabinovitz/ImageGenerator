import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors' 

import connectDB from './mongodb/connect.js'
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config()

// Crea una instancia de la aplicación Express y la almacena en la variable app.
// Utiliza el middleware cors para permitir solicitudes desde diferentes dominios.
// Utiliza el middleware express.json() para analizar las solicitudes con formato JSON y limitar el tamaño a 50 MB.
const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))

// Asocia rutas específicas a diferentes conjuntos de rutas utilizando el middleware app.use(), para el post y dalle.
app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

// Define una ruta GET en la raíz ("/") que responde con un mensaje "Hello Alexis" cuando se accede a la URL raíz.
app.get('/', async(req, res) => {
    res.send('Hello Alexis')
})

// Define una función asincrónica llamada startServer.
// Dentro de esta función, intenta conectar con la base de datos MongoDB utilizando la función connectDB.
// Si la conexión con la base de datos es exitosa, la aplicación Express se pone en escucha en el puerto 8080.
// Si ocurre algún error en la conexión o al iniciar el servidor, se maneja el error y se muestra un mensaje en la consola.
const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(8080, () => console.log('Server has started on port http://localhost:8080/'))
    } catch (error) {
        console.log(error)
    }   
}

// Llama a la función startServer para iniciar el servidor y la base de datos.
startServer()