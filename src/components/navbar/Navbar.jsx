import AngleIcon from '../../assets/icons/angle-down.svg';
import MoonIcon from '../../assets/icons/moon.svg';
import Hamburger from '../../assets/icons/bars.svg';

export default function Navbar() {
  return (
    <div className='bg-lightMode fixed h-24 w-full top-0 left-0'>
      <div className='h-full'>
        <ul className='flex flex-row justify-between items-center max-w-screen-xl	m-auto h-full py-0 px-4'>
          <li>Gabriel</li>
          <ul className='flex flex-row justify-evenly w-52'>
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
          </ul>
        </ul>
      </div>
    </div>
  );
}
