import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import nord from 'react-syntax-highlighter/dist/cjs/styles/prism/nord';
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/prism';
import { useStore } from '../../utils';

const CodeBlock = ({ language, content }) => {
  const darkmode = useStore((state) => state.darkmode);
  const [isCopied, setIsCopied] = useState(false);

  SyntaxHighlighter.registerLanguage('python', python);
  SyntaxHighlighter.registerLanguage('bash', bash);

  return (
    <div className='max-w-[86vw] md:max-w-5xl mx-auto ring-1 ring-pink-300 dark:ring-pink-600 my-10'>
      {language && (
        <div className='dark:text-white flex items-center justify-between px-4 text-black'>
          <span className='mt-3 font-medium text-pink-600'>{language}</span>
          <CopyToClipboard
            text={content}
            onCopy={() => setIsCopied(!isCopied)}
            className='focus:outline-none focus-within:outline-none md:pt-1.5 pt-2.5 outline-none'
          >
            <button>
              {isCopied ? (
                <span className='hover:bg-pink-200 dark:text-white dark:hover:text-black p-1 text-sm font-medium text-black rounded'>
                  Copied!
                </span>
              ) : (
                <span className='hover:bg-pink-200 dark:text-white dark:hover:text-black p-1 text-sm font-medium text-black rounded'>
                  Copy
                </span>
              )}
            </button>
          </CopyToClipboard>
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
