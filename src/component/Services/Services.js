import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('./short.json')
        .then(res => res.json())
        .then(data => setServices(data))  
    },[])
    return (
        <div className='service-container'>
            <div className='text'>
            <h2>How we can help you</h2>
                <p>READ MORE ABOUT OUR SERVICES</p>
            </div>
            
            <div className='second-container'>
            {
                    services.map(service=> <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
               
            
            
        </div>
    );
};

export default Services;