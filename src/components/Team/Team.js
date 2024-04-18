import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <div className="team-container">
      <h1>Our Team</h1>
      <p>Meet the talented individuals behind our success.</p>
      <div className="team-members">
        <div className="member">
          <h2>Elon Musk</h2>
          <img src="https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg" alt="Elon Musk" />
          <p>CEO of SpaceX and Tesla, Inc.</p>
        </div>
        <div className="member">
          <h2>Mark Zuckerberg</h2>
          <img src="https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds" alt="Mark Zuckerberg" />
          <p>CEO of Meta Platforms, Inc. (formerly Facebook)</p>
        </div>
        <div className="member">
          <h2>Bill Gates</h2>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzznBQb5kzWBFEpq53zyg63tbPfVoSw4HLS6OUIqY8LA&s" alt="Bill Gates" />
          <p>Co-founder of Microsoft Corporation</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
