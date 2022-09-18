import React from 'react';
import app_todolist from '../assets/app_todolist.jpg';
import app_clima from '../assets/app_clima.jpg';
import app_landingpage from '../assets/app_landingpage.jpg';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-orange-900'>
            Portafolio
          </p>
          <p className='py-6'>// Revisa algunos de mis trabajos</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${app_todolist})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Aplicación To Do List
              </span>
              <div className='pt-8 text-center'>
                <a href='https://react-todo-list-a375a.web.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Web
                  </button>
                </a>
                <a href='https://github.com/yefrid18/react-todo-list'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${app_clima})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >

            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Aplicación del Clima
              </span>
              <div className='pt-8 text-center'>
                <a href='https://react-app-clima.web.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Web
                  </button>
                </a>
                <a href='https://github.com/yefrid18/react-app-clima'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${app_landingpage})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Aplicación Landing Page
              </span>
              <div className='pt-8 text-center'>
                <a href='https://yefrid18-landing-page.firebaseapp.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Web
                  </button>
                </a>
                <a href='https://github.com/yefrid18/yefrid18-landing-page'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>             
        </div>
      </div>
    </div>
  );
};

export default Work;
