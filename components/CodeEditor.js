// components/CodeEditor.js
import React from "react";
// import { Editor } from "react-simple-code-editor";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-markdown";
import "prismjs/themes/prism.css";

const CodeEditor = ({ code, onChange }) => {
  return (
    <div>
      <Editor
        value={code}
        onValueChange={onChange}
        highlight={(code) => highlight(code, languages.markdown, "markdown")}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      />
    </div>
  );
};

export default CodeEditor;
