import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Container from "../Components/Responsive/Container";

const Login = () => {
  return (
    <Container>
      <div className="md:w-md bg-base-100 mx-auto border border-secondary/30 rounded-xl my-5 shadow-lg">
        <div className="p-6 md:p-8 space-y-6">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
              Welcome Back
            </h2>
            <p className="text-muted text-sm">
              Log in to continue sharing food and love
            </p>
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
              className="input input-bordered input-md w-full rounded-lg focus:border-primary transition-all"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-xs font-medium text-base-content mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="input input-bordered input-md w-full rounded-lg focus:border-primary transition-all"
              placeholder="••••••••"
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex justify-between items-center text-xs">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-sm checkbox-primary"
              />
              <span className="text-muted">Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-primary hover:underline font-medium">
              Forgot Password?
            </Link>
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
            <button className="btn btn-outline flex items-center justify-center py-2 text-sm font-medium hover:bg-primary hover:text-base-100 transition-all border-neutral rounded-lg">
              <FcGoogle className="mr-2 text-lg" />
              Google
            </button>
            <button className="btn btn-outline flex items-center justify-center py-2 text-sm font-medium hover:bg-primary hover:text-base-100 transition-all border-neutral rounded-lg">
              <FaFacebook className="mr-2 text-lg text-blue-600" />
              Facebook
            </button>
          </div>

          {/* Register Link */}
          <div className="text-center text-xs">
            <span className="text-muted">Don't have an account? </span>
            <Link
              to="/register"
              className="text-primary hover:underline font-semibold">
              Register here
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-primary w-full bg-gradient-to-r from-primary to-secondary text-base-100 rounded-md  shadow-none">
            Login
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Login;
