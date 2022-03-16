import type { NextPage } from 'next';
import AccForm from '../../components/AccForm';
import Layout from '../../components/Layout';
import MySelectNumber from '../../components/MySelectNumber';

const RafflesNumeric: NextPage = () => {
  const faqs = [
    {
      key: 1,
      title: 'Opções do sorteio',
      description: 'Teste A',
    },
  ];

  const faqComponents = faqs.map((faq, index) => {
    return <AccForm key={index} title={faq.title} description={faq.description} />;
  });

  return (
    <Layout>
      <>
        <div className='text-orange-500 font-medium animate-bounce'>123</div>
        <h1 className='text-3xl font-bold text-gray-800 dark:text-gray-300'>Sorteio de números</h1>
        <small className='text-gray-500 font-normal dark:text-gray-400'>
          Primeiro você escolhe a quantidade de números que irá sortear e depois o intervalo entre esses números.
          Prontinho, é 100% gratuito!
        </small>

        <form className='w-full mt-10'>
          <div className='flex flex-wrap items-center mb-6 sm:mb-0'>
            <div className='w-full mb-2 sm:mb-6 md:mb-6 lg:mb-6 sm:basis-4/12 md:basis-5/12 lg:basis-5/12'>
              <div className='font-medium text-center sm:pr-4 md:pr-3 sm:text-right md:text-right lg:text-right'>
                Sortear
              </div>
            </div>
            <div className='w-full mb-2 sm:mb-6 md:mb-6 lg:mb-6 sm:basis-2/12 md:basis-2/12 lg:basis-2/12'>
              <MySelectNumber start={0} double={10} total={100} className={'m-auto'} />
            </div>
            <div className='w-full mb-6 sm:basis-4/12 md:basis-4/12 lg:basis-5/12'>
              <div className='font-medium text-center sm:pl-4 md:pl-3 sm:text-left md:text-left lg:text-left'>
                número(s)
              </div>
            </div>
          </div>
          {/* ENTRE */}
          <div className='flex items-center mb-6 sm:mb-0'>
            <div className='flex flex-wrap m-auto w-full mb-2 sm:mb-6 md:mb-6 lg:mb-6 sm:basis-2/12 md:basis-2/12 lg:basis-1/2'>
              <div className='mt-1'>Entre</div>
              <MySelectNumber start={0} double={10} total={100} className={'ml-4'} />
              <div className='mt-1 ml-4'>e</div>
              <MySelectNumber start={10} double={10} total={100} className={'ml-4'} />
            </div>
          </div>
          {/* SORTEAR */}
          <button
            type='button'
            className='w-full text-center inline-flex items-center text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Sortear
            <svg
              className='ml-2 -mr-1 w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>

          <div className='flex-auto mt-5 w-full p-2'>{faqComponents}</div>
        </form>
      </>
    </Layout>
  );
};

export default RafflesNumeric;
