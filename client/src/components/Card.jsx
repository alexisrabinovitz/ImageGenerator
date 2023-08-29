import React from 'react'
import PropTypes from 'prop-types' 

import { download } from '../assets'
import { downloadImage } from '../utils'

// La tarjeta tiene una imagen de fondo (photo) y muestra un overlay al pasar el ratón sobre ella.
// El overlay es un contenedor que contiene la descripción (prompt), el nombre del autor (name) y un botón de descarga.
// Cuando se hace clic en el botón de descarga, se llama a la función downloadImage(_id, photo), función que se definió en utils.
const Card = ({_id, name, prompt, photo}) => {
  return (
    <div className='relative rounded-xl group shadow-card hover:shadow-cardhover card'>
      <img className='object-cover w-full h-auto rounded-xl'
      src={photo} 
      alt={prompt} />
      <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md'>
        <p className='overflow-y-auto text-white text-md prompt'>{prompt}</p>
        <div className='flex items-center justify-between gap-2 mt-5'>
          <div className='flex items-center gap-2'>
            <div className='flex items-center justify-center object-cover text-xs font-bold text-white bg-purple-700 rounded-full w-7 h-7'>
              {name[0]}
            </div>
            <p className='text-sm text-white'>{name}</p>
          </div>
          <button type='button' onClick={()=> downloadImage(_id, photo)} className='bg-transparent border-none outline-none'>
            <img src={download} alt='download' className='object-contain w-6 h-6 invert'/>
          </button>
        </div>
      </div>
    </div>
  )
}

// Declara las propiedades esperadas para el componente Card utilizando PropTypes. Espera un _id (identificador único), un name (nombre), un prompt (prompt o descripción) y una photo (URL de la imagen).

Card.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  prompt: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
}

export default Card;