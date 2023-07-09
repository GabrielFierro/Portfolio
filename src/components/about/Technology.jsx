/* eslint-disable react/prop-types */
import { ReactComponent as HTML } from '../../assets/icons/light-mode/brand-light/html5.svg';
import { ReactComponent as CSS } from '../../assets/icons/light-mode/brand-light/css3-simple.svg';
import { ReactComponent as Javascript } from '../../assets/icons/light-mode/brand-light/javascript.svg';
import { ReactComponent as Git } from '../../assets/icons/light-mode/brand-light/git.svg';
import { ReactComponent as Github } from '../../assets/icons/light-mode/brand-light/github.svg';
import { ReactComponent as React } from '../../assets/icons/light-mode/brand-light/react.svg';
import { ReactComponent as Bootstrap } from '../../assets/icons/light-mode/brand-light/bootstrap.svg';
import { ReactComponent as Tailwind } from '../../assets/icons/light-mode/brand-light/tailwindcss.svg';
import { ReactComponent as ChakraUI } from '../../assets/icons/light-mode/brand-light/chakraui.svg';

export default function Technology() {
  const data = [
    {
      id: 1,
      src: HTML,
      alt: 'HTML icon',
      name: 'HTML'
    },
    {
      id: 2,
      src: CSS,
      alt: 'CSS icon',
      name: 'CSS'
    },
    {
      id: 3,
      src: Javascript,
      alt: 'Javascript icon',
      name: 'Javascript'
    },
    {
      id: 4,
      src: Git,
      alt: 'Git icon',
      name: 'Git'
    },
    {
      id: 5,
      src: Github,
      alt: 'Github icon',
      name: 'Github'
    },
    {
      id: 6,
      src: React,
      alt: 'React icon',
      name: 'React'
    },
    {
      id: 7,
      src: Bootstrap,
      alt: 'Bootstrap icon',
      name: 'Bootstrap'
    },
    {
      id: 8,
      src: Tailwind,
      alt: 'Tailwind icon',
      name: 'Tailwind'
    },
    {
      id: 9,
      src: ChakraUI,
      alt: 'ChakraUI icon',
      name: 'ChakraUI'
    }
  ];

  return data.map((tech) => {
    console.log(tech.src);
    const Svg = tech.src;
    console.log('objectssssssssssssssssssss: ', Svg);
    return (
      <li
        key={tech.id}
        className='flex flex-row space-x-3 md:space-x-2 px-4 mt-3'
      >
        <ul className='flex flex-col md:flex-row flex-wrap'>
          <Svg width='24px' height='24px' />
        </ul>
        <p className='text-title dark:text-gray'>{tech.name}</p>
      </li>
    );
  });
}
