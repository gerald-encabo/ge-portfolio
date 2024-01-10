import '@/styles/button-category.scss'
import { categorySkillListType } from '@/types/TypesList'
import UseButton from '@/hooks/UseButton';

const ButtonCategory = ({filter, categoryList}: categorySkillListType) => {

  return (
    <div className='button-category'>
        {
          categoryList.map((category, id) => {
            return (
              <UseButton 
                key={id}
                onClick={() => filter(category)}
                text={category}
              />  
            )
          })
        }
    </div>
  )
}

export default ButtonCategory