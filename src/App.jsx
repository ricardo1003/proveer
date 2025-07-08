import { useState } from 'react'
import './App.css'
import FeatureCard from './components/FeatureCard'
import Service from './components/Service'
import data from './data.json'

function App() {

  return (
    <>
        <header className='fixed bg-white w-full h-20 px-[22px] pt-[11px] pb-4 z-10 flex justify-between items-center shadow-black/25 shadow-md'>
          <img src="./assets/logo.png" alt="logo" />
          <nav>
            <ul className='flex gap-4 font-bold TT-Norms'>
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
          <section className='text-white px-[135px] pt-52 pb-[131px] bg-cover bg-center bg-no-repeat TT-Norms'
          style={{ backgroundImage: `url(./assets/fondo.jpg)` }}
          >
            <h3 className='text-6xl font-bold text-shadow-[0_5px_15px_rgb(0_0_0_/_1)]'>¡Diseñamos tus <br /> sueños!</h3>
            <button className='mt-8 bg-[#3E4095] font-semibold px-8 py-2 rounded-full'>Trabaja con Nosotros</button>
          </section>
          <section className='relative flex items-center flex-col h-[214.55px] overflow-hidden Inter'>
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
          <section className='flex flex-col gap-[55px] px-[77px] py-[55px] bg-white'>
              {data["services"].map((service, index) => (
                <Service key={`service ${index}`}
                  index={index}
                  image={service.image}
                  alt={service.alt}
                  title={service.title}
                  description={service.description}
                  list={service.list}
                >

                </Service>
              ))}
          </section>
          <section className='text-white text-center py-14 bg-gradient-to-t from-[rgba(99,134,255,0.95)] to-[#3e4095]'>
            <h3 className='text-[55px] font-bold mb-6 leading-none px-[40px]' >Soluciones publicitarias para hacer visible tu marca</h3>
            <p className='px-[89px]'>En <b>Proveer</b> llevamos más de 18 años ayudando a empresas a comunicar sus ideas con calidad, impacto y rapidez. Todo lo que necesitas en impresión, señalización y marketing visual en un solo lugar.</p>
          </section>
          <section className='bg-white py-10 px-20 flex  gap-15 Inter'>
            {data["features"].map((feature, index) => (
              <FeatureCard
                key={`feature ${index}`}
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
