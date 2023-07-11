import Form from './Form';
import { useTranslation } from 'react-i18next';

export default function ContactMe() {
  const [t, i18n] = useTranslation('global');
  return (
    <section
      className='bg-lightMode dark:bg-darkMode pt-9 lg:pt-16 px-8 pb-12'
      id='contact'
    >
      <h2 className='text-center text-3xl text-title dark:text-lightMode font-semibold'>
        {t('projects.title')}
      </h2>
      <p className='text-center text-md text-description dark:text-gray font-normal mt-2'>
        {t('projects.subtitle')}
      </p>
      <Form />
    </section>
  );
}
