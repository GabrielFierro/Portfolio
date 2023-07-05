import Form from './Form';

export default function ContactMe() {
  return (
    <section className='mt-9 p-8' id='contact'>
      <h2 className='text-center text-3xl text-title font-semibold'>
        Contact Me
      </h2>
      <p className='text-center text-md text-description font-normal mt-2'>
        Get in touch
      </p>
      <Form />
    </section>
  );
}
