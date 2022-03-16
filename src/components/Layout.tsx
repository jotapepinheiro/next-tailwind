import Head from 'next/head';
import { ReactNode } from 'react';
import FooterBar from './FooterBar';
import TopBar from './TopBar';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Head>
        <title>Sorteio.com | Home</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;200;300;400;500;600;700;800;900&display=swap' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <TopBar />
      <main className='mb-auto bg-textura-light dark:bg-textura-dark bg-center h-full'>
        <div className='flex items-center justify-center mt-10 mb-10'>
          <div className='bg-white dark:bg-dark dark:border-dark-light dark:text-gray-300 p-10 sm:p-16 md:p-16 rounded-3xl shadow-2xl w-5/6 sm:w-5/6 md:w-main lg:w-main xl:w-main'>
            {children}
          </div>
        </div>
      </main>
      <FooterBar />
    </div>
  );
}

export default Layout;
