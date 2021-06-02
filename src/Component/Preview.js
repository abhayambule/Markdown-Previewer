import "./Preview.css";
import { ContextAPi } from "./Editor";
import ReactMarkdown from "react-markdown";
import { useContext } from "react";
const Preview = () => {
  const fname = useContext(ContextAPi);
  return (
    <div className="Preview">
      <h1>Preview side</h1>
      <ReactMarkdown>{fname}</ReactMarkdown>
    </div>
  );
};

export default Preview;
