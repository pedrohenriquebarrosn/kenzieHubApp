import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { Providers } from "./providers/providers";
import { LanguageProvider } from "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
      <Providers>
        <GlobalStyle />
        <App />
      </Providers>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
