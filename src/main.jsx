import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDw8k4u1dzne2Q6uGswPvKTDoeLAMTgivY",
  authDomain: "proyecto1-71712.firebaseapp.com",
  projectId: "proyecto1-71712",
  storageBucket: "proyecto1-71712.appspot.com",
  messagingSenderId: "531388776452",
  appId: "1:531388776452:web:56094fa6e4d8db7e4bb551"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
        <App />
    </ChakraProvider>
  </React.StrictMode>
);