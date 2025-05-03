
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cards = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">Emotional Connect Cards</h1>
          <p className="text-lg text-gray-700 mb-8">
            Our Emotional Connect Cards help children identify, understand, and express their
            emotions in a healthy way. Each card features our penguin character in different
            emotional states with prompts for discussion.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cards content will go here */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p>Our emotional connect cards are currently under development.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cards;
