import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { MainRoutes } from "./routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainRoutes />
  </StrictMode>
);
