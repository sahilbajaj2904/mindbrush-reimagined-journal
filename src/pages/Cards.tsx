
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Star } from "lucide-react";

const Cards = () => {
  const cardSets = [
    {
      title: "Basic Emotions",
      description: "Help kids identify and understand primary emotions like happiness, sadness, anger, and fear.",
      count: "24 cards",
      level: "Ages 5-8"
    },
    {
      title: "Complex Emotions",
      description: "Explore nuanced feelings like disappointment, pride, jealousy, and anticipation.",
      count: "32 cards",
      level: "Ages 9-12"
    },
    {
      title: "Teen Emotions",
      description: "Navigate complex social and personal emotions common during adolescence.",
      count: "40 cards",
      level: "Ages 13-17"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold mb-4 text-dearme-text">Emotional Connect Cards</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our Emotional Connect Cards help children identify, understand, and express their
              emotions in a healthy way. Each card features our penguin character in different
              emotional states with prompts for discussion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {cardSets.map((set, index) => (
              <Card key={index} className="overflow-hidden border-dearme-primary/20 hover:border-dearme-primary/40 transition-all">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-dearme-primary/10 to-dearme-accent/5 p-6 flex items-center justify-between">
                    <CreditCard className="h-10 w-10 text-dearme-primary opacity-70" />
                    <div className="rounded-full bg-white px-3 py-1 text-sm font-medium text-dearme-primary">
                      {set.count}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-dearme-accent font-medium mb-1">{set.level}</div>
                    <h3 className="text-xl font-semibold text-dearme-text mb-3">{set.title}</h3>
                    <p className="text-gray-600 mb-4">{set.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      </div>
                      <div className="text-sm text-gray-500">Coming Soon</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-dearme-primary/10 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-dearme-text">Join the Waitlist</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our emotional connect cards are currently in development. Join our waitlist to be notified when they're available and receive a special discount on your first purchase.
            </p>
            <Button className="bg-dearme-primary hover:bg-dearme-accent text-white px-8 py-6">
              Join Waitlist
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cards;
