/* eslint-disable no-unused-vars */
import ArrowAlt from '../../assets/icons/dark-mode/arrow-alt.svg';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

export default function Form() {
  const [t, i18n] = useTranslation('global');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_s5ft84n',
        'template_8so7uho',
        form.current,
        'AQaYlrka5UQyC5EyC'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      className='mt-16 text-title dark:text-lightMode'
      ref={form}
      onSubmit={sendEmail}
    >
      <label
        className='after:content-["*"] after:ml-0.5 after:text-red'
        htmlFor='name'
      >
        {t('contact.name')}
      </label>
      <input
        type='text'
        id='name'
        name='user_name'
        minLength='3'
        maxLength='20'
        size='30'
        required
        autoComplete='given-name'
        placeholder={t('contact.name')}
        className='bg-accent bg-opacity-20 dark:bg-accentDark placeholder:text-description placeholder:font-rubik-regular text-sm font-rubik-light py-6 px-5 mb-6 rounded-md w-full'
      ></input>
      <label
        className='after:content-["*"] after:ml-0.5 after:text-red'
        htmlFor='email'
      >
        {t('contact.email')}
      </label>
      <input
        type='email'
        id='email'
        name='user_email'
        pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
        required
        autoComplete='off'
        placeholder='Email'
        className='peer bg-accent bg-opacity-20 dark:bg-accentDark  placeholder:text-description placeholder:font-rubik-regular text-sm font-rubik-light py-6 px-5 mb-6 rounded-md w-full'
      ></input>
      <label
        className='after:content-["*"] after:ml-0.5 after:text-red'
        htmlFor='message'
      >
        {t('contact.message')}
      </label>
      <textarea
        type='message'
        id='message'
        name='message'
        required
        placeholder={t('contact.message')}
        autoComplete='off'
        className='bg-accent bg-opacity-20 dark:bg-accentDark  placeholder:text-description placeholder:font-rubik-regular text-sm font-rubik-light py-12 px-5 mb-6 rounded-md w-full'
      />
      <button
        id='button'
        name='button'
        value='Send'
        className='bg-accent hover:bg-accentHover text-lightMode font-rubik-light flex space-x-2 items-center p-3 rounded mt-8'
      >
        <p>{t('contact.button')}</p>
        <img src={ArrowAlt} alt='Arrow right' width='24px' height='24px' />
      </button>
    </form>
  );
}
