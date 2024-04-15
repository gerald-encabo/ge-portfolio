import '@/styles/navbar.scss'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navbarTypes } from '@/types/TypesList';
import { FaBars, FaTimes } from 'react-icons/fa';
import { socialMediaList } from '@/assets/data/dataList';
import { socialMediaTypes } from '@/types/TypesList';

import { FiSun } from "react-icons/fi";
import { LuMoon } from "react-icons/lu";

const Navbar = () => {

   const navbarList = Object.values(navbarTypes);
   const [menuBtn, setMenuBtn] = useState<boolean>(false);
   const [toggleBtn, setToogleBtn] = useState<boolean>(false);
   const [count, setCount] = useState<number>(0);

   const handleMenuBtn = () => setMenuBtn(!menuBtn);
   const handleToogleBtn = () => setToogleBtn(!toggleBtn);

   const handleNavbarClick = (navList: string) => {
      const scrollToId = document.getElementById(navList.toLowerCase());
      const location = scrollToId?.offsetTop!;

      window.scrollTo({
         left: 0,
         top: location - 80,
         behavior: "smooth",
      })

      // Handle close menu in mobile view
      setMenuBtn(false);
   }

   return (
      <header className='navbar'>
         <nav className='navbar-wrapper'>
               <div className='navbar-container container'>
                  <div className='navbar-icon'>
                     <NavLink 
                        to={''}
                        onClick={() => handleNavbarClick(navbarTypes.About.toLowerCase())} 
                        className='navbar-logo'
                     >
                        GE.
                     </NavLink>
                  </div>
                  {/* <div className="" onClick={handleToogleBtn}>
                     { 
                        toggleBtn ? <FiSun /> : <LuMoon /> 
                     }
                  </div> */}
                  <div className="navbar-mini-device" onClick={handleMenuBtn}>
                     { 
                        menuBtn ? <FaTimes /> : <FaBars /> 
                     }
                  </div>
                  <ul className={ menuBtn ? 'navbar-menu active' : 'navbar-menu' }>
                     {
                        navbarList.map((navList: string, id: number) => (
                           <li className="navbar-item" key={id}>
                              <NavLink
                                 to={navList.toLowerCase()}
                                 onClick={() => {
                                    setCount(id);
                                    handleNavbarClick(navList)
                                 }} 
                                 className={`navbar-links ${id === count ? 'active' : ""}`}
                              >
                                 {navList}
                              </NavLink>
                           </li>
                        ))
                     }
                     {/* <div className="" onClick={handleToogleBtn}>
                     { 
                        toggleBtn ? <FiSun /> : <LuMoon /> 
                     }
                     </div> */}
                     {/* Social Media Buttons on mobile navbar */}
                     <div className='navbar-social-media'>
                     {
                        socialMediaList.map((list: socialMediaTypes, id: number) => (
                           <NavLink 
                              key={id}
                              to={list.link}
                              title={list.name}                                 
                              target='_blank' 
                              rel='noreferrer'
                              className='navbar-social-media-icon global-btn'
                              >
                                 {list.icon}
                           </NavLink>
                        ))
                     }
                     </div>
                  </ul>
               </div>
         </nav>
      </header>
   )
}

export default Navbar