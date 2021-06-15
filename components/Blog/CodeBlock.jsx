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
    <div className='relative max-w-[92vw] md:max-w-5xl p-1'>
      <div className='top-2 absolute inset-x-0 flex items-center justify-between px-6'>
        <span className='dark:text-light dark:bg-dark px-2 font-medium text-black bg-white'>
          {language ? language : ''}
        </span>
        <CopyToClipboard text={content} onCopy={() => setIsCopied(!isCopied)} className='pt-1'>
          <button className='focus:outline-none outline-none'>
            {isCopied ? (
              <FaClipboard className='dark:text-light hover:text-gray-700 dark:hover:text-gray-400 inline w-4 h-4 ml-2 text-black' />
            ) : (
              <FaCopy className='dark:text-light hover:text-gray-700 dark:hover:text-gray-400 inline w-4 h-4 ml-2 text-black' />
            )}
          </button>
        </CopyToClipboard>
      </div>
      <SyntaxHighlighter
        codeTagProps={{
          style: {
            fontFamily: 'JetBrains Mono, monospace',
          },
        }}
        customStyle={{ paddingTop: '40px', padding: '20px' }}
        PreTag={(props) => <pre {...props} />}
        CodeTag={(props) => <code {...props} />}
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
