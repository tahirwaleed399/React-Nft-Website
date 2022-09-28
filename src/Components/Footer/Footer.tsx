import React from 'react'
import {AiOutlineTwitter,AiFillGithub,AiFillYoutube,AiFillFacebook} from 'react-icons/ai';


const Footer = () => {
  return (
    <>
    <footer className='footer grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-center'  >
        
        <div>
            <img src="/Images/PsychoArt.png" alt="" />
            <p>The best NFT marketplace website in the world and feel your experience in selling or buy our work</p>
        </div>
            <ul>
                <h3>About</h3>
                <li>Products</li>
                <li>Products</li>
                <li>Products</li>
                <li>Products</li>
            </ul>  
            <ul>
                <h3>Company</h3>
                <li>Products</li>
                <li>Products</li>
                <li>Products</li>
                <li>Products</li>
            </ul>
              <ul>
                <h3>Contact</h3>
                <li>03336998773</li>
                <li>tahirwaleed399@gmail.com</li>
                <li className='flex justify-around'> <li style={{color: '#4ac7ec'}}><AiOutlineTwitter/></li>
    <li  style={{color: '#060b1b'}}><AiFillGithub/></li>
    <li  style={{color: '#FF0000'}}><AiFillYoutube/></li>
    <li  style={{color: '#2b55cc'}}><AiFillFacebook/></li></li>
            </ul>



    </footer>


<p className='credit text-center text-white'>Created by Waleed Tahir | All Right Reserved!</p>
    </>
  )
}

export default Footer;