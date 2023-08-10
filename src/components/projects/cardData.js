import Loopstudios from '../../assets/images/loopstudios.webp';
import Magenta from '../../assets/images/magenta.webp';
import ProductPreview from '../../assets/images/product-preview.webp';
import Sunnyside from '../../assets/images/sunnyside.webp';
import Travelling from '../../assets/images/travelling.webp';
import WeatherApp from '../../assets/images/weather-app.webp';
import AdviceGenerator from '../../assets/images/advice-generator.webp';
import Html from '../../assets/icons/stack/html.svg';
import Css from '../../assets/icons/stack/css.svg';
import JavaScript from '../../assets/icons/stack/javascript.svg';
import Tailwind from '../../assets/icons/stack/tailwind.svg';
import Chakra from '../../assets/icons/stack/chakra.svg';
import React from '../../assets/icons/stack/react.svg';
import Git from '../../assets/icons/stack/git.svg';
import Figma from '../../assets/icons/stack/figma.svg';

export const data = [
  {
    id: 0,
    title: 'Magenta',
    src: Magenta,
    alt: 'Screenshot about the Magenta website',
    description:
      'We are a World Wide corporation in which we teach, educate and inspire others to follow the path of Front-end development!',
    stack: [Html, Css, JavaScript, Tailwind, Git],
    code: 'https://github.com/magentateam/landingOng',
    demo: 'https://magentateam.github.io/landingOng/public/'
  },
  {
    id: 1,
    title: 'Sunnyside',
    src: Sunnyside,
    alt: 'Screenshot about the Sunnyside Landing Page',
    description:
      'We are a full-service creative agency specializing in helping brands grow fast with the perfect marketing for you.',
    stack: [Html, Css, JavaScript, React, Git],
    code: 'https://github.com/GabrielFierro/Sunnyside-agency-landing-page',
    demo: 'https://resonant-kringle-6016a6.netlify.app'
  },
  {
    id: 2,
    title: 'Weather App',
    src: WeatherApp,
    alt: 'Screenshot about the Weather App',
    description:
      'It shows the current weather based on your location with temperature in Celsius, an icon, and personalized background.',
    stack: [Html, Css, JavaScript, Git],
    code: 'https://github.com/GabrielFierro/Weather-app',
    demo: 'https://weather-app-taupe-rho.vercel.app'
  },
  {
    id: 3,
    title: 'Travelling Landing Page',
    src: Travelling,
    alt: 'Screenshot about the Travelling Landing Page',
    description:
      'Explore your dream place and find your next destination. Join us and discover beautiful destinations.',
    stack: [Html, Css, JavaScript, React, Chakra, Git, Figma],
    code: 'https://github.com/GabrielFierro/Travelling-landing-page',
    demo: 'https://travelling-landing-page.vercel.app'
  },
  {
    id: 4,
    title: 'Loopstudios',
    src: Loopstudios,
    alt: 'Screenshot about the Loopstudios Landing Page',
    description:
      'The leader in interactive VR. Loopstudios has been producing world-class virtual reality projects for greatest companies.',
    stack: [Html, Css, JavaScript, Git],
    code: 'https://github.com/GabrielFierro/loopstudios-landing-page',
    demo: 'https://loopstudios-landing-page-jade.vercel.app'
  },
  {
    id: 5,
    title: 'Product Preview',
    src: ProductPreview,
    alt: 'Screenshot about the Product Preview website',
    description:
      'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
    stack: [Html, Css, Git],
    code: 'https://github.com/GabrielFierro/product-preview',
    demo: 'https://product-preview-psi-nine.vercel.app/'
  },
  {
    id: 6,
    title: 'Advice Generator',
    src: AdviceGenerator,
    alt: 'Screenshot about the Advice Generator website',
    description:
      "This is my second project using an API. For this ocassion I'm using the useEffect hook from React to call the API and get the data from it. I'm adding the styles with Tailwind.",
    stack: [Html, CSS, JavaScript, React, Tailwind, Git],
    code: 'https://github.com/GabrielFierro/advice-generator',
    demo: 'https://advice-generator-two-gold.vercel.app/'
  }
];
