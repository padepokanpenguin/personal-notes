import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

// {
//     id: 1,
//     title: "Babel",
//     body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
//     archived: false,
//     createdAt: '2022-04-14T04:27:34.572Z'
//   },
