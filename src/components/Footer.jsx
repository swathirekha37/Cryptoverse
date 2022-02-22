import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from 'antd/lib/layout/layout';

const FooterComponent = () => {
  return (

    <Footer className='text-white bg-slate-900 flex flex-col items-center font-medium fixed bottom-0  w-full'>
        <h2>Cryptoverse</h2>
        <h3>All rights reserved</h3>
        <div className='flex space-x-2 text-blue-700 font-light'>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
        </div>
    </Footer>
  );
}

export default FooterComponent;
