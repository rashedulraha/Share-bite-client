import React, { useContext } from "react";
import Container from "../Components/Responsive/Container";
import AuthContext from "../Contaxt/AuthContext";
import LoadingSpinner from "../Components/shared/LoadingSpinner";

const AvailableFoods = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <Container>
        <h1>Available foods </h1>
      </Container>
    </div>
  );
};

export default AvailableFoods;
