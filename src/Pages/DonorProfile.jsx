import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
  FaStar,
} from "react-icons/fa";
import Container from "../Components/Responsive/Container";

const DonorProfile = () => {
  const donor = {
    name: "Golden Dragon Restaurant",
    email: "goldendragon@food.com",
    phone: "+880 1712-345678",
    location: "123 Main St, Dhanmondi, Dhaka",
    joined: "January 2023",
    totalDonations: 156,
    rating: 4.9,
    photo:
      "https://ui-avatars.com/api/?name=Golden+Dragon&background=ef4444&color=fff&bold=true&size=128",
  };

  return (
    <section className="py-10 bg-base-100 ">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left: Photo + Name */}
          <div className="md:col-span-1">
            <div className="bg-base-200 rounded-md p-6 text-center border border-neutral/20">
              <div className="avatar mb-4">
                <div className="w-36 h-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 mx-auto">
                  <img src={donor.photo} alt={donor.name} />
                </div>
              </div>
              <h2 className="text-xl font-bold text-base-content">
                {donor.name}
              </h2>
              <p className="text-sm text-muted">Since {donor.joined}</p>

              <div className="flex justify-center gap-1 text-yellow-500 mt-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(donor.rating)
                        ? "fill-current"
                        : "text-base-300"
                    }`}
                  />
                ))}
                <span className="text-sm text-muted ml-1">
                  ({donor.rating})
                </span>
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-base-200 rounded-md p-6 border border-neutral/20">
              <h3 className="text-lg font-semibold text-base-content mb-4 flex items-center gap-2">
                <FaUser className="w-5 h-5 text-primary" />
                Contact Information
              </h3>
              <div className="space-y-3 text-sm text-muted">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="w-4 h-4 text-secondary" />
                  <span>{donor.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="w-4 h-4 text-accent" />
                  <span>{donor.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="w-4 h-4 text-primary" />
                  <span>{donor.location}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-base-200 rounded-md p-5 text-center border border-neutral/20">
                <FaHeart className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold text-base-content">
                  {donor.totalDonations}
                </p>
                <p className="text-sm text-muted">Total Donations</p>
              </div>
            </div>

            <div className="bg-base-200 rounded-md p-5 border border-neutral/20 text-sm text-center">
              <p className="text-muted">
                <strong>Time:</strong> November 10, 2025 02:02 PM +06 |{" "}
                <strong>BD</strong>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DonorProfile;
