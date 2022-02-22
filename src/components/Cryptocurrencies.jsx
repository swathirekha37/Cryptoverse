import React from 'react';
import { useState,useEffect } from 'react';
import { useGetCryptosQuery } from '../services/cryptoApi';
import millify from 'millify';
import Layout from 'antd/lib/layout/layout';

const Cryptocurrencies = ({simplified}) => {

  const count = simplified ? 10 : 100

  const {data:cryptosList,isFetching} = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState([]);
  const [searchContent,setSearchContent] = useState('')
  
  useEffect(() => {
   const filteredData = cryptosList?.data?.coins.filter(item => item.name.toLowerCase().includes(searchContent?.toLowerCase()))
   setCryptos(filteredData)
  }, [cryptosList,searchContent]);
  
  // console.log(cryptosList)
  return (
    <Layout>
     {!simplified &&  <input placeholder="search crypto" className='border rounded-md ml-10 mt-3 p-3 flex items-center' onChange={(e)=>setSearchContent(e.target.value)}/>}

    <div className='grid grid-cols-4 gap-2 m-5'>

      {cryptos?.map(due => <div key={due.id} > 

        <div className='h-[180px] shadow-md rounded-sm hover:cursor-pointer hover:bg-slate-100'>

          <div className='flex space-x-14'>
            <p>{due.rank}.{due.name}</p>
            <img src={`${due.iconUrl}`} height='10px' width="20px"/>
          </div>
          
          <div className='mt-9 text-sm text-slate-700'>
            <p>Price: {millify(due.price)}</p>
            <p>Market Cap: {millify(due.marketCap)}</p>
            <p>Daily Change: {millify(due.change)}%</p>
          </div>
        </div>
       </div>)}

    </div>
    </Layout>
  );
}

export default Cryptocurrencies;
