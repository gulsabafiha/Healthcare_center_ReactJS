import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { name, img, description,id } = props.service;
    return (
        <div className='service'>
            
            <img src={img} alt="" />
            <h4 className='py-3'>{name}</h4>
            <p >{description}</p>
            <div className='con-btn'>
            <Link to={`/singleservice/${id}`}>
            <button >View detail</button>
            </Link>
           </div>
        </div>
    );
};

export default Service;