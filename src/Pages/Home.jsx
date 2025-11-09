import React from "react";

import Container from "../Components/Responsive/Container";
import HowItWorks from "../Components/Ui/HowItWorks";
import OurMission from "../Components/Ui/OurMission";
import HeroSection from "../Components/Ui/HeroSection";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Container>
        <h1>Home</h1>

        <div className="flex items-center justify-center">
          <Link
            to={"/available-foods"}
            className="btn btn-outline btn-lg rounded-md border-neutral hover:bg-primary hover:text-base-100 transition-all duration-300">
            Show All Available Foods
            <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
      <HowItWorks />
      <OurMission />
    </div>
  );
};

export default Home;
