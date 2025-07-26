import React from "react";
import ReactDOM from "react-dom/client";
import NAA from "./azureAdminApproval.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import "../index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <NAA />
    </ThemeProvider>
  </React.StrictMode>
);
