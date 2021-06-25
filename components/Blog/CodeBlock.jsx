import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FaClipboard, FaCopy } from 'react-icons/fa';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import nord from 'react-syntax-highlighter/dist/cjs/styles/prism/nord';
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/prism';
import useStore from '../../utils/store';

const CodeBlock = ({ language, content }) => {
  const darkmode = useStore((state) => state.darkmode);
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className='max-w-[86vw] md:max-w-5xl mx-auto ring-2 ring-pink-300 dark:ring-pink-600 rounded-md my-10'>
      {language && (
        <div className='dark:text-white flex items-center justify-between px-4 text-black'>
          <span className='mt-3 font-medium text-pink-600'>{language}</span>
          <CopyToClipboard
            text={content}
            onCopy={() => setIsCopied(!isCopied)}
            className='focus:outline-none focus-within:outline-none md:pt-1 pt-2.5 outline-none'
          >
            <button>
              {isCopied ? (
                <FaClipboard className='hover:text-pink-600 md:w-4 md:h-4 w-3 h-3 text-pink-500' />
              ) : (
                <FaCopy className='hover:text-pink-600 md:w-4 md:h-4 w-3 h-3 text-pink-500' />
              )}
            </button>
          </CopyToClipboard>
        </div>
      )}
      <SyntaxHighlighter
        codeTagProps={{ className: `language-${language}` }}
        PreTag={(props) => {
          const { fontFamily, fontSize, borderRadius, textShadow, ...newStyles } = props.style;
          return <pre {...props} style={newStyles} />;
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
