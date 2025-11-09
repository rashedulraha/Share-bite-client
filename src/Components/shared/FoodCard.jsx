import React from "react";
import {
  FaClock,
  FaMapMarkerAlt,
  FaStar,
  FaHeart,
  FaShareAlt,
} from "react-icons/fa";

const FoodCard = ({ data }) => {
  const { image, name, notes, pickup_location, quantity, expiry } = data || {};
  const { email, name: DonarName, photo, rating } = data.donor;

  console.lo;
  const food = {
    name: "Chicken Biryani & Salad",
    image:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    quantity: 12,
    pickupLocation: "Golden Dragon Restaurant, 123 Dhaka Road, Mirpur",
    expiry: "2025-04-10T18:30:00",
    notes:
      "Freshly cooked, packed in food-grade containers. Includes raita and salad.",
    donor: {
      name: "Rahim Khan",
      email: "rahim@goldendragon.com",
      photo:
        "https://ui-avatars.com/api/?name=Rahim+Khan&background=22d3a6&color=fff&bold=true",
      rating: 4.8,
    },
  };

  return (
    <div className="w-full">
      <div className="card bg-base-100  rounded-lg overflow-hidden border border-neutral/20 group">
        {/* Image */}
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Portions Badge */}
          <div className="absolute top-3 right-3 bg-base-100 text-base-content px-3 py-1.5 rounded-full text-sm font-semibold shadow-md flex items-center gap-1">
            <span className="text-primary">{quantity}</span> portions
          </div>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          {/* Title */}
          <h3 className="text-lg font-bold text-base-content line-clamp-1">
            {name}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted line-clamp-2">{notes}</p>

          {/* Distance & Time */}
          <div className="flex flex-col  items-center gap-4 text-xs text-muted">
            <div className="flex w-full items-start gap-1 ">
              <FaMapMarkerAlt className="w-3.5 h-3.5 text-primary" />
              <span className="text-start">{pickup_location}</span>
            </div>
            <div className="flex w-full items-start gap-1">
              <FaClock className="w-3.5 h-3.5 text-secondary" />
              <span className="text-start">{expiry}</span>
            </div>
          </div>

          {/* Donor Info */}
          <div className="flex items-center justify-between pt-3 border-t border-neutral/20">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={photo} alt={DonarName} />
                </div>
              </div>
              <div>
                <p className="font-medium text-base-content text-sm">
                  {DonarName}
                </p>
                <div className="flex items-center gap-1 text-xs">
                  <FaStar className="w-3.5 h-3.5 text-yellow-500" />
                  <span className="font-semibold">{rating}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-3 w-full gap-5">
            <button className="btn flex-5 btn-primary btn-sm rounded-full px-6 shadow-md hover:shadow-lg transition-all flex items-center gap-2 group">
              Request
              <FaShareAlt className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="btn btn-ghost btn-sm rounded-full p-2 hover:bg-base-200 transition-all flex-1">
              <FaHeart className="w-5 h-5 text-base-content/70 hover:text-error transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
