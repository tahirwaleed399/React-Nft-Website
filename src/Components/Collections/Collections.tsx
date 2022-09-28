import React from "react";
import { motion } from "framer-motion";
const Collections = () => {

  let [selected , setSelected ] = React.useState('yatchClub') ;
 const Data =  [


   {
       "name" : "yatchClub",
       "nfts": [12, 32,54,66,200,32]
   },   {
       "name" : "Bong",
       "nfts": [124, 332,354,566,600,332]
   },   {
       "name" : "illuminati",
       "nfts": [123, 54,23,77,600,42]
   }
];

function  handleBid(event:any){

  if(!event.target.classList.contains('active')){
     event.target.classList.add('active');
      event.target.innerHTML = 'Bid Placed';
  }
}

  return (
    <div className="collections">
      
      <div>
        <h1 className="smallHeading text-center">Collections</h1>
        <p className="tagline textPara text-center w-64 m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, velit?
        </p>
      </div>


  <div className="filter my-8">
<div className="buttons flex justify-around items-center flex-wrap">
{
  Data.map(nft=> <button onClick={()=> setSelected(nft.name)}  className={selected === nft.name ?  "active btn-glass-bg uppercase" : "btn-glass-bg uppercase"}>{nft.name}</button>)
}
</div>
<motion.div layout className="nfts flex flex-wrap justify-center items-center gap-10 my-5">

{
Data.map((nft)=> {
  if (nft.name !== selected) return ;
  return (<>
  
 {
  nft.nfts.map((price , index)=>{
   return (<>
    <motion.div initial={{opacity:0, height:0, }} animate={{opacity:1, height:'auto'}} className="nft glassbg rounded-xl">
<img src={`/Images/${nft.name}/${nft.name + (index +1) }.png`} alt="Nft" className="object-contain w-full " />
<div className="author flex justify-between">
  <span className="lightWhiteColor">@Bong</span>
  <span className="lightWhiteColor">current Bid</span>
</div>
<div >
  <p  className="text-right textWhite  font-extrabold mb-2">{price} ETH</p>
</div>
<p className=" textWhite  font-extrabold">{nft.name} </p>

<button  onClick={(e)=>handleBid(e)}  className="btn-primary w-full my-2">Place a Bid for {price + 3} ETH</button>
</motion.div>
   </>)
  })
 }
  </>)
} )


}

</motion.div>


      </div>


    </div>
  );
};

export default Collections;
