import Title from '@/hooks/UseTitle';
import UseButton from '@/hooks/UseButton';
import { projectList } from '@/assets/data/projectList';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTitleTypes, projectTypes } from '@/types/TypesList';

const Projects = ({id, heading}: useTitleTypes) => {
  return (
    <section className={id + ' h-auto w-screen bg-lightColor'} id={id} >
      <div className='global-container'>
        <Title heading={heading} />
        <div className='py-8 px-0'>
        {
          projectList.map((list: projectTypes, id: number) => (
            <div className="flex flex-row justify-center overflow-hidden w-full py-8 px-[10%] h-auto desktop:px-[2%] tablet:px-0 mobile:p-0 mobile:!flex-col [&:not(:nth-last-child(-n+1))]:mobile:border-b-[2px] 
            [&:not(:nth-last-child(-n+1))]:mobile:border-solid [&:not(:nth-last-child(-n+1))]:mobile:border-darkColor [&:not(:nth-last-child(-n+1))]:mobile:pb-[30px] [&:not(:nth-last-child(-n+1))]:mobile:mb-[40px]"
                 style={{
                  flexDirection: list.id % 2 === 0 ? 'row' : 'row-reverse',
                 }}  
                 key={id}
            >
              <div className='w-[50%] flex justify-center mobile:w-full'>
                  <div className='flex justify-center items-center overflow-hidden'>
                      <LazyLoadImage 
                        src={list.img} 
                        alt={list.alt}
                        loading="lazy"
                        className='h-[300px] min-w-[600px] max-w-full object-fill rounded-[4px] laptop:min-w-full tablet:h-[250px] mobile:h-[225px] mobile:mb-[20px] mobile:object-cover' 
                      />
                  </div>
              </div>
              <div className='w-[50%] flex justify-center mobile:w-full'>
                <div className='flex flex-col justify-center py-[10px] px-0 leading-normal tablet:p-0 mobile:m-0'
                  style={{
                    margin: list.id % 2 === 0 ? '0 0 0 30px' : '0 30px 0 0'
                  }}
                >
                  <h1 className='text-[39px] font-semibold pb-[20px] text-darkColor'>{list.title}</h1>
                  <p className='text-[18px] pb-[20px] leading-[1.3] text-darkColor'>{list.desc}</p>
                  <h3 className='pb-[5px] font-semibold text-darkColor'>Tech Stack:</h3>
                  <p className='text-darkColor'>{list.teckStack}</p>
                  <ul className='flex py-[20px] list-none'>
                      <li className='h-full inline-block mr-2.5 decoration-auto'>
                        <UseButton
                          to={list.link1}
                          target='_blank'
                          rel='noreferrer'
                          text={list.icon1}
                        />
                      </li>
                      <li className='h-full inline-block mr-2.5 decoration-auto'>
                        <UseButton
                          to={list.link2}
                          target='_blank' 
                          rel='noreferrer'
                          text={list.icon2}
                        />
                      </li>
                  </ul>
                </div>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </section>
  )
}

export default Projects