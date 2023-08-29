/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { data } from './cardData';
import ArrowAlt from '../../assets/icons/arrow-alt.svg';
import GithubIcon from '../../assets/icons/github-alt.svg';

export default function Card() {
  const [t, i18n] = useTranslation('global');

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

  const [ref, isInView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.stop();
    }
  }, [controls, isInView]);

  const card = data.map((data) => {
    return (
      <motion.div
        key={data.id}
        ref={ref}
        variants={cardVariant}
        initial='hidden'
        whileInView='visible'
        animate={controls}
        className='dark:bg-darkMode z-0 dark:z-0 w-full h-full my-20 flex flex-col md:flex-row justify-evenly items-center text-center md:text-left'
      >
        <img
          loading='lazy'
          decoding='async'
          className={`rounded w-full md:w-3/5 h-80 md:h-96 max-w-lg shadow-[rgba(0,_0,_0,_0.2)_0px_30px_40px_-7px] md:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] md:dark:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ${
            data.id % 2 === 0 ? 'order-2' : 'order-1 md:order-2'
          }`}
          src={data.src}
          alt={t(`projects.cardAlt.${data.id}`)}
          width='450px'
          height='480px'
        />
        <div
          className={`p-4 bg-lightMode dark:bg-darkMode w-full md:w-1/2 ${
            data.id % 2 === 1 ? 'order-1 md:order-2' : 'order-2 md:order-1'
          }`}
        >
          <h2 className='text-black dark:text-lightMode font-rubik-bold text-4xl py-2'>
            {t(`projects.cardTitle.${data.id}`)}
          </h2>
          <p className='bg-lightMode dark:bg-darkMode font-rubik-regular text-black dark:text-subtitle text-md lg:text-lg px-2 lg:px-0 lg:mr-12 leading-relaxed'>
            {t(`projects.cardDescription.${data.id}`)}
          </p>
          <div className='flex flex-col mt-12'>
            <ul className='flex flex-row items-center md:items-start justify-between pt-4 font-normal text-title dark:text-subtitle text-md lg:text-lg w-full md:w-3/4'>
              {data.stack.map((text) => {
                return <img key={text} src={text} alt={text} />;
              })}
            </ul>
            <div className='flex flex-row space-x-4 md:space-x-6 justify-center md:justify-start mt-6'>
              <a href={data.code} target='_blank' rel='noreferrer'>
                <button className='bg-lightMode hover:bg-lightModeHover dark:bg-cardLight dark:hover:bg-grey text-black hover:scale-105 flex space-x-3 items-center p-3 rounded mt-8'>
                  <p className='uppercase font-rubik-regular'>
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
                <button className='bg-lightMode hover:bg-lightModeHover text-black shadow-[-4px_4px_0px_#ECA0FF] hover:scale-105 flex space-x-3 items-center p-3 rounded mt-8'>
                  <p className='uppercase font-rubik-regular'>Demo</p>
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
      </motion.div>
    );
  });
  return <div className='flex flex-col items-center'>{card}</div>;
}
