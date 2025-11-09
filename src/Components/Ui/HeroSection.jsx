import React from "react";
import { FaUtensils, FaArrowRight } from "react-icons/fa";
import Container from "../Responsive/Container";

const HeroSection = () => {
  return (
    <section className="relative  py-10 md:py-14  flex items-center justify-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-transparent via-primary/5 to-transparent opacity-50"></div>
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text + CTA */}
          <div
            className="space-y-6 text-center lg:text-left"
            data-aos="fade-right">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <FaUtensils className="w-4 h-4" />
              Share Food, Save Lives
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content leading-tight">
              Turn Surplus Food into{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Hope
              </span>
            </h1>

            <p className="text-lg text-muted max-w-2xl">
              Every day, good food goes to waste while many go hungry. Join
              SharePlate to connect donors with those in need —{" "}
              <strong>one meal at a time</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn btn-primary btn-lg rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group">
                Start Sharing
                <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn btn-outline btn-lg rounded-md border-neutral hover:bg-primary hover:text-base-100 transition-all duration-300">
                Browse Foods
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 justify-center lg:justify-start text-sm text-muted mt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>5,000+ Meals Shared</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>1,200+ Active Users</span>
              </div>
            </div>
          </div>

          {/* Right:  Card */}
          <div className="relative" data-aos="fade-left">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-neutral/20">
              <div className="bg-base-100/50 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <FaUtensils className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base-content">
                      Donate in 2 Minutes
                    </h3>
                    <p className="text-xs text-muted">
                      List food, set pickup, help someone.
                    </p>
                  </div>
                </div>
                <div className="h-px bg-neutral/30"></div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                    <FaArrowRight className="w-8 h-8 text-secondary rotate-[-45deg]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base-content">
                      Pickup in Real-Time
                    </h3>
                    <p className="text-xs text-muted">
                      Get notified, collect, reduce waste.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-base-100 rounded-2xl p-4 shadow-xl border border-neutral/20 text-center">
              <div className="text-2xl font-bold text-primary">98%</div>
              <p className="text-xs text-muted">Success Rate</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
