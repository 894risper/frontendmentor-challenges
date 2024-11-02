  import React from 'react'
  import { Outlet,Link } from 'react-router-dom'
  
  const Layout = () => {
    return (
      <div className='flex h-screen'  >
        <nav className='bg-slate-600 w-28 p-4'>
            <ul className='flex flex-col '>
                <li>
                   <Link to="/">Home</Link> 
                </li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
            </ul>
        </nav>
        <div className='flex-grow'>
        <Outlet/>
        </div>
      </div>
    )
  }
  
  export default Layout