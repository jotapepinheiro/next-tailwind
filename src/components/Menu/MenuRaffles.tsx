import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';
import MyLink from '../MyLink';

const raffles = [
  { name: 'Sorteio de Números', url: '/raffles/numeric' },
  { name: 'Sorteio de Nomes', url: '/raffles/names' },
  { name: 'Sorteio de Cidades', url: '/raffles/cities' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function MenuRaffles() {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex py-2 justify-center w-full font-medium text-gray-500 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500'>
          Nossos Sorteios
          <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-dark-light ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            {raffles.map((raffle, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <MyLink
                    href={raffle.url}
                    className={classNames(
                      active
                        ? 'text-gray-500 hover:text-orange-500 dark:bg-dark-light dark:text-gray-300 dark:hover:text-orange-500'
                        : 'text-gray-700 dark:text-gray-300',
                      'block px-4 py-2'
                    )}
                  >
                    {raffle.name}
                  </MyLink>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
