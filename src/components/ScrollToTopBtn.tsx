import '@/styles/scroll-to-top-btn.scss';
import UseButton from '@/hooks/UseButton';
import { useEffect, useState } from 'react';
import { ImArrowUp2 } from 'react-icons/im';

const ScrollToTopBtn = () => {

  const [scrollToTopBtn, setScrollToTopButton] = useState<boolean>(false);

  useEffect(() => {

    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setScrollToTopButton(true)
      } else {
        setScrollToTopButton(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className='scroll-to-top-btn' onClick={scrollUp}>
          {
            scrollToTopBtn && (
              <UseButton 
                to={'/about'}
                onClick={scrollUp}
                text={<ImArrowUp2 />} 
              />
            )
          }
    </div>
  )
}

export default ScrollToTopBtn