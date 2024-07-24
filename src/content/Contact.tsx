import Title from '@/hooks/UseTitle';
import { GrMail } from 'react-icons/gr';
import { useTitleTypes } from '@/types/TypesList';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = ({id, heading}: useTitleTypes) => {
  return (
    <section className={id + ' h-auto w-screen bg-lightColor'} id={id} >
      <div className='global-container'>
        <Title heading={heading} />
        <div className='flex w-full h-full py-[4rem] px-[10%] desktop:py-[4rem] desktop:px-[2%] tablet:flex-col tablet:py-[2rem] tablet:px-[0%]'>
          <div className='w-3/5 mr-[5%] tablet:w-full tablet:h-full tablet:m-0'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73985.94925459442!2d-79.62259925711294!3d43.83847789919895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b268883243a77%3A0xdd95317585aa054b!2sVaughan%2C%20ON!5e0!3m2!1sen!2sca!4v1700013392196!5m2!1sen!2sca" width="700" height="400" loading="lazy" className='w-full border-0 tablet:h-[300px] mobile:h-full mobile:w-full'></iframe>         
          </div>
          <div className='w-2/5 tablet:w-full tablet:h-full'>
            <p className='flex items-center text-[20px] my-[20px] mx-0 text-darkColor'><FaMapMarkerAlt className='text-[30px] mr-2.5'/>Vaughan, Ontario</p>
            <p className='flex items-center text-[20px] my-[20px] mx-0 text-darkColor'><FaPhoneAlt className='text-[30px] mr-2.5'/>647-803-3979</p>
            <p className='flex items-center text-[20px] text-darkColor'><GrMail className='text-[30px] mr-2.5'/>geraldencabo@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact