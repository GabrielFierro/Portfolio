import ProfilePicture from '../../assets/images/profile-picture.webp';
import GithubIcon from '../../assets/icons/github-alt.svg';
import LinkedInIcon from '../../assets/icons/linkedin-alt.svg';
import ArrowAlt from '../../assets/icons/dark-mode/arrow-alt.svg';

export default function Header() {
  return (
    <main className='bg-lightMode mt-10'>
      <section className='flex flex-col'>
        <ul className='flex flex-row justify-evenly'>
          <ul className='flex flex-col justify-center'>
            <li className='my-2'>
              <img
                src={GithubIcon}
                alt='Github icon'
                width='24px'
                height='24px'
              />
            </li>
            <li className='my-2'>
              <img
                src={LinkedInIcon}
                alt='Linkedin icon'
                width='24px'
                height='24px'
              />
            </li>
          </ul>
          <li>
            <img
              src={ProfilePicture}
              alt='Profile picture'
              width='250px'
              height='250px'
            />
          </li>
        </ul>
        <section className='text-left w-auto h-52 mt-4'>
          <h1 className='text-title text-2xl font-bold pb-1'>
            Hi, I&apos;m Gabriel Fierro
          </h1>
          <h3 className='text-description text-lg font-normal pb-3'>
            Frontend Developer
          </h3>
          <p className='text-description text-base font-light pb-4'>
            Specialized in CSS, Javascript, and React js based in Argentina.
          </p>
          <button className='bg-accent text-lightMode font-light flex space-x-2 items-center p-3 rounded'>
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
      </section>
    </main>
  );
}
