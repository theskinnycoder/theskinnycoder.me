import { DiscussionEmbed } from 'disqus-react';

const Comments = ({ article }) => {
  const disqusShortname = 'theskinnycoder';
  const disqusConfig = {
    url: `https://theskinnycoder.me/${article.slug}`,
    identifier: article.slug,
    title: article.title,
  };

  return (
    <div className='dark:text-white p-3 pt-10 text-black'>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default Comments;
