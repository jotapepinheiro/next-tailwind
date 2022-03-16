import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { Fragment, useState } from 'react';

const langs = [
  { alt: 'PT', img: 'BR.svg', bg: 'bg-green-500' },
  { alt: 'EN', img: 'US.svg', bg: 'bg-red-500' },
  { alt: 'ES', img: 'ES.svg', bg: 'bg-orange-500' },
];

interface FlagActiveIconProps {
  width: number;
  height: number;
  alt: string;
  img: string;
}

function FlagActiveIcon(props: FlagActiveIconProps) {
  return (
    <div className='flex flex-row items-center w-full'>
      <Image
        src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${props.img}`}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
      <div className='ml-3'>{props.alt}</div>
    </div>
  );
}

export default function MenuLang() {
  const [selected, setSelected] = useState(langs[0]);

  return (
    <div className='w-28'>
      <Listbox value={selected} onChange={setSelected}>
        <div className='relative'>
          <Listbox.Button className='relative w-full py-1 pl-3 text-left text-gray-500 font-medium dark:text-gray-300 rounded-lg border border-gray-200 dark:border-dark-light cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm'>
            <span className='block truncate'>
              <FlagActiveIcon width={30} height={30} alt={selected.alt} img={selected.img} />
            </span>
            <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
              <ChevronDownIcon className='w-5 h-8 ml-2 -mr-1 text-gray-500 dark:text-gray-300' aria-hidden='true' />
            </span>
          </Listbox.Button>
          <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
            <Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base bg-white dark:bg-dark rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {langs.map((lang, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `cursor-default select-none relative py-2 pl-10 pr-4 ${
                      active ? lang.bg + ' bg-opacity-10 dark:text-gray-300' : 'text-gray-500 dark:text-gray-300'
                    }`
                  }
                  value={langs[index]}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        <FlagActiveIcon width={30} height={30} alt={lang.alt} img={lang.img} />
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                          <CheckIcon className='w-5 h-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
