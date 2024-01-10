import About from '@/content/About';
import Skills from '@/content/Skills';
import Contact from '@/content/Contact';
import Projects from '@/content/Projects';
import SociaMedia from '@/components/SociaMedia';
import ScrollToTopBtn from '@/components/ScrollToTopBtn';
import { navbarTypes } from '@/types/TypesList';

export const Main = () => {
  return (
    <div>
        <About 
          id={navbarTypes.About.toLowerCase()} 
          heading={navbarTypes.About} 
        />
        <Skills 
          id={navbarTypes.Skills.toLowerCase()} 
          heading={navbarTypes.Skills} 
        />
        <Projects 
          id={navbarTypes.Projects.toLowerCase()} 
          heading={navbarTypes.Projects} 
        />
        <Contact 
          id={navbarTypes.Contact.toLowerCase()} 
          heading={navbarTypes.Contact} 
        />
        <SociaMedia />
        <ScrollToTopBtn />
    </div>
  )
}