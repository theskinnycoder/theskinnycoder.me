import { FaFigma, FaTerminal, FaWindows } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { RiFileGifFill } from 'react-icons/ri';
import {
  SiAdobe,
  SiAsus,
  SiAudacity,
  SiCanva,
  SiJetbrains,
  SiObsstudio,
  SiPexels,
  SiUnsplash,
  SiVisualstudiocode,
} from 'react-icons/si';

const uses = [
  {
    category: 'Stock & Design',
    items: [
      {
        name: 'Fonts',
        href: 'https://fonts.google.com/',
        icon: <FcGoogle className='mr-1.5' />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com',
        icon: <FaFigma className='mr-1.5' />,
      },
      {
        name: 'Unsplash',
        href: 'https://unsplash.com',
        icon: <SiUnsplash className='mr-1.5' />,
      },
      {
        name: 'Pexels',
        href: 'https://pexels.com',
        icon: <SiPexels className='mr-1.5 text-[#02A081]' />,
      },
      {
        name: 'Tenor',
        href: 'https://tenor.com/',
        icon: <RiFileGifFill className='mr-1.5' />,
      },
    ],
  },
  {
    category: 'Development',
    items: [
      {
        name: 'VSCode',
        href: 'https://code.visualstudio.com',
        icon: <SiVisualstudiocode className='mr-1.5 text-[#20A0F1]' />,
      },
      {
        name: 'DataGrip',
        href: 'https://www.jetbrains.com/datagrip/',
        icon: <SiJetbrains className='mr-1.5' />,
      },
      {
        name: 'Windows Terminal',
        href: 'https://docs.microsoft.com/en-us/windows/terminal/',
        icon: <FaTerminal className='mr-1.5' />,
      },
    ],
  },
  {
    category: 'Youtube & Software',
    items: [
      {
        name: 'OBS Stduio',
        href: 'https://obsproject.com/',
        icon: <SiObsstudio className='mr-1.5' />,
      },
      {
        name: 'Premiere Pro',
        href: 'https://www.adobe.com/in/products/premiere.html',
        icon: <SiAdobe className='mr-1.5 text-[#FF0000]' />,
      },
      {
        name: 'Audacity',
        href: 'https://www.audacityteam.org/',
        icon: (
          <SiAudacity className='mr-1.5 text-[#0015EB] group-hover:text-[#F9B115] dark:group-hover:text-[#F9B115] dark:text-[#4351ee]' />
        ),
      },
      {
        name: 'Canva',
        href: 'https://canva.com',
        icon: <SiCanva className='mr-1.5 w-8 h-auto text-[#00C4CC]' />,
      },
    ],
  },
  {
    category: 'Setup',
    items: [
      {
        name: 'TUF-Gaming FX-504',
        href: '#',
        icon: (
          <SiAsus className='mr-1.5 w-auto h-14 text-[#15138C] dark:text-[#3d3adf] group-hover:text-light dark:group-hover:text-dark' />
        ),
      },
      {
        name: 'Windows 10',
        href: '#',
        icon: <FaWindows className='mr-1.5 text-[#00A8E8]' />,
      },
    ],
  },
];

export default uses;
