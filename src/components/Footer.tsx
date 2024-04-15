import '@/styles/footer.scss';
import Moment from 'moment';
import { NavLink } from 'react-router-dom';
import { socialMediaTypes } from '@/types/TypesList';
import { socialMediaList } from '@/assets/data/dataList';


const Footer = () => {
  return (
      <footer className='footer'>
          <div className='footer-wrapper'>
              <div className='footer-container container'>
                  <div className='footer-item-left'>
                        <ul>
                            {
                                socialMediaList.map((list: socialMediaTypes) => (
                                    <li className='footer-item-list' key={list.id}>
                                        <NavLink 
                                            to={list.link}
                                            title={list.name}                                 
                                            target='_blank' 
                                            rel='noreferrer'
                                            className='footer-social-media-icon global-btn'
                                        >
                                            {list.icon}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                  </div>
                  <div className='footer-item-right'>
                          <p>&#169; { Moment(new Date()).format("YYYY") } All Rights Reserved by Gerald Encabo</p>
                  </div>
              </div>
          </div>
      </footer>
  )
}

export default Footer