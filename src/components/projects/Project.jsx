/* eslint-disable no-unused-vars */
import Card from './Card';
import { useTranslation } from 'react-i18next';

export default function Project() {
  const [t, i18n] = useTranslation('global');

  return (
    <section
      className='md:-mt-4 pt-16 px-8 bg-lightMode dark:bg-darkMode'
      id='projects'
    >
      <article className='h-full flex flex-col text-center'>
        <h2 className='text-3xl text-title dark:text-lightMode font-semibold'>
          {t('projects.title')}
        </h2>
        <p className='text-md text-description dark:text-subtitle font-normal mt-2'>
          {t('projects.subtitle')}
        </p>
        <Card />
      </article>
    </section>
  );
}
