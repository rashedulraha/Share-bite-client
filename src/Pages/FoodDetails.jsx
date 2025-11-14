import React, { useContext, useEffect, useRef, useState } from "react";
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
} from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import Container from "../Components/Responsive/Container";
import useAxios from "../Hooks/useAxios";
import AuthContext from "../Context/AuthContext";
import { toast } from "react-toastify";

const FoodDetails = () => {
  const { loading, user } = useContext(AuthContext);
  const [requestButton, setRequestButton] = useState(false);

  const accessToken = user?.accessToken;

  const { id } = useParams();
  const showModalRef = useRef();

  const { foodCardData } = useAxios(
    `https://share-bite-backend.vercel.app/food-details/${id}`,
    accessToken
  );

  const { name, image, quantity, pickup_location, expiry, notes, _id } =
    foodCardData || {};

  const {
    name: DonarName,
    email,
    photo,
    rating,
    joined,
  } = foodCardData?.donor || {};

  const displayName = user?.displayName;
  const userEmail = user?.email;
  const photoURL = user?.photoURL;

  // ! conditional switch FoodRequest  button

  useEffect(() => {
    if (foodCardData?.donor?.email && userEmail) {
      if (foodCardData.donor?.email === userEmail) {
        setRequestButton(true);
      } else {
        setRequestButton(false);
      }
    }
  }, [foodCardData, requestButton, userEmail]);

  if (loading) {
    return <LoadingSpinner />;
  }

  const handleRequestModal = () => {
    showModalRef.current.showModal();
  };
  const handleRequestFood = async (e) => {
    e.preventDefault();

    const location = e.target.location.value;
    const contactInfo = e.target.contactInfo.value;
    const messageDonor = e.target.messageDonor.value;

    const requestInfo = {
      _id,
      location,
      contactInfo,
      messageDonor,
      displayName,
      userEmail,
      photoURL,
      donorEmail: email,
      status: "pending",
    };

    try {
      fetch(`https://share-bite-backend.vercel.app/food-requests`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestInfo),
      });

      showModalRef.current.close();
      toast.success("Requested successfully");
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    }
  };

  return (
    <section className="py-16 md:py-10 bg-base-100 ">
      <Container>
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral/20">
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
              <div className="bg-base-200/50 backdrop-blur-sm rounded-md p-4 border border-neutral/20">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <FaMapMarkerAlt className="w-4 h-4" />
                  <span className="font-medium">Pickup Location</span>
                </div>
                <p className="text-muted">{pickup_location}</p>
              </div>
              <div className="bg-base-200/50 backdrop-blur-sm rounded-md p-4 border border-neutral/20">
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
                      i < Math.floor(rating) ? "fill-current" : "text-base-300"
                    }`}
                  />
                ))}
                <span className="text-sm text-muted ml-2">({rating})</span>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-base-200/50 backdrop-blur-sm rounded-md p-6 border border-neutral/20">
              <h3 className="font-semibold text-base-content mb-2">
                Food Notes
              </h3>
              <p className="text-muted leading-relaxed">{notes}</p>
            </div>

            {/* Donor Card */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-md p-6 shadow-xl border border-neutral/20">
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
                  <p className="font-semibold text-base-content">{DonarName}</p>
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
            <div className="flex gap-4 flex-col md:flex-row">
              {/*  conditional switch button */}

              {requestButton ? (
                <Link
                  className="btn btn-primary rounded-full shadow-none hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
                  to={"/my-listings"}>
                  My Listings
                </Link>
              ) : (
                <button
                  onClick={handleRequestModal}
                  className="btn btn-primary rounded-full shadow-none hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group">
                  Request Food
                </button>
              )}

              {requestButton ? (
                <Link
                  to={"/user-profile"}
                  className="btn btn-primary  rounded-full  shadow-none hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group">
                  My Profile
                </Link>
              ) : (
                <Link
                  to={`/donor-profile/${_id}`}
                  className="btn btn-primary  rounded-full  shadow-none hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group">
                  Donar profile
                  <ImProfile className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}

              <button className="btn btn-ghost  rounded-full p-3 hover:bg-base-200 transition-all">
                <FaHeart className="w-6 h-6 text-base-content/70 hover:text-error transition-colors" />
              </button>
            </div>
          </div>
        </div>

        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <dialog
          ref={showModalRef}
          className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-base-100 rounded-md shadow-2xl border border-neutral/20 max-w-md w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-neutral/20">
              <h3 className="text-xl font-bold text-base-content">
                Request Food
              </h3>
              <form method="dialog">
                <button className="btn btn-ghost btn-circle text-base-content/70 hover:text-error text-xl">
                  ×
                </button>
              </form>
            </div>

            {/* Form Fields */}
            <form className="space-y-5" onSubmit={handleRequestFood}>
              {/* Quantity */}
              <div className="space-y-1">
                <label className="label">
                  <span className="label-text font-medium text-base-content">
                    Location
                  </span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter your location"
                  className="input input-bordered w-full rounded-lg focus:border-primary"
                />
              </div>

              {/* Pickup Date */}
              <div className="space-y-1">
                <label className="label">
                  <span className="label-text font-medium text-base-content flex items-center gap-2">
                    Contact Information
                  </span>
                </label>
                <input
                  type="text"
                  name="contactInfo"
                  placeholder="Enter your email or phone number"
                  className="input input-bordered w-full rounded-lg focus:border-primary"
                />
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="label">
                  <span className="label-text font-medium text-base-content flex items-center gap-2">
                    Message to Donor Why Need
                  </span>
                </label>
                <textarea
                  rows="5"
                  name="messageDonor"
                  placeholder="Let them know why you're interested..."
                  className="input input-bordered w-full rounded-lg focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="btn btn-success w-full rounded-full shadow-none transition-all duration-300">
                Send Request
              </button>
            </form>
          </div>
        </dialog>
      </Container>
    </section>
  );
};

export default FoodDetails;
