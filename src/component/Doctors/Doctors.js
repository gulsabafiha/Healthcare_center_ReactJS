import React from 'react';
import './Doctors.css';

const Doctors = () => {
    return (
        <div className='doc-container'>
            <div>
                <h1>
                Jenna Berg
                </h1>
                <h6>PROFESSIONAL DENTIST</h6>
                <p>n the 1840s the world's first dental school and national dental organization were established. Along with the first dental school came the establishment of the Doctor of Dental Surgery degree, often referred to as a DDS degree. In response to the rise in new dentists as well as dentistry techniques, the first dental practice act was established to regulate dentistry. In the United States, the First Dental Practice Act required dentists to pass each specific states medical board exam in order to practice dentistry in that particular state.</p>
                <div className='con-btn'>
                    <button>View All Doctors</button>
                </div>
            </div>
            <div className='img-div'>
                <img className='img-fluid' src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/23/2018/09/Layer-1186-copy.jpg" alt="" />
            </div>
        </div>
    );
};

export default Doctors;