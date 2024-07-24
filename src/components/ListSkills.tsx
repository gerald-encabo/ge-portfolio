import ListSkillsCard from './ListSkillsCard';
import { skillsListTypeProps } from '@/types/TypesList'

const ListSkills = ({skillsList}: skillsListTypeProps) => {

  return (
    <div className='w-full h-full px-[2rem] mobile:p-0'>
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