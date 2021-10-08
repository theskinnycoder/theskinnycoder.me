import {
  FacebookFilledIcon,
  LinkedInFilledIcon,
  RedditIcon,
  TelegramIcon,
  TwitterFilledIcon,
  WhatsAppIcon,
} from '@/icons';
import { AnimatePresence, motion } from 'framer-motion';
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
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="inline-flex items-center justify-center pt-2 space-x-3"
        initial={{
          x: '100vw',
        }}
        animate={{
          x: 0,
        }}
        exit={{
          x: '100vw',
        }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
      >
        {/* Twitter */}
        <TwitterShareButton
          className="focus:outline-none outline-none"
          url={`https://theskinnycoder.me${path}`}
          title={title}
        >
          <TwitterFilledIcon className="w-6 h-6 rounded text-[#49a1eb] hover:text-opacity-80" />
        </TwitterShareButton>

        {/* FaceBook */}
        <FacebookShareButton
          className="focus:outline-none outline-none"
          url={`https://theskinnycoder.me${path}`}
          quote={title}
          hashtag={hashtag}
        >
          <FacebookFilledIcon className="w-6 h-6 rounded text-[#3A5998] hover:text-opacity-80" />
        </FacebookShareButton>

        {/* Reddit */}
        <RedditShareButton
          url={`https://theskinnycoder.me${path}`}
          className="focus:outline-none outline-none"
          title={title}
        >
          <RedditIcon className="w-6 h-6 rounded text-[#FF4500] hover:text-opacity-80" />
        </RedditShareButton>

        {/* WhatsApp */}
        <WhatsappShareButton
          url={`https://theskinnycoder.me${path}`}
          className="focus:outline-none outline-none"
          title={title}
          separator="-"
        >
          <WhatsAppIcon className="w-6 h-6 rounded text-[#22CC65] hover:text-opacity-80" />
        </WhatsappShareButton>

        {/* LinkedIn */}
        <LinkedinShareButton
          source={`https://theskinnycoder.me${path}`}
          className="focus:outline-none outline-none"
          title={title}
          summary="Do check out other articles on this blog!"
        >
          <LinkedInFilledIcon className="w-6 h-6 rounded text-[#0177B5] hover:text-opacity-80" />
        </LinkedinShareButton>

        {/* Telegram */}
        <TelegramShareButton
          url={`https://theskinnycoder.me${path}`}
          className="focus:outline-none outline-none"
          title={title}
        >
          <TelegramIcon className="w-6 h-6 rounded text-[#24A2E0] hover:text-opacity-80" />
        </TelegramShareButton>
      </motion.div>
    </AnimatePresence>
  );
};

export default SocialShareButtons;
