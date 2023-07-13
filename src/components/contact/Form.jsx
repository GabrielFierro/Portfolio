import EmailIcon from '../../assets/icons/mail.svg';
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
    <section className='mt-12'>
      <div className='flex flex-row'>
        <div className='pt-1'>
          <img src={EmailIcon} alt='Email icon' width='50px' height='50px' />
        </div>
        <div className='flex flex-col text-left px-4'>
          <h2 className='text-3xl text-title dark:text-lightMode font-normal'>
            Email
          </h2>
          <span className='text-sm text-gray font-light'>
            fierrogabriel13@gmail.com
          </span>
        </div>
      </div>
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
          placeholder='Name'
          className='bg-accent bg-opacity-20 dark:bg-accentDark placeholder-description text-sm font-light py-6 px-5 mb-6 rounded-md w-full'
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
          pattern='.+@globex\.com'
          size='30'
          required
          autoComplete='off'
          placeholder='Email'
          className='peer bg-accent bg-opacity-20 dark:bg-accentDark placeholder-description text-sm font-light py-6 px-5 mb-2 rounded-md w-full'
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
          placeholder='Message'
          autoComplete='off'
          className='bg-accent bg-opacity-20 dark:bg-accentDark placeholder-description text-sm font-light py-12 px-5 mb-6 rounded-md w-full'
        />
        <button
          id='button'
          name='button'
          value='Send'
          className='bg-accent hover:bg-accentHover text-lightMode font-light flex space-x-2 items-center p-3 rounded mt-8'
        >
          <p>{t('contact.button')}</p>
          <img src={ArrowAlt} alt='Arrow right' width='24px' height='24px' />
        </button>
      </form>
    </section>
  );
}
