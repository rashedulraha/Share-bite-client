import React from "react";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import Container from "../Components/Responsive/Container";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  // Live Info
  const currentTime = "November 11, 2025 09:44 AM +06";
  const country = "BD";

  return (
    <section className="py-16 md:py-24 bg-base-100 min-h-screen flex items-center">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-12">
          {/* Main Text */}
          <div className="space-y-4" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-base-content">
              Coming <span className="text-primary">Soon</span>
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
              We're working hard to bring you something amazing. Stay tuned!
            </p>
          </div>

          {/* Clock Icon + Time */}
          <div
            className="flex flex-col items-center gap-4"
            data-aos="fade-up"
            data-aos-delay="200">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
              <FaClock className="w-12 h-12 text-primary" />
            </div>
            <div className="bg-base-200 rounded-md px-6 py-4 border border-neutral/20">
              <p className="text-sm text-base-content">
                <strong>Current Time:</strong> {currentTime}
              </p>
              <p className="text-sm text-base-content flex items-center justify-center gap-1 mt-1">
                <FaMapMarkerAlt className="w-4 h-4 text-primary" />
                <strong>Country:</strong> {country}
              </p>
            </div>
          </div>

          {/* Back Button */}
          <div data-aos="fade-up" data-aos-delay="300">
            <Link
              to={"/"}
              className="btn btn-outline btn-lg rounded-full px-8 border-neutral hover:bg-primary hover:text-base-100 transition-all duration-300">
              Back to Home
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ComingSoon;
