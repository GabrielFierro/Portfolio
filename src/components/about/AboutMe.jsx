/* eslint-disable no-unused-vars */
import Technology from './Technology';
import DownloadIcon from '../../assets/icons/download.svg';
import PortfolioScreen from '../../assets/images/portfolio-screen.png';
import { useTranslation } from 'react-i18next';

export default function AboutMe() {
  const [t, i18n] = useTranslation('global');

  const handleDownload = () => {
    const url =
      'https://drive.google.com/file/d/1J2P_sPeny-OSaVB7M_kXZhbwTLwAvudL/view?usp=sharing';
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <section
      className='h-auto mt-0 md:-mt-2 pt-12 md:pt-24 px-8 xs:px-28 lg:px-32 pb-16 bg-lightMode dark:bg-darkMode'
      id='about'
    >
      <article className='h-full flex flex-col justify-between'>
        <div className='h-full flex flex-col justify-evenly'>
          <h2 className='text-3xl lg:text-5xl text-title dark:text-lightMode font-bold text-center'>
            {t('about.title')}
          </h2>
          <p className='text-md text-description dark:text-subtitle font-normal text-center mb-4 mt-2'>
            {t('about.subtitle')}
          </p>
          <div className='flex flex-col md:flex-row mt-6'>
            <div className='w-full h-3/4 md:h-72 mr-0 md:mr-12'>
              <img
                className='w-auto h-3/4 md:h-4/5 lg:h-full rounded-md'
                src={PortfolioScreen}
                alt=''
                width='500px'
                height='300px'
              />
            </div>
            <div className='flex flex-col mt-8 md:mt-0'>
              <p className='text-md text-description dark:text-lightMode font-normal text-left pb-6'>
                {t('about.description')}
              </p>
              <ul className='flex flex-col md:flex-row flex-wrap'>
                <Technology />
              </ul>

              <button
                onClick={handleDownload}
                className='bg-accent hover:bg-accentHover text-lightMode font-light flex space-x-2 items-center p-3 rounded mt-8 w-40'
              >
                <span>{t('about.button')}</span>
                <img
                  src={DownloadIcon}
                  alt='Arrow right'
                  width='24px'
                  height='24px'
                />
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
