import express from 'express'
import * as dotenv from 'dotenv'
import { Configuration, OpenAIApi} from 'openai'


dotenv.config() 

const router = express.Router()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

router.route('/').get((req, res) => {
    res.send('Hello from dalle')
})

// Dentro del controlador, obtiene el texto de la descripción de la imagen (prompt) del cuerpo de la solicitud (req.body).
// Utiliza la instancia de OpenAIApi para crear una imagen utilizando el método createImage().
// Se especifica el prompt, la cantidad n de imágenes a generar (en este caso, 1), el tamaño deseado de la imagen (size), y el formato de respuesta (response_format).
// Extrae la imagen generada del resultado y la envía como respuesta en un objeto JSON.

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body
        const aiResponse = await openai.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
        })

        const image = aiResponse.data.data[0].b64_json

        res.status(200).json( { photo: image})
    } catch (error) {
        console.log(error)
        res.status(500).send(error?.response.data.error.message)
    }
})

export default router