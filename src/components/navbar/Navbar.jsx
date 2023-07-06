import { useState } from 'react';
// import AngleIcon from '../../assets/icons/angle-down.svg';
// import MoonIcon from '../../assets/icons/moon.svg';
import Hamburger from '../../assets/icons/bars.svg';
import Close from '../../assets/icons/close.svg';
import { Link } from 'react-scroll';

import './Navbar.css';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className='bg-lightMode fixed drop-shadow-sm h-24 w-full top-0 left-0 p-4'>
      <div className='h-full'>
        <ul className='flex flex-row justify-between items-center max-w-screen-xl	m-auto h-full py-0 px-4'>
          <li>
            <h2 className='text-title text-xl lg:text-2xl font-bold'>
              Gabriel
            </h2>
          </li>
          <div className='cursor-pointer hamburger' onClick={handleClick}>
            {click ? (
              <img src={Close} width='24px' height='24px' alt='' />
            ) : (
              <img src={Hamburger} width='24px' height='24px' alt='' />
            )}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                href='#home'
                spy={true}
                to='home'
                smooth={true}
                offset={0}
                duration={500}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                href='#about'
                spy={true}
                to='about'
                smooth={true}
                offset={-110}
                duration={500}
                onClick={closeMenu}
              >
                About Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                href='#projects'
                spy={true}
                to='projects'
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                href='#contact'
                spy={true}
                to='contact'
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}
