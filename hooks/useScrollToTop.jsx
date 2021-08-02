import { useEffect, useState } from 'react';

const useScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const makeScroll = () => {
    window?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const checkScroll = () => {
      if (window?.pageYOffset > 400) {
        setShowScroll(true);
      } else if (window?.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    document?.addEventListener('scroll', checkScroll);

    return () => document?.removeEventListener('scroll', checkScroll);
  }, []);

  return { makeScroll, showScroll };
};

export default useScrollToTop;
