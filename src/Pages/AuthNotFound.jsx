import React, { useContext } from "react";
import { FaLock, FaSignInAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Container from "../Components/Responsive/Container";
import AuthContext from "../Context/AuthContext";
import LoadingSpinner from "../Components/shared/LoadingSpinner";

const AuthNotFound = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) {
    return <LoadingSpinner />;
  }
  if (user) {
    return navigate("/");
  }

  return (
    <section className="py-10 md:py-24 bg-base-100  flex items-center">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-7">
          {/* Lock Icon */}
          <div className="flex justify-center" data-aos="zoom-in">
            <div className="w-24 h-24 bg-warning/10 rounded-full flex items-center justify-center">
              <FaLock className="w-10 h-10 text-warning" />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-3" data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-5xl md:text-7xl font-bold text-base-content">
              Access <span className="text-primary">Denied</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-base-content">
              Authentication Required
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              You need to <strong>log in</strong> or <strong>register</strong>{" "}
              to access this page.
            </p>
          </div>

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="300">
            <Link
              to="/auth/login"
              className="btn btn-primary btn-lg rounded-full px-8 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
              <FaSignInAlt className="w-5 h-5" />
              Login
            </Link>
            <Link
              to="/auth/register"
              className="btn btn-outline btn-lg rounded-full px-8 border-neutral hover:bg-primary hover:text-base-100 transition-all duration-300">
              Register
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AuthNotFound;
