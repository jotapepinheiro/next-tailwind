import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className='animate-pulse'>Home</h1>
    </Layout>
  );
};

export default Home;
