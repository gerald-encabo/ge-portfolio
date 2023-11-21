import '@/styles/list-skills.scss';
import { skillsListTypeProps } from '@/types/TypesList'
import ListSkillsCard from './ListSkillsCard';

const ListSkills = ({skillsList}: skillsListTypeProps) => {

  return (
    <div className='list-skills'>
      {
        skillsList.map((list, id) => {
          return (
            <div 
              className='list-skills-card'
              key={id}
            >
              <ListSkillsCard data={list.listSkills} />
            </div>
          )
        })
      }
    </div>
  )
}

export default ListSkills