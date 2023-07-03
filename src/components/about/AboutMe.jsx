import Technology from './Technology';
import { data } from './data';
import DownloadIcon from '../../assets/icons/download.svg';

export default function AboutMe() {
  const technologies = data.map((tech) => {
    return (
      <Technology
        key={tech.id}
        src={tech.src}
        alt={tech.alt}
        name={tech.name}
      ></Technology>
    );
  });
  return (
    <section className='h-auto mt-12'>
      <article className='h-full flex flex-col justify-evenly'>
        <h2 className='text-3xl text-title font-semibold pb-4'>About Me</h2>
        <p className='text-md text-description font-normal text-left py-4'>
          Enthusiastic, responsible and self-taught web developer who wants to
          learn web technologies and grow up professionally. I&apos;ve knowledge
          in the following technologies.
        </p>
        <ul>
          {technologies}
          <button className='bg-accent text-lightMode font-light flex space-x-2 items-center p-3 rounded mt-8'>
            <p>Download CV</p>
            <img
              className='rotate-0'
              src={DownloadIcon}
              alt='Arrow right'
              width='24px'
              height='24px'
            />
          </button>
        </ul>
      </article>
    </section>
  );
}
