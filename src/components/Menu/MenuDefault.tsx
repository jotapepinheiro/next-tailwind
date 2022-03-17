import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import MyLink from '../MyLink';
import MenuLang from './MenuLang';
import MenuRaffles from './MenuRaffles';

function MenuDefault() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [effect, setEffect] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChange = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className={`${
            effect && 'animate-in zoom-in'
          } w-9 h-9 p-1.5 mt-3 md:mt-0 lg:mt-0 xl:mt-0 ring-1 ring-gray-900/5 shadow-sm hover:text-orange-500 dark:ring-0 dark:bg-gray-800 dark:hover:bg-gray-700 dark:shadow-highlight/4 group focus:outline-none focus-visible:ring-2 rounded-md focus-visible:ring-sky-500 dark:focus-visible:ring-2 dark:focus-visible:ring-gray-400`}
          onAnimationEnd={() => setEffect(false)}
          role='button'
          onClick={() => {
            setTheme('light');
            setEffect(true);
          }}
        />
      );
    } else {
      return (
        <MoonIcon
          className={`${
            effect && 'animate-in zoom-in'
          } w-9 h-9 p-1.5 mt-3 md:mt-0 lg:mt-0 xl:mt-0 ml-4 sm:ml-0 ring-1 ring-gray-900/5 shadow-sm hover:text-orange-500 dark:ring-0 dark:bg-gray-800 dark:hover:bg-gray-700 dark:shadow-highlight/4 group focus:outline-none focus-visible:ring-2 rounded-md focus-visible:ring-sky-500 dark:focus-visible:ring-2 dark:focus-visible:ring-gray-400`}
          onAnimationEnd={() => setEffect(false)}
          role='button'
          onClick={() => {
            setTheme('dark');
            setEffect(true);
          }}
        />
      );
    }
  };

  return (
    <ul className='flex flex-col items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
      <li>
        <MyLink
          href='/'
          className='block py-2 pr-4 pl-3 text-gray-500 dark:text-gray-300 md:border-0 hover:text-orange-500 dark:hover:text-orange-500 md:p-0'
          aria-current='page'
        >
          Início
        </MyLink>
      </li>
      <li>
        <MyLink
          href='/prices'
          className='block py-2 pr-4 pl-3 text-gray-500 dark:text-gray-300 md:border-0 hover:text-orange-500 dark:hover:text-orange-500 md:p-0'
        >
          Preços
        </MyLink>
      </li>
      <li>
        <MyLink
          href='/faq'
          className='block py-2 pr-4 pl-3 text-gray-500 dark:text-gray-300 md:border-0 hover:text-orange-500 dark:hover:text-orange-500 md:p-0'
        >
          Como funciona
        </MyLink>
      </li>
      <li>
        <MenuRaffles />
      </li>
      <li>
        <MyLink href='#' className='block py-2 pr-4 pl-3 text-orange-500 md:border-0 md:text-orange-500 md:p-0'>
          Entrar
        </MyLink>
      </li>
      <li>
        <MenuLang />
      </li>
      <li>{renderThemeChange()}</li>
    </ul>
  );
}

export default MenuDefault;
