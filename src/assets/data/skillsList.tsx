import { skillsListType } from "@/types/TypesList"

const skillsCategoryList: Array<skillsListType> = [
    {
        id: 1,
        category: 'Front-End',
        listSkills: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'SASS/SCSS', 'TypeScript', 'Tailwind', 'Styled Components', 'JSON', 'jQuery', 'Bootstrap5', 'React Hooks', 'Redux', 'AJAX']
    },
    {
        id: 2,
        category: 'Back-End',
        listSkills: ['SQL', 'NoSQL', 'Java', 'MongoDB', 'PHP', 'Node.js', 'Express.js', 'ASP.NET', 'RESTful API']
    },
    {
        id: 3,
        category: 'CMS & Cloud Services',
        listSkills: ['Adobe Experience Manager (AEM)', 'Axero Solutions', 'Strapi', 'ContentStack', 'Sitecore', 'WordPress', 'AWS Cloud', 'Vercel', 'Heroku', 'Render', 'Cloudinary']
    },
    {
        id: 4,
        category: 'Others',
        listSkills: ['Responsive Web Design', 'Accessibility Guidelines (WCAG & AODA), ', 'Unit Testing', 'CI/CD', 'Agile (Scrum)', 'GitHub', 'Visual Studio', 'Notepad++', 'Adobe Photoshop', 'Adobe Launch', 'Google Analytics', 'Google Tag Manager', 'Figma', 'GlooMaps', 'SiteImprove', 'Semrush', 'Monetate', 'Trello', 'Asana', 'QR Tiger', 'Hotjar', 'Testing Library', 'JEST', 'Webpack', 'Babel']
    }
] 

export default skillsCategoryList;