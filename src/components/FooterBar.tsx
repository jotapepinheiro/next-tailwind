function FooterBar(props: any) {
  return (
    <footer className='container m-auto p-4 sm:p-6'>
      <div className='md:flex md:justify-center'>
        <div className='min-w-[245px] mb-6 md:mb-0 mr-0 sm:mr-10 md:mr-10 lg:mr-10 xl:mr-10'>
          <a href='/'>
            <img src='/images/logo.svg' className='h-5 m-auto sm:m-0 md:m-0 lg:m-0 xl:m-0' alt='sorteio.com' />
          </a>
          <div className='mt-5 self-center text-2xl font-medium whitespace-nowrap dark:text-white'>
            <div className='text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left md:text-left lg:text-left xl:text-left'>
              <p>
                Copyright © 2022{' '}
                <a href='https://sorteio.com' className='hover:underline'>
                  sorteio.com.
                </a>
              </p>
              <p>Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
        <div className='w-full grid grid-cols-1 text-center gap-4 sm:text-left sm:gap-6 sm:grid-cols-2 md:text-left md:gap-4 md:grid-cols-2 lg:text-left lg:gap-4 lg:grid-cols-2 xl:text-left xl:gap-4 xl:grid-cols-4'>
          <div>
            <h2 className='mb-6 font-semibold text-gray-900 dark:text-white'>Nossos Sorteios</h2>
            <ul className='text-sm font-medium text-gray-600 dark:text-gray-400'>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Sorteio no Instagram
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Sorteio de números{' '}
                  <img
                    src='/images/novo.svg'
                    className='mr-3 h-10 inline-flex items-center justify-center'
                    alt='novo'
                  />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 font-semibold text-gray-900 dark:text-white'>Suporte</h2>
            <ul className='text-sm font-medium text-gray-600 dark:text-gray-400'>
              <li className='mb-4'>
                <a href='#' className='hover:underline '>
                  Como Sortear?
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Suporte e feedback
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 font-semibold text-gray-900 dark:text-white'>Assinante</h2>
            <ul className='text-sm font-medium text-gray-600 dark:text-gray-400'>
              <li className='mb-4'>
                <a href='#' className='hover:underline text-orange-500 dark:text-orange-500'>
                  Entrar
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Criar conta
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 font-semibold text-gray-900 dark:text-white'>Não perca as novidades!</h2>
            <div className='max-w-[245px] m-auto sm:m-0 flex items-center h-auto text-sm border rounded-lg dark:border-dark-light p-4'>
              <img src='/images/siga.svg' className='mr-3 h-8' alt='novo' />
              <div className='flex flex-col text-[10px]'>
                <div>Siga a gente!</div>
                <div className='font-bold'>@sorteio</div>
              </div>

              <div className='ml-5'>
                <button
                  type='button'
                  className='inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  Seguir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='my-6 border-gray-200 sm:mx-auto dark:border-dark-light lg:my-8' />
      {/* <div className='h-1 bg-green-400 sm:bg-orange-400 md:bg-blue-400 lg:bg-pink-400 xl:bg-yellow-400'></div> */}
      <div className='flex flex-wrap justify-between sm:items-center sm:justify-between'>
        <div className='flex flex-row gap-5'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            <a href='#' className='hover:underline'>
              Termos de Serviço
            </a>
          </span>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            <a href='#' className='hover:underline'>
              Política de Privacidade
            </a>
          </span>
        </div>

        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          Desenvolvido por{' '}
          <a href='https://www.instagram.com/joaopinheiro.dev' className='hover:underline'>
            @joaopinheiro.dev
          </a>{' '}
          com muito ❤️
        </span>

        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>Versão 2.0</span>
      </div>
    </footer>
  );
}

export default FooterBar;
