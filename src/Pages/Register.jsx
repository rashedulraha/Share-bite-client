import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash, FaFacebook } from "react-icons/fa";
import Container from "../Components/Responsive/Container";
import { SiIfood } from "react-icons/si";
import { toast } from "react-toastify";
import { EyeIcon } from "lucide-react";
import AuthContext from "../Context/AuthContext";
import LoadingSpinner from "../Components/shared/LoadingSpinner";

const Register = () => {
  const { Register, WithGoogle, loading, user } = useContext(AuthContext);
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegisterAccount = (e) => {
    e.preventDefault();
    console.log("Hello world");
    // const firstName = e.target.firstName.value;
    // const photoUrl = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must have at least one uppercase letter, one lowercase letter, one number, and be at least 6 characters long."
      );
    } else {
      setError("");
      Register(email, password).then(() => {
        navigate("/");
        toast.success("successfully create a account");
        e.target.reset();
      });
    }
  };

  const handleRegisterWithGoogle = () => {
    setLoadingSpinner(true);
    WithGoogle().then(() => {
      toast.success("successfully register");
      navigate("/");
      setLoadingSpinner(false);
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
      <div className="md:w-md bg-base-100   mx-auto border border-secondary/30 rounded-md my-5">
        <div className="p-5  space-y-5">
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
              Create Account
            </h2>
            <p className="text-muted text-sm">
              Join us to share food and spread love
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleRegisterAccount}>
            {/* Name Fields */}

            <div>
              <label
                htmlFor="firstName"
                className="block text-xs font-medium text-base-content mb-1">
                First Name
              </label>
              <input
                name="firstName"
                type="text"
                required
                className="input input-bordered input-sm w-full rounded-lg focus:border-primary transition-all"
                placeholder="First name"
              />
            </div>

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
                className="input input-bordered input-sm w-full rounded-lg focus:border-primary transition-all"
                placeholder="you@example.com"
              />
            </div>

            {/* Image  Fields */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="url"
                  className="block text-xs font-medium text-base-content mb-1">
                  Awesome Photo Url
                </label>
                <input
                  name="photoURL"
                  type="url"
                  className="input input-bordered input-sm w-full rounded-lg focus:border-primary transition-all"
                  placeholder="Enter your awesome photo url"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="Password"
                  className="block text-xs font-medium text-base-content mb-1">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input input-bordered input-sm w-full rounded-lg focus:border-primary transition-all pr-10 "
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 -right-1 z-20 top-5 flex items-center pr-3 text-gray-500 hover:text-gray-700">
                  {showPassword ? (
                    <FaEyeSlash className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <p className="text-red-500 text-sm ">{error}</p>

            {/* Submit */}
            {loading ? (
              <div className="btn btn-primary w-full  text-base-100 rounded-md  shadow-none border-none bg-gradient-to-r from-primary/40 to-secondary/40  ">
                <span className="loading loading-infinity "></span>
              </div>
            ) : (
              <button
                type="submit"
                className="btn btn-primary w-full bg-gradient-to-r from-primary to-secondary text-base-100 rounded-md  shadow-none border-none">
                Register
              </button>
            )}
          </form>
          {/* Links */}
          <div className="flex justify-between items-center text-xs">
            <Link to="/auth/login" className="text-primary hover:underline">
              Already have an account?
            </Link>
            <Link
              to="/auth/forgot-password"
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
            {loadingSpinner ? (
              <div className="btn btn-primary w-full  text-base-100 rounded-md  shadow-none border-none bg-gradient-to-r from-primary/40 to-secondary/40  ">
                <span className="loading loading-infinity "></span>
              </div>
            ) : (
              <button
                onClick={handleRegisterWithGoogle}
                className="btn btn-outline flex items-center justify-center py-2 text-sm font-medium hover:bg-primary hover:text-base-100 transition-all border-neutral">
                <FcGoogle className="mr-2 text-lg" />
                Google
              </button>
            )}
            <button
              disabled
              className="btn btn-outline flex items-center justify-center py-2 text-sm font-medium hover:bg-primary hover:text-base-100 transition-all border-neutral cursor-not-allowed">
              <FaFacebook className="mr-2 text-lg text-blue-600" />
              Facebook
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
