import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const NavBar = ({theme,setTheme,search,setSearch}) => {
  const navigate = useNavigate()
    const changeTheme = ()=>{
        theme === "light"? setTheme("dark") : setTheme("light")
    }
  return (
    <><div className='navbar'>
        <span className='maintitle'>Sa9sini</span>
        <i class="bi bi-house" onClick={()=>{navigate("/mainPage")}}></i>
        <div className='searchbox'>
            <input type="text" placeholder='Search...' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
            <i class="bi bi-search"></i>
        </div>
        <i class="bi bi-person-circle" onClick={()=>{navigate("/ProfilePage")}}></i>
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