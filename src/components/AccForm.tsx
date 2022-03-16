import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { useState } from 'react';

export type FaqProps = {
  title: string;
  description: string;
};

export default function AccForm(props: FaqProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div onClick={() => setExpanded(!expanded)} className='flex flex-col p-3 text-blue-500 cursor-pointer'>
      <div className='flex flex-row items-center'>
        {expanded ? (
          <ChevronUpIcon className='flex-none mr-2 w-5 h-8 text-blue-500 dark:text-blue-300' />
        ) : (
          <ChevronDownIcon className='flex-none mr-2 w-5 h-8 text-blue-500 dark:text-blue-300' />
        )}
        <p className={`flex-auto hover:text-orange-500 ${expanded ? 'text-gray-300' : 'font-medium'}`}>{props.title}</p>
      </div>
      <div
        className={`transition-max-height duration-700 ease-in-out overflow-hidden ${
          expanded ? 'max-h-20' : 'max-h-0'
        }`}
      >
        <p>{props.description}</p>
      </div>
    </div>
  );
}
