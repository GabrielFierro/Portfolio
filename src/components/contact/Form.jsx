import EmailIcon from '../../assets/icons/mail.svg';
import ArrowAlt from '../../assets/icons/dark-mode/arrow-alt.svg';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Form() {
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
      <form className='mt-16' ref={form} onSubmit={sendEmail}>
        <label className='after:content-["*"] after:ml-0.5 after:text-red'>
          Name
        </label>
        <input
          type='text'
          id='name'
          name='user_name'
          placeholder='Name'
          className='bg-accent bg-opacity-20 dark:bg-accentDark placeholder-description text-sm font-light py-6 px-5 mb-6 rounded-md w-full'
        ></input>
        <label className='after:content-["*"] after:ml-0.5 after:text-red'>
          Email
        </label>
        <input
          type='text'
          id='email'
          name='user_email'
          placeholder='Email'
          className='peer bg-accent bg-opacity-20 dark:bg-accentDark placeholder-description text-sm font-light py-6 px-5 mb-6 rounded-md w-full'
        ></input>
        <p className='mt-2 invisible peer-invalid:visible text-pink-600 text-sm'>
          Please provide a valid email address.
        </p>
        <label className='after:content-["*"] after:ml-0.5 after:text-red'>
          Message
        </label>
        <textarea
          type='message'
          id='message'
          name='message'
          placeholder='Message'
          className='bg-accent bg-opacity-20 dark:bg-accentDark placeholder-description text-sm font-light py-12 px-5 mb-6 rounded-md w-full'
        />
        <button
          value='Send'
          className='bg-accent hover:bg-accentHover text-lightMode font-light flex space-x-2 items-center p-3 rounded mt-8'
        >
          <p>Send Message</p>
          <img src={ArrowAlt} alt='Arrow right' width='24px' height='24px' />
        </button>
      </form>
    </section>
  );
}
