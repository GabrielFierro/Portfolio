import ArrowAlt from '../../assets/icons/dark-mode/arrow-alt.svg';
import LinkIcon from '../../assets/icons/link.svg';
import { data } from './cardData';

export default function Card() {
  const card = data.map((data) => {
    return (
      <div
        className='shadow-md shadow-lightMode border border-title rounded-lg max-w-sm mt-12'
        key={data.id}
      >
        <img
          className='rounded-t-lg cursor-pointer'
          src={data.src}
          alt={data.alt}
        />
        <div className='p-4'>
          <h2 className='text-title font-semibold text-2xl py-4'>
            {data.title}
          </h2>
          <p className='font-normal text-description'>{data.description}</p>
          <p>Technologies used</p>
          <ul className='flex flex-row justify-between mt-6'>
            {data.stack.map((text) => {
              return <li key={text}>{text}</li>;
            })}
          </ul>
          <div className='flex flex-row space-x-2 justify-center'>
            <button className='bg-accent text-lightMode font-light flex space-x-2 items-center p-3 rounded mt-8'>
              <p className='uppercase font-normal'>Demo</p>
              <img
                className='rotate-90 text-lightMode'
                src={ArrowAlt}
                alt='Arrow right'
                width='24px'
                height='24px'
              />
            </button>
            <button className='bg-accent text-lightMode font-light flex space-x-2 items-center p-3 rounded mt-8'>
              <p className='uppercase font-normal'>Repo</p>
              <img
                className='rotate-0'
                src={LinkIcon}
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
  return <div className='flex flex-col items-center'>{card}</div>;
}
