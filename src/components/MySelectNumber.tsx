import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, MinusIcon, PlusIcon } from '@heroicons/react/solid';
import { Fragment, useState } from 'react';

interface FunDoubleProps {
  start: number;
  double: number;
  total: number;
}

function FunDouble({ start, double, total }: FunDoubleProps): any[] {
  const output = [];
  let c = start;
  while (c <= total) {
    output.push({ qtd: c });
    c += double;
  }
  return output;
}

interface MySelectNumberProps {
  start: number;
  double: number;
  total: number;
  className?: string;
}

export default function MySelectNumber(props: MySelectNumberProps) {
  const allValues = FunDouble({ start: props.start, double: props.double, total: props.total });
  const [selected, setSelected] = useState(allValues[0]);

  return (
    <div className={'w-24 ' + props.className}>
      <Listbox value={selected} onChange={setSelected}>
        <div className='relative'>
          <Listbox.Button className='relative w-full py-1 text-center text-gray-500 font-medium bg-white dark:bg-dark dark:border-dark-light dark:text-gray-300 rounded-lg border cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm'>
            <span className='absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none'>
              <MinusIcon className='w-3 h-3' aria-hidden='true' />
            </span>
            <span className='block truncate'>{selected.qtd}</span>
            <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
              <PlusIcon className='w-3 h-3' aria-hidden='true' />
            </span>
          </Listbox.Button>
          <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
            <Listbox.Options className='absolute w-full z-10 py-1 mt-1 overflow-auto text-base bg-white dark:bg-dark dark:border-dark-light dark:text-gray-300 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {allValues.map((val, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `cursor-default select-none relative py-2 pl-10 pr-4 ${
                      active
                        ? ' bg-white bg-opacity-10 dark:bg-dark-light dark:text-gray-300'
                        : 'text-gray-900 dark:text-gray-300'
                    }`
                  }
                  value={allValues[index]}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{val.qtd}</span>
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
