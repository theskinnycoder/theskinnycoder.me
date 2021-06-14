import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import nord from 'react-syntax-highlighter/dist/cjs/styles/prism/nord';

const CodeBlock = ({ language, content }) => {
  return <SyntaxHighlighter children={content} language={language} style={nord} />;
};

export default CodeBlock;
