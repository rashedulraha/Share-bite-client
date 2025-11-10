import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import Container from "../Components/Responsive/Container";
import { SiIfood } from "react-icons/si";

import { toast } from "react-toastify";
import AuthContext from "../Context/AuthContext";
import LoadingSpinner from "../Components/shared/LoadingSpinner";

const Login = () => {
  const { user, signinUser, WithGoogle, loading } = useContext(AuthContext);
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLoginUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signinUser(email, password).then(() => {
      toast.success("Login successfully");
    });
  };

  const handleLoginWithGoogle = () => {
    setLoadingSpinner(true);
    WithGoogle().then(() => {
      setLoadingSpinner(false);
      toast.success("successfully register");
      navigate("/");
    });
  };

  if (loading) {
    return <LoadingSpinner />;
  }
  if (user) {
    return navigate("/");
  }

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
              Welcome Back
            </h2>
            <p className="text-muted text-sm">
              Log in to continue sharing food and love
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleLoginUser}>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-base-content mb-1">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                required
                className="input input-bordered input-md w-full rounded-lg focus:border-primary transition-all"
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-xs font-medium text-base-content mb-1">
                Password
              </label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input input-bordered input-md w-full rounded-lg focus:border-primary transition-all pr-10 relative"
                placeholder="••••••••"
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 z-20 top-8 cursor-pointer text-base-content/60 hover:text-primary transition-all">
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5" />
                ) : (
                  <FaEye className="h-5 w-5" />
                )}
              </span>
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
                to="/auth/forgot-password"
                className="text-primary hover:underline font-medium">
                Forgot Password?
              </Link>
            </div>

            {/* Submit */}
            {loading ? (
              <div className="btn btn-primary w-full text-base-100 rounded-md shadow-none border-none bg-gradient-to-r from-primary/40 to-secondary/40">
                <span className="loading loading-infinity"></span>
              </div>
            ) : (
              <button
                type="submit"
                className="btn btn-primary w-full bg-gradient-to-r from-primary to-secondary text-base-100 rounded-md shadow-none border-none">
                Login
              </button>
            )}
          </form>

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
            {loadingSpinner ? (
              <div className="btn btn-primary w-full  text-base-100 rounded-md  shadow-none border-none bg-gradient-to-r from-primary/40 to-secondary/40  ">
                <span className="loading loading-infinity "></span>
              </div>
            ) : (
              <button
                onClick={handleLoginWithGoogle}
                className="btn btn-outline flex items-center justify-center py-2 text-sm font-medium hover:bg-primary hover:text-base-100 transition-all border-neutral">
                <FcGoogle className="mr-2 text-lg" />
                Google
              </button>
            )}
            <button
              disabled
              className="btn btn-outline flex items-center justify-center py-2 text-sm font-medium hover:bg-primary hover:text-base-100 transition-all border-neutral rounded-lg">
              <FaFacebook className="mr-2 text-lg text-blue-600" />
              Facebook
            </button>
          </div>

          {/* Register Link */}
          <div className="text-center text-xs">
            <span className="text-muted">Don't have an account? </span>
            <Link
              to="/auth/register"
              className="text-primary hover:underline font-semibold">
              Register here
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
