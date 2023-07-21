/* eslint-disable no-unused-vars */
import { lazy } from 'react';
const Form = lazy(() => import('./Form'));
import { useTranslation } from 'react-i18next';
import EmailIcon from '../../assets/icons/mail.svg';

export default function ContactMe() {
  const [t, i18n] = useTranslation('global');
  return (
    <section
      className='bg-lightMode dark:bg-darkMode pt-9 lg:pt-16 px-8 pb-12 md:-mt-2'
      id='contact'
    >
      <h2 className='text-center text-3xl text-title dark:text-lightMode font-rubik-semibold'>
        {t('contact.title')}
      </h2>
      <p className='text-center text-md text-description dark:text-subtitle font-rubik-regular mt-2'>
        {t('contact.subtitle')}
      </p>
      <section className='mt-12'>
        <div className='flex flex-row'>
          <div className='pt-1'>
            <img src={EmailIcon} alt='Email icon' width='50px' height='50px' />
          </div>
          <div className='flex flex-col text-left px-4'>
            <h2 className='text-3xl text-title dark:text-lightMode font-rubik-regular'>
              Email
            </h2>
            <span className='text-sm text-description font-rubik-light'>
              fierrogabriel13@gmail.com
            </span>
          </div>
        </div>
        <Form />
      </section>
    </section>
  );
}
