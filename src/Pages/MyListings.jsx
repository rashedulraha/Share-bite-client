import React, { useContext, useEffect, useState } from "react";
import { FaUtensils } from "react-icons/fa";

import Container from "../Components/Responsive/Container";
import AuthContext from "../Context/AuthContext";
import LoadingSpinner from "../Components/shared/LoadingSpinner";
import useAxios from "../Hooks/useAxios";
import MyFoodCard from "../Components/shared/MyFoodCard";
import { Link } from "react-router-dom";

const MyListings = () => {
  const { user, loading } = useContext(AuthContext);
  const [myFoods, setMyFoods] = useState([]);

  const { foodCardData } = useAxios(
    `http://localhost:3000/my-listings?email=${user?.email}`
  );

  useEffect(() => {
    if (user?.email) {
      const filtered = foodCardData?.filter(
        (food) => food.donor.email === user.email
      );
      setMyFoods(filtered);
    }
  }, [user, foodCardData]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="py-16 bg-base-100 ">
      <Container>
        {/* Header */}
        <div className="text-center mb-2">
          <h1 className="text-3xl md:text-4xl font-bold text-base-content mb-3">
            My <span className="text-primary">Food Listings</span>
          </h1>
          <p className="text-muted">
            You have posted{" "}
            <strong className="text-primary">{myFoods?.length}</strong> food
            item{myFoods?.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* No Food Message */}
        {myFoods?.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-base-200/50 backdrop-blur-sm rounded-md p-12 max-w-md mx-auto border border-neutral/20">
              <FaUtensils className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-lg text-muted">
                You haven't posted any food yet.
              </p>
              <Link
                to={"/add-food"}
                className="btn btn-primary shadow-none mt-6 rounded-full">
                Post Your First Food
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myFoods?.map((foods) => (
              <MyFoodCard foods={foods} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default MyListings;
