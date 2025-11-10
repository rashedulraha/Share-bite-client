import { SiIfood } from "react-icons/si";
import Container from "../Components/Responsive/Container";
import { useContext } from "react";
import AuthContext from "../Contaxt/AuthContext";

const AddFood = () => {
  const { loading } = useContext(AuthContext);
  return (
    <Container>
      <div className="md:w-2xl bg-base-100 mx-auto border border-secondary/30 rounded-xl my-5 shadow-lg">
        <div className="p-6 md:p-8 space-y-6">
          {/* Title */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-3 border-b border-s-accent p-2">
              <div className="flex items-center justify-center font-bold text-2xl">
                <SiIfood />
              </div>
              <span className="text-2xl font-bold ml-2">
                Share <span className="text-primary">bite</span>
              </span>
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
              Add Food Item
            </h2>
            <p className="text-muted text-sm">
              Fill in the details to share your food with others
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div className="flex flex-col md:flex-row  items-center justify-between gap-5 ">
              {/* Food Name */}
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-base-content mb-1">
                  Food Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  className="input input-bordered w-full rounded-lg focus:border-primary"
                  placeholder="Enter food name"
                />
              </div>
              {/* Quantity */}
              <div className="w-full">
                <label
                  htmlFor="quantity"
                  className="block text-xs font-medium text-base-content mb-1">
                  Quantity
                </label>
                <input
                  name="quantity"
                  type="number"
                  required
                  min="1"
                  className="input input-bordered w-full rounded-lg focus:border-primary"
                  placeholder="Enter available quantity"
                />
              </div>
            </div>
            {/* Image URL */}
            <div className="w-full">
              <label
                htmlFor="image"
                className="block text-xs font-medium text-base-content mb-1">
                Image URL (from imgbb)
              </label>
              <input
                name="image"
                type="url"
                required
                className="input input-bordered w-full rounded-lg focus:border-primary"
                placeholder="https://i.ibb.co/..."
              />
            </div>
            <div className="flex flex-col md:flex-row  items-center justify-between gap-5">
              {/* Pickup Location */}
              <div className="w-full">
                <label
                  htmlFor="pickup"
                  className="block text-xs font-medium text-base-content mb-1">
                  Pickup Location
                </label>
                <input
                  name="pickup"
                  type="text"
                  required
                  className="input input-bordered w-full rounded-lg focus:border-primary"
                  placeholder="Enter pickup location"
                />
              </div>
              {/* Expiry Date */}
              <div className="w-full">
                <label
                  htmlFor="expiry"
                  className="block text-xs font-medium text-base-content mb-1">
                  Expiry Date
                </label>
                <input
                  name="expiry"
                  type="date"
                  required
                  className="input input-bordered w-full rounded-lg focus:border-primary"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label
                htmlFor="notes"
                className="block text-xs font-medium text-base-content mb-1">
                Notes (optional)
              </label>
              <textarea
                name="notes"
                rows="3"
                className="textarea textarea-bordered w-full rounded-lg focus:border-primary"
                placeholder="Any special instructions or details..."></textarea>
            </div>

            {/* Submit Button */}
            {loading ? (
              <div className="btn btn-primary w-full text-base-100 bg-gradient-to-r from-primary/40 to-secondary/40 border-none">
                <span className="loading loading-infinity"></span>
              </div>
            ) : (
              <button
                type="submit"
                className="btn btn-primary w-full bg-gradient-to-r from-primary to-secondary text-base-100 border-none shadow-none">
                Add Food
              </button>
            )}
          </form>
        </div>
      </div>
    </Container>
  );
};

export default AddFood;
