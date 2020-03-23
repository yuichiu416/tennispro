import React from 'react';
import { Link } from 'react-router-dom';
import masuka from './masuka.gif';
import blueStar from './blue-star.jpg';
import kawasaki from './kawasaki.gif';
import './Grip.css';

const grip = () => {

    return (
        <div className="grip">
            <Link to="grip/masuka"><img src={masuka} alt="masuka" /></Link>
            <Link to="grip/blue-star"><img src={blueStar} alt="blue-star" /></Link>
            <Link to="grip/kawasaki"><img src={kawasaki} alt="kawasaki" /></Link>
        </div>
    );
};

export default grip;