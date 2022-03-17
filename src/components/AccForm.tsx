import { Switch } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { useState } from 'react';

export type FaqProps = {
  title: string;
};

export default function AccForm(props: FaqProps) {
  const [expanded, setExpanded] = useState(false);
  const [showResultAsc, setShowResultAsc] = useState(false);
  const [showCountDown, setShowCountDown] = useState(false);
  const [showResultsLink, setShowResultsLink] = useState(false);
  const [allowDuplicateNumbers, setAllowDuplicateNumbers] = useState(false);
  const [notRepeatResults, setNotRepeatResults] = useState(false);

  return (
    <div className='flex flex-col cursor-pointer text-blue-500'>
      <div onClick={() => setExpanded(!expanded)} className='flex flex-row items-center'>
        {expanded ? (
          <ChevronUpIcon className='flex-none mr-2 w-5 h-8 text-blue-500' />
        ) : (
          <ChevronDownIcon className='flex-none mr-2 w-5 h-8 text-blue-500' />
        )}
        <p className={`flex-auto ${expanded ? 'text-blue-500' : 'font-medium'}`}>{props.title}</p>
      </div>
      <div
        className={`transition-max-height duration-700 ease-in-out overflow-hidden ${
          expanded ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className='mt-5'>
          <div className='space-y-4'>
            <div className='flex items-start'>
              <Switch.Group>
                <div className='flex items-center'>
                  <Switch
                    checked={showResultAsc}
                    onChange={setShowResultAsc}
                    className={`${
                      showResultAsc ? 'bg-blue-600' : 'bg-gray-200'
                    } relative inline-flex items-center h-6 rounded-full w-11 transition-colors`}
                  >
                    <span
                      className={`${
                        showResultAsc ? 'translate-x-6' : 'translate-x-1'
                      } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                    />
                  </Switch>
                  <Switch.Label className='ml-4 text-[11px] font-extralight sm:text-sm md:text-sm lg:text-sm xl:text-sm text-gray-600 dark:text-gray-300'>
                    Mostrar resultado em ordem crescente
                  </Switch.Label>
                </div>
              </Switch.Group>
            </div>
            <div className='flex items-start'>
              <Switch.Group>
                <div className='flex items-center'>
                  <Switch
                    checked={showCountDown}
                    onChange={setShowCountDown}
                    className={`${
                      showCountDown ? 'bg-blue-600' : 'bg-gray-200'
                    } relative inline-flex items-center h-6 rounded-full w-11 transition-colors`}
                  >
                    <span
                      className={`${
                        showCountDown ? 'translate-x-6' : 'translate-x-1'
                      } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                    />
                  </Switch>
                  <Switch.Label className='ml-4 text-[11px] font-extralight sm:text-sm md:text-sm lg:text-sm xl:text-sm text-gray-600 dark:text-gray-300'>
                    Fazer contagem regressiva
                  </Switch.Label>
                </div>
              </Switch.Group>
            </div>
            <div className='flex items-start'>
              <Switch.Group>
                <div className='flex items-center'>
                  <Switch
                    checked={showResultsLink}
                    onChange={setShowResultsLink}
                    className={`${
                      showResultsLink ? 'bg-blue-600' : 'bg-gray-200'
                    } relative inline-flex items-center h-6 rounded-full w-11 transition-colors`}
                  >
                    <span
                      className={`${
                        showResultsLink ? 'translate-x-6' : 'translate-x-1'
                      } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                    />
                  </Switch>
                  <Switch.Label className='ml-4 text-[11px] font-extralight sm:text-sm md:text-sm lg:text-sm xl:text-sm text-gray-600 dark:text-gray-300'>
                    Gerar link de resultados
                  </Switch.Label>
                </div>
              </Switch.Group>
            </div>
            <div className='flex items-start'>
              <Switch.Group>
                <div className='flex items-center'>
                  <Switch
                    checked={allowDuplicateNumbers}
                    onChange={setAllowDuplicateNumbers}
                    className={`${
                      allowDuplicateNumbers ? 'bg-blue-600' : 'bg-gray-200'
                    } relative inline-flex items-center h-6 rounded-full w-11 transition-colors`}
                  >
                    <span
                      className={`${
                        allowDuplicateNumbers ? 'translate-x-6' : 'translate-x-1'
                      } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                    />
                  </Switch>
                  <Switch.Label className='ml-4  text-[11px] font-extralight sm:text-sm md:text-sm lg:text-sm xl:text-sm text-gray-600 dark:text-gray-300'>
                    Permitir números duplicados
                  </Switch.Label>
                </div>
              </Switch.Group>
            </div>
            <div className='flex items-start'>
              <Switch.Group>
                <div className='flex items-center'>
                  <Switch
                    checked={notRepeatResults}
                    onChange={setNotRepeatResults}
                    className={`${
                      notRepeatResults ? 'bg-blue-600' : 'bg-gray-200'
                    } relative inline-flex items-center h-6 rounded-full w-11 transition-colors`}
                  >
                    <span
                      className={`${
                        notRepeatResults ? 'translate-x-6' : 'translate-x-1'
                      } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                    />
                  </Switch>
                  <Switch.Label className='ml-4 text-[11px] font-extralight sm:text-sm md:text-sm lg:text-sm xl:text-sm text-gray-600 dark:text-gray-300'>
                    Não repetir resultados
                  </Switch.Label>
                </div>
              </Switch.Group>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
