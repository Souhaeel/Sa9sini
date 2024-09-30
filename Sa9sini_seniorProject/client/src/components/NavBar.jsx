import React from 'react'
import './Navbar.css'

const NavBar = ({theme,setTheme}) => {
    const changeTheme = ()=>{
        theme === "light"? setTheme("dark") : setTheme("light")
    }
  return (
    <><div className='navbar'>
        <span className='maintitle'>Sa9sini</span>
        <i class="bi bi-house"></i>
        <div className='searchbox'>
            <input type="text" placeholder='Search...' />
            <i class="bi bi-search"></i>
        </div>
        <i class="bi bi-person-circle"></i>
        {theme === "light" ? <i class="bi bi-moon-fill" onClick={()=>{changeTheme()}}></i> : <i class="bi bi-brightness-high-fill" onClick={()=>{changeTheme()}}></i>}
    </div>
    <div className='add'>
    <div className="input-container">
      <input type="text" placeholder='Sa9si...' />
      <i class="bi bi-send"></i>
    </div>
    </div>
    </>
  )
}

export default NavBar