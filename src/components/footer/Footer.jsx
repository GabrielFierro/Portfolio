import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const [t, i18n] = useTranslation('global');
  return (
    <div className='bg-accent h-72 w-full flex flex-col justify-between text-lightMode text-left p-8'>
      <div>
        <h2 className='font-bold text-3xl'>Gabriel</h2>
        <p className='font-normal text-md tracking-normal'>
          {t('footer.subtitle')}
        </p>
      </div>
      <div>
        <ul>
          <Link
            href='#home'
            spy={true}
            to='home'
            smooth={true}
            offset={-60}
            duration={900}
          >
            <li className='pb-1'>Home</li>
          </Link>
          <Link
            href='#about'
            spy={true}
            to='about'
            smooth={true}
            offset={-60}
            duration={900}
          >
            <li className='py-1'>{t('footer.about')}</li>
          </Link>
          <Link
            href='#projects'
            spy={true}
            to='projects'
            smooth={true}
            offset={-60}
            duration={900}
          >
            <li className='py-1'>{t('footer.projects')}</li>
          </Link>
          <Link
            href='#contact'
            spy={true}
            to='contact'
            smooth={true}
            offset={-60}
            duration={900}
          >
            <li className='pt-1'>{t('footer.contact')}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
