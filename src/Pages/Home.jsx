import React, { useContext } from "react";

import Container from "../Components/Responsive/Container";
import HowItWorks from "../Components/Ui/HowItWorks";
import OurMission from "../Components/Ui/OurMission";
import HeroSection from "../Components/Ui/HeroSection";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import AuthContext from "../Contaxt/AuthContext";
import LoadingSpinner from "../Components/shared/LoadingSpinner";
import useAxios from "../Hooks/useAxios";
import FoodCard from "../Components/shared/FoodCard";

const Home = () => {
  const { loading } = useContext(AuthContext);
  const { foodCardData } = useAxios(`http://localhost:3000/popular-food-data`);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <HeroSection />
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {foodCardData?.map((data) => (
            <FoodCard data={data} key={data._id} />
          ))}
        </div>
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
