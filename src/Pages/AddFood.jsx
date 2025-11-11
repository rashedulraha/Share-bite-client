import { SiIfood } from "react-icons/si";
import Container from "../Components/Responsive/Container";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { toast } from "react-toastify";

const AddFood = () => {
  const { loading, user } = useContext(AuthContext);
  const { displayName, photoURL, email, phoneNumber, metadata } = user || {};

  const handleAddFood = async (e) => {
    e.preventDefault();
    const foodName = e.target.foodName.value;
    const image = e.target.image.value;
    const quantity = e.target.quantity.value;
    const pickup_location = e.target.pickup_location.value;
    const expiry = e.target.expiry.value;
    const notes = e.target.notes.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const phone = e.target.phone.value;
    const location = e.target.location.value;

    const imageAndDonarInfo = {
      foodName,
      image,
      quantity,
      pickup_location,
      expiry,
      notes,
      donor: {
        name,
        email,
        photo,
        rating: `5`,
        phone,
        location,
        joined: "Naogaon dhaka Bangladesh",
        totalDonations: "56",
      },
    };

    try {
      const res = await fetch("http://localhost:3000/all-food-data", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(imageAndDonarInfo),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Food added!");
        e.target.reset();
      } else {
        toast.error("Error: " + data.message);
      }
    } catch (error) {
      toast.error("network error");
    }
  };

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
          <form className="space-y-5" onSubmit={handleAddFood}>
            <div className="flex flex-col md:flex-row  items-center justify-between gap-5 ">
              {/* Food Name */}
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-base-content mb-1">
                  Food Name
                </label>
                <input
                  name="foodName"
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
                  min="1"
                  required
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
                  htmlFor="pickup_location"
                  className="block text-xs font-medium text-base-content mb-1">
                  Pickup Location
                </label>
                <input
                  name="pickup_location"
                  type="text"
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
                  className="input input-bordered w-full rounded-lg focus:border-primary"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label
                htmlFor="notes"
                className="block text-xs font-medium text-base-content mb-1">
                Notes
              </label>
              <textarea
                name="notes"
                rows="3"
                required
                className="textarea textarea-bordered w-full rounded-lg focus:border-primary"
                placeholder="Any special instructions or details..."></textarea>
            </div>

            {/*  donar information  */}

            <div className="flex flex-col md:flex-row  items-center justify-between gap-5">
              {/* donar name */}
              <div className="w-full">
                <label
                  htmlFor="donatorName"
                  className="block text-xs font-medium text-base-content mb-1">
                  Donator Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  className="input input-bordered w-full rounded-lg focus:border-primary"
                  defaultValue={displayName}
                  readOnly
                />
              </div>
              {/* Donar email  */}
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-base-content mb-1">
                  Donator Email
                </label>
                <input
                  name="email"
                  type="email"
                  defaultValue={email}
                  readOnly
                  required
                  className="input input-bordered w-full rounded-lg focus:border-primary"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row  items-center justify-between gap-5">
              {/* donar Phone */}
              <div className="w-full">
                <label
                  htmlFor="phone"
                  className="block text-xs font-medium text-base-content mb-1">
                  Donator phone number
                </label>
                <input
                  name="phone"
                  type="text"
                  required
                  className="input input-bordered w-full rounded-lg focus:border-primary"
                  defaultValue={phoneNumber || `01992**4845`}
                  readOnly
                />
              </div>
              {/* Donar Creation date  */}
              <div className="w-full">
                <label
                  htmlFor="metadata"
                  className="block text-xs font-medium text-base-content mb-1">
                  Metadata
                </label>
                <input
                  name="location"
                  type="email"
                  defaultValue={metadata.creationTime}
                  readOnly
                  required
                  className="input input-bordered w-full rounded-lg focus:border-primary"
                />
              </div>
            </div>
            {/* donar image */}
            <div className="w-full">
              <label
                htmlFor="donatorImage"
                className="block text-xs font-medium text-base-content mb-1">
                Donator Image URL
              </label>
              <input
                name="photo"
                type="url"
                required
                readOnly
                className="input input-bordered w-full rounded-lg focus:border-primary"
                defaultValue={photoURL}
              />
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
