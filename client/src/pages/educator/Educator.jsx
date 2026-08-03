import React from 'react';
import NavBar from '../../components/educator/NavBar';
import { Outlet } from 'react-router-dom';
import SideBar from '../../components/educator/SideBar';
import Footer from '../../components/educator/Footer';

const Educator = () => {
  return (
    <div className='text-default'>
      <NavBar/>
      <div className='flex'>
        <SideBar/>
        <div className='flex-1'>
          {<Outlet/>}
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Educator
