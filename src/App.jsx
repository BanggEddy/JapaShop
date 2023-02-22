import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";

import Présentation from "./pages/Présentation";

import Goodies from "./pages/Goodies";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Member from "./pages/Member";
import Admin from "./pages/Admin";
import Admintrue from "./pages/Admintrue";
import Update from "./pages/Update";
import Delete from "./pages/Delete";
import Add from "./pages/Add";
import Goodiesadmin from "./pages/Goodiesadmin";
import Presentationadmin from "./pages/Presentationadmin";
import Contactmember from "./pages/Contactmember";
import Presentationmember from "./pages/Presentationmember";
import Goodiesmember from "./pages/Goodiesmember";

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
          <Route path="/admintrue" element={<Admintrue />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/goodiesadmin" element={<Goodiesadmin />} />
          <Route path="/presentationadmin" element={<Presentationadmin />} />
          <Route path="/contactmember" element={<Contactmember />} />
          <Route path="/presentationmember" element={<Presentationmember />} />
          <Route path="/goodiesmember" element={<Goodiesmember />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
