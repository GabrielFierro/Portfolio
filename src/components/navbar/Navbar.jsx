import { useState, useEffect } from 'react';
import MoonIcon from '../../assets/icons/moon.svg';
import SunIcon from '../../assets/icons/sun.svg';
import Hamburger from '../../assets/icons/bars.svg';
import Close from '../../assets/icons/close.svg';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

import './Navbar.css';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [iconSelect, iconSetSelect] = useState(false);
  const [theme, setTheme] = useState('light');
  const options = [
    { value: 'en', text: 'EN' },
    { value: 'es', text: 'ES' }
  ];
  const [language, setLanguage] = useState(options[0].value);
  const [t, i18n] = useTranslation('global');

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

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
    if (language === 'en') {
      i18n.changeLanguage('es');
    } else {
      i18n.changeLanguage('en');
    }
  };

  return (
    <div className='bg-lightMode dark:bg-darkMode fixed drop-shadow-sm dark:drop-shadow-md h-24 w-full top-0 left-0 p-4 z-10 dark:z-10'>
      <div className='h-full'>
        <div className='flex flex-row justify-around items-center max-w-screen-xl m-auto h-full py-0 px-4'>
          <h2 className='text-title dark:text-lightMode text-xl lg:text-2xl font-bold'>
            Gabriel
          </h2>
          <ul
            className={
              click
                ? 'nav-menu active dark:bg-darkMode dark:text-lightMode'
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
                {t('navbar.about')}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                href='#projects'
                spy={true}
                to='projects'
                smooth={true}
                offset={-60}
                duration={900}
                onClick={closeMenu}
              >
                {t('navbar.projects')}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                href='#contact'
                spy={true}
                to='contact'
                smooth={true}
                offset={-50}
                duration={900}
                onClick={closeMenu}
              >
                {t('navbar.contact')}
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
          <div>
            <select
              id='language-select'
              name='language-select'
              className='text-title dark:text-lightMode bg-lightMode dark:bg-darkMode'
              value={language}
              onChange={handleChangeLanguage}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
          <div className='cursor-pointer hamburger' onClick={handleClick}>
            {click ? (
              <img src={Close} width='24px' height='24px' alt='' />
            ) : (
              <img src={Hamburger} width='24px' height='24px' alt='' />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
