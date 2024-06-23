// components/Layout.js
import SplitPane from "react-split-pane";
import { useState } from "react";
import dynamic from "next/dynamic";
import { MarkdownPreview } from "react-marked-markdown";
import ChatBox from "../components/ChatBox";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const CodeEditor = dynamic(() => import("./CodeEditor"), {
  // ssr: false,
  ssr: true
});

const Layout = () => {
  const [code, setCode] = useState("# Your Markdown and HTML code here");
  const [chatMessages, setChatMessages] = useState([]);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };
  const generatePDF = () => {
    const previewElement = document.getElementById("pdf-preview");
    html2canvas(previewElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div>
      <button onClick={generatePDF}>Download PDF</button>
     {/* <SplitPane split="vertical" minSize={50} defaultSize="50%"> */}
       {/* <SplitPane split="horizontal" minSize={50} defaultSize="80%"> */}
      <div>
        <div style={{ padding: '10px', background: '#f7f7f7' }}>
          <CodeEditor code={code} onChange={handleCodeChange} />
        </div>
        <div style={{ padding: '10px', background: '#f7f7f7' }}>
          <ChatBox messages={chatMessages} />
        </div>
       {/* </SplitPane> */}
      <div style={{ padding: '10px' }}>
        <MarkdownPreview value={code} />
      </div>
     {/* </SplitPane> */}
      </div>
    </div>
      
  );
};

export default Layout;
