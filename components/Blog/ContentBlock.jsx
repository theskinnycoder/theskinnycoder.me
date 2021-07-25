import Markdown from 'markdown-to-jsx';
import CodeBlock from './CodeBlock';
import ImageComponent from './ImageComponent';

export default function ContentBlock({ content }) {
  return (
    <Markdown
      className="lg:prose-xl md:prose-lg dark:text-light prose-pink max-w-5xl mx-auto mt-8 mb-5 font-normal prose text-left text-black"
      options={{
        overrides: {
          image: (props) => <ImageComponent {...props} />,
          img: (props) => <ImageComponent {...props} />,
          h1: (props) => <h1 {...props} />,
          h2: (props) => <h2 {...props} />,
          h3: (props) => <h3 {...props} className="dark:text-light" />,
          h4: (props) => <h4 {...props} className="dark:text-light" />,
          blockquote: (props) => (
            <blockquote
              {...props}
              className="dark:text-white dark:bg-pink-900 p-2 italic bg-pink-100"
            />
          ),
          input: (props) => <input {...props} className="text-xs" />,
          th: (props) => <th {...props} className="text-pink-600" />,
          pre: (props) => (
            <CodeBlock
              className="flex items-center justify-center mx-auto"
              content={props.children.props.children}
              language={props.children.props.className?.slice(5)}
            />
          ),
          code: (props) => (
            <code
              {...props}
              className="dark:text-white dark:bg-[#2E3440] bg-pink-100 p-1"
            />
          ),
          strong: (props) => <strong {...props} className="dark:text-light" />,
        },
      }}
    >
      {content}
    </Markdown>
  );
}
