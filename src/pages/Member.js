import React from 'react';
import Logo from '../components/Logo';
import Memberpage from '../components/Memberpage';
import Navigationmember from '../components/Navigationmember';

const Member = () => {
    return (
        <div>
            <Logo />
            <Navigationmember />
            <Memberpage />
        </div>
    );
};

export default Member;