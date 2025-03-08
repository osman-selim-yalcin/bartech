import { observer } from "mobx-react-lite";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./views/Home";

const MainRoutes: FC = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
});

export { MainRoutes };
