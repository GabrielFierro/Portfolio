import { useState, useEffect } from 'react';
// import AngleIcon from '../../assets/icons/angle-down.svg';
import MoonIcon from '../../assets/icons/moon.svg';
import SunIcon from '../../assets/icons/sun.svg';
import Hamburger from '../../assets/icons/bars.svg';
import Close from '../../assets/icons/close.svg';
import { Link } from 'react-scroll';

import './Navbar.css';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [iconSelect, iconSetSelect] = useState(false);
  const [theme, setTheme] = useState('light');

  const handleClick = () => setClick(!click); // Manage the hamburger menu when it's clicked

  const closeMenu = () => setClick(false); // Close the menu when it's clicked the close icon

  const handleIcon = () => iconSetSelect(!iconSelect); // Manage the sun and moon icons clicked

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className='bg-lightMode dark:bg-darkMode fixed drop-shadow-sm dark:drop-shadow-md h-24 w-full top-0 left-0 p-4 z-10 dark:z-10'>
      <div className='h-full'>
        <ul className='flex flex-row justify-around items-center max-w-screen-xl	m-auto h-full py-0 px-4'>
          <li>
            <h2 className='text-title dark:text-lightMode text-xl lg:text-2xl font-bold'>
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
          <ul
            className={
              click
                ? 'nav-menu active'
                : 'nav-menu text-title dark:text-lightMode'
            }
          >
            <li className='nav-item'>
              <Link
                href='#home'
                spy={true}
                to='home'
                smooth={true}
                offset={-500}
                duration={900}
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
                offset={-80}
                duration={900}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                href='#projects'
                spy={true}
                to='projects'
                smooth={true}
                offset={-70}
                duration={900}
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
                offset={-90}
                duration={900}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div
            className='cursor-pointer'
            onClick={() => {
              handleIcon();
              handleThemeSwitch();
            }}
          >
            {iconSelect ? (
              <img
                className='transition ease-in-out hover:scale-125 delay-150 duration-500'
                src={SunIcon}
                width='24px'
                height='24px'
                alt=''
              />
            ) : (
              <img
                className='transition ease-in-out hover:scale-125 delay-150 duration-500'
                src={MoonIcon}
                width='24px'
                height='24px'
                alt=''
              />
            )}
          </div>
        </ul>
      </div>
    </div>
  );
}
