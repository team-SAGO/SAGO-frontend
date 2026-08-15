/*
*/
//프리뷰 화면
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preview from "./dev/Preview";
import { PreviewRoutes } from "./dev/router";

export default function App() {
  const isIframe = window.location.pathname.startsWith("/view");

  return (
    <BrowserRouter basename={isIframe ? "/view" : ""}>
      <Routes>
        {isIframe ? (
          <Route path="/*" element={<PreviewRoutes />} />
        ) : (
          <Route path="/*" element={<Preview />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

/*
//실제 화면
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '@/core/routes/router';

export function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
*/