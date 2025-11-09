import React from "react";
import { FaUserPlus, FaUtensils, FaHandsHelping } from "react-icons/fa";
import Container from "../Responsive/Container";

const HowItWorks = () => {
  const steps = [
    {
      title: "Sign Up",
      desc: "Create a free account in seconds and join our community of food sharers.",
      icon: <FaUserPlus className="w-6 h-6" />,
      color: "bg-primary",
    },
    {
      title: "Share or Request",
      desc: "List surplus food or browse available donations in your area.",
      icon: <FaUtensils className="w-6 h-6" />,
      color: "bg-secondary",
    },
    {
      title: "Connect & Pickup",
      desc: "Coordinate pickup details and make a positive impact together.",
      icon: <FaHandsHelping className="w-6 h-6" />,
      color: "bg-accent",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-base-200">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content">
            How SharePlate Works
          </h2>
          <p className="text-muted mt-2">
            Simple steps to share or receive food
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
              data-aos="fade-up"
              data-aos-delay={index * 100}>
              <div className="mt-4 text-base-content/80 rounded-full border p-4">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="mt-3 text-xl font-semibold text-base-content">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-muted max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
