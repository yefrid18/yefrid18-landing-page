import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-yellow-100 text-2xl'>Hola, mi nombre es:</p>
        <h1 className='text-3xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Yefrid Morelo
        </h1>
        <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>
          Soy un Front-End Developer
        </h2>
        <p className='text-gray-300 py-4 max-w-[700px]'>
          Enseñame tus ideas sobre la web de tus sueños y te ayudaré a hacerla realidad.
        </p>
        <div>
          <button className='text-yellow-100 group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-900 hover:border-orange-900'>
            Ver Trabajos
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />             
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
