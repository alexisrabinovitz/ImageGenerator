import mongoose from 'mongoose'

const connectDB = (url) => {
    mongoose.set('strictQuery', true)

    mongoose.connect(url)
    .then(()=> console.log('MongoDB connected'))
    .catch((err) => console.log(err))
}

export default connectDB


// Este módulo se encarga de conectar una aplicación de Node.js a una base de datos MongoDB utilizando la biblioteca Mongoose. La función connectDB toma una URL de conexión, establece algunas opciones de consulta y maneja la conexión y los posibles errores asociados.