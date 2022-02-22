import {Link} from 'react-router-dom'
import React from 'react';
import { Layout, Menu, Breadcrumb, Image } from 'antd';
import { useGetCreateRequest } from '../services/cryptoApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
import {Cryptocurrencies,News} from '../components/index'
import millify from "millify"

const { Header, Content, Footer, Sider } = Layout;


const Homepage = () => {

    const {data,isFetching} = useGetCryptosQuery(10)
    
    console.log('homepage rendered')
    
  console.log(data);
    if(isFetching) return 'Loading...';
    const globalStats = data ?.data.stats
  return (
    
    <Layout className='bg-white-100'>
    
      <h1 className='pt-5 w-[76.5rem]  bg-slate-100 h-20 pl-2 text-2xl font-medium'>Global Crypto Stats</h1>

      <div className='ml-4 mt-5 pt-5 grid grid-cols-2 font-light text-lg'>

        <div className='pb-5'>
            <div className='text-slate-600'>Total Cryptocurrencies</div> 
            <h1>{globalStats.total}</h1>
        </div>

        <div>
            <div className='text-slate-600'>Total Exchanges </div>
            <h2>{globalStats.totalExchanges}</h2>
        </div>

        <div className='pb-5'>
            <div className='text-slate-600'>Total Market Cap </div>
            <div>{millify(globalStats.totalMarketCap)}</div>
        </div>

        <div>
            <div className="text-slate-600">Total 24h Volume</div>
            <div>{millify(globalStats.total24hVolume)}</div>
            </div>

        <div>
            <div className="text-slate-600">Total Markets</div>
            <div>{millify(globalStats.totalMarkets)}</div>
        </div>
      </div>

      <div>
        <div className='mt-5 grid grid-cols-2'>
          <h1 className='pl-2 text-2xl font-medium '>Latest Crypto News</h1>
          <Link to="/news" className='ml-[30rem] text-sky-500 font-medium'>Show More</Link>
        </div>
        <News simplified/>
      </div>

      
        <div className='mt-5 grid grid-cols-2'>
          <h1 className='pl-2 text-2xl font-medium'>Top 10 Cryptocurrencies in the world</h1>
          <Link to="/cryptocurrencies" className='ml-[30rem] text-sky-500 font-medium'>Show More</Link>
        </div>
        <Cryptocurrencies simplified/>
      

    </Layout>
  );
}

export default Homepage;
