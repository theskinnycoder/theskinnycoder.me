import { FaTelegramPlane } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { SiFacebook, SiLinkedin, SiReddit, SiTwitter } from 'react-icons/si';
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

const SocialShareButtons = ({ path, title, hashtag }) => {
  return (
    <div className='flex items-center justify-center space-x-3'>
      {/* Twitter */}
      <TwitterShareButton
        className='focus:outline-none outline-none'
        url={`https://theskinnycoder.me${path}`}
        title={title}
      >
        <SiTwitter className='w-6 h-6 rounded text-[#49a1eb] hover:text-opacity-80' />
      </TwitterShareButton>

      {/* FaceBook */}
      <FacebookShareButton
        className='focus:outline-none outline-none'
        url={`https://theskinnycoder.me${path}`}
        quote={title}
        hashtag={hashtag}
      >
        <SiFacebook className='w-6 h-6 rounded text-[#3A5998] hover:text-opacity-80' />
      </FacebookShareButton>

      {/* Reddit */}
      <RedditShareButton
        url={`https://theskinnycoder.me${path}`}
        className='focus:outline-none outline-none'
        title={title}
      >
        <SiReddit className='w-6 h-6 rounded text-[#FF4500] hover:text-opacity-80' />
      </RedditShareButton>

      {/* WhatsApp */}
      <WhatsappShareButton
        url={`https://theskinnycoder.me${path}`}
        className='focus:outline-none outline-none'
        title={title}
        separator='-'
      >
        <RiWhatsappFill className='w-6 h-6 rounded text-[#22CC65] hover:text-opacity-80' />
      </WhatsappShareButton>

      {/* LinkedIn */}
      <LinkedinShareButton
        source={`https://theskinnycoder.me${path}`}
        className='focus:outline-none outline-none'
        title={title}
        summary='Do check out other articles on this blog!'
      >
        <SiLinkedin className='w-6 h-6 rounded text-[#0177B5] hover:text-opacity-80' />
      </LinkedinShareButton>

      {/* Telegram */}
      <TelegramShareButton
        url={`https://theskinnycoder.me${path}`}
        className='focus:outline-none outline-none'
        title={title}
      >
        <FaTelegramPlane className='w-6 h-6 rounded text-[#24A2E0] hover:text-opacity-80' />
      </TelegramShareButton>
    </div>
  );
};

export default SocialShareButtons;
