import React from 'react'
import { motion } from 'framer-motion'
const About = () => {
    const headingVariants ={
        initials:{
          x:'-100%',
          opacity:0
        },
        animate:{
          x:'0',
          opacity :1,
         
        }
      }
      const headingVariants2 ={
        initials:{
          x:'100%',
          opacity:0
        },
        animate:{
          x:'0',
          opacity :1,
         
        }
      }
  return (
   <section className="about">


<div>
    <h1 className="smallHeading text-center">
        About
    </h1>
    <p className='tagline textPara text-center w-64 m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, velit?</p>
</div>


<main className='grid lg:grid-cols-2 grid-cols-1 items-center py-5' >

    <motion.div className="left-main"  transition={{type:'spring' , duration:0.5 , stiffness:400}}
      
      variants={headingVariants} initial='initials' whileInView='animate'
      >
<img src="/Images/Group 18.png" alt="" />
    </motion.div>
    <motion.div className="right-main" transition={{type:'spring' , duration:0.5 , stiffness:400}}
      
      variants={headingVariants2} initial='initials' whileInView='animate'>
        <h1 className='smallHeading '>Get Popular NFT</h1>
        <p className='textPara my-5'>NFTs are currently taking the digital art and collectibles world by storm. Digital artists are seeing their lives change thanks to huge sales to a new crypto-audience. And celebrities are joining in as they spot a new opportunity to connect with fans. But digital art is only one way to use NFTs. Really they can be used to represent ownership of any unique asset, like a deed for an item in the digital or physical realm.

If Andy Warhol had been born in the late 90s, he probably would have minted Campbell's Soup as an NFT. It's only a matter of time before Kanye puts a run of Yeezys on Ethereum. And one day owning your car might be proved with an NFT.
</p>

<button className="btn-primary">
    Show More
</button>
    </motion.div>
</main>

   </section>
  )
}

export default About