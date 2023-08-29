/* eslint-disable no-unused-vars */
import { lazy } from 'react';
const Form = lazy(() => import('./Form'));
import { useTranslation } from 'react-i18next';

export default function ContactMe() {
  const [t, i18n] = useTranslation('global');
  return (
    <section
      className='bg-lightMode dark:bg-darkMode pt-16 md:pt-32 mt-0 px-8 pb-12'
      id='contact'
    >
      <h2 className='text-center text-3xl lg:text-5xl text-black dark:text-lightMode font-rubik-bold'>
        {t('contact.title')}
      </h2>
      <p className='text-center text-lg text-violet dark:text-cyan font-rubik-semibold mt-2'>
        {t('contact.subtitle')}
      </p>
      <section className='mt-12'>
        <div className='flex flex-row'>
          <div className='pt-1'>
            <svg
              className='fill-violet dark:fill-cyan'
              width='50px'
              height='50px'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              id='envelope'
            >
              <path d='M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L5.41,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7.41l5.88,5.88a3,3,0,0,0,4.24,0L20,7.41Z'></path>
            </svg>
          </div>
          <div className='flex flex-col text-left px-4'>
            <h2 className='text-3xl text-black dark:text-lightMode font-rubik-bold'>
              Email
            </h2>
            <span className='text-sm text-description dark:text-subtitle font-rubik-regular'>
              fierrogabriel13@gmail.com
            </span>
          </div>
        </div>
        <Form />
      </section>
    </section>
  );
}
