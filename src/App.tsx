import Navbar from './Components/Navbar/navbar';
import './App.scss';
import Hero from './Components/Hero/Hero';
import Partners from './Components/Partners/Partners';
import About from './Components/About/About';
import Collections from './Components/Collections/Collections'; 
import Creater from './Components/Creators/Creater'; 
import FAQS from './Components/FAQS/FAQS';
import Board from './Components/Board/Board';
import Footer from './Components/Footer/Footer'
import SideBar from './Components/SideBar/SideBar';
import { useState } from 'react';
function App() {
  const [showNav , setShowNav] = useState(false);
  return (
<div className="container-nft m-auto">
  <Navbar setShowNav={setShowNav}></Navbar>
  <SideBar showNav={showNav} setShowNav={setShowNav}></SideBar>
  <Hero></Hero>
  <Partners></Partners>
<About></About>
<Collections></Collections>
<Creater></Creater>
<FAQS></FAQS>
<Board></Board>
<Footer></Footer>
</div>
  );
}

export default App;
