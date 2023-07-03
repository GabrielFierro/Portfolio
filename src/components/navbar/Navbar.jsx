import { useState } from 'react';
// import AngleIcon from '../../assets/icons/angle-down.svg';
// import MoonIcon from '../../assets/icons/moon.svg';
import Hamburger from '../../assets/icons/bars.svg';
import Close from '../../assets/icons/close.svg';

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
              <a href='/' onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a href='#about' onClick={closeMenu}>
                About Me
              </a>
            </li>
            <li className='nav-item'>
              <a href='#testimonials' onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li className='nav-item'>
              <a href='#demo' onClick={closeMenu}>
                Contact Me
              </a>
            </li>
          </ul>
          {/* <ul className='flex flex-row justify-evenly w-52'>
            <img
              className='cursor-pointer'
              src={MoonIcon}
              alt='moon icon'
              width='24px'
              height='24px'
            />
            <ul className='flex flex-row'>
              <li>EN</li>
              <img
                className='cursor-pointer'
                src={AngleIcon}
                alt='arrow down icon'
              />
            </ul>
            <img
              className='cursor-pointer'
              src={Hamburger}
              alt=''
              width='24px'
              height='24px'
            />
          </ul> */}
        </ul>
      </div>
    </div>
  );
}
