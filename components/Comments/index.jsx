import { useEffect, useRef } from 'react';

const Comments = () => {
  const commentsBox = useRef(null);
  useEffect(() => {
    let scriptEl = document.createElement('script');
    scriptEl.setAttribute('src', 'https://utteranc.es/client.js');
    scriptEl.setAttribute('crossorigin', 'anonymous');
    scriptEl.setAttribute('async', true);
    scriptEl.setAttribute('repo', 'theskinnycoder/portfolio-blog-comments');
    scriptEl.setAttribute('issue-term', 'title');
    scriptEl.setAttribute('theme', 'github-light');
    commentsBox.current.appendChild(scriptEl);
  }, []);

  return (
    <div id='comments'>
      <div ref={commentsBox}></div>
    </div>
  );
};

export default Comments;
