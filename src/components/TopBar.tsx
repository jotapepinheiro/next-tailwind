import { useState } from 'react';
import MenuDefault from './Menu/MenuDefault';

function TopBar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className='border-b border-b-gray-200 dark:bg-dark dark:border-b-dark-light px-2 sm:px-4 py-3.5'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <a href='/' className='flex items-center'>
          <img src='/images/logo.svg' className='h-6' alt='sorteio.com' />
        </a>
        <button
          data-collapse-toggle='mobile-menu'
          type='button'
          className='inline-flex items-center p-2 ml-3 text-gray-500 border dark:border-dark-light rounded-lg md:hidden hover:bg-orange-500 hover:text-white'
          aria-controls='mobile-menu-2'
          aria-expanded='false'
          onClick={handleClick}
        >
          <span className='sr-only'>Abrir Menu</span>
          <svg
            className={`${active ? 'hidden' : 'visible'} w-6 h-6 `}
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            ></path>
          </svg>
          <svg
            className={`${
              active ? 'visible' : 'hidden'
            } w-6 h-6 rounded-lg md:hidden hover:bg-orange-500 hover:text-white`}
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>

        <div
          className={`${active ? 'animate-in slide-in-from-top duration-500' : 'hidden'} w-full md:block md:w-auto`}
          id='mobile-menu'
        >
          <MenuDefault />
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
