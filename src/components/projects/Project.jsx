import Card from './Card';

export default function Project() {
  return (
    <section className='pt-16 px-8 bg-lightMode dark:bg-darkMode' id='projects'>
      <article className='h-full flex flex-col text-center'>
        <h2 className='text-3xl text-title dark:text-lightMode font-semibold'>
          Projects
        </h2>
        <p className='text-md text-description dark:text-gray font-normal mt-2'>
          Most popular work
        </p>
        <Card />
      </article>
    </section>
  );
}
