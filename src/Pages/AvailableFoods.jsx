import React, { useContext, useState } from "react";
import Container from "../Components/Responsive/Container";
import AuthContext from "../Contaxt/AuthContext";
import LoadingSpinner from "../Components/shared/LoadingSpinner";
import useAxios from "../Hooks/useAxios";
import FoodCard from "../Components/shared/FoodCard";
import FoodSearchSection from "../Components/Ui/FoodSearchSection";

const AvailableFoods = () => {
  const { loading } = useContext(AuthContext);
  const { foodCardData } = useAxios(`http://localhost:3000/all-food-data`);
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) {
    return <LoadingSpinner />;
  }

  const handleOnSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filterFood = foodCardData?.filter((food) => {
    const search = searchTerm.toLowerCase();
    return food.name.toLowerCase().includes(search);
  });

  return (
    <div>
      <Container>
        <FoodSearchSection onSearch={handleOnSearch} />
        <div className="py-10">
          {filterFood?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterFood.map((data) => (
                <FoodCard data={data} key={data._id} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-base-200/50 backdrop-blur-sm rounded-3xl p-10 max-w-md mx-auto border border-neutral/20">
                <p className="text-lg text-muted mb-4">
                  {searchTerm
                    ? `No food found for "${searchTerm}"`
                    : "No food available right now."}
                </p>
                <button
                  onClick={() => setSearchTerm("")}
                  className="btn btn-outline btn-primary rounded-full shadow-none">
                  Clear Search
                </button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default AvailableFoods;
