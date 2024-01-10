import '@/styles/list-skills.scss';
import ListSkillsCard from './ListSkillsCard';
import { skillsListTypeProps } from '@/types/TypesList'

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