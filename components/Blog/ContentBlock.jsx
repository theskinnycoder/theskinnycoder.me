import Markdown from 'markdown-to-jsx';
import CodeBlock from './CodeBlock';
import ImageComponent from './ImageComponent';

const ContentBlock = ({ content }) => {
  return (
    <Markdown
      className='lg:prose-xl md:prose-lg dark:text-light max-w-5xl mx-auto mt-8 font-[490] prose text-left text-black'
      options={{
        overrides: {
          image: (props) => <ImageComponent {...props} />,
          img: (props) => <ImageComponent {...props} />,
          h1: (props) => <h1 {...props} className='dark:text-light' />,
          h2: (props) => <h2 {...props} className='dark:text-light' />,
          h3: (props) => <h3 {...props} className='dark:text-light' />,
          h4: (props) => <h4 {...props} className='dark:text-light' />,
          blockquote: (props) => <blockquote {...props} className='dark:text-light' />,
          pre: (props) => (
            <CodeBlock
              className='flex items-center justify-center mx-auto'
              content={props.children.props.children}
              language={props.children.props.className?.slice(5)}
            />
          ),
          code: (props) => (
            <code {...props} className='dark:text-light dark:bg-[#2E3440] bg-[#F5F2F0]' />
          ),
          strong: (props) => <strong {...props} className='dark:text-light' />,
          a: (props) => <a {...props} className='dark:text-light' />,
        },
      }}
    >
      {content}
    </Markdown>
  );
};

export default ContentBlock;
