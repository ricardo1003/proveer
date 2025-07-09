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
        <main className='pt-20 max-w-[100vw] overflow-x-hidden'>
          <button className='size-16 fixed right-4 bottom-4 cursor-pointer z-[2]'>
            <img src="./assets/whatsapp.png" alt="whatsapp" />
          </button>
          <section className='text-white px-[135px] pt-52 pb-[131px] bg-cover bg-center bg-no-repeat TT-Norms'
          style={{ backgroundImage: `url(./assets/fondo.jpg)` }}
          >
            <h3 className='text-6xl font-bold text-shadow-[0_5px_15px_rgb(0_0_0_/_1)]'>¡Diseñamos tus <br /> sueños!</h3>
            <button className='mt-8 bg-[#3E4095] font-semibold px-8 py-2 rounded-full'>Trabaja con Nosotros</button>
          </section>
          <section className='relative flex items-center flex-col h-[214.55px] overflow-hidden Inter bg-gradient-to-b from-[#7356b3] to-[#3e4095]'>
            <p className='flex items-center text-[21.6px] text-white z-[1] pt-[17px] pb-[49px]'>Más de <b className='mx-1'>+100</b> empresas en toda <b className='mx-1'>Colombia confían</b> en <b className='mx-1'>nosotros</b> <img src="./assets/colombian-emoji-iphone.png" alt="colombian-emoji-iphone" className='inline-block h-5 ml-1' /> </p>
            <div className='relative flex justify-center items-center overflow-visible z-0 w-full h-full '>
              <div className="absolute pb-8 left-0 flex flex-nowrap items-center  gap-8 h-full  invert brightness-0  carrouselAnimation">
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
          <section className='text-white text-center py-14 bg-gradient-to-t from-[#586ccc] to-[#3e4095]'>
            <h3 className='text-[55px] font-bold mb-6 leading-none px-[40px]' >Soluciones publicitarias para hacer visible tu marca</h3>
            <p className='px-[89px]'>En <b>Proveer</b> llevamos más de 18 años ayudando a empresas a comunicar sus ideas con calidad, impacto y rapidez. Todo lo que necesitas en impresión, señalización y marketing visual en un solo lugar.</p>
          </section>
          <section className='bg-white py-10 px-20 flex flex-col'>
            <h3 className='text-[30px] font-bold'>Resultados que marcan la diferencia</h3>
            <p className='mt-[11px] mb-11'>En <b>Proveer</b> ayudamos a las empresas a destacar con <b>soluciones gráficas efectivas</b></p>
            <div className='flex gap-15 Inter'>
              {data["features"].map((feature, index) => (
                <FeatureCard
                  key={`feature ${index}`}
                  index={index}
                  icon={feature.icon}
                  alt={feature.alt}
                  title={feature.title}
                  description={feature.description}
                >
                </FeatureCard>
              ))}
            </div>
          </section>
          <section className='bg-white flex items-center shadow-[0_0px_35px_rgba(0,0,0,0.25)]'>
              <picture className='w-[50%] overflow-hidden brightness-50'>
                <img src="./assets/proveer-sede.png" alt="proveer-sede" className='scale-150 translate-y-10 translate-x-30'/>
              </picture>
              <div className='w-[50%] px-[135px] py-[57px]'>
                <h3 className='text-[45px] font-bold block mt-auto'>¿TIENES PREGUNTAS?</h3>
                <ul>
                  {data["contactanos"].map((contact, index) => (
                    <li className='flex gap-9 my-[17px]'><img src={contact["icon"]} alt={contact["alt"]} className='inline-block'/><p className='text-[15.2px] flex flex-col'>{
                      index === 0 ? <b className='text-[21px]'>VISITANOS</b> : index === 1 ? <b className='text-[21px]'>CONTÁCTANOS</b> : "" 
                    } {contact["description"]}</p></li>
                  ))}
                </ul>
              </div>
          </section>
        </main>
    </>
  )
}

export default App
