import type { NextPage } from 'next';
import CountDown from '../components/CountDown';
import Layout from '../components/Layout';

const Count: NextPage = () => {
  return (
    <Layout>
      <CountDown seconds={30} />
    </Layout>
  );
};

export default Count;
