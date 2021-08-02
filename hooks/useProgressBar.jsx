import { useEffect, useState } from 'react';

const useProgressBar = () => {
  const [barLength, setBarLength] = useState(0);

  const changeBar = () => {
    const scrollTop = window?.scrollY;
    const docHeight = document?.body.offsetHeight;
    const winHeight = window?.innerHeight;
    const scrollPercent = scrollTop / (docHeight - winHeight);
    const scrollPercentRounded = Math.round(scrollPercent * 100);
    setBarLength(scrollPercentRounded);
  };

  useEffect(() => {
    window?.addEventListener('scroll', changeBar);
    return () => window?.removeEventListener('scroll', changeBar);
  }, []);

  return { barLength };
};

export default useProgressBar;
