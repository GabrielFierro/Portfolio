import ProfilePicture from '../../assets/images/profile-picture.webp';
import GithubIcon from '../../assets/icons/github-alt.svg';
import LinkedInIcon from '../../assets/icons/linkedin-alt.svg';

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
        <h1>Hi, I&apos;m Gabriel Fierro</h1>
        <h3>Frontend Developer</h3>
        <p>Specialized in CSS, Javascript, and React js based in Argentina</p>
        <button>Contact Me</button>
      </section>
    </main>
  );
}
