import { createContext, useState } from "react";
import "./Editor.css";

const ContextAPi = createContext();
const Editor = () => {
  const [text, setText] = useState("");
  const inputEvent = (a) => {
    setText(a.target.value);
  };
  console.log(text);

  return (
    <ContextAPi.Provider value={text}>
      <div className="Editor">
        <h1>Editor side</h1>
        <textarea className="editor_input" onChange={inputEvent}></textarea>
      </div>
    </ContextAPi.Provider>
  );
};

export default Editor;
export { ContextAPi };
