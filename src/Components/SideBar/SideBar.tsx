import React from 'react'
import {ImCross} from 'react-icons/im'
const SideBar = ({showNav , setShowNav} : any) => {

    return (
    <>
    <div className="mobile__menu" style={
  {
    right : showNav ? "0px" : "-110%",
    transition : "right .5s ease-in-out"
  }
}>
          <div className="cross" onClick={()=> setShowNav(false)}>
        <ImCross></ImCross>
    </div>
    <ul className="mobile__links">
<li className='hover'>Collections</li>
<li className='hover'>Features</li>
<li className='hover'>FAQS</li>
<li className='hover'> <button className='btn-primary '> Select Wallet</button></li>


    </ul>


 
</div>

    </>
  )
}

export default SideBar