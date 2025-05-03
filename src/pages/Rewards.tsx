
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Heart, Star, Trophy } from "lucide-react";
import RewardDashboard from "@/components/RewardDashboard";

const Rewards = () => {
  const rewardTiers = [
    {
      name: "Bronze",
      icon: <Star className="h-10 w-10 text-amber-600" />,
      points: "0-100 points",
      description: "Just getting started on your emotional wellness journey!"
    },
    {
      name: "Silver",
      icon: <Heart className="h-10 w-10 text-gray-400" />,
      points: "101-250 points",
      description: "Building positive emotional habits consistently."
    },
    {
      name: "Gold", 
      icon: <Trophy className="h-10 w-10 text-yellow-500" />,
      points: "251-500 points",
      description: "You're becoming an emotional wellness champion!"
    },
    {
      name: "Platinum",
      icon: <Award className="h-10 w-10 text-blue-500" />,
      points: "501+ points",
      description: "Expert level emotional intelligence skills achieved!"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold mb-4 text-dearme-text">Reward Point Tracker</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Track your child's emotional growth and reward their progress with our point system.
              Celebrate small wins and encourage positive emotional development.
            </p>
          </div>
          
          <div className="mb-12">
            <RewardDashboard />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {rewardTiers.map((tier, index) => (
              <Card key={index} className={`border-dearme-primary/10 hover:shadow-md transition-all ${index === 3 ? 'bg-gradient-to-br from-dearme-primary/10 to-dearme-accent/5' : ''}`}>
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto mb-3">{tier.icon}</div>
                  <CardTitle className="text-xl font-bold text-dearme-text">{tier.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-sm font-medium text-dearme-accent mb-2">{tier.points}</div>
                  <p className="text-gray-600 text-sm">{tier.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-white border border-dearme-primary/20 rounded-xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h2 className="text-2xl font-semibold mb-4 text-dearme-text">How the Reward System Works</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-dearme-primary/10 rounded-full p-1 mr-3 mt-1">
                      <Star className="h-4 w-4 text-dearme-primary" />
                    </div>
                    <p className="text-gray-700">Children earn points by completing emotional awareness activities</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-dearme-primary/10 rounded-full p-1 mr-3 mt-1">
                      <Star className="h-4 w-4 text-dearme-primary" />
                    </div>
                    <p className="text-gray-700">Points accumulate to unlock new tiers and rewards</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-dearme-primary/10 rounded-full p-1 mr-3 mt-1">
                      <Star className="h-4 w-4 text-dearme-primary" />
                    </div>
                    <p className="text-gray-700">Parents can set custom milestone rewards for their children</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-dearme-primary/10 rounded-full p-1 mr-3 mt-1">
                      <Star className="h-4 w-4 text-dearme-primary" />
                    </div>
                    <p className="text-gray-700">Track progress visually with our upcoming mobile app</p>
                  </li>
                </ul>
              </div>
              
              <div className="md:w-1/2 bg-dearme-light rounded-lg p-6 border border-dearme-primary/10">
                <h3 className="font-semibold text-lg mb-4 text-dearme-text">Coming Soon: Mobile App</h3>
                <p className="text-gray-600 mb-4">
                  Our mobile app will offer enhanced tracking features. Sign up to be notified when it's ready!
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-2 rounded-l-md border-y border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-dearme-primary"
                  />
                  <button className="bg-dearme-primary hover:bg-dearme-accent text-white px-4 py-2 rounded-r-md transition-colors">
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Rewards;
