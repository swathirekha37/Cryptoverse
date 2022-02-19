
import React from 'react';
import { Layout, Menu, Breadcrumb, Image } from 'antd';
import { useGetCreateRequest } from '../services/cryptoApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
const { Header, Content, Footer, Sider } = Layout;

const Homepage = () => {

    const {data,isFetching} = useGetCryptosQuery()
    
    console.log('homepage rendered')
    console.log(data)
  return (
    
    <Layout className='w-[76.5rem] h-10 bg-slate-100 '>
    
      <h1 className='pt-2 pl-2 text-2xl font-medium'>Global Crypto Stats</h1>

      <div className='ml-4 pt-5 grid grid-cols-2 font-light'>

        <div>
            Total Cryptocurrencies 
            <div>5</div>
        </div>
        <div>
            Total Exchanges 
            <div>5</div>
        </div>
        <div>
            Total Market Cap 
            <div>5</div>
        </div>
        <div>
            Total 24h Volume 
            <div>5</div>
            </div>
        <div>
            Total Markets 
            <div>5</div>
        </div>
      </div>

    </Layout>
  );
}

export default Homepage;
