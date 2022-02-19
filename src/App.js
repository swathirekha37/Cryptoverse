
import Layout from "antd/lib/layout/layout"

import { Route, Routes } from "react-router-dom"
import { Navbar,FooterComponent,Homepage, Cryptodetails,News, Exchanges, Cryptocurrencies } from "./components"
const { Header, Content, Footer, Sider } = Layout;


export default function App() {
  return (

    <div>
      <div className="flex ">
        <Navbar/>
       
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/home" element={<Homepage/>}/>
          <Route path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
          <Route path="/exchanges" element={<Exchanges/>}/>
          <Route path="/crypto/:coinId" element={<Cryptodetails/>}/>
          <Route path="/news" element={<News/>}/>
        </Routes>
      </div> 
      
       <div>
        <FooterComponent/>
      </div> 

      
    </div>
  )
}
