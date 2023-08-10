/* eslint-disable no-unused-vars */
import React, { useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Icons from './Icons';
import DownloadIcon from '../../assets/icons/download.svg';

export default function AboutMe() {
  const [t, i18n] = useTranslation('global');

  const handleDownload = React.useCallback(() => {
    const url =
      'https://drive.google.com/file/d/1J2P_sPeny-OSaVB7M_kXZhbwTLwAvudL/view?usp=sharing';
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  }, []);

  const aboutDescription = useMemo(() => t('about.description'), [t]);
  const aboutSubtitle = useMemo(() => t('about.subtitle'), [t]);
  const aboutTitle = useMemo(() => t('about.title'), [t]);
  const aboutButton = useMemo(() => t('about.button'), [t]);

  const [ref, isInView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.stop();
    }
  }, [controls, isInView]);
  const cardVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7 },
      ease: 'easeIn'
    },
    hidden: {
      opacity: 0,
      scale: 0,
      transition: { duration: 0.7 },
      ease: 'easeInOut'
    }
  };

  return (
    <motion.section
      ref={ref}
      variants={cardVariant}
      initial='hidden'
      whileInView='visible'
      animate={controls}
      className='h-auto mt-0 md:-mt-2 pt-12 md:pt-32 px-8 xs:px-28 lg:px-32 pb-28 bg-lightMode dark:bg-darkMode selection:text-accentText relative'
      id='about'
    >
      <article className='h-full flex flex-col justify-between relative z-0'>
        <div className='h-full flex flex-col justify-evenly'>
          <h2 className='text-3xl lg:text-5xl text-black dark:text-lightMode font-rubik-bold text-center'>
            {aboutTitle}
          </h2>
          <p className='text-lg text-greenEmerald dark:text-yellow font-rubik-semibold text-center mb-4 mt-2'>
            {aboutSubtitle}
          </p>
          <div className='flex flex-col md:flex-row mt-6'>
            <div className='flex flex-col mt-8 md:mt-0'>
              <p className='text-lg leading-loose text-black dark:text-subtitle font-rubik-regular text-left pb-6'>
                {aboutDescription}
              </p>
            </div>
          </div>
        </div>
      </article>
      <Icons />
      <div className='w-full flex justify-center'>
        <button
          onClick={handleDownload}
          className='bg-lightMode hover:bg-lightModeHover dark:bg-lightMode dark:hover:bg-grey text-black font-rubik-semibold flex space-x-2 items-center p-3 rounded mt-8 max-w-lg shadow-[4px_4px_0px_#84FFC9] dark:shadow-[4px_4px_0px_#FFE554] hover:scale-105'
        >
          <span>{aboutButton}</span>
          <img
            src={DownloadIcon}
            alt='Arrow right'
            width='24px'
            height='24px'
          />
        </button>
      </div>
    </motion.section>
  );
}
