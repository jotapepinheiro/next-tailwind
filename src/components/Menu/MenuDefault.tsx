import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import MyLink from '../MyLink';
import MenuLang from './MenuLang';
import MenuRaffles from './MenuRaffles';

function MenuDefault() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChange = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className='w-6 h-6 dark:text-gray-300 dark:hover:text-orange-500'
          role='button'
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <MoonIcon
          className='w-6 h-6 text-gray-500 hover:text-orange-500'
          role='button'
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  return (
    <ul className='flex flex-col items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
      <li>
        <MyLink
          href='/'
          className='block py-2 pr-4 pl-3 text-gray-500 dark:text-gray-300 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0'
          aria-current='page'
        >
          Início
        </MyLink>
      </li>
      <li>
        <MyLink
          href='#'
          className='block py-2 pr-4 pl-3 text-gray-500 dark:text-gray-300 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0'
        >
          Preços
        </MyLink>
      </li>
      <li>
        <MyLink
          href='#'
          className='block py-2 pr-4 pl-3 text-gray-500 dark:text-gray-300 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0'
        >
          Como Funciona
        </MyLink>
      </li>
      <li>
        <MenuRaffles />
      </li>
      <li>
        <MyLink
          href='#'
          className='block py-2 pr-4 pl-3 text-orange-500 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:text-orange-500 md:p-0'
        >
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
