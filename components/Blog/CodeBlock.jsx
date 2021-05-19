import { useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import { FaClipboard, FaCopy } from "react-icons/fa"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import vscDarkPlus from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus"

const CodeBlock = ({ language, value }) => {
  const [isCopied, setIsCopied] = useState(false)
  return (
    <div className="relative">
      <CopyToClipboard
        text={value}
        className="right-2.5 top-2 absolute hidden md:block"
        onCopy={() => setIsCopied(!isCopied)}
      >
        <button className="focus:outline-none outline-none">
          {isCopied ? (
            <FaClipboard className="text-tuna-100 hover:text-tuna-200 md:w-6 md:h-6 inline w-4 h-4 ml-2" />
          ) : (
            <FaCopy className="text-tuna-100 hover:text-tuna-200 md:w-6 md:h-6 inline w-4 h-4 ml-2" />
          )}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter
        codeTagProps={{
          style: { fontSize: "18px", fontFamily: "IBM Plex Mono, monospace" }
        }}
        language={language}
        style={vscDarkPlus}
        showLineNumbers={false}
        useInlineStyles={true}
      >
        {value}
      </SyntaxHighlighter>
      <div className="right-16 top-2 md:block absolute hidden">
        <span className="text-tuna-100">{language}</span>
      </div>
    </div>
  )
}

export default CodeBlock
