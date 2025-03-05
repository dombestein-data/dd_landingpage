import React from "react";
import ReactDOM from "react-dom/client";
import Tenant from "./Tenant.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Tenant />
    </ThemeProvider>
  </React.StrictMode>
);
