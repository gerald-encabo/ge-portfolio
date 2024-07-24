import Title from '@/hooks/UseTitle';
import Spinner from '@/components/Spinner';
import ListSkills from '@/components/ListSkills';
import skillsData from '@/assets/data/skillsList';
import ButtonCategory from '@/components/ButtonCategory';
import { useTitleTypes } from '@/types/TypesList';
import { Suspense, useEffect, useState } from 'react';

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
    <section className={id + ' h-auto w-screen bg-lightColor'} id={id} >
      <div className='global-container'>
        <Title heading={heading} />
        <div className='flex items-center w-100 h-100 py-16 px-[10%] desktop:px-[2%] tablet:py-8 tablet:px-0 mobile:flex-col'>
          <div className='h-full w-[20%] mobile:w-full'>
            <ButtonCategory 
              filter={filter}
              categoryList={categoryList} 
            />
          </div>
          <div className='h-full w-[80%] mobile:w-full'>
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