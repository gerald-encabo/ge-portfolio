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
           strings: ['Web Developer', 'UI Developer', 'Web Specialist']
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
          <p>Experienced front-end developer with a proven track record in the education, e-commerce, and healthcare sectors. Proficient in web development, utilizing modern libraries and cutting-edge frameworks. Skilled in crafting intuitive user interfaces, coding, testing, and troubleshooting to address issues and vulnerabilities, and integrating new functionalities to meet the demands of both internal and external stakeholders. Eager to delve into new technologies, embrace fresh challenges, and keep abreast of the latest trends and best practices in web development. My aspiration is to leverage my expertise to conceive and deliver innovative solutions that can positively impact the world.</p>
          <UseButton 
            text={navbarTypes.Contact}
            onClick={() => handleContactClickBtn(navbarTypes.Contact.toLowerCase())} 
          />
        </div>
      </div>
    </section>
  )
}

export default About