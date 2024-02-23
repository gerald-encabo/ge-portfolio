import '@/styles/use-button.scss'
import '@/styles/button-category.scss'
import { useState } from "react";
import { Link } from 'react-router-dom';
import { categorySkillListType } from '@/types/TypesList'

const ButtonCategory = ({filter, categoryList}: categorySkillListType) => {

  const [count, setCount] = useState<number>(0);

  return (
    <div className='button-category'>
        {
          categoryList.map((category, id) => {
            return (
                <Link
                  to={''}
                  key={id}
                  onClick={() => {
                    filter(category);
                    setCount(id);
                  }}
                  className={`global-btn ${id === count ? 'active' : ''}`}
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