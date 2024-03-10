import NavBar from '../../Components/Shared/NavBar'
import Sidebar from '../../Components/Shared/SideBar'
import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='root'>
      <Sidebar/>
      <NavBar/>
        <div className='root-container'>
            <div className="wrapper">
                {children}
            </div>
        </div>
    </main>
  )
}

export default Layout