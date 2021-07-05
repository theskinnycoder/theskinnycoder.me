import { useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import diff from 'react-syntax-highlighter/dist/cjs/languages/prism/diff';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import nord from 'react-syntax-highlighter/dist/cjs/styles/prism/nord';
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/prism';
import { useStore } from '../../utils';
import CopyCode from './CopyCode';

const CodeBlock = ({ language, content }) => {
  const darkmode = useStore((state) => state.darkmode);
  const [isCopied, setIsCopied] = useState(false);

  SyntaxHighlighter.registerLanguage('python', python);
  SyntaxHighlighter.registerLanguage('diff', diff);
  SyntaxHighlighter.registerLanguage('bash', bash);

  return (
    <div className='max-w-[86vw] md:max-w-5xl mx-auto ring-1 ring-pink-300 dark:ring-pink-600 my-10'>
      {language && (
        <div className='dark:text-white flex items-center justify-between px-4 text-black'>
          <span className='mt-3 font-medium text-pink-600'>{language}</span>
          <CopyCode content={content} isCopied={isCopied} setIsCopied={setIsCopied} />
        </div>
      )}
      <SyntaxHighlighter
        codeTagProps={{ className: `language-${language}` }}
        PreTag={(props) => {
          const { fontFamily, fontSize, borderRadius, textShadow, ...newStyles } = props.style;
          if (darkmode) {
            delete newStyles.background;
          }
          return (
            <pre
              {...props}
              style={newStyles}
              className={`${language ? 'border-t-[1px] dark:border-pink-600 border-pink-300' : ''}`}
            />
          );
        }}
        wrapLines={true}
        wrapLongLines={true}
        useInlineStyles={true}
        className='dark:text-light'
        language={language}
        style={darkmode ? nord : prism}
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
