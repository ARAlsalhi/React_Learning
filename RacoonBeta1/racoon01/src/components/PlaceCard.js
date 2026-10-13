import React from "react";

/*Just a note i will use another component for playArea because it will be better to seperate it  */

/*Here we have props(arg) here it recive data from another component which is name and location 
it is for event like القديه والمكان الرياض */

function PlaceCard({ name, location }) {
  return (
    <div className="place-card">
      <div className="place-image">
        <img
          src="https://baitara.com/wp-content/uploads/2023/09/%D8%B1%D8%A7%D9%83%D9%88%D9%86-%D9%8A%D9%82%D8%AA%D8%AD%D9%85-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8B%D8%A7-%D9%85%D9%87%D9%85%D9%8B%D8%A7-%D9%81%D9%8A-%D8%A7%D9%84%D9%85%D9%83%D8%B3%D9%8A%D9%83-1.webp"
          alt=" "
        />
      </div>

      <div className="place-info">
        <div>
          <h3>{name}</h3>
          <p>📍 {location}</p>
        </div>

        <button>→</button>
      </div>
    </div>
  );
}

export default PlaceCard;
