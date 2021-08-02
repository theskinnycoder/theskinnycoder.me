import useDarkMode from '@/hooks/useDarkMode';
import { useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import diff from 'react-syntax-highlighter/dist/cjs/languages/prism/diff';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import nord from 'react-syntax-highlighter/dist/cjs/styles/prism/nord';
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/prism';
import CopyCode from './CopyCode';

const CodeBlock = ({ language, content }) => {
  const { darkMode } = useDarkMode();
  const [isCopied, setIsCopied] = useState(false);

  SyntaxHighlighter.registerLanguage('python', python);
  SyntaxHighlighter.registerLanguage('diff', diff);
  SyntaxHighlighter.registerLanguage('bash', bash);

  return (
    <div className="max-w-[78vw] md:max-w-5xl mx-auto ring-1 ring-pink-300 dark:ring-pink-600 my-10">
      {language && (
        <div className="dark:text-white flex items-center justify-between px-4 text-black">
          <span className="mt-3 font-medium text-pink-600">{language}</span>
          <CopyCode
            content={content}
            isCopied={isCopied}
            setIsCopied={setIsCopied}
          />
        </div>
      )}
      <SyntaxHighlighter
        codeTagProps={{ className: `language-${language}` }}
        PreTag={(props) => {
          delete props.style.fontFamily;
          delete props.style.fontSize;
          delete props.style.borderRadius;
          delete props.style.textShadow;
          if (darkMode) {
            delete props.style.background;
          }
          return (
            <pre
              {...props}
              style={props.style}
              className={`${
                language
                  ? 'border-t-[1px] dark:border-pink-600 border-pink-300'
                  : ''
              }`}
            />
          );
        }}
        wrapLines={true}
        wrapLongLines={true}
        useInlineStyles={true}
        className="dark:text-light"
        language={language}
        style={darkMode ? nord : prism}
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
