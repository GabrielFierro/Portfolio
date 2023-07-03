import ProfilePicture from '../../assets/images/profile-picture.webp';
import GithubIcon from '../../assets/icons/github-alt.svg';
import LinkedInIcon from '../../assets/icons/linkedin-alt.svg';
import ArrowAlt from '../../assets/icons/dark-mode/arrow-alt.svg';

export default function Header() {
  return (
    <main className='mt-8 md:mt-4 lg:mt-0 py-8 h-screen xs:px-28 sm:px-0 lg:px-32 flex md:items-center'>
      <section className='flex flex-col lg:h-4/6 sm:justify-center h-auto'>
        <div className='flex flex-row flex-wrap md:flex-nowrap justify-evenly md:justify-center'>
          <ul className=' flex flex-col basis-32 justify-center items-center pl-16'>
            <li className='flex my-2 cursor-pointer'>
              <a
                href='https://github.com/GabrielFierro/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src={GithubIcon}
                  alt='Github icon'
                  width={('24px', '32px')}
                  height={('24px', '32px')}
                />
              </a>
            </li>
            <a
              href='https://www.linkedin.com/in/gabriel-fierro-2020/'
              target='_blank'
              rel='noreferrer'
            >
              <li className='flex my-2 cursor-pointer'>
                <img
                  src={LinkedInIcon}
                  alt='Linkedin icon'
                  width={('24px', '32px')}
                  height={('24px', '32px')}
                />
              </li>
            </a>
          </ul>
          <li className='flex lg:justify-center flex-1 order-1 md:order-3 md:items-center'>
            <img
              className='w-72 md:w-64 lg:w-72 xl:w-72 md:h-56 lg:h-58 xl:h-72 -mt-0 md:mt-4 lg:-ml-12'
              src={ProfilePicture}
              alt='Profile picture'
              width='250px'
              height='250px'
            />
          </li>
          <section className='flex flex-col basis-full md:basis-7/12 order-2 md:order-1 text-left w-auto mt-0 md:mt-12 justify-center md:items-stretch p-8'>
            <h1 className='text-title text-2xl lg:text-5xl font-bold pb-1'>
              Hi, I&apos;m Gabriel Fierro
            </h1>
            <h3 className='text-description text-lg font-semibold pb-3'>
              Frontend Developer
            </h3>
            <p className='text-description text-md font-normal pb-4'>
              Specialized in CSS, Javascript, and React js based in Argentina.
              With experience producing quality work.
            </p>
            <button className='bg-accent text-lightMode w-36 lg:w-40 font-normal flex space-x-2 items-center lg:justify-center p-3 lg:p-4 rounded'>
              <p>Contact Me</p>
              <img
                className='rotate-90'
                src={ArrowAlt}
                alt='Arrow right'
                width='24px'
                height='24px'
              />
            </button>
          </section>
        </div>
      </section>
    </main>
  );
}
