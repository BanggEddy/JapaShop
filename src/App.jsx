import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";

import Présentation from "./pages/Présentation";

import Goodies from "./pages/Goodies";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Member from "./pages/Member";
import Admin from "./pages/Admin";

/*Si jamais ton chemin c'est path = rien, il va nous amener dans Home.js*/
/*Si jamais ton chemin c'est path = /about, il va nous amener dans About.js*/

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Présentation />} />
          <Route path="/presentation" element={<Présentation />} />

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
          <Route path="/member" element={<Member />} />
          <Route path="/loginout" element={<Présentation />} />
          <Route path="/admin" element={<Admin />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
