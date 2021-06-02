import Editor from "./Component/Editor";
import Preview from "./Component/Preview";
import "./App.css";

function App() {
  return (
    <>
      <div className="App_header">
        <h1>Markdown Previewer</h1>
      </div>
      <div className="App">
        <Editor />
        <Preview />
      </div>
    </>
  );
}

export default App;
