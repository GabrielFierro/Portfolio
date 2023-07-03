import Card from './Card';

export default function Project() {
  return (
    <section className='mt-12 p-8'>
      <article className='h-full flex flex-col text-center'>
        <h2 className='text-3xl text-title font-semibold'>Projects</h2>
        <p className='text-md text-description font-normal mt-2'>
          Most popular work
        </p>
        <Card />
      </article>
    </section>
  );
}
