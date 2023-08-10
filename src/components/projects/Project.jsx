/* eslint-disable no-unused-vars */
import { lazy } from 'react';
const Card = lazy(() => import('./Card'));
import { useTranslation } from 'react-i18next';

export default function Project() {
  const [t, i18n] = useTranslation('global');

  return (
    <section
      className='pt-24 pb-12 px-8 bg-lightMode dark:bg-darkMode'
      id='projects'
    >
      <article className='h-full flex flex-col text-center'>
        <h2 className='text-3xl lg:text-5xl dark:text-lightMode font-rubik-bold'>
          {t('projects.title')}
        </h2>
        <p className='text-lg text-violet dark:text-pink font-rubik-semibold mt-2 mb-12'>
          {t('projects.subtitle')}
        </p>
        <Card />
      </article>
    </section>
  );
}
