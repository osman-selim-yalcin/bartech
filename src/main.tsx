import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Main.css";
import { MainRoutes } from "./routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <MainRoutes />
  </StrictMode>
);
