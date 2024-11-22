import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";
import "./CodeEditor.css"; // Import the CSS file

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    // editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <section className="compliersec">
      <h1>Embrace the Future of Learning.</h1>
      <h3 className="compliersech3">Dive into interactive, practical learning with our platform.</h3>
      <div className="complierdiv">
        <div className="complecontent">
          <h1 className="complecontenth1">Unified Learning Experience</h1>
          <h3 className="complecontenth3">
            Experience learning by doing with ourInteractive platform.
          </h3>
          <p>Engaging Interactive Exercises for Practical Learning</p>
          <p>Unified Development: Consistent Skill Assessment for Growth</p>
          <p>
            Applied Learning with Improvement Tracking: Monitor Your Progress
          </p>
          <p>
            Comprehensive Interview Preparation: Skills and Confidence Boost
          </p>
          <p>Personalized Job Placement Assistance and Support</p>
        </div>
        <div className="code-editor">
          <div className="language-selector">
            <LanguageSelector language={language} onSelect={onSelect} />
          </div>
          <div className="editor-container">
            <Editor
              options={{
                minimap: {
                  enabled: false,
                },
              }}
              height="45vh"
              theme="vs-dark"
              language={language}
              defaultValue={CODE_SNIPPETS[language]}
              onMount={onMount}
              value={value}
              onChange={(value) => setValue(value)}
            />
          </div>
          <div className="output-container">
            <Output editorRef={editorRef} language={language} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeEditor;
