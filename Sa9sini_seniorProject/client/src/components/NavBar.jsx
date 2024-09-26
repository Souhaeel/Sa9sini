import React from 'react'
import './Navbar.css'

const NavBar = ({theme,setTheme}) => {
    const changeTheme = ()=>{
        theme === "light"? setTheme("dark") : setTheme("light")
    }
  return (
    <div className='navbar'>
        <span className='maintitle'>Sa9sini</span>
        <i class="bi bi-house"></i>
        <div className='searchbox'>
            <input type="text" placeholder='Search...' />
            <i class="bi bi-search"></i>
        </div>
        <button>Sa9si</button>
        {theme === "light" ? <i class="bi bi-moon-fill" onClick={()=>{changeTheme()}}></i> : <i class="bi bi-brightness-high-fill" onClick={()=>{changeTheme()}}></i>}
    </div>
  )
}

export default NavBar