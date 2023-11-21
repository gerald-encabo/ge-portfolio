import { projectTypes } from '@/types/TypesList';
import ramenHouse from '@/assets/images/ramen-house.jpg';
import veloPro from '@/assets/images/velo-eat-online-food-ordering.jpg';
import guardian from '@/assets/images/guardian-credit-card.jpg';

export const projectList: Array<projectTypes> = [
    {
        id: 1,
        link1: 'https://github.com/gerald-encabo/ramen-house-restaurant',
        link2: 'https://ramen-house.vercel.app/',
        icon1: 'Code',
        icon2: 'Demo',
        img: ramenHouse,
        imgPosition: 'start',
        alt: 'Ramen House home page',
        title: 'Ramen House',
        desc: 'This is a full stack responsive e-commerce webpage focusing on the food industry of Ramen or Japanese Noodle soup.',
    },
    {
        id: 2,
        link1: 'https://github.com/gerald-encabo/velo-eat-online-food-ordering',
        link2: 'https://velo-eat-online-food-ordering.vercel.app/',
        icon1: 'Code',
        icon2: 'Demo',
        img: veloPro,
        imgPosition: '',
        alt: 'Velo Eat home page',
        title: 'Velo Eat',
        desc: 'Velo Eat is a TypeScript MERN stack application for online food ordering and delivery with a variety of food of choice.'
    },
    {
        id: 3,
        link1: 'https://github.com/gerald-encabo/guardian-credit-card',
        link2: 'https://guardian-credit-card.vercel.app/',
        icon1: 'Code',
        icon2: 'Demo',
        img: guardian,
        imgPosition: 'start',
        alt: 'Guardian home page',
        title: 'Guardian',
        desc: 'This Full MERN Stack app page is responsive on all devices and different browers with multiple pages and components.'},
]