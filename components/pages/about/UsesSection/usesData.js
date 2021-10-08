import {
  AdobeIcon,
  AsusIcon,
  AudacityIcon,
  CanvaIcon,
  FigmaIcon,
  GoogleIcon,
  JetBrainsIcon,
  OBSIcon,
  PexelsIcon,
  PostManIcon,
  TenorIcon,
  TerminalIcon,
  UnSplashIcon,
  VSCodeIcon,
  WindowsIcon,
} from '@/icons';

const uses = [
  {
    category: 'Stock & Design',
    items: [
      {
        name: 'Fonts',
        href: 'https://fonts.google.com/',
        icon: <GoogleIcon className="mr-1.5" />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com',
        icon: <FigmaIcon className="mr-1.5" />,
      },
      {
        name: 'Unsplash',
        href: 'https://unsplash.com',
        icon: <UnSplashIcon className="mr-1.5" />,
      },
      {
        name: 'Pexels',
        href: 'https://pexels.com',
        icon: <PexelsIcon className="mr-1.5 text-[#02A081]" />,
      },
      {
        name: 'Tenor',
        href: 'https://tenor.com/',
        icon: <TenorIcon className="mr-1.5" />,
      },
    ],
  },
  {
    category: 'Development',
    items: [
      {
        name: 'VSCode',
        href: 'https://code.visualstudio.com',
        icon: <VSCodeIcon className="mr-1.5 text-[#20A0F1]" />,
      },
      {
        name: 'DataGrip',
        href: 'https://www.jetbrains.com/datagrip/',
        icon: <JetBrainsIcon className="mr-1.5" />,
      },
      {
        name: 'Windows Terminal',
        href: 'https://docs.microsoft.com/en-us/windows/terminal/',
        icon: <TerminalIcon className="mr-1.5" />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/downloads/',
        icon: <PostManIcon className="mr-1.5 text-[#FD6733]" />,
      },
    ],
  },
  {
    category: 'Youtube & Software',
    items: [
      {
        name: 'OBS Stduio',
        href: 'https://obsproject.com/',
        icon: <OBSIcon className="mr-1.5" />,
      },
      {
        name: 'Premiere Pro',
        href: 'https://www.adobe.com/in/products/premiere.html',
        icon: <AdobeIcon className="mr-1.5 text-[#FF0000]" />,
      },
      {
        name: 'Audacity',
        href: 'https://www.audacityteam.org/',
        icon: (
          <AudacityIcon className="mr-1.5 text-[#0015EB] group-hover:text-[#F9B115] dark:group-hover:text-[#F9B115] dark:text-[#4351ee]" />
        ),
      },
      {
        name: 'Canva',
        href: 'https://canva.com',
        icon: <CanvaIcon className="mr-1.5 w-8 h-auto text-[#00C4CC]" />,
      },
    ],
  },
  {
    category: 'Setup',
    items: [
      {
        name: 'TUF FX-504',
        href: 'https://www.amazon.in/15-6-inch-FireCuda-Windows-Graphics-FX504GE-E4599T/dp/B07HV6XFL7/ref=asc_df_B07HV6XFL7/?tag=googleshopdes-21&linkCode=df0&hvadid=397006792738&hvpos=&hvnetw=g&hvrand=3587828681582940213&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9299745&hvtargid=pla-793139552090&psc=1&ext_vrnc=hi',
        icon: (
          <AsusIcon className="mr-1.5 w-auto h-14 text-AudacityIcon[#15138C] dark:text-[#3d3adf] CanvaIcon-hover:text-brand-light dark:group-hover:text-black" />
        ),
      },
      {
        name: 'Windows 10',
        href: 'https://www.microsoft.com/en-in/software-download/windows10',
        icon: <WindowsIcon className="mr-1.5 text-[#00A8E8]" />,
      },
    ],
  },
];

export default uses;
