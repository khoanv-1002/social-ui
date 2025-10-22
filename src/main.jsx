import './theme-preload';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoute from "./routes/AppRoute";
import { AuthProvider } from "./provider/AuthProvider";
import { ThemeProvider } from "./provider/ThemeProvider";
import { AlertProvider } from './provider/AlertProvider';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AlertProvider>
      <ThemeProvider>
        <AuthProvider>
          <AppRoute />
        </AuthProvider>
      </ThemeProvider>
    </AlertProvider>
  </StrictMode>
);
