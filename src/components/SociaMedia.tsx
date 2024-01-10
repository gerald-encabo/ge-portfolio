import '@/styles/social-media.scss';
import { NavLink } from 'react-router-dom';
import { socialMediaList } from '@/assets/data/dataList';
import { socialMediaTypes } from '@/types/TypesList';

const SociaMedia = () => {
  return (
    <div className='social-media'>
        {
            socialMediaList.map((list: socialMediaTypes, id: number) => (
                <NavLink 
                  key={id}
                  to={list.link}
                  title={list.name}                                 
                  target='_blank' 
                  rel='noreferrer'
                  >
                    {list.icon}
                </NavLink>
            ))
        }
    </div>
  )
}

export default SociaMedia