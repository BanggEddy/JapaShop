import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";

import Présentation from "./pages/Présentation";

import Goodies from "./pages/Goodies";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Member from "./pages/member/Member";
import Admintrue from "./pages/admin/Admintrue";
import Update from "./pages/admin/Update";
import Delete from "./pages/Delete";
import Add from "./pages/admin/Add";
import Goodiesadmin from "./pages/admin/Goodiesadmin";
import Presentationadmin from "./pages/admin/Presentationadmin";
import Contactmember from "./pages/member/Contactmember";
import Presentationmember from "./pages/member/Presentationmember";
import Goodiesmember from "./pages/member/Goodiesmember";
import Updateproduct from "./pages/admin/Updateproduct";

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Présentation />} />
          <Route path="/presentation" element={<Présentation />} />

          <Route path="/goodies" element={<Goodies />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/member" element={<Member />} />

          
          <Route path="/loginout" element={<Présentation />} />
          <Route path="/admintrue" element={<Admintrue />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/goodiesadmin" element={<Goodiesadmin />} />
          <Route path="/presentationadmin" element={<Presentationadmin />} />
          <Route path="/contactmember" element={<Contactmember />} />
          <Route path="/presentationmember" element={<Presentationmember />} />
          <Route path="/goodiesmember" element={<Goodiesmember />} />
          <Route path="/updateproduct/:productId" element={<Updateproduct />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
