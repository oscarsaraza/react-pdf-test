import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./document.tsx";
import Editor from "./editor.tsx";
import "./index.css";
import { useState } from "react";

export default function App() {
  const [document, setDocument] = useState({ type: "doc", content: [] });

  return (
    <div style={{ padding: "10px", display: "flex" }}>
      <div style={{ flexGrow: 1 }}>
        <Editor onChange={setDocument} />
      </div>

      <div style={{ flexGrow: 1 }}>
        {document && (
          <PDFViewer
            style={{ width: "100%", height: "50vh" }}
            showToolbar={false}
          >
            <MyDocument document={document} />
          </PDFViewer>
        )}

        <PDFDownloadLink
          document={<MyDocument document={document} />}
          fileName="somename.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download!"
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
}
