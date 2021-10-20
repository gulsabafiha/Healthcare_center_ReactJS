import React from 'react';
import { faMap,faPhone,faMailBulk,faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'

const Footer = () => {
    const add = <FontAwesomeIcon icon={faMap} />;
    const add1 = <FontAwesomeIcon icon={faPhone} />;
    const add2 = <FontAwesomeIcon icon={faMailBulk} />;
    const add3 = <FontAwesomeIcon icon={faClock} />;
    return (
        <div className='footer'>
            <div>
                <h6>Important Information</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum lacinia turpis, ut facilisis sapien lacinia eget. Cras interdum ligula elit, maximus molestie ex placerat non.</p>
            </div>
            <div >
                <h2>Latest News</h2>
                <div className='news-section'>
                    <div>
                        <img src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/23/2018/09/Untitled-1_0001_niti-k-228198-unsplash-150x150.jpg" class='rounded-circle' alt="" />
                    </div>
                    <div>
                        <h5 className='mx-3'>NEWS <br />
                            Welcome to our new building</h5>
                    </div>
                </div>
                <hr />
                <div  className='news-section'>
                <div>
                        <img src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/23/2018/09/Untitled-1_0003_brooke-lark-250695-150x150.jpg" class='rounded-circle' alt="" />
                    </div>
                    <div>
                        <h5 className='mx-3'>DIET <br />
                            Healthier diet for better future</h5>
                    </div>
                </div>
                   
                
            </div>
            <div>
                <h6>{add}   Street number 5, Town, Country</h6>
                <h6> {add1}   (+371) 512 566 921</h6>
                <h6>{add2}   brandname@company.com</h6>
                <h6>{ add3}   Mon. – Frie. 11AM – 19PM</h6>
            </div>
        </div>
    );
};

export default Footer;