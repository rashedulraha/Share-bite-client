import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Container from "../Components/Responsive/Container";

const Register = () => {
  return (
    <Container>
      <div className="md:w-md bg-base-100   mx-auto border border-secondary/30 rounded-md my-5">
        <div className="p-5  space-y-5">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
              Create Account
            </h2>
            <p className="text-muted text-sm">
              Join us to share food and spread love
            </p>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="firstName"
                className="block text-xs font-medium text-base-content mb-1">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                className="input input-bordered input-sm w-full rounded-lg focus:border-primary transition-all"
                placeholder="First name"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-xs font-medium text-base-content mb-1">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                className="input input-bordered input-sm w-full rounded-lg focus:border-primary transition-all"
                placeholder="Last name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium text-base-content mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="input input-bordered input-sm w-full rounded-lg focus:border-primary transition-all"
              placeholder="you@example.com"
            />
          </div>

          {/* Password Fields */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-medium text-base-content mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="input input-bordered input-sm w-full rounded-lg focus:border-primary transition-all"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-xs font-medium text-base-content mb-1">
                Confirm
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="input input-bordered input-sm w-full rounded-lg focus:border-primary transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-base-100 text-muted">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="btn btn-outline flex items-center justify-center py-2 text-sm font-medium hover:bg-primary hover:text-base-100 transition-all border-neutral">
              <FcGoogle className="mr-2 text-lg" />
              Google
            </button>
            <button className="btn btn-outline flex items-center justify-center py-2 text-sm font-medium hover:bg-primary hover:text-base-100 transition-all border-neutral">
              <FaFacebook className="mr-2 text-lg text-blue-600" />
              Facebook
            </button>
          </div>

          {/* Links */}
          <div className="flex justify-between items-center text-xs">
            <Link to="/login" className="text-primary hover:underline">
              Already have an account?
            </Link>
            <Link
              to="/forgot-password"
              className="text-primary hover:underline font-medium">
              Forgot Password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-primary w-full bg-gradient-to-r from-primary to-secondary text-base-100 rounded-md  shadow-none ">
            Create Account
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Register;
