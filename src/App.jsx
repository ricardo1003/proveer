import { useState } from 'react'
import './App.css'
import FeatureCard from './components/FeatureCard'
import data from './data.json'

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
        <main>
            <button className='size-16 fixed right-4 bottom-4 cursor-pointer'>
              <img src="./src/assets/whatsapp.png" alt="whatsapp" />
            </button>
          <section className='text-white px-20 pt-30 pb-20 bg-cover bg-bottom'
          style={{ backgroundImage: `url(./src/assets/fondo.jpg)` }}
          >
            <h3 className='text-6xl font-bold text-shadow-[0_5px_15px_rgb(0_0_0_/_1)]'>¡Diseñamos tus sueños!</h3>
            <button className='mt-8 bg-[#3E4095] font-semibold px-8 py-2 rounded-full'>Trabaja con Nosotros</button>
          </section>
          <section className='bg-white py-10 px-20 flex  gap-15 '>
            {data["features"].map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                alt={feature.alt}
                title={feature.title}
                description={feature.description}
              ></FeatureCard>
            ))}

          </section>
        </main>
    </>
  )
}

export default App
