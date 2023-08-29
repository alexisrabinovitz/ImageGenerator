import mongoose from 'mongoose'

const Post = new mongoose.Schema({
    name: {type: String, required: true},
    prompt: {type: String, required: true},
    photo: {type: String, required: true},
})  

const PostSchema = mongoose.model('Post', Post)

export default PostSchema

// Este código define un modelo de datos llamado Post utilizando Mongoose. El modelo representa documentos que contendrán información sobre publicaciones. Cada documento tendrá campos como name, prompt y photo, y el modelo se exporta para que pueda ser utilizado en otros archivos para realizar operaciones de base de datos relacionadas con las publicaciones.