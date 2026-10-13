import React from "react";
import PlaceCard from "./PlaceCard";

function PlayAreas() {
  /*Here we send props to PlaceCard component becase it better to use one single code instate of repeated*/
  const places = [
    {
      id: 1,
      name: "Qiddiya",
      location: "Riyadh",
    },
    {
      id: 2,
      name: "Sports Boulevard",
      location: "Riyadh",
    },
    {
      id: 3,
      name: "KAFD",
      location: "Riyadh",
    },
  ];

  return (
    <section className="play-areas">
      <div className="section-header">
        <h2>Play Areas</h2>

        <button>View all →</button>
      </div>

      <div className="places-grid">
        {places.map((place) => (
          <PlaceCard
            key={place.id}
            name={place.name}
            location={place.location}
          />
        ))}
      </div>
    </section>
  );
}

export default PlayAreas;
