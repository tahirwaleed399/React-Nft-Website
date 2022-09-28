import React from 'react'
import {motion } from 'framer-motion';
const Data = [

    {
        question : ' What is an NFT?',
        answer : 'At the most basic level, a non-fungible token is a one-of-a-kind, verifiable digital asset that can be exchanged between a creator and a buyer. The one-of-a-kind characteristic is important in distinguishing NFTs from other digital assets; one NFT is not interchangeable for another, like a dollar bill or a share of stock, but is unique and has its own value.',
        open : false,
    },
    {
        question : 'What makes an NFT valuable?',
        answer : 'The value of an NFT comes from the property it represents, which is generally something that exists in the digital world like an original piece of art or digital memorabilia. The NFT itself doesn’t necessarily contain the digital property, but points to its location on the blockchain. Like a concert ticket or a deed to a physical property, an NFT reflects the value of the thing it represents.',
        open : false , 
    },
    {
        question : ' What’s the connection between NFTs and cryptocurrency?',
        answer : 'NFTs aren’t cryptocurrencies, but they are built using technology similar to Ethereum and Bitcoin. Also, like cryptocurrencies, NFTs exist on a blockchain, which verifies their unique identity and ownership. The blockchain also keeps a record of all the transactions connected to the NFT and the property it represents. Many NFTs are held on the Ethereum blockchain.',
        open : false , 
    },
    {
        question : 'Are NFTs the future of art and collectibles?',
        answer : 'It depends on whom you ask. Artists, musicians, athletes, celebrities, and others find NFTs attractive because they offer a new and unique way to sell their wares — including things like GIFs, memes, and tweets — directly to fans. NFTs also provide artists an opportunity to program in continued royalties if it is sold to a new owner. Galleries see potential for reaching a new generation of collectors.',
        open : false , 
    },
    {
        question : 'What questions remain about NFTs?',
        answer : 'Many. Although NFT technology has been around since 2014, it is just beginning to be put to the real-world test. Because NFTs run on a blockchain, they could offer potential for uses beyond art and collectibles. Suggested uses have ranged from video games and fashion, to vehicle and real estate ownership. In theory, NFTs could offer efficiency and security through embedded smart contracts. However, the NFT market remains very new, and questions about rights, ownership, intellectual property, and more have not been fully explored. The final answer about what’s next may be … stay tuned.',
        open : false , 
    },
    {
        question : 'Can NFTs be used as an investment?',
        answer : 'Under the current circumstances, NFTs can be used as an investment. One can purchase an NFT and resell it with profits. Certain NFT marketplaces even allow NFT sellers to gain royalties for the sold assets. The digital artist, Mike Winkelmann a.k.a Beeple created a series of NFTs for his digital artworks. Last October, he sold the first series of NFTs priced at $66,666.66 each. And recently, one of the NFTs that originally sold for $66,666.66 was resold to a digital asset investor in Singapore for $6.6 million.',
        open : false , 
    },
]

const FAQS = () => {
  return (
<>

<div className='my-4'>
    <h1 className="smallHeading text-center">
        Frequently Asked Questions
    </h1>
    <p className='tagline textPara text-center w-64 m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, velit?</p>
</div>

    <div className="faqs flex  gap-10 flex-wrap justify-center">

{
    Data.map((Faq)=>{
        return (
            <>
            <FaqComponent  Faq={Faq}></FaqComponent>
            </>
           
        )
    })
}

    </div>
</>
  )
}

export default FAQS;

const  FaqComponent = ({Faq} : {Faq : any})=>{

    const [open , setOpen] = React.useState(false);

return (<>

<div className=" faq textPara cursor-pointer " onClick={()=>setOpen(!open)}>
<div className=" flex  items-center ">
            <p className="text-xl ">{Faq.question}</p>
            <span className="ml-auto block">{open ? '-' : '+'}</span>
            
            
 </div>

            <motion.p initial={{height:0 , opacity:0 , scaleY:0,}} animate={open ? {height:'auto', opacity :1,scaleY:1,} : {}}  className="answer">{Faq.answer}</motion.p>

            
            </div>
</>)

}