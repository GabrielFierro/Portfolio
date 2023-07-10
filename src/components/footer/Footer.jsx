import { Link } from 'react-scroll';
export default function Footer() {
  return (
    <div className='bg-accent h-72 w-full flex flex-col justify-between text-lightMode text-left p-8'>
      <div>
        <h2 className='font-bold text-3xl'>Gabriel</h2>
        <p className='font-normal text-md tracking-normal'>
          Frontend Developer
        </p>
      </div>
      <div>
        <ul>
          <Link
            href='#home'
            spy={true}
            to='home'
            smooth={true}
            offset={-60}
            duration={900}
          >
            <li className='pb-1'>Home</li>
          </Link>
          <Link
            href='#about'
            spy={true}
            to='about'
            smooth={true}
            offset={-60}
            duration={900}
          >
            <li className='py-1'>About Me</li>
          </Link>
          <Link
            href='#projects'
            spy={true}
            to='projects'
            smooth={true}
            offset={-60}
            duration={900}
          >
            <li className='py-1'>Projects</li>
          </Link>
          <Link
            href='#contact'
            spy={true}
            to='contact'
            smooth={true}
            offset={-60}
            duration={900}
          >
            <li className='pt-1'>Contact Me</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
