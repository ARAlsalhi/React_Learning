import React from "react";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome back!</h1>

        <p>
          Create outdoor adventures,
          <br />
          turn places into playful stories.
        </p>

        <button className="create-button">
          Create game
          <span>+</span>
        </button>
      </div>

      <div className="hero-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvUfx3kyvmP3wTkS-8piYYJ3Ne79Iusj3lQvQZY9OrNQ&s=10"
          alt=" "
        />
        Your Image
      </div>
    </section>
  );
}

export default HeroSection;
