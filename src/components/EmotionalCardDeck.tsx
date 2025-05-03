
import React, { useState } from "react";
import { Shuffle, Save, Heart, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import EmotionCard from "./EmotionCard";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// Card data - questions, prompts and activities
const cardData = [
  {
    id: 1,
    type: "reflection",
    category: "Understanding",
    color: "#E5DEFF", // Soft purple
    title: "Name Your Feelings",
    content: "What emotions are you experiencing right now? Try to name at least three and rate their intensity from 1-10.",
    emoji: "😊"
  },
  {
    id: 2,
    type: "activity",
    category: "Expression",
    color: "#FFDEE2", // Soft pink
    title: "Draw Your Day",
    content: "Use shapes and colors to draw how your day felt. No need to draw actual objects - just express the emotions!",
    emoji: "🎨"
  },
  {
    id: 3,
    type: "challenge",
    category: "Growth",
    color: "#D3E4FD", // Soft blue
    title: "Reframe a Thought",
    content: "Think of a negative thought you had today. How could you reframe it in a more positive or balanced way?",
    emoji: "🧠"
  },
  {
    id: 4,
    type: "reflection",
    category: "Social",
    color: "#FDE1D3", // Soft peach
    title: "Friendship Reflection",
    content: "What quality do you appreciate most in a friend? How do you show that same quality to others?",
    emoji: "👥"
  },
  {
    id: 5,
    type: "activity",
    category: "Self-Care",
    color: "#FEF7CD", // Soft yellow
    title: "Comfort Playlist",
    content: "What songs help you feel better when you're down? Create a playlist of 5 songs that lift your mood.",
    emoji: "🎵"
  }
];

const EmotionalCardDeck: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [savedCards, setSavedCards] = useState<number[]>([]);
  const { toast } = useToast();
  
  const shuffleCards = () => {
    setActiveCardIndex(Math.floor(Math.random() * cardData.length));
    toast({
      title: "Cards shuffled!",
      description: "Found a new prompt for you to explore.",
    });
  };
  
  const saveToJournal = (cardId: number) => {
    setSavedCards([...savedCards, cardId]);
    toast({
      title: "Saved to journal!",
      description: "You can find this card in your saved items.",
      variant: "default",
    });
  };
  
  const playWithFriend = () => {
    toast({
      title: "Share with a friend",
      description: "Coming soon: Share this prompt with friends!",
    });
  };
  
  const isCardSaved = (cardId: number) => savedCards.includes(cardId);
  
  return (
    <div className="p-4 md:p-8 bg-gradient-to-br from-dearme-primary/5 to-dearme-accent/5 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-dearme-text">
        Express Yourself Card Deck
      </h2>
      
      <div className="relative mb-6 perspective">
        <Carousel className="w-full max-w-md mx-auto">
          <CarouselContent>
            {cardData.map((card, index) => (
              <CarouselItem key={card.id} className="flex justify-center">
                <EmotionCard 
                  card={card} 
                  isActive={index === activeCardIndex}
                  isSaved={isCardSaved(card.id)}
                  onSave={() => saveToJournal(card.id)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4 gap-2">
            <CarouselPrevious className="relative static translate-y-0 left-0" />
            <CarouselNext className="relative static translate-y-0 right-0" />
          </div>
        </Carousel>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        <Button 
          variant="outline" 
          onClick={shuffleCards}
          className="bg-white border-dearme-primary/20 text-dearme-primary hover:bg-dearme-primary/10"
        >
          <Shuffle className="mr-2 h-4 w-4" /> Shuffle Again
        </Button>
        <Button 
          variant="outline" 
          onClick={() => saveToJournal(cardData[activeCardIndex].id)}
          disabled={isCardSaved(cardData[activeCardIndex].id)}
          className={cn(
            "bg-white border-dearme-primary/20 text-dearme-primary hover:bg-dearme-primary/10",
            isCardSaved(cardData[activeCardIndex].id) && "opacity-50"
          )}
        >
          <Save className="mr-2 h-4 w-4" /> 
          {isCardSaved(cardData[activeCardIndex].id) ? "Saved" : "Save to Journal"}
        </Button>
        <Button 
          variant="outline" 
          onClick={playWithFriend}
          className="bg-white border-dearme-primary/20 text-dearme-primary hover:bg-dearme-primary/10"
        >
          <Play className="mr-2 h-4 w-4" /> Play with a Friend
        </Button>
      </div>
      
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Swipe cards to discover more prompts and activities</p>
      </div>
    </div>
  );
};

export default EmotionalCardDeck;
