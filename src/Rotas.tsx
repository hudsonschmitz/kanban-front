import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import AdicionaItem from "./AdicionaItem";


const Rotas : React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path={'/'}  />
        <Route element={<AdicionaItem />} path={"/item"}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;