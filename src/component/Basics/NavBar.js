import React from 'react'

const NavBar = ({filterItem,menuList}) => {
  return (
    <>
    <nav className='navbar'>
        <div className='btn-group'>

    {
        menuList.map((curElem)=>{
            return (
            <button className='btn btn-outline-primary' onClick={() => filterItem(curElem)}>{curElem}</button>
            )
        })
    }

            
            
        </div>
        </nav> 
        </>
  )
}

export default NavBar;