import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import React from "react";
import ReactDOM from "react-dom/client";
import MyDocument from "./document.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PDFViewer style={{ width: "100%", height: "100vh" }} showToolbar={false}>
      <MyDocument />
    </PDFViewer>

    <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download!"
      }
    </PDFDownloadLink>
  </React.StrictMode>
);
