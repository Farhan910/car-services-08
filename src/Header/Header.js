import React from 'react';
import './Header.css';
import { AiFillCar } from 'react-icons/ai';

const header = () => {
    return (
        <div className="header">
            <h1>গাড়ীর দুনিয়া <small className="icon-header"><AiFillCar/></small></h1>
        </div>
    );
};

export default header;