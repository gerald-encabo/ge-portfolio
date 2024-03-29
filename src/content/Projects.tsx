import '@/styles/projects.scss'
import Title from '@/hooks/UseTitle';
import UseButton from '@/hooks/UseButton';
import { projectList } from '@/assets/data/projectList';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTitleTypes, projectTypes } from '@/types/TypesList';

const Projects = ({id, heading}: useTitleTypes) => {
  return (
    <section className={id} id={id} >
      <div className='container'>
        <Title heading={heading} />
        <div className='projects-layer'>
        {
          projectList.map((list: projectTypes, id: number) => (
            <div className="projects-container"
                 style={{
                  flexDirection: list.id % 2 === 0 ? 'row' : 'row-reverse',
                 }}  
                 key={id}
            >
              <div className='projects-left-wrapper'>
                  <div className='projects-left-column'>
                      <LazyLoadImage 
                        src={list.img} 
                        alt={list.alt}
                        effect="blur"
                        loading="lazy" 
                      />
                  </div>
              </div>
              <div className='projects-right-wrapper'>
                <div className='projects-right-column'
                  style={{
                    margin: list.id % 2 === 0 ? '0 0 0 30px' : '0 30px 0 0'
                  }}
                >
                  <h1>{list.title}</h1>
                  <p>{list.desc}</p>
                  <h3>Tech Stack:</h3>
                  <p>{list.teckStack}</p>
                  <ul>
                      <li>
                        <UseButton
                          to={list.link1}
                          target='_blank'
                          rel='noreferrer'
                          text={list.icon1}
                        />
                      </li>
                      <li>
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