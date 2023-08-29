import FileSaver from 'file-saver'

import { surpriseMePrompts } from '../constants'

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt = surpriseMePrompts[randomIndex]

    if(randomPrompt === prompt) return getRandomPrompt(prompt)

    return randomPrompt
}

export async function downloadImage(_id, photo){
    FileSaver.saveAs(photo, `download-${_id}.jpeg`)
}

// En este index.js estamos importando la bilbioteca de filesaver para poder descargar las imágenes que se creen a través de la aplicación. 
// Primero importamos filesaver desde la biblioteca y después surprisemeprompts desde el archvivo de contsants. 

// La función getRandomPrompt: Calcula un índice aleatorio dentro del rango de índices disponibles en el arreglo surpriseMePrompts usando Math.random() y Math.floor().
// Obtiene un elemento aleatorio del arreglo surpriseMePrompts utilizando el índice calculado.
// Luego, verifica si el randomPrompt obtenido es igual al prompt pasado como argumento. Si lo son, se llama nuevamente a getRandomPrompt(prompt) para obtener un nuevo prompt aleatorio. Esto evita que se seleccione el mismo prompt.
// Finalmente, devuelve el prompt aleatorio obtenido.

// La función downloadImage(_id, photo): Inicia la descarga de una imagen proporcionada (photo) con un nombre de archivo personalizado que contiene el _id proporcionado.