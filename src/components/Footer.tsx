import Moment from 'moment';
import { NavLink } from 'react-router-dom';
import { socialMediaTypes } from '@/types/TypesList';
import { socialMediaList } from '@/assets/data/dataList';

const Footer = () => {
  return (
      <footer className='w-full h-full bg-lightColor'>
          <div className='flex justify-center items-center'>
              <div className='flex items-center justify-center border-t-[3px] border-darkColor h-[80px] tablet:h-full tablet:flex-col global-container'>
                  <div className='flex-[50%] text-[20px] font-medium tablet:text-center tablet:mt-[20px] tablet:mb-[10px]'>
                        <ul>
                            {
                                socialMediaList.map((list: socialMediaTypes) => (
                                    <li className='no-underline inline-block tablet:px-2' key={list.id}>
                                        <NavLink 
                                            to={list.link}
                                            title={list.name}                                 
                                            target='_blank' 
                                            rel='noreferrer'
                                            className='flex rounded-[50%] p-2 mr-[30px] text-[20px] cursor-pointer no-underline text-center tablet:mx-5 mobile:mx-[10px] global-btn'
                                        >
                                            {list.icon}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                  </div>
                  <div className='flex-[50%] text-[20px] font-medium text-end text-darkColor tablet:text-center tablet:mb-[20px]'>
                          <p className='tablet:leading-normal'>&#169; { Moment(new Date()).format("YYYY") } All Rights Reserved by Gerald Encabo</p>
                  </div>
              </div>
          </div>
      </footer>
  )
}

export default Footer