import React, { useEffect, useState } from "react";
import { Main } from "./Components/Main";
import { Routes, Route } from "react-router-dom";
import { Info } from "./Components/Info";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Info />} />
      </Routes>
    </>
  );
}

export default App;
