
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Rewards = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">Reward Point Tracker</h1>
          <p className="text-lg text-gray-700 mb-8">
            Track your child's emotional growth and reward their progress with our point system.
            Celebrate small wins and encourage positive emotional development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Rewards content will go here */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p>Our reward point tracking system is currently under development.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Rewards;
