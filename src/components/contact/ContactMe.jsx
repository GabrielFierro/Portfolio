/* eslint-disable no-unused-vars */
import { lazy } from 'react';
// import Form from './Form';
const Form = lazy(() => import('./Form'));
import { useTranslation } from 'react-i18next';

export default function ContactMe() {
  const [t, i18n] = useTranslation('global');
  return (
    <section
      className='bg-lightMode dark:bg-darkMode pt-9 lg:pt-16 px-8 pb-12 md:-mt-2'
      id='contact'
    >
      <h2 className='text-center text-3xl text-title dark:text-lightMode font-semibold'>
        {t('contact.title')}
      </h2>
      <p className='text-center text-md text-description dark:text-subtitle font-normal mt-2'>
        {t('contact.subtitle')}
      </p>
      <Form />
    </section>
  );
}
