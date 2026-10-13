import React from "react";

function Stats() {
  /*this is a array we use it to use Map */
  const stats = [
    {
      icon: "👥",
      number: "128",
      title: "Total players",
    },
    {
      icon: "🎮",
      number: "12",
      title: "Active games",
    },
    {
      icon: "📊",
      number: "2.4K",
      title: "Game plays",
    },
  ];

  return (
    <section className="stats">
      {/*Here we use map*/}
      {stats.map((stat) => (
        <div className="stat-card" key={stat.title}>
          <div className="stat-icon">{stat.icon}</div>

          <div>
            <h2>{stat.number}</h2>
            <p>{stat.title}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Stats;
