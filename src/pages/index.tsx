import Products from '@/components/HomePage/Products';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>NKShop</title>
      </Head>
      <Products />
    </>
  );
}
