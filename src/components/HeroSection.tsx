
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import InteractiveJournal from "./InteractiveJournal";

const HeroSection = () => {
  return <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <img 
                src="/lovable-uploads/f11f421a-1000-4fbb-b9cd-5a7c9ff8d11b.png" 
                alt="DearMe Logo" 
                className="h-32 animate-bounce-slow" 
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Where <span className="gradient-text">Real Feelings</span> Meet Real Tools
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-2 max-w-xl mx-auto lg:mx-0">
              Through guided journaling and mindfulness practices designed specifically for tweens and teens to navigate their emotions confidently.
            </p>
            <p className="text-lg md:text-xl text-penguin-600 font-medium mb-8 max-w-xl mx-auto lg:mx-0 italic">
              Not just an app. Not just a journal. A habit for life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <Link to="/pricing" className="inline-block">
                <Button className="bg-penguin-400 hover:bg-penguin-400/90 text-white px-8 py-6 text-lg font-medium shadow-md hover:shadow-lg transition-all w-full">
                  Discover Our Kit
                </Button>
              </Link>
              <Button variant="outline" className="border-penguin-400 text-penguin-800 hover:bg-penguin-50 px-8 py-6 text-lg">
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
    </section>;
};

export default HeroSection;
