/* eslint-disable react/prop-types */
export default function Technology({ src, alt, name }) {
  return (
    <li className='flex flex-row space-x-3 mt-3'>
      <img src={src} alt={alt} width='24px' height='24px' />
      <p>{name}</p>
    </li>
  );
}
