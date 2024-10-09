import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface IProps {
  content: string | undefined;
}

const HighLightText = ({ content }: IProps) => {
  return (
    <SyntaxHighlighter language="javascript" style={atomDark}
    customStyle={{
      backgroundColor:"transparent",
      width:"1200px",
      maxHeight:"100vh",
      overflowX:"hidden",
      fontSize:"1rem",
    }}
    showLineNumbers>
      {content?String(content):""}
    </SyntaxHighlighter>
  );
};

export default HighLightText;
