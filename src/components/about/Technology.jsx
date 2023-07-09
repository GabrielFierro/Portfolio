/* eslint-disable react/prop-types */
export default function Technology({ src, alt, name }) {
  return (
    <li className='flex flex-row space-x-3 md:space-x-2 px-4 mt-3'>
      <img src={src} alt={alt} width='24px' height='24px' />
      <p className='text-title dark:text-gray'>{name}</p>
    </li>
  );
}
