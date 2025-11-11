import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaEnvelope } from "react-icons/fa";
import Container from "../Components/Responsive/Container";
import { SiIfood } from "react-icons/si";
import AuthContext from "../Context/AuthContext";
import LoadingSpinner from "../Components/shared/LoadingSpinner";
import { toast } from "react-toastify";

const Forgot = () => {
  const { user, loading, resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (user) {
    return navigate("/");
  }

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    const newTab = window.open("about:blank");

    resetPassword(email)
      .then(() => {
        toast.success("Check your email inbox for reset link");

        newTab.location.href = "https://mail.google.com/mail/u/0/#inbox";
      })
      .catch((error) => {
        toast.error(error.message);
        newTab.close();
      });
  };

  return (
    <Container>
      <div className="md:w-md bg-base-100 mx-auto border border-secondary/30 rounded-xl my-5 shadow-lg">
        <div className="p-6 md:p-8 space-y-6">
          {/* Title */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-3 border-b border-s-accent p-2">
              <Link to="/" className="flex items-center gap-3">
                <div className=" flex items-center justify-center font-bold text-2xl ">
                  <SiIfood />
                </div>
                <span className="text-2xl font-bold ">
                  Share <span className="text-primary">bite</span>
                </span>
              </Link>
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
              Forgot Password?
            </h2>
            <p className="text-muted text-sm">
              Enter your email to reset your password
            </p>
          </div>

          {/* Email Field */}
          <div>
            <form onSubmit={handleResetPassword}>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-base-content mb-1 flex items-center gap-2">
                <FaEnvelope className="w-4 h-4 text-primary" />
                Email Address
              </label>
              <input
                name="email"
                type="email"
                className="input input-bordered input-md w-full rounded-lg focus:border-primary transition-all"
                placeholder="you@example.com"
              />
            </form>
          </div>

          {/* Info Text */}
          <div className="bg-base-200/50 rounded-lg p-3 text-xs text-muted">
            <p>
              We will send you a password reset link to your email. Please check
              your inbox (and spam folder).
            </p>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-base-100 text-muted">
                Or sign in with
              </span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="btn btn-outline flex items-center justify-center py-2 text-sm font-medium hover:bg-primary hover:text-base-100 transition-all border-neutral rounded-lg">
              <FcGoogle className="mr-2 text-lg" />
              Google
            </button>
            <button className="btn btn-outline flex items-center justify-center py-2 text-sm font-medium hover:bg-primary hover:text-base-100 transition-all border-neutral rounded-lg">
              <FaFacebook className="mr-2 text-lg text-blue-600" />
              Facebook
            </button>
          </div>

          {/* Back to Login */}
          <div className="text-center text-xs">
            <span className="text-muted">Remember your password? </span>
            <Link
              to="/auth/login"
              className="text-primary hover:underline font-semibold">
              Back to Login
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full bg-gradient-to-r from-primary to-secondary text-base-100 rounded-md  shadow-none">
            Send Reset Link
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Forgot;
