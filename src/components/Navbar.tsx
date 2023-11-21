import '@/styles/navbar.scss'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';
import { navbarTypes } from '@/types/TypesList';

const Navbar = () => {

  const navbarList = Object.values(navbarTypes);
  const [click, setClick] = useState<boolean>(false);

  const handleClick = () => setClick(!click);

  const handleMenuClick = (navList: string) => {
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
    <div className='navbar'>
        <div className='navbar-wrapper'>
            <div className='navbar-container container'>
                 <div className='navbar-icon'>
                     <NavLink 
                        to={navbarTypes.About.toLowerCase()} 
                        onClick={() => handleMenuClick(navbarTypes.About.toLowerCase())} 
                        className='navbar-logo'
                     >
                        GE.
                     </NavLink>
                </div>
                <div className="navbar-mini-device" onClick={handleClick}>
                  { click ? <FaTimes /> : <FaBars /> }
                </div>
                <ul className={ click ? 'navbar-menu active' : 'navbar-menu' }>
                  {
                     navbarList.map((navList: string, id: number) => (
                        <li className='navbar-item' key={id}>
                           <NavLink
                              to={navList.toLowerCase()}
                              onClick={() => handleMenuClick(navList)} 
                              className='navbar-links'
                           >
                              {navList}
                           </NavLink>
                        </li>
                     ))
                  }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar