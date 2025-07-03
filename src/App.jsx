import { useState } from 'react'
import './App.css'
import FeatureCard from './components/FeatureCard'
import data from './data.json'

function App() {

  return (
    <>
        <header className='fixed bg-white w-full h-20 p-4 z-10 flex justify-between items-center shadow-black/25 shadow-md'>
          <img src="./assets/logo.png" alt="logo" />
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
        <main className='pt-20'>
          <button className='size-16 fixed right-4 bottom-4 cursor-pointer z-[2]'>
            <img src="./assets/whatsapp.png" alt="whatsapp" />
          </button>
          <section className='text-white px-40 pt-50 pb-40 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url(./assets/fondo.jpg)` }}
          >
            <h3 className='text-6xl font-bold text-shadow-[0_5px_15px_rgb(0_0_0_/_1)]'>¡Diseñamos tus <br /> sueños!</h3>
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
          <section className='relative flex items-center flex-col h-[214.55px] overflow-hidden'>
            <p className='flex items-center text-white z-[1] h-[50%]'>Más de 100 empresas en toda Colombia confían en nosotros<img src="./assets/colombian-emoji-iphone.png" alt="colombian-emoji-iphone" className='inline-block h-5 ml-1' /> </p>
            <div className='relative flex justify-center items-center overflow-visible z-0 w-full h-[50%] '>
              <div className="absolute py-4 left-0 flex flex-nowrap items-center  gap-8 h-full  invert brightness-0  carrouselAnimation">
                {data["associates"].map((associate, index) => (
                    <img src={associate.image} alt={associate.name} className='relative block max-h-full max-w-[200px]' />
                  ))}
                {data["associates"].map((associate, index) => (
                  <img src={associate.image} alt={associate.name} className='relative block max-h-full max-w-[200px]' />
                ))}  
              </div>
            </div>
          </section>
          <section className='grid grid-cols-3 gap-4 px-20 py-10 bg-[#3E4095]'>
              {data["services"].map((service, index) => (
                <div className="bg-white aspect-square min-w-fit"></div>
              ))}
          </section>
        </main>
    </>
  )
}

export default App
