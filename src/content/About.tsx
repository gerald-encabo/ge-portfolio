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
  const yearExp:number = +currentYear - 2019;

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
    <section className={id + ' h-auto w-screen tablet:py-[2rem] bg-lightColor'} id={id}>
      <div className='global-container'>
        <div className='w-full h-auto flex py-[5rem] px-[10%] tablet:flex-col tablet:p-0 mobile:p-[0]'>
          <div className='h-full flex w-[35%] items-center justify-end z-10 tablet:w-full tablet:mb-[10px] tablet:justify-center'> 
            <motion.div 
                className='rounded-full border-[10px] border-solid border-darkColor overflow-hidden w-[80%] h-auto float-right shadow-[0px_0px_30px_3px] shadow-darkColor laptop:h-auto tablet:float-none tablet:block tablet:mb-[20px] tablet:w-[45%] mobile:w-[65%]'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 3 }}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0},
                }}
            >
                <img src={me} alt='Gerald F Encabo'className='rounded-full bg-lightColor w-full h-full laptop:h-auto hover:scale-[1.1] hover:transition hover:ease-in hover:duration-150' />
            </motion.div>
          </div>
          <div className='h-full flex flex-col w-[65%] tablet:w-[100%] pl-[50px] tablet:pl-0 mobile:justify-center'>
            <h4 className='text-[20px] font-normal text-darkColor'>Hi there, I'm</h4>
            <h1 className='text-[50px] text-darkColor my-10px mx-0 tracking-[1px] font-bold leading-[1.1]'>Gerald Encabo</h1>
            <h3 className='text-darkColor font-normal text-[26px] mb-[10px]'>Front-End <span ref={ textRef } className='text-darkColor font-semibold'></span></h3>
            <p className='text-darkColor text-[18px] font-normal mb-[20px] leading-tight'>With over {yearExp} years of experience as a front-end developer with a proven track record in the education, e-commerce, and healthcare sectors. Proficient in web development, utilizing modern libraries and cutting-edge frameworks. Skilled in crafting intuitive user interfaces, coding, testing, and troubleshooting to address issues and vulnerabilities, and integrating new functionalities to meet the demands of both internal and external stakeholders. Eager to delve into new technologies, embrace fresh challenges, and keep abreast of the latest trends and best practices in web development. My aspiration is to leverage my expertise to conceive and deliver innovative solutions that can positively impact the world.</p>
            <div>
              <UseButton 
                text={navbarTypes.Contact}
                onClick={() => handleContactClickBtn(navbarTypes.Contact.toLowerCase())} 
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About