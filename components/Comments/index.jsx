import { useEffect, useRef } from 'react';
import useStore from '../../utils/store';

const Comments = () => {
  const darkmode = useStore((state) => state.darkmode);
  const commentsBox = useRef(null);
  useEffect(() => {
    let scriptEl = document.createElement('script');
    scriptEl.setAttribute('src', 'https://utteranc.es/client.js');
    scriptEl.setAttribute('crossorigin', 'anonymous');
    scriptEl.setAttribute('async', true);
    scriptEl.setAttribute('repo', 'theskinnycoder/portfolio-blog-comments');
    scriptEl.setAttribute('issue-term', 'title');
    if (darkmode) scriptEl.setAttribute('theme', 'dark-blue');
    else scriptEl.setAttribute('theme', 'github-light');
    commentsBox.current.appendChild(scriptEl);
  }, []);

  return (
    <div id='comments'>
      <div ref={commentsBox}></div>
    </div>
  );
};

export default Comments;
