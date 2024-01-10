import '@/styles/about.scss';
import me from '@/assets/images/me.png';
import Moment from 'moment';
import UseButton from '@/hooks/UseButton';
import { init } from 'ityped';
import { motion } from "framer-motion";
import { useRef, useEffect } from 'react';
import { navbarTypes } from '@/types/TypesList';
import { useTitleTypes } from '@/types/TypesList';

export const About = ({id}: useTitleTypes) => {
  
  const textRef = useRef<any>();
  const currentYear:string = Moment(new Date()).format("YYYY");
  const yearExp:number = +currentYear - 2018;

  const handleContactClickBtn = (navList: string) => {
    const scrollToId = document.getElementById(navList.toLowerCase());
    const location = scrollToId?.offsetTop!;

    window.scrollTo({
       left: 0,
       top: location - 80,
       behavior: "smooth",
    })
  }

  useEffect(() => {
       init(textRef.current, {
           backDelay: 1500,
           backSpeed: 60,
           showCursor: true,
           strings: ['UI Developer', 'AEM Developer', 'Web Specialist']
       })
  }, [])

  return (
    <section className={id + ' container'} id={id}>
      <div className='about-container'>
        <div className='about-left-wrapper'> 
          <motion.div 
              className='logo'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 3 }}
              variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0},
              }}
          >
              <img src={me}  alt='Gerald F Encabo'/>
          </motion.div>
        </div>
        <div className='about-right-wrapper'>
          <h4>Hi there, I'm</h4>
          <h1>Gerald Encabo</h1>
          <h3>Front-End <span ref={ textRef }></span></h3>
          <p>Web developer with {yearExp}+ years of experience building and maintaining responsive websites across diverse industries. Proven of experience within web development basics, modern libraries, and the latest frameworks. Knowledgeable in creating user interfaces, writing & testing codes, troubleshooting issues & vulnerabilities, and implementing new features based on stakeholder feedback. Self-motivated toward learning new skills and adapting modern technologies.</p>
          <UseButton 
            to={navbarTypes.Contact.toLowerCase()}
            text={navbarTypes.Contact}
            onClick={() => handleContactClickBtn(navbarTypes.Contact.toLowerCase())} 
          />
        </div>
      </div>
    </section>
  )
}

export default About