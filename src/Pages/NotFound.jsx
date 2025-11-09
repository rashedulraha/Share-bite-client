import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-base-100 px-4">
      <h1 className="text-8xl font-bold text-base-content">
        4<span className="text-primary animate-pulse">0</span>4
      </h1>
      <p className="text-2xl font-semibold mt-4 text-base-content">
        Oops! Page Not Found
      </p>
      <p className="text-lg text-muted mt-2 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 btn btn-primary flex items-center gap-2 shadow-none">
        <FaHome className="w-5 h-5" />
        Back to Home
      </Link>
    </section>
  );
};

export default NotFound;
