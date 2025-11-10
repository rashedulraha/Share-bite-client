import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaClock,
  FaStar,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaHeart,
  FaArrowLeft,
  FaShareAlt,
} from "react-icons/fa";
import Container from "../Components/Responsive/Container";
import useAxios from "../Hooks/useAxios";
import AuthContext from "../Contaxt/AuthContext";

const FoodDetails = () => {
  const { loading } = useContext(AuthContext);
  const { id } = useParams();
  const { foodCardData } = useAxios(`http://localhost:3000/food-details/${id}`);
  const { name, image, quantity, pickup_location, expiry, notes } =
    foodCardData || {};
  const {
    name: DonarName,
    email,
    photo,
    rating,
    totalDonations,
    joined,
  } = foodCardData?.donor || {};

  // const food = {
  //   name: "Chicken Biryani",
  //   image:
  //     "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //   quantity: 12,
  //   pickup_location: "Golden Dragon Restaurant, 123 Main St, Downtown",
  //   expiry: "November 11, 2025",
  //   notes:
  //     "Freshly cooked, packed in airtight containers. Best for 2-3 people per portion. Halal certified. No MSG.",
  //   donor: {
  //     name: "Rahim Ahmed",
  //     email: "rahim@goldendragon.com",
  //     phone: "+880 1712-345678",
  //     photo:
  //       "https://ui-avatars.com/api/?name=Rahim+Ahmed&background=22d3a6&color=fff&bold=true",
  //     rating: 4.8,
  //     totalDonations: 42,
  //     joined: "March 2023",
  //   },
  // };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="py-16 md:py-20 bg-base-100 min-h-screen">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <Link
            to="/available-foods"
            className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-6">
            <FaArrowLeft className="w-4 h-4" />
            Back to Foods
          </Link>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Image + Portions */}
            <div className="space-y-6" data-aos="fade-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral/20">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-base-100 text-base-content px-4 py-2 rounded-full text-lg font-bold shadow-lg flex items-center gap-2">
                  <span className="text-primary">{quantity}</span> portions
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-base-200/50 backdrop-blur-sm rounded-2xl p-4 border border-neutral/20">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <FaMapMarkerAlt className="w-4 h-4" />
                    <span className="font-medium">Pickup Location</span>
                  </div>
                  <p className="text-muted">{pickup_location}</p>
                </div>
                <div className="bg-base-200/50 backdrop-blur-sm rounded-2xl p-4 border border-neutral/20">
                  <div className="flex items-center gap-2 text-secondary mb-1">
                    <FaClock className="w-4 h-4" />
                    <span className="font-medium">Expiry Date</span>
                  </div>
                  <p className="text-muted">{expiry}</p>
                </div>
              </div>
            </div>

            {/* Right: Details */}
            <div className="space-y-6" data-aos="fade-left">
              {/* Title */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-base-content mb-2">
                  {name}
                </h1>
                <div className="flex items-center gap-2 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(rating)
                          ? "fill-current"
                          : "text-base-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted ml-2">({rating})</span>
                </div>
              </div>

              {/* Notes */}
              <div className="bg-base-200/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral/20">
                <h3 className="font-semibold text-base-content mb-2">
                  Food Notes
                </h3>
                <p className="text-muted leading-relaxed">{notes}</p>
              </div>

              {/* Donor Card */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-6 shadow-xl border border-neutral/20">
                <h3 className="text-xl font-bold text-base-content mb-4 flex items-center gap-2">
                  <FaUser className="w-5 h-5 text-primary" />
                  Donor Information
                </h3>

                <div className="flex items-center gap-4 mb-4">
                  <div className="avatar">
                    <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={photo} alt={DonarName} />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-base-content">
                      {DonarName}
                    </p>
                    <p className="text-sm text-muted">Member since {joined}</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="w-4 h-4 text-primary" />
                    <a
                      href={`mailto:${email}`}
                      className="text-muted hover:text-primary transition-colors">
                      {email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhone className="w-4 h-4 text-secondary" />
                    <span className="text-muted">01992-284845</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaHeart className="w-4 h-4 text-error" />
                    <span className="text-muted">100 + donations</span>
                  </div>
                </div>
              </div>

              {/* Request Button */}
              <div className="flex gap-4">
                <button className="btn btn-primary btn-lg rounded-full flex-1 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group">
                  Request Food
                  <FaShareAlt className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn btn-ghost btn-lg rounded-full p-3 hover:bg-base-200 transition-all">
                  <FaHeart className="w-6 h-6 text-base-content/70 hover:text-error transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FoodDetails;
