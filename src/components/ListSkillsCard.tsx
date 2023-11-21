import '@/styles/list-skills-card.scss';
import { skillListData } from '@/types/TypesList';

const ListSkillsCard = ({data}: skillListData) => {
  return (
    <div className='list-skills-card'>
        {
            data.map((list, id) => {
                return (
                    <div 
                        key={id}
                        className='list-skills-card-container'
                    > 
                        {list}
                    </div>
                )
            })
        }
    </div>
  )
}

export default ListSkillsCard