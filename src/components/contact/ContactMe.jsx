import Form from './Form';

export default function ContactMe() {
  return (
    <section
      className='bg-lightMode dark:bg-darkMode pt-9 lg:pt-16 px-8 pb-12'
      id='contact'
    >
      <h2 className='text-center text-3xl text-title dark:text-lightMode font-semibold'>
        Contact Me
      </h2>
      <p className='text-center text-md text-description dark:text-gray font-normal mt-2'>
        Get in touch
      </p>
      <Form />
    </section>
  );
}
