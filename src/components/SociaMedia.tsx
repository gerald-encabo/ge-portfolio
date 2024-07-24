import { NavLink } from 'react-router-dom';
import { socialMediaList } from '@/assets/data/dataList';
import { socialMediaTypes } from '@/types/TypesList';

const SociaMedia = () => {
  return (
    <div className='global-social-media tablet:hidden'>
        {
            socialMediaList.map((list: socialMediaTypes, id: number) => (
                <NavLink 
                  key={id}
                  to={list.link}
                  title={list.name}                                 
                  target='_blank' 
                  rel='noreferrer'
                  className='w-full h-full flex justify-center items-center cursor-pointer font-[25px]'
                  >
                    {list.icon}
                </NavLink>
            ))
        }
    </div>
  )
}

export default SociaMedia