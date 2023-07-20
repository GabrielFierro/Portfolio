/* eslint-disable no-unused-vars */
import ArrowAlt from '../../assets/icons/dark-mode/arrow-alt.svg';
import GithubIcon from '../../assets/icons/github-alt.svg';
import { data } from './cardData';
import { useTranslation } from 'react-i18next';

export default function Card() {
  const [t, i18n] = useTranslation('global');

  const card = data.map((data) => {
    return (
      <div
        key={data.id}
        className='bg-cardLight dark:bg-card drop-shadow-md dark:drop-shadow-lg z-0 dark:z-0 rounded-lg max-w-sm md:max-w-screen-lg mt-12 md:flex'
      >
        <img
          loading='lazy'
          decoding='async'
          className='rounded-t-lg md:rounded-none xl:rounded-md base:h-56 sm:h-72 md:h-full'
          src={data.src}
          alt={t(`projects.cardAlt.${data.id}`)}
          width='400px'
          height='550px'
        />
        <div className='p-4'>
          <h2 className='text-title dark:text-lightMode font-bold text-xl lg:text-2xl py-2'>
            {t(`projects.cardTitle.${data.id}`)}
          </h2>
          <p className='font-normal text-description dark:text-subtitle text-md lg:text-xl px-2 lg:px-8'>
            {t(`projects.cardDescription.${data.id}`)}
          </p>
          <div className='flex flex-col justify-between mt-6'>
            <p className='font-semibold text-title dark:text-lightMode text-md lg:text-lg'>
              {t('projects.cardDeveloped')}
            </p>
            <ul className='flex flex-row flex-wrap justify-around md:justify-evenly pt-4 base:mx-6 md:mx-0 font-normal text-title dark:text-subtitle text-md lg:text-lg space-x-2'>
              {data.stack.map((text) => {
                return <li key={text}>{text}</li>;
              })}
            </ul>
            <div className='flex flex-row space-x-2 justify-center'>
              <a href={data.code} target='_blank' rel='noreferrer'>
                <button className='bg-lightMode hover:bg-lightModeHover dark:bg-darkMode dark:hover:bg-card text-accent border font-light flex space-x-2 items-center p-3 rounded mt-8'>
                  <p className='uppercase font-normal'>
                    {t('projects.cardCode')}
                  </p>
                  <img
                    loading='lazy'
                    src={GithubIcon}
                    alt='Arrow right'
                    width='24px'
                    height='24px'
                  />
                </button>
              </a>
              <a href={data.demo} target='_blank' rel='noreferrer'>
                <button className='bg-accent hover:bg-accentHover text-lightMode font-light flex space-x-2 items-center p-3 rounded mt-8'>
                  <p className='uppercase font-normal'>Demo</p>
                  <img
                    loading='lazy'
                    src={ArrowAlt}
                    alt='Arrow right'
                    width='24px'
                    height='24px'
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div className='flex flex-col items-center'>{card}</div>;
}
