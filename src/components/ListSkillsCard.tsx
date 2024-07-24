import { skillListData } from '@/types/TypesList';

const ListSkillsCard = ({data}: skillListData) => {
  return (
    <div className='w-100 h-100 flex flex-wrap'>
        {
            data.map((list, id) => {
                return (
                    <div 
                        key={id}
                        className='text-darkColor flex justify-center items-center w-[150px] h-[150px] mx-[10px] mb-[20px] p-[10px] border border-solid border-darkColor rounded text-center tablet:w-[100px] tablet:h-[100px] mobile:mr-[2px] tablet:mb-[10px]'
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