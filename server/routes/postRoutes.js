import express from 'express'
import * as dotenv from 'dotenv'
import {v2 as cloudinary} from 'cloudinary'

import Post from '../mongodb/models/post.js'

dotenv.config() 

const router = express.Router()
// Configurar cloudinary con las variables del entorno
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

// // GET ALL POSTS ROUTE
// Utiliza el método router.route('/').get() para definir una ruta GET en la raíz ("/") que maneja la obtención de todas las publicaciones.
// Dentro del controlador, realiza una consulta a la base de datos utilizando el modelo Post para obtener todas las publicaciones.
// Si la consulta es exitosa, responde con un estado 200 y un objeto JSON que contiene un indicador de éxito (success) y los datos de las publicaciones.
// Si hay un error en la consulta, responde con un estado 500 y un objeto JSON que contiene un indicador de no éxito (success) y un mensaje de error.
router.route('/').get(async(req, res) => {
    try {
        const posts = await Post.find({})
        res.status(200).json({ success: true, data: posts })
    } catch (error) {
        res.status(500).json({ success: false, message: error })
    }
})

//CREATE A POST ROUTE

// Utiliza el método router.route('/').post() para definir una ruta POST en la raíz ("/") que maneja la creación de una nueva publicación.
// Dentro del controlador, obtiene los datos necesarios (name, prompt, photo) del cuerpo de la solicitud (req.body).
// Utiliza el servicio Cloudinary para cargar la imagen (photo) y obtener la URL de la imagen cargada.
// Crea una nueva instancia del modelo Post con los datos proporcionados y la URL de la imagen cargada.
// Si la creación es exitosa, responde con un estado 201 y un objeto JSON que contiene un indicador de éxito (success) y los datos de la nueva publicación.
// Si hay un error en la creación, responde con un estado 500 y un objeto JSON que contiene un indicador de no éxito (success) y un mensaje de error.

router.route('/').post(async(req, res) => {
try {
    const {name, prompt, photo } = req.body 
    const photoUrl = await cloudinary.uploader.upload(photo)

    const newPost = await Post.create({
        name,
        prompt,
        photo: photoUrl.url
    })

    res.status(201).json({ success: true, date: newPost})
} catch (error) {
    res.status(500).json( {success: false, message: error})
}
})

export default router

