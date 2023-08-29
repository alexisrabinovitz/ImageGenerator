

import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import {logo} from './assets'
import { Home, CreatePost} from './pages'

// Dentro del componente App utilizo BrowserRouter para enrutar la aplicación. Utilizando tailwind estoy dando css a los componenetes necesarios. 

const App = () => {
  return (
  <BrowserRouter>
    <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
     <Link to='/'>
      <img src={logo} alt="logo" className='object-contain w-28' />
     </Link>
     <Link to='/create-post' className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>Create</Link>
    </header>
    <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'> 
    {/* Se define un área principal (main) que contiene el componente Routes, en donde definirán qué componente se renderizará en función de la URL actual. */}
    <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/create-post' element= {<CreatePost/>} />
    </Routes>
    {/* Se definen dos rutas: la primera es home y la segunda es create-post. Esto significa que cuando la URL sea la página de creación de publicaciones, se renderizará el componente CreatePost. */}
    </main>
  </BrowserRouter>
  )
}

export default App
