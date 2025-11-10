import React, { useContext } from "react";
import Container from "../Components/Responsive/Container";
import AuthContext from "../Contaxt/AuthContext";
import LoadingSpinner from "../Components/shared/LoadingSpinner";
import useAxios from "../Hooks/useAxios";
import FoodCard from "../Components/shared/FoodCard";

const AvailableFoods = () => {
  const { loading } = useContext(AuthContext);
  const { foodCardData } = useAxios(`http://localhost:3000/all-food-data`);
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {foodCardData?.map((data) => (
            <FoodCard data={data} key={data._id} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AvailableFoods;
