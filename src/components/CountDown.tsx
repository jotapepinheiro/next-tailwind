import { ArrowRightIcon } from '@heroicons/react/solid';
import Router from 'next/router';
import { useEffect, useState } from 'react';

interface CountDownProps {
  mainRadius?: number;
  childRadius?: number;
  mainStrokeWidth?: number;
  childStrokeWidth?: number;
  seconds: number;
}

function CountDown({
  mainRadius = 160,
  childRadius = 115,
  mainStrokeWidth = 35,
  childStrokeWidth = 7,
  seconds = 30,
}: CountDownProps) {
  const [countdown, setContDown] = useState(false);

  const mainCircle = mainRadius + mainStrokeWidth;
  // const mainReference = 2 * Math.PI * mainRadius;
  const circleReference = 2 * Math.PI * childRadius;
  // console.log(Math.round(mainReference));
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (timeLeft > 0) {
      const downloadTimer = setInterval(() => {
        if (timeLeft <= 0) {
          clearInterval(downloadTimer);
        }
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(downloadTimer);
    }
  }, [timeLeft]);

  return (
    <div>
      <a href='/' className='w-full flex justify-center items-center'>
        <img src='/images/logo.svg' className='h-6' alt='sorteio.com' />
      </a>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <svg
            className='mt-6 ml-6'
            width={mainRadius * 2}
            height={mainRadius * 2}
            viewBox={`0 0 ${mainCircle * 2} ${mainCircle * 2}`}
            fill='none'
          >
            <circle
              transform={`rotate(-90 180 180)`}
              className={`${
                countdown && 'animate-count-30'
              } stroke-orange-500 opacity-20 dark:stroke-dark-lighter dark:opacity-100`}
              cx='180'
              cy='180'
              r={mainRadius}
              fill='none'
              strokeWidth={mainStrokeWidth}
              strokeLinejoin='round'
              strokeDasharray='6 29.9'
            />
            <circle
              className='stroke-[3] stroke-gray-100 dark:stroke-dark-lighter'
              cx='180'
              cy='180'
              r='130'
              fill='none'
            />
            <g transform={`rotate(-90 180 180)`}>
              <circle
                className='stroke-gray-100 dark:stroke-dark-lighter'
                cx='180'
                cy='180'
                r={childRadius}
                fill='none'
                strokeWidth={childStrokeWidth}
              />
              <circle
                className={`${countdown && 'animate-count-30'} ${
                  timeLeft > 0 && timeLeft < 11
                    ? 'stroke-red-500 dark:stroke-red-500'
                    : 'stroke-orange-500 dark:stroke-orange-500'
                } drop-shadow-lg`}
                onAnimationEnd={() => {
                  setContDown(true);
                  Router.push('/raffles/numeric');
                }}
                cx='180'
                cy='180'
                r={childRadius}
                fill='none'
                strokeWidth={childStrokeWidth}
                strokeDasharray={circleReference}
                strokeDashoffset={circleReference}
                strokeLinecap='round'
              />
            </g>
          </svg>
          <div className='drop-shadow-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl font-roboto font-extrabold text-orange-500'>
            {timeLeft}
          </div>
        </div>
      </div>

      {!countdown && (
        <button
          type='button'
          disabled={countdown}
          className={`${
            countdown && 'animate-wiggle cursor-not-allowed disabled:bg-blue-300'
          } animate-in zoom-in-75 w-full flex justify-center items-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700`}
          onClick={() => {
            setContDown(true);
            setTimeLeft(seconds);
          }}
        >
          {countdown ? 'Aguarde...' : 'Iniciar Tempo'}
          <ArrowRightIcon className='w-5 ml-3 mr-2 h-8 text-white' />
        </button>
      )}
    </div>
  );
}

export default CountDown;
