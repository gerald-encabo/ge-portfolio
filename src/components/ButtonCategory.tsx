import { useState } from "react";
import { Link } from 'react-router-dom';
import { categorySkillListType } from '@/types/TypesList'

const ButtonCategory = ({filter, categoryList}: categorySkillListType) => {

  const [count, setCount] = useState<number>(0);

  return (
    <div className='grid grid-cols-1 gap-2 mb-[10px] cursor-pointer mobile:grid-cols-2 mobile:mb-[30px]'>
        {
          categoryList.map((category: string, id: number) => {
            return (
                <Link
                  to={''}
                  key={id}
                  onClick={() => {
                    filter(category);
                    setCount(id);
                  }}
                  className={`global-btn ${id === count ? 'skills-active' : ''}`}
                >
                  <p>{category}</p>
                </Link>
            )
          })
        }
    </div>
  )
}

export default ButtonCategory