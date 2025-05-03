
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmotionCardProps {
  card: {
    id: number;
    type: string;
    category: string;
    color: string;
    title: string;
    content: string;
    emoji: string;
  };
  isActive: boolean;
  isSaved: boolean;
  onSave: () => void;
}

const EmotionCard: React.FC<EmotionCardProps> = ({ card, isActive, isSaved, onSave }) => {
  const { type, category, color, title, content, emoji } = card;
  
  return (
    <Card className={cn(
      "w-full max-w-sm transition-all duration-300 overflow-hidden border-2",
      isActive ? "border-dearme-primary/40 shadow-lg" : "border-dearme-primary/20 shadow-md",
      "hover:shadow-lg"
    )}>
      <div 
        className="p-6 relative" 
        style={{ backgroundColor: `${color}20` }} // Light version of the card color
      >
        <div className="absolute top-0 right-0 mt-4 mr-4">
          <span className="text-4xl">{emoji}</span>
        </div>
        
        <div className="flex items-center mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium" 
            style={{ backgroundColor: color, color: "#333" }}>
            {category}
          </span>
          <span className="ml-2 text-xs text-gray-500 font-medium uppercase">
            {type}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-dearme-text mb-3 pr-12">
          {title}
        </h3>
        
        <p className="text-gray-700 mb-6 font-handwriting text-xl leading-relaxed">
          {content}
        </p>
        
        <div className="flex justify-between items-center">
          <Button 
            size="sm" 
            variant="outline"
            onClick={onSave}
            disabled={isSaved}
            className={cn(
              "bg-white/80 backdrop-blur-sm hover:bg-white",
              isSaved ? "text-red-500" : "text-gray-500"
            )}
          >
            <Heart className={cn("h-4 w-4 mr-1", isSaved && "fill-red-500")} />
            {isSaved ? "Saved" : "Like"}
          </Button>
          
          <div className="text-xs text-gray-500 font-handwriting">
            Card #{card.id}
          </div>
        </div>
      </div>
      
      <CardContent className="p-4 bg-white">
        <div className="mb-3">
          <h4 className="text-sm font-medium text-gray-700 mb-1">How do you feel about this?</h4>
          <div className="flex gap-2">
            {["😢", "😐", "🙂", "😊", "🤩"].map((emoji, i) => (
              <button 
                key={i}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
        
        <div className="text-xs text-gray-500">
          Tap an emoji to record your response
        </div>
      </CardContent>
    </Card>
  );
};

export default EmotionCard;
