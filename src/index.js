import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/main.css";
import "typeface-dr-sugiyama";
import "typeface-dancing-script";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { LanguageProvider } from "./components/Multilanguage/LanguageProvider";
import { ThemeProvider } from "./components/DarkMode/ThemeProvider";
import { initializeApp } from "firebase/app";


//initialize firebase app
initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
 // databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
});


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
