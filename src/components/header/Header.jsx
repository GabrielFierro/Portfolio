/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import ProfilePicture from '../../assets/images/profile-picture.webp';
import GithubIcon from '../../assets/icons/github-alt.svg';
import LinkedInIcon from '../../assets/icons/linkedin-alt.svg';
import ArrowAlt from '../../assets/icons/dark-mode/arrow-alt.svg';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [t, i18n] = useTranslation('global');

  useEffect(() => {
    // Preload the profile picture image
    const img = new Image();
    img.src = ProfilePicture;
  }, []);

  return (
    <main
      className='bg-lightMode dark:bg-darkMode mt-4 pt-16 lg:mt-16 h-auto xs:px-28 sm:px-0 lg:px-32 flex md:items-center justify-center pb-12'
      id='home'
    >
      <section className='flex flex-col lg:h-4/6 sm:justify-center h-auto'>
        <article className='flex flex-row flex-wrap justify-evenly md:justify-center'>
          <div className='flex justify-center flex-1 order-1 md:order-3 md:items-center basis-1/3'>
            <img
              className='w-48 lg:w-56 h-48 lg:h-56 my-6 rounded-full'
              src={ProfilePicture}
              alt='Profile picture'
              width='150px'
              height='150px'
            />
          </div>
          <section className='bg-lightMode dark:bg-darkMode flex flex-col basis-full md:basis-7/12 order-2 md:order-1 text-left w-auto mt-0 md:mt-20 justify-center md:items-stretch px-8'>
            <h1 className='text-title dark:text-lightMode text-2xl lg:text-5xl font-rubik-bold pb-1'>
              {t('header.title')}
            </h1>
            <h2 className='text-description dark:text-lightMode text-lg font-rubik-semibold pb-3'>
              {t('header.subtitle')}
            </h2>
            <p className='text-description dark:text-subtitle text-md font-rubik-regular pb-4'>
              {t('header.description')}
            </p>
            <ul className='flex flex-row justify-start items-center py-4 space-x-2 order-1'>
              <li className='flex my-2 cursor-pointer'>
                <a
                  href='https://github.com/GabrielFierro/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src={GithubIcon}
                    alt='Github icon'
                    width={('24px', '32px')}
                    height={('24px', '32px')}
                  />
                </a>
              </li>
              <li className='flex my-2 cursor-pointer'>
                <a
                  href='https://www.linkedin.com/in/gabriel-fierro-2020/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src={LinkedInIcon}
                    alt='Linkedin icon'
                    width={('24px', '32px')}
                    height={('24px', '32px')}
                  />
                </a>
              </li>
            </ul>
          </section>
        </article>
      </section>
    </main>
  );
}
