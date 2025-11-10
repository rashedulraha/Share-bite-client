import React from "react";
import { Link } from "react-router-dom";
import { SiIfood } from "react-icons/si";
import {
  FaLeaf,
  FaBox,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaShieldAlt,
  FaTruck,
  FaClock,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Container from "../Responsive/Container";

const SocialsLink = [
  { Icon: FaFacebook, link: "https://www.facebook.com/rashedulraha/" },
  { Icon: BsTwitterX, link: "https://x.com/rashedulraha" },
  { Icon: FaInstagram, link: "https://www.instagram.com/rashedulraha/" },
];

const Footer = () => {
  return (
    <footer className="bg-base-100 text-base-content border-t border-primary mt-10">
      <Container>
        {/* Main Footer */}
        <div className="py-8 md:py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className=" flex items-center justify-center font-bold text-2xl ">
                <SiIfood />
              </div>
              <h2 className="text-3xl font-bold">
                Share<span className="text-primary">bite</span>
              </h2>
            </div>
            <p className="text-muted leading-relaxed">
              Reducing food waste by connecting surplus meals with those in
              need.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {SocialsLink.map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  className="btn btn-circle btn-outline border-white/30 hover:bg-primary hover:border-primary hover:text-base-100 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <nav className="space-y-4">
            <h6 className="text-primary flex items-center gap-2 text-lg font-semibold">
              <FaBox className="w-5 h-5" /> Our Services
            </h6>
            <div className="space-y-2 text-muted">
              <Link
                to="/available-foods"
                className="flex items-center gap-2 hover:text-primary transition">
                <FaTruck className="w-4 h-4 text-primary" /> Food Distribution
              </Link>
              <Link
                to="/add-food"
                className="flex items-center gap-2 hover:text-primary transition">
                <FaLeaf className="w-4 h-4 text-primary" /> Surplus Donation
              </Link>
              <Link
                to="/request"
                className="flex items-center gap-2 hover:text-primary transition">
                <FaClock className="w-4 h-4 text-primary" /> Real-time Requests
              </Link>
            </div>
          </nav>

          {/* Company */}
          <nav className="space-y-4">
            <h6 className="text-secondary flex items-center gap-2 text-lg font-semibold">
              <FaShieldAlt className="w-5 h-5" /> Company
            </h6>
            <div className="space-y-2 flex flex-col text-muted">
              <Link to="/about" className="hover:text-primary transition">
                About Us
              </Link>
              <Link to="/mission" className="hover:text-primary transition">
                Our Mission
              </Link>
              <Link to="/team" className="hover:text-primary transition">
                Team
              </Link>
              <Link to="/careers" className="hover:text-primary transition">
                Careers
              </Link>
            </div>
          </nav>

          {/* Contact */}
          <nav className="space-y-5">
            <h6 className="text-secondary flex items-center gap-2 text-lg font-semibold">
              <FaEnvelope className="w-5 h-5" /> Contact Us
            </h6>
            <div className="space-y-3 text-muted">
              <p className="flex items-center gap-3">
                <FaEnvelope className="w-4 h-4 text-primary" />{" "}
                support@sharebite.com
              </p>
              <p className="flex items-center gap-3">
                <FaPhone className="w-4 h-4 text-primary" />
                01992-284845
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="w-4 h-4 text-primary" /> 123 Naogaon
                dhaka Bangladesh
              </p>
            </div>
          </nav>
        </div>
      </Container>
      {/* Bottom Bar */}
      <div className="py-6">
        <Container className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-center sm:text-left text-muted  ">
          <p className="text-center my-2">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-primary">Share bite</span>. Crafted
            with <span className="text-accent">Love</span> for humanity.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link to="/privacy" className="hover:text-primary transition">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-primary transition">
              Terms
            </Link>
            <Link to="/cookies" className="hover:text-primary transition">
              Cookies
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
