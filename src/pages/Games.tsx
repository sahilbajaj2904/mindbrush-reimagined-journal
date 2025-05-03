
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Gamepad } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Games = () => {
  const comingSoonGames = [
    {
      title: "Emotion Explorer",
      description: "Navigate through emotional landscapes and learn to identify feelings in this interactive adventure.",
      image: "/lovable-uploads/6fe9f7f1-296b-4901-a6f8-0dbb3d3c505f.png"
    },
    {
      title: "Mindfulness Match",
      description: "A matching game that strengthens focus and introduces mindfulness practices."
    },
    {
      title: "Gratitude Garden",
      description: "Grow your own virtual garden by practicing daily gratitude and positive reflection."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold mb-4 text-dearme-text">Mindfulness Games</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore our collection of mindfulness and emotional wellness games designed to help
              children express their feelings in a fun and interactive way.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comingSoonGames.map((game, index) => (
              <Card key={index} className="overflow-hidden border-dearme-primary/20 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-dearme-primary/20 to-dearme-accent/10 h-48 flex items-center justify-center">
                    {game.image ? (
                      <AspectRatio ratio={1/1} className="h-full w-full">
                        <img 
                          src={game.image} 
                          alt={game.title} 
                          className="h-full w-full object-contain"
                        />
                      </AspectRatio>
                    ) : (
                      <Gamepad className="h-16 w-16 text-dearme-primary opacity-70" />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="inline-block bg-dearme-primary/10 text-dearme-primary text-sm font-medium px-3 py-1 rounded-full mb-3">
                      Coming Soon
                    </div>
                    <h3 className="text-xl font-semibold text-dearme-text mb-2">{game.title}</h3>
                    <p className="text-gray-600">{game.description}</p>
                  </div>
                </CardContent>
              </Card>
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
              <button className="bg-dearme-primary hover:bg-dearme-accent text-white px-4 py-2 rounded-md transition-colors">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Games;
