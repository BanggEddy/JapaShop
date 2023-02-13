import React from 'react';
import Logo from "../components/Logo";
//Appel la Navigation pour faire fonctionner la navigation
import Navigation from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import Registerpage from '../components/Registerpage';
const Register = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <Registerpage />
        </div>
    );
};

export default Register;