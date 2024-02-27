import '@/styles/navbar.scss'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navbarTypes } from '@/types/TypesList';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

   const navbarList = Object.values(navbarTypes);
   const [click, setClick] = useState<boolean>(false);
   const [count, setCount] = useState<number>(0);

   const handleClick = () => setClick(!click);

   const handleNavbarClick = (navList: string) => {
      const scrollToId = document.getElementById(navList.toLowerCase());
      const location = scrollToId?.offsetTop!;

      window.scrollTo({
         left: 0,
         top: location - 80,
         behavior: "smooth",
      })

      // Handle close menu in mobile view
      setClick(false);
   }

   return (
      <header className='navbar'>
         <nav className='navbar-wrapper'>
               <div className='navbar-container container'>
                  <div className='navbar-icon'>
                     <NavLink 
                        to={navbarTypes.About.toLowerCase()} 
                        onClick={() => handleNavbarClick(navbarTypes.About.toLowerCase())} 
                        className='navbar-logo'
                     >
                        GE.
                     </NavLink>
                  </div>
                  <div className="navbar-mini-device" onClick={handleClick}>
                     { 
                        click ? <FaTimes /> : <FaBars /> 
                     }
                  </div>
                  <ul className={ click ? 'navbar-menu active' : 'navbar-menu' }>
                     {
                        navbarList.map((navList: string, id: number) => (
                           <li className="navbar-item" key={id}>
                              <NavLink
                                 to={navList.toLowerCase()}
                                 onClick={() => {
                                    setCount(id);
                                    handleNavbarClick(navList)
                                 }} 
                                 className={`navbar-links ${id === count ? 'active' : ''}`}
                              >
                                 {navList}
                              </NavLink>
                           </li>
                        ))
                     }
                  </ul>
               </div>
         </nav>
      </header>
   )
}

export default Navbar