import React from 'react';
import {  useGetCryptoNewsQuery } from '../services/newsApi';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useState } from 'react';

const News = ({simplified}) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');

  const count = simplified ? 6 : 12
  const {data:cryptoNews} = useGetCryptoNewsQuery({newsCategory,count})
const {data} = useGetCryptosQuery(100)

  if(!cryptoNews) return 'Loading...'
  console.log(data)
  return (
    <div>
      <div>

        <select placeholder='select a crypto' onChange={(e)=>setNewsCategory(e.target.value)}>
          {/* <option value="Cryptocurrency"></option> */}
          {data?.data?.coins?.map((coin)=><option >{coin.name}</option>)}
        </select>

      </div>
    <div className='grid grid-cols-3 gap-9 mt-2 ml-2 justify-evenly '>
     {cryptoNews?.value?.map(item => 
      
      <div key={item.id} className=""> 
       <div className='h-[15rem]  bg-slate-50 py-2 cursor-pointer transition transform hover:-translate-y-2 hover:bg-blue-300}'>
         <a href={`${item.url}`} target="_blank">{item.name}</a>
         <div className='flex font-thin text-sm'>
          <img src={item.image?.thumbnail?.contentUrl} className="h-10 m-2"/>
          <p>{item.description.length > 100 ? `${item.description.substring(0,100)}...` : item.description}</p>
         </div>
         <div className='flex justify-between text-sm text-wrap mt-3'>
           <div>{moment(item.datePublished).startOf('ss').fromNow()}</div>
           <div>{item?.provider[0]?.name}</div>
          </div>

         </div>
         
       </div>)}
      </div>
      </div>
  );
}

export default News;
