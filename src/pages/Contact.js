import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <br></br>
      <ContactForm />
    </div>
  );
};

export default Contact;
