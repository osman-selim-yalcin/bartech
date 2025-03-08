import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainRoutes } from "./routes.tsx";
import "./Main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainRoutes />
  </StrictMode>
);
