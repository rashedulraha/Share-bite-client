import React from "react";
import Container from "../Components/Responsive/Container";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-16 bg-base-100 min-h-screen">
      <Container>
        <div className="max-w-3xl mx-auto space-y-12 text-center md:text-left">
          {/* Title */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
              About <span className="text-primary">ShareBite</span>
            </h1>
            <p className="text-lg text-muted">
              We connect surplus food with people in need — simple, fast, and
              free.
            </p>
          </div>

          {/* What We Do */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-base-content">
              What We Do
            </h2>
            <p className="text-muted leading-relaxed">
              Every day, good food goes to waste in restaurants and homes. At
              the same time, many people go hungry.
              <strong> SharePlate</strong> solves this by letting donors list
              extra food and helping others pick it up — all in one click.
            </p>
          </div>

          {/* How It Works */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-base-content">
              How It Works
            </h2>
            <ol className="space-y-3 text-muted text-left max-w-xl mx-auto md:mx-0">
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">1.</span>
                <span>
                  Donors post surplus food with pickup location and time.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">2.</span>
                <span>Users browse nearby food and send a request.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-primary">3.</span>
                <span>Pickup happens — food saved, hunger reduced.</span>
              </li>
            </ol>
          </div>

          {/* Stats (Simple) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
            <div>
              <p className="text-3xl font-bold text-primary">5,000+</p>
              <p className="text-sm text-muted">Meals Shared</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">1,200+</p>
              <p className="text-sm text-muted">Active Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">30</p>
              <p className="text-sm text-muted">Min Avg Pickup</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">98%</p>
              <p className="text-sm text-muted">Success Rate</p>
            </div>
          </div>

          {/* Live Info */}
          <div className="bg-base-200 rounded-2xl p-6 border border-neutral/20">
            <p className="text-sm text-muted">
              <strong>Current Time:</strong> November 10, 2025 01:43 PM +06
            </p>
            <p className="text-sm text-muted">
              <strong>Serving:</strong> Dhaka, Chittagong, Sylhet & more
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to={"/add-food"}
              className="btn btn-primary rounded-full px-8 shadow-md hover:shadow-lg transition-all">
              Donate Food
            </Link>
            <Link
              to={"/available-foods"}
              className="btn btn-outline rounded-full px-8 border-neutral hover:bg-primary hover:text-base-100 transition-all">
              Find Food
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
