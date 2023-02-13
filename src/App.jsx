import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";

import Présentation from "./pages/Présentation";

import Goodies from "./pages/Goodies";
import Register from "./pages/Register";
import Login from "./pages/Login";

/*Si jamais ton chemin c'est path = rien, il va nous amener dans Home.js*/
/*Si jamais ton chemin c'est path = /about, il va nous amener dans About.js*/

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Présentation />} />
          <Route path="/goodies" element={<Goodies />} />
          <Route
            path="/login"
            element={<Login />}
          />
                    <Route
            path="/register"
            element={<Register />}
          />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
