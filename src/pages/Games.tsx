
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad } from "lucide-react";

const Games = () => {
  const comingSoonGames = [
    {
      title: "Emotion Explorer",
      description: "Navigate through emotional landscapes and learn to identify feelings in this interactive adventure.",
      image: "/lovable-uploads/6fe9f7f1-296b-4901-a6f8-0dbb3d3c505f.png"
    },
    {
      title: "Mindfulness Match",
      description: "A matching game that strengthens focus and introduces mindfulness practices.",
      image: "/lovable-uploads/0f86e666-4dc8-489f-b275-2bb15d1e1747.png"
    },
    {
      title: "Gratitude Garden",
      description: "Grow your own virtual garden by practicing daily gratitude and positive reflection.",
      image: "/lovable-uploads/8d60e10c-d909-4fbc-9be7-4e5317d0de77.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dearme-text font-serif">Mindfulness Games</h2>
              <p className="text-lg text-gray-600 mb-8">
                Explore our collection of mindfulness and emotional wellness games designed to help
                children express their feelings in a fun and interactive way.
              </p>
            </div>

            {/* Desktop Grid View */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
              {comingSoonGames.map((game, index) => (
                <GameCard key={index} game={game} />
              ))}
            </div>

            {/* Mobile Grid View */}
            <div className="md:hidden grid grid-cols-1 gap-6">
              {comingSoonGames.map((game, index) => (
                <GameCard key={index} game={game} />
              ))}
            </div>
            
            <div className="mt-16 bg-dearme-light border border-dearme-primary/10 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4 text-dearme-text">Subscribe for Updates</h2>
              <p className="text-gray-600 mb-6">
                Be the first to know when our new games are available. We'll notify you as soon as they're released.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dearme-primary flex-1"
                />
                <Button className="bg-dearme-primary hover:bg-dearme-accent text-white">
                  Notify Me
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Game Card component to match the ProductCard style
const GameCard = ({ game }) => {
  return (
    <Card className="overflow-hidden border border-dearme-primary/10 transition-all duration-300 hover:shadow-md group">
      <div className="aspect-square overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10"/>
        {game.image ? (
          <img 
            src={game.image} 
            alt={game.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-dearme-primary/20 to-dearme-accent/10 flex items-center justify-center">
            <Gamepad className="h-16 w-16 text-dearme-primary opacity-70" />
          </div>
        )}
        {/* Title overlay on image */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <h3 className="font-serif font-semibold text-xl text-white drop-shadow-md">
            {game.title}
          </h3>
        </div>
        <div className="absolute top-3 right-3 bg-dearme-primary text-white px-3 py-1 text-xs font-medium rounded-full z-20">
          Coming Soon
        </div>
      </div>
      <CardContent className="p-5">
        <p className="text-sm text-gray-600">{game.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-dearme-primary text-white hover:bg-dearme-accent">
          Get Notified on Release
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Games;
