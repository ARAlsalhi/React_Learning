import React from "react";

import HeroSection from "../components/HeroSection";
import Stats from "../components/Stats";
import NfcCard from "../components/NfcCard";
import PlayAreas from "../components/PlayAreas";

function Home() {
  return (
    <>
      <HeroSection />
      <Stats />
      <NfcCard />
      <PlayAreas />
    </>
  );
}

export default Home;
