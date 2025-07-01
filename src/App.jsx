import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
        <header className='bg-white w-full h-16 p-4 flex justify-between items-center'>
          <img src="./src/assets/logo.png" alt="logo" />
          <nav>
            <ul className='flex gap-4 font-bold'>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Contáctanos</a></li>
            </ul>
          </nav>
        </header>
        
    </>
  )
}

export default App
