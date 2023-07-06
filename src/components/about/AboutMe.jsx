import Technology from './Technology';
import { data } from './data';
import DownloadIcon from '../../assets/icons/download.svg';
import PortfolioScreen from '../../assets/images/portfolio-screen.png';

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
    <section className='h-auto mt-12 p-8 xs:px-28 lg:px-32 mb-16' id='about'>
      <article className='h-full flex flex-col justify-between'>
        <div className='h-full flex flex-col justify-evenly'>
          <h2 className='text-3xl lg:text-5xl text-title font-bold text-center'>
            About Me
          </h2>
          <p className='text-md text-description font-normal text-center mb-4 mt-2'>
            My Introduction
          </p>
          <div className='flex flex-col md:flex-row mt-6'>
            <div className='w-full h-3/4 md:h-72 mr-0 md:mr-12'>
              <img
                className='w-auto h-3/4 md:h-4/5 lg:h-full rounded-md'
                src={PortfolioScreen}
                alt=''
                width='500px'
                height='300px'
              />
            </div>
            <div className='flex flex-col mt-8 md:mt-0'>
              <p className='text-md text-description font-normal text-left pb-6'>
                Enthusiastic, responsible and self-taught web developer who
                wants to learn web technologies and grow up professionally.
                I&apos;ve knowledge in the following technologies.
              </p>
              <ul className='flex flex-col md:flex-row flex-wrap'>
                {technologies}
              </ul>
              <button className='bg-accent text-lightMode font-light flex space-x-2 items-center p-3 rounded mt-8 w-40'>
                <p>Download CV</p>
                <img
                  className='rotate-0'
                  src={DownloadIcon}
                  alt='Arrow right'
                  width='24px'
                  height='24px'
                />
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
