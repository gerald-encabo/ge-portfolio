import '@/styles/skills.scss';
import { useTitleTypes } from '@/types/TypesList';
import { Suspense, useEffect, useState } from 'react';
import Title from '@/hooks/UseTitle';
import Spinner from '@/components/Spinner';
import ListSkills from '@/components/ListSkills';
import skillsData from '@/assets/data/skillsList';
import ButtonCategory from '@/components/ButtonCategory';

// Get all category and put them into object
const skillList = [...new Set(skillsData.map(item => item.category))];

const Skills = ({id, heading}: useTitleTypes) => {

  const [categoryList] = useState(skillList);
  const [skillsList, setSkillsList] = useState(skillsData);

  useEffect(() => {
    const setDefault = skillsData.filter((item) => {
      return item.category === 'Front-End';
    })
    setSkillsList(setDefault);
  }, [])

  const filter = (category: string) => {

    const filterData = skillsData.filter((item) => {
      return item.category === category
    })

    setSkillsList(filterData);
  }

  return (
    <section className={id} id={id} >
      <div className='container'>
        <Title heading={heading} />
        <div className='skills-container'>
          <div className='skills-left-column'>
            <ButtonCategory 
              filter={filter}
              categoryList={categoryList} 
            />
          </div>
          <div className='skills-right-column'>
            <Suspense fallback={<Spinner />}>
              <ListSkills skillsList={skillsList} />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills