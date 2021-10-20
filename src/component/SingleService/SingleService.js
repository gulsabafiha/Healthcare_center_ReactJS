import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import './SingleService.css'

const FriendDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  const history = useHistory();

  useEffect(() => {
    const url = `https://api.npoint.io/e188618c323d1efc6f31/${serviceId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  });

  const handleClick = () => {
    history.push("/services");
  };

  return (
    <div className='detail-card'>
          <div class="card" style={{ width: '400px'}}>
        <img src={service.img} class=" detail-img" alt="..." />
        <div class="card-body">
          <h3 class="card-title">{service.name}</h3>
          <p class="card-text">{service.description}</p>
          <div className="con-btn">
            <button onClick={handleClick}>See All Services</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetail;
