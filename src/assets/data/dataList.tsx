import { socialMediaTypes } from "@/types/TypesList";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';

export const socialMediaList: Array<socialMediaTypes> = [
    {
        id: 1,
        name: 'Facebook',
        link: 'https://www.facebook.com/gerald.encabo.5/',
        icon: <BsFacebook />
    },
    {
        id: 2,
        name: 'Instagram',
        link: 'https://www.instagram.com/iamgeerald/',
        icon: <BsInstagram />

    },
    {
        id: 3,
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/gerald-encabo/',
        icon: <BsLinkedin />
    },
    {
        id: 4,
        name: 'Github',
        link: 'https://github.com/gerald-encabo',
        icon: <BsGithub />
    },
]