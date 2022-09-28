import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {

  const headingVariants ={
    initials:{
      y:'-100%',
      opacity:0
    },
    animate:{
      y:'0',
      opacity :1,
     
    }
  }
  return (
    <main className="hero grid grid-cols-2 items-center ">

    <div className="left-cta lg:pr-14" >
      <motion.h1 className='textWhite overflow-hidden ' 
   transition={{type:'spring' , duration:0.5 , stiffness:400}}
      
      variants={headingVariants} initial='initials' animate='animate'>Create, Sell & <br /> Collect Your Own <br /> Creative NFT</motion.h1>
      <p className=' textPara my-3'>A non-fungible token is a financial security consisting of digital data stored in a blockchain, a form of distributed ledger. The ownership of an NFT is recorded in the blockchain, and can be transferred by the owner, allowing NFTs to be sold and traded. libero et velit.</p>

      <button className="btn-primary">Explore Now</button>
      <button className="btn-glass-bg  mx-2 ">Sell NFT</button>
    </div>

    <div className="right-cta grid place-items-center">
      <img src="/Images/heroimage.png" className='object-contain ' alt="HeroImage" />
    </div>

    </main>
  )
}

export default Hero   