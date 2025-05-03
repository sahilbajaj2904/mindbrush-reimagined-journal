
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import InteractiveJournal from "./InteractiveJournal";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <img 
                src="public/lovable-uploads/cfa7a1e6-4c61-4108-bdb7-5e325e258a48.png"
                alt="DearMe Logo" 
                className="h-24 mr-2"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering <span className="gradient-text">Emotional Wellness</span> for Teens
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Through guided journaling and mindfulness practices designed specifically for tweens and teens to navigate their emotions confidently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <Button className="bg-mindblue-500 hover:bg-mindblue-600 text-white px-8 py-6 text-lg">
                <Link to="/product">Discover Our Kit</Link>
              </Button>
              <Button variant="outline" className="border-mindblue-300 text-mindblue-600 hover:bg-mindblue-50 px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              <p>⭐ Trusted by 250+ Schools & 10,000+ Teens Across India</p>
              <p>🛡️ 30-day satisfaction guarantee</p>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-float">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-mindblue-100 to-mindpurple-100 rounded-xl blur-xl opacity-70"></div>
              <InteractiveJournal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
