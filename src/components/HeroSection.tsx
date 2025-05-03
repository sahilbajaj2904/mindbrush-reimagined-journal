
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Journaling for <span className="gradient-text">Mindfulness</span> and Mental Clarity
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Experience the power of structured journaling with research-backed prompts designed to reduce anxiety and improve mental wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <Button className="bg-mindblue-500 hover:bg-mindblue-600 text-white px-8 py-6 text-lg">
                <Link to="/product">Get Your Journal</Link>
              </Button>
              <Button variant="outline" className="border-mindblue-300 text-mindblue-600 hover:bg-mindblue-50 px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              <p>⭐ 4.9/5 from over 10,000 customers</p>
              <p>🛡️ 30-day satisfaction guarantee</p>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-float">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-mindblue-100 to-mindpurple-100 rounded-xl blur-xl opacity-70"></div>
              <img
                src="public/lovable-uploads/f1d52397-f748-4b2f-8d36-c8d419b71ec6.png"
                alt="Mindbrush Journal"
                className="relative w-full max-w-md rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
