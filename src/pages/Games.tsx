
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Games = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">Games</h1>
          <p className="text-lg text-gray-700 mb-8">
            Explore our collection of mindfulness and emotional wellness games designed to help
            children express their feelings in a fun and interactive way.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Game content will go here */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p>Our games section is currently under development.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Games;
