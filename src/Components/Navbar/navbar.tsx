import {AiOutlineSearch} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi';
import {motion } from 'framer-motion';
const Navbar = ({setShowNav}:any) => {

  return (
   <motion.nav
   initial={{y:'-110%'}}
   animate={{y:'0'}}
   transition={{type:'spring' , duration:0.5 , stiffness:400}}
   className='flex justify-between items-center'>

<div className="logo ">
  <img src="/Images/PsychoArt.png" alt="Logo" />
</div>

<div className=' flex items-center p-1 glassbg search flex-1'>
<AiOutlineSearch style={{height:'100%', color :'rgba(255, 255, 255, 0.5)' , marginRight:'10px'}}/>
<input type="text" placeholder='Search Itmes and Collection ' className='bg-transparent lightWhiteColor w-full outline-none border-none'  />
</div>


<div className="hamburger lg:hidden visible" onClick={()=>setShowNav(true)}>
<GiHamburgerMenu style={{color:'white'}}/>
</div>
<motion.ul className='flex justify-between flex-1 items-center'>

  <motion.li>
    Collections
  </motion.li>
  <motion.li >
    Features
  </motion.li>
  <motion.li>
    FAQS
  </motion.li>
  <motion.li>
    <button className='btn-primary '> Select Wallet</button>
  </motion.li>
</motion.ul>

   </motion.nav>

  )
}  

export default Navbar