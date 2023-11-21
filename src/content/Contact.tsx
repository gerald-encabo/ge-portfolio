import '@/styles/contact.scss';
import { useTitleTypes } from '@/types/TypesList';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import Title from '@/hooks/UseTitle';

const Contact = ({id, heading}: useTitleTypes) => {
  return (
    <section className={id} id={id} >
      <div className='container'>
        <Title heading={heading} />
        <div className='contact-container'>
          <div className='contact-container-left-column'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73985.94925459442!2d-79.62259925711294!3d43.83847789919895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b268883243a77%3A0xdd95317585aa054b!2sVaughan%2C%20ON!5e0!3m2!1sen!2sca!4v1700013392196!5m2!1sen!2sca" width="700" height="400" loading="lazy"></iframe>         
          </div>
          <div className='contact-container-right-column'>
            <p className='contact-info'><FaMapMarkerAlt className='contact-logo'/>Vaughan, Ontario</p>
            <p className='contact-info'><FaPhoneAlt className='contact-logo'/>647-803-3979</p>
            <p className='contact-info'><GrMail className='contact-logo'/>geraldencabo@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact