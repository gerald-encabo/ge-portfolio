import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navbarTypes } from '@/types/TypesList';
import { FaBars, FaTimes } from 'react-icons/fa';
import { socialMediaList } from '@/assets/data/dataList';
import { socialMediaTypes, darkThemeTypes } from '@/types/TypesList';
import { FiSun } from "react-icons/fi";
import { LuMoon } from "react-icons/lu";

const Navbar = ({setDarkTheme, darkTheme}: darkThemeTypes) => {

   const navbarList = Object.values(navbarTypes);
   const [menuBtn, setMenuBtn] = useState<boolean>(false);
   const [toggleBtn, setToogleBtn] = useState<boolean>(false);
   const [count, setCount] = useState<number>(0);

   const handleMenuBtn = () => setMenuBtn(!menuBtn);
   const handleToogleBtn = () => {
      setToogleBtn(!toggleBtn);
      setDarkTheme(!darkTheme);
   }
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
      <header className='w-full h-full sticky top-0 z-50 bg-lightColor'>
         <nav className='h-[80px] w-full'>
               <div className='flex justify-between items-center h-[80px] border-darkColor border-b-[3px] border-solid global-container'>
                  <div className='w-[180px] text-[20px] font-medium'>
                     <NavLink 
                        to={''}
                        onClick={() => handleNavbarClick(navbarTypes.About.toLowerCase())} 
                        className='flex justify-center text-[40px] none font-title rounded-[50%] text-darkColor'
                     >
                        GE.
                     </NavLink>
                  </div>
                  <div className="text-darkColor hidden mobile:flex mobile:justify-center mobile:absolute mobile:top-[50px] mobile:right-[40px] mobile:text-[1.8rem] mobile:cursor-pointer mobile:translate-y-[-100%] mobile:translate-x-[60%]" onClick={handleMenuBtn}>
                     { 
                        menuBtn ? <FaTimes /> : <FaBars /> 
                     }
                  </div>
                  <ul className={`flex justify-between items-center list-none text-center w-[400px] mobile:flex-col mobile:justify-start mobile:w-full mobile:h-screen mobile:absolute mobile:top-[80px] mobile:left-[-100%] mobile:transition-all mobile:ease-in mobile:duration-[0.5s] ${menuBtn ? 'navbar-active-window' : ''}`}>
                     {
                        navbarList.map((navList: string, id: number) => (
                           <li className="no-underline inline-block w-full" key={id}>
                              <NavLink
                                 to={navList.toLowerCase()}
                                 onClick={() => {
                                    setCount(id);
                                    handleNavbarClick(navList)
                                 }} 
                                 className={`text-darkColor font-normal text-[20px] flex justify-around items-center no-underline h-full w-auto cursor-pointer mobile::text-center mobile:p-[1.3rem] mobile:w-full mobile:table hover:cursor-pointer hover:font-bold hover:duration-[0.3s] ${id === count ? 'navbar-active-btn' : ''}`}
                              >
                                 {navList}
                              </NavLink>
                           </li>
                        ))
                     }
                     <div 
                        className="flex items-center justify-center w-[40%] h-[40px] text-[18px] cursor-pointer mobile:w-[20%] mobile:text-[22px] hover:bg-darkColor hover:text-lightColor rounded-[50%] text-darkColor" 
                        onClick={ () => { 
                           handleToogleBtn();      
                           setMenuBtn(false);
                        }}
                     >
                     { 
                        toggleBtn ? <FiSun /> : <LuMoon /> 
                     }
                     </div>
                     {/* Social Media Buttons on mobile navbar */}
                     <div className='hidden mobile:flex mobile:w-full mobile:h-[15%] mobile:items-center mobile:justify-center'>
                     {
                        socialMediaList.map((list: socialMediaTypes, id: number) => (
                           <NavLink 
                              key={id}
                              to={list.link}
                              title={list.name}                                 
                              target='_blank' 
                              rel='noreferrer'
                              className='flex rounded-[50%] p-2 mx-[15px] text-[20px] cursor-pointer no-underline text-darkColor global-btn'
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