/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProfilePicture from '../../assets/images/profile-picture.webp';
import './header.css';

export default function Header() {
  const [t, i18n] = useTranslation('global');

  useEffect(() => {
    // Preload the profile picture image
    const img = new Image();
    img.src = ProfilePicture;
  }, []);

  return (
    <main
      className='bg-lightMode dark:bg-darkMode h-screen w-full relative md:mt-12'
      id='home'
    >
      <video
        className='w-full h-screen object-cover relative inset-0 -z-1 opacity-[.045] dark:opacity-[.01]'
        autoPlay
        muted
        loop
        id='myVideo'
      >
        <source
          src='/src/assets/video/background_video.webm'
          type='video/mp4'
        ></source>
      </video>
      <section className='inset-0 flex flex-col lg:h-4/6 sm:justify-center h-auto z-0 absolute mt-4 lg:mt-20 pt-24 md:pt-0 xs:px-28 sm:px-0 lg:px-32 pb-12 md:items-center justify-center'>
        <article className='flex flex-row flex-wrap justify-evenly md:justify-center'>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 }
            }}
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.6, delay: 0.25 }}
            className='flex justify-center flex-1 order-1 md:order-3 md:items-center basis-1/3'
          >
            <img
              className='w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 my-9 rounded-full animate-[animate_5s_ease-in-out_infinite]'
              src={ProfilePicture}
              alt='Profile picture'
              width='150px'
              height='150px'
            />
          </motion.div>
          <motion.section
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 }
            }}
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.5, delay: 0.25 }}
            className='dark:bg-transparent flex flex-col basis-full md:basis-7/12 order-2 md:order-1 text-left w-auto mt-0 md:mt-20 justify-center md:items-stretch px-8'
          >
            <motion className='text-pinkHelio text-sm md:text-lg font-rubik-bold md:pt-2 pb-1'>
              {t('header.subtitle')}
            </motion>
            <h1 className='text-black dark:text-lightMode text-3xl md:text-4xl lg:text-5xl font-rubik-bold pb-1'>
              {t('header.title')}
              <span className='text-accentText'>{t('header.name')}</span>
            </h1>
            <p className='text-dark dark:text-subtitle text-md font-rubik-regular pb-2 leading-relaxed'>
              {t('header.description_top')}
              <span className='underline decoration-cyan decoration-2 dark:underline'>
                {t('header.country')}
              </span>
              {t('header.description_bottom')}
              {t('header.description_bottom_tech')}
            </p>
            <ul className='flex flex-row justify-start items-center py-4 space-x-2 order-1'>
              <li className='flex my-2 cursor-pointer p-3 bg-lightMode dark:bg-yellow rounded-md shadow-[-4px_4px_0px_#FFE554] dark:shadow-[4px_4px_0px_#f3f3f3] mr-4 hover:scale-125'>
                <a
                  href='https://github.com/GabrielFierro/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg
                    width={('20px', '24px')}
                    height={('20px', '24px')}
                    xmlns='http://www.w3.org/2000/svg'
                    data-name='Layer 1'
                    viewBox='0 0 24 24'
                    id='github-alt'
                  >
                    <path
                      fill='black'
                      d='M10.07031,20.50291a1.00008,1.00008,0,0,0-1.18115-.9834c-1.30908.24024-2.96191.27637-3.40137-.958a5.70754,5.70754,0,0,0-1.83691-2.415,1.20073,1.20073,0,0,1-.1665-.10938,1,1,0,0,0-.93067-.64551H2.54883a.99965.99965,0,0,0-1,.99512c-.00391.81543.811,1.33789,1.1416,1.51465a4.4408,4.4408,0,0,1,.92383,1.35937c.36426,1.02344,1.42285,2.57617,4.46582,2.376.001.03516.00195.06836.00244.09863l.00439.26758a1,1,0,0,0,2,0l-.00488-.31836C10.07715,21.4951,10.07031,21.22068,10.07031,20.50291Zm10.667-15.126c.03174-.125.063-.26367.09034-.41992a6.27792,6.27792,0,0,0-.40821-3.293,1.002,1.002,0,0,0-.61572-.58007c-.356-.12012-1.67041-.35645-4.18408,1.25a13.86918,13.86918,0,0,0-6.354,0C6.76221.751,5.45459.9658,5.10205,1.07908a.99744.99744,0,0,0-.63135.584,6.3003,6.3003,0,0,0-.40332,3.35644c.02442.12793.05078.2461.07813.35449A6.26928,6.26928,0,0,0,2.89014,9.20311a8.42168,8.42168,0,0,0,.04248.92187c.334,4.60254,3.334,5.98438,5.42431,6.459-.04345.125-.083.25878-.11816.40039a1.00023,1.00023,0,0,0,1.94238.47851,1.6784,1.6784,0,0,1,.46778-.87793.99947.99947,0,0,0-.5459-1.74512c-3.4541-.39453-4.95362-1.80175-5.1792-4.89843a6.61076,6.61076,0,0,1-.03369-.73828,4.25769,4.25769,0,0,1,.91943-2.71289,3.022,3.022,0,0,1,.1958-.23145.99988.99988,0,0,0,.188-1.02441,3.3876,3.3876,0,0,1-.15527-.55567A4.09356,4.09356,0,0,1,6.1167,3.06346a7.54263,7.54263,0,0,1,2.415,1.17968,1.00877,1.00877,0,0,0,.82764.13282,11.77716,11.77716,0,0,1,6.17285.001,1.00549,1.00549,0,0,0,.83056-.13769,7.572,7.572,0,0,1,2.40528-1.19043,4.03977,4.03977,0,0,1,.0874,1.57812,3.205,3.205,0,0,1-.16895.60743.9999.9999,0,0,0,.188,1.02441c.07715.08691.1543.18066.22363.26855A4.12186,4.12186,0,0,1,20,9.20311a7.03888,7.03888,0,0,1-.0376.77734c-.22021,3.05566-1.72558,4.46387-5.1958,4.85937a1,1,0,0,0-.54541,1.7461,1.63079,1.63079,0,0,1,.46631.9082,3.06079,3.06079,0,0,1,.09229.81934v2.334C14.77,21.2949,14.77,21.78025,14.77,22.00291a1,1,0,1,0,2,0c0-.2168,0-.69238.00977-1.33984V18.31346a4.8815,4.8815,0,0,0-.15479-1.31153,4.25638,4.25638,0,0,0-.11621-.416,6.51258,6.51258,0,0,0,5.44531-6.42383A8.69677,8.69677,0,0,0,22,9.20311,6.13062,6.13062,0,0,0,20.7373,5.37693Z'
                    ></path>
                  </svg>
                </a>
              </li>
              <li className='flex my-2 cursor-pointer p-3 bg-lightMode dark:bg-yellow rounded-md shadow-[-4px_4px_0px_#FFE554] dark:shadow-[4px_4px_0px_#f3f3f3] mr-4 hover:scale-125'>
                <a
                  href='https://www.linkedin.com/in/gabriel-fierro-2020/'
                  target='_blank'
                  rel='noreferrer'
                  className='drop-shadow-[-150px_120px_250px_#A7F9D1]'
                >
                  <svg
                    width={('20px', '24px')}
                    height={('20px', '24px')}
                    xmlns='http://www.w3.org/2000/svg'
                    data-name='Layer 1'
                    viewBox='0 0 24 24'
                    id='linkedin-alt'
                  >
                    <path
                      fill='black'
                      d='M17.5,8.999a5.41868,5.41868,0,0,0-2.56543.64453A.99918.99918,0,0,0,14,8.999H10a.99943.99943,0,0,0-1,1v12a.99942.99942,0,0,0,1,1h4a.99942.99942,0,0,0,1-1v-5.5a1,1,0,1,1,2,0v5.5a.99942.99942,0,0,0,1,1h4a.99942.99942,0,0,0,1-1v-7.5A5.50685,5.50685,0,0,0,17.5,8.999Zm3.5,12H19v-4.5a3,3,0,1,0-6,0v4.5H11v-10h2v.70313a1.00048,1.00048,0,0,0,1.78125.625A3.48258,3.48258,0,0,1,21,14.499Zm-14-12H3a.99943.99943,0,0,0-1,1v12a.99942.99942,0,0,0,1,1H7a.99942.99942,0,0,0,1-1v-12A.99943.99943,0,0,0,7,8.999Zm-1,12H4v-10H6ZM5.01465,1.542A3.23283,3.23283,0,1,0,4.958,7.999h.02832a3.23341,3.23341,0,1,0,.02832-6.457ZM4.98633,5.999H4.958A1.22193,1.22193,0,0,1,3.58887,4.77051c0-.7461.55957-1.22852,1.42578-1.22852A1.2335,1.2335,0,0,1,6.41113,4.77051C6.41113,5.5166,5.85156,5.999,4.98633,5.999Z'
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </motion.section>
        </article>
      </section>
    </main>
  );
}
