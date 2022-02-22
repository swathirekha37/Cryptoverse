import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetCoinByIdQuery } from '../services/cryptoApi';
import millify from 'millify';
import { DollarCircleOutlined,ThunderboltOutlined, TrophyOutlined,FundOutlined,MoneyCollectOutlined, ExclamationCircleOutlined,StopOutlined, CheckOutlined,NumberOutlined} from '@ant-design/icons';
import Layout from 'antd/lib/layout/layout';
import parse from 'html-react-parser'

const Cryptodetails = () => {
  const {coinId} = useParams()
  const [timePeriod, setTimePeriod] = useState("24h");
  const {data,isFetching} = useGetCoinByIdQuery(coinId)
  const cryptoDetails = data?.data?.coin

 
  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];
  
  
  if(isFetching)return 'Loading...'
  return (
    <div className=' w-full'>
      <div className='text-center flex flex-col items-center '>
          <h1 className='text-2xl font-bold text-blue-500 leading-loose'>{cryptoDetails.name} (bitcoin-{cryptoDetails.symbol}) Price</h1>
          <p className='text-sm'>{cryptoDetails.name} live price in US dollars. View value statistics, market cap and supply.</p>
      </div>

      <select className='mt-10 ml-11 w-[8rem] border-2 mb-6' onChange={(e)=>setTimePeriod(e.target.value)}>
        {time.map(it => <option key={it.id}>{it}</option>)}
      </select>

      <div className='lg:grid grid-cols-2'>
        <div>
          <div className='text-center flex flex-col items-center '>
            <h1 className='text-2xl font-semibold'>{cryptoDetails.name} Value Statistics</h1>
            <p>An overview showing the stats of {cryptoDetails.name}</p>
          </div>

          <div className='grid grid-rows-6 mt-8 divide-y justify-items-center'>
                
                  {stats.map(it => <div className='flex' key={it.id}>
                    <div className='flex p-4 justify-start'>
                      <span>{it.icon}</span>
                      <p className='pl-4'>{it.title}</p>
                    </div>
                    <p className='flex p-4 justify-end font-bold'>{it.value}</p>
                  </div>)}
          </div>
        </div>

        <div>
          <div className='text-center flex flex-col items-center '>
            <h1 className='text-2xl font-semibold'>Other Statistics</h1>
            <p>An overview showing the stats of {cryptoDetails.name}</p>
          </div>

          <div className='grid grid-rows-5 mt-8 divide-y justify-items-center'>
                
                  {genericStats.map(it => <div className='flex' key={it.id}>
                    <div className='flex p-4 justify-start'>
                      <span>{it.icon}</span>
                      <p className='pl-4'>{it.title}</p>
                    </div>
                    <p className='flex p-4 justify-end font-bold'>{it.value}</p>
                  </div>)}
          </div>
        </div>
      

      <div className={'mt-6 mb-6 lg:pl-5'}> 
        What is {cryptoDetails.name}?
        {parse(cryptoDetails.description)}
      </div>

        <div>
          <h1 className='text-2xl font-bold'>{cryptoDetails.name} Links</h1>
            
          <div className='grid grid-rows-9 mt-8 divide-y'>{cryptoDetails.links.map(link => 
                                <div key={link.id} className="grid grid-cols-2">
                                  <div className='font-semibold text-l p-8'>{link.type}</div>
                                  <div className='font-semibold text-l p-8 text-blue-600'>{link.url}</div>
                                </div>)}
          </div>

        </div>
      </div>

      </div>

  
   
  );
}

export default Cryptodetails;
