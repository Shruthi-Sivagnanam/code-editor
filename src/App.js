import { useEffect, useState } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [html, setHtml] = useState("");
  const [js, setJs] = useState("");
  const [css, setCss] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
        `<html><body>${html}</body><style>${css}</style><script>${js}</script></html>`
      );
    }, 250);
    return () => clearTimeout(timeout);
  }, [setSrcDoc, html, css, js]);
  return (
    <>
      <Header />
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JavaScript"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          src=""
          frameborder="0"
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        ></iframe>
      </div>
      <Footer />
    </>
  );
}

export default App;
