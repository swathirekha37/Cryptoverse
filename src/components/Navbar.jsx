
import { Link } from 'react-router-dom'
import React from 'react'
import { Layout, Menu, Breadcrumb, Image } from 'antd';
import logo from '../images/cryptocurrency.png'
// import { Home } from 'heroicons-react'
// import {Typography } from 'antd'
import { HomeIcon } from '@heroicons/react/outline'
import {FundOutlined,MoneyCollectOutlined,BulbOutlined} from '@ant-design/icons'


const { Header, Content, Footer, Sider } = Layout;

const Navbar = () => {
    return (

        <Layout>

            <Sider className=''>
                <div className='bg-slate-900 h-[100vh] fixed text-sky-400'>
                    <div className='flex space-x-4'> 
                        <Image width={40} src={logo} className="m-3 p-1"/>
                        <h1 className='text-2xl my-3 '>Cryptoverse</h1>
                    </div>

                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" className='flex flex-col space-y-4 -ml-5'>
                        <Menu.Item key="1">
                            <Link to="/" className='flex mt-3 hover:bg-sky-700 hover:text-white p-2'><HomeIcon className='h-4 mt-1 pr-2'/>Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/cryptocurrencies" className='flex hover:bg-sky-700 hover:text-white p-2'><FundOutlined className='h-4 mt-1 pr-2'/>Cryptocurrencies</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/exchanges" className='flex hover:bg-sky-700 hover:text-white p-2 '><MoneyCollectOutlined className='h-4 mt-1 pr-2'/>Exchanges</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/news" className='flex hover:bg-sky-700 hover:text-white p-2'><BulbOutlined className='h-4 mt-1 pr-2'/>News</Link>
                        </Menu.Item>
                    </Menu>

                </div>
            </Sider>
        </Layout>

    )
}
export default Navbar
