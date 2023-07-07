import ArrowAlt from '../../assets/icons/dark-mode/arrow-alt.svg';
import LinkIcon from '../../assets/icons/dark-mode/link.svg';
import { data } from './cardData';

export default function Card() {
  const card = data.map((data) => {
    return (
      <div
        className='shadow-md shadow-lightMode border border-title rounded-lg max-w-sm md:max-w-screen-lg mt-12 md:flex'
        key={data.id}
      >
        <img
          className='rounded-t-lg md:rounded-none cursor-pointer h-72 md:h-full'
          src={data.src}
          alt={data.alt}
          width='400px'
          height='550px'
        />
        <div className='p-4'>
          <h2 className='text-title font-bold text-2xl py-2'>{data.title}</h2>
          <p className='font-normal text-description text-xl md:px-8'>
            {data.description}
          </p>
          <div className='flex flex-col justify-between mt-6'>
            <p className='font-semibold text-title text-lg'>Developed with</p>
            <ul className='flex flex-row flex-wrap justify-around md:justify-evenly pt-4 font-normal text-title text-sm md:text-lg'>
              {data.stack.map((text) => {
                return <li key={text}>{text}</li>;
              })}
            </ul>
          </div>
          <div className='flex flex-row space-x-2 justify-center'>
            <button className='bg-lightMode hover:bg-lightModeHover text-accent border font-light flex space-x-2 items-center p-3 rounded mt-8'>
              <p className='uppercase font-normal'>Repo</p>
              <img
                src={LinkIcon}
                alt='Arrow right'
                width='24px'
                height='24px'
              />
            </button>
            <button className='bg-accent hover:bg-accentHover text-lightMode font-light flex space-x-2 items-center p-3 rounded mt-8'>
              <p className='uppercase font-normal'>Demo</p>
              <img
                src={ArrowAlt}
                alt='Arrow right'
                width='24px'
                height='24px'
              />
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    // <div className='grid grid-cols-1 grid-rows-6 items-center'>{card}</div>
    <div className='flex flex-col items-center'>{card}</div>
  );
}
