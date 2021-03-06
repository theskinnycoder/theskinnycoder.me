import Markdown from 'markdown-to-jsx';
import CodeBlock from './CodeBlock';
import ImageComponent from './ImageComponent';

const ContentBlock = ({ content }) => {
  return (
    <Markdown
      className="lg:prose-xl md:prose-lg dark:text-brand-light prose-brand max-w-5xl mx-auto mt-8 mb-5 font-normal prose text-left text-black"
      options={{
        overrides: {
          image: (props) => <ImageComponent {...props} />,
          img: (props) => <ImageComponent {...props} />,
          h1: (props) => <h1 {...props} />,
          h2: (props) => <h2 {...props} />,
          h3: (props) => <h3 {...props} className="dark:text-brand-light" />,
          h4: (props) => <h4 {...props} className="dark:text-brand-light" />,
          blockquote: (props) => (
            <blockquote
              {...props}
              className="bg-brand-divide dark:bg-brand border-brand dark:border-brand-light p-2 italic"
            />
          ),
          input: (props) => <input {...props} className="text-xs" />,
          th: (props) => <th {...props} className="text-brand" />,
          pre: (props) => (
            <CodeBlock
              className="flex items-center justify-center mx-auto overflow-x-scroll"
              content={props.children.props.children}
              language={props.children.props.className?.slice(5)}
            />
          ),
          code: (props) => (
            <code
              {...props}
              className="dark:text-white dark:bg-[#2E3440] bg-brand-light p-1 mx-auto overflow-x-scroll"
            />
          ),
          strong: (props) => (
            <strong {...props} className="dark:text-brand-light" />
          ),
        },
      }}
    >
      {content}
    </Markdown>
  );
};

export default ContentBlock;
