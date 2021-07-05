import { useEffect, useRef } from 'react';
import { useStore } from '../../utils';

const Comments = () => {
  const darkmode = useStore((state) => state.darkmode);
  const commentsBox = useRef(null);
  useEffect(() => {
    let scriptEl = document.createElement('script');
    scriptEl.setAttribute('src', 'https://giscus.app/client.js');
    scriptEl.setAttribute('data-repo', 'theskinnycoder/portfolio-blog-comments');
    scriptEl.setAttribute('data-repo-id', 'MDEwOlJlcG9zaXRvcnkzNzg2Nzc1MDk=');
    scriptEl.setAttribute('data-mapping', 'pathname');
    scriptEl.setAttribute('data-category', 'Q&A');
    scriptEl.setAttribute('data-category-id', 'DIC_kwDOFpIpBc4B-NzB');
    scriptEl.setAttribute('data-reactions-enabled', '1');
    if (darkmode) scriptEl.setAttribute('data-theme', 'dark');
    else scriptEl.setAttribute('data-theme', 'light');
    scriptEl.setAttribute('crossorigin', 'anonymous');
    scriptEl.setAttribute('async', true);
    commentsBox.current.appendChild(scriptEl);
  }, [darkmode]);

  return (
    <>
      <div className='flex flex-col justify-center w-full mx-auto mt-5 space-y-5'>
        <div className='border-pink-300 border-t-[1px] w-full' />
        <div ref={commentsBox}></div>
      </div>
    </>
  );
};

export default Comments;
