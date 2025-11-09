import React from "react";

import Container from "../Components/Responsive/Container";
import HowItWorks from "../Components/Ui/HowItWorks";
import OurMission from "../Components/Ui/OurMission";
import HeroSection from "../Components/Ui/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Container>
        <h1>Home</h1>
      </Container>
      <HowItWorks />
      <OurMission />
    </div>
  );
};

export default Home;
