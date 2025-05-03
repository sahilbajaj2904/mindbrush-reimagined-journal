
import React, { useState } from "react";
import { BookOpen, ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface JournalPage {
  id: number;
  title: string;
  content: string;
  penguinMood: string;
  penguinQuote: string;
  color: string;
}

const journalPages: JournalPage[] = [
  {
    id: 1,
    title: "Understanding Your Emotions",
    content: "Learning to identify and name your emotions is the first step to emotional wellness.",
    penguinMood: "Curious",
    penguinQuote: "When you name your feelings, they become less overwhelming!",
    color: "bg-blue-50"
  },
  {
    id: 2,
    title: "Mindfulness Journey",
    content: "Take a moment to breathe deeply and notice your surroundings with all your senses.",
    penguinMood: "Peaceful",
    penguinQuote: "Remember, staying present is a superpower!",
    color: "bg-purple-50"
  },
  {
    id: 3,
    title: "Gratitude Practice",
    content: "List three things you're grateful for today, no matter how small they might seem.",
    penguinMood: "Happy",
    penguinQuote: "Finding joy in little things makes every day brighter!",
    color: "bg-yellow-50"
  },
  {
    id: 4,
    title: "Stress Management",
    content: "What activities help you feel calm when you're stressed? Make a list of your go-to strategies.",
    penguinMood: "Thoughtful",
    penguinQuote: "Having a toolbox of coping skills helps during tough times!",
    color: "bg-green-50"
  },
  {
    id: 5,
    title: "Building Confidence",
    content: "Write down three strengths you have and how they've helped you face challenges.",
    penguinMood: "Proud",
    penguinQuote: "Remember your strengths when things get difficult!",
    color: "bg-orange-50"
  }
];

const InteractiveJournal = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState("right");
  
  const nextPage = () => {
    if (currentPage < journalPages.length - 1) {
      setFlipDirection("right");
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 300);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 0) {
      setFlipDirection("left");
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 300);
    }
  };
  
  const page = journalPages[currentPage];

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="book-container relative">
        {/* Book cover and binding */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#7e5a3c] to-[#8a6246] rounded-lg shadow-xl transform -skew-x-2 z-0"></div>
        <div className="absolute left-4 inset-y-0 w-4 bg-gradient-to-r from-[#6a4a30] to-[#8a6246] rounded-l-lg z-0"></div>
        
        {/* Page turning buttons */}
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
          <Button 
            variant="outline" 
            size="icon" 
            className={`rounded-full shadow-md bg-white ${currentPage === 0 ? 'opacity-50' : 'hover:bg-gray-100'}`}
            onClick={prevPage} 
            disabled={currentPage === 0}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </div>
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
          <Button 
            variant="outline" 
            size="icon" 
            className={`rounded-full shadow-md bg-white ${currentPage === journalPages.length - 1 ? 'opacity-50' : 'hover:bg-gray-100'}`}
            onClick={nextPage} 
            disabled={currentPage === journalPages.length - 1}
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
        
        {/* The journal page with flipping effect */}
        <Card 
          className={`
            ${page.color} 
            relative 
            rounded-lg 
            shadow-lg 
            transform 
            z-10 
            ${isFlipping ? flipDirection === 'right' ? 'rotate-y-half opacity-50' : '-rotate-y-half opacity-50' : ''} 
            transition-all duration-300 
            perspective
          `}
          style={{
            transformStyle: 'preserve-3d',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15), 1px 3px 3px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)'
          }}
        >
          {/* Book edge effects */}
          <div className="absolute left-0 inset-y-0 w-1 bg-gradient-to-r from-[#f0e6d2] to-[#f5f5f5] rounded-l-sm"></div>
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-b from-[#f0e6d2] to-[#f5f5f5] rounded-t-sm"></div>
          <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-t from-[#f0e6d2] to-[#f5f5f5] rounded-b-sm"></div>
          <div className="absolute right-0 inset-y-0 w-1 bg-gradient-to-l from-[#f0e6d2] to-[#f5f5f5] rounded-r-sm"></div>
          
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white bg-opacity-80 rounded-t-lg">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-mindblue-500" />
              <h3 className="text-lg font-medium font-serif">Dear Me Journal</h3>
            </div>
            <div className="text-sm text-gray-500">
              Page {currentPage + 1} of {journalPages.length}
            </div>
          </div>
          
          <CardContent className="p-6 bg-white bg-opacity-90">
            <h2 className="text-2xl font-serif mb-4 text-gray-800">{page.title}</h2>
            <div className="border-l-4 border-mindblue-200 pl-4 py-2 mb-6 text-gray-600 italic">
              {page.content}
            </div>
            
            {/* Lined paper effect background */}
            <div className="mt-8 p-4 rounded-lg relative"
                 style={{ 
                   background: 'repeating-linear-gradient(#f5f5f5, #f5f5f5 24px, #e0e0e0 25px)'
                 }}>
              <div className="absolute top-0 left-0 h-full w-0.5 bg-red-300"></div>
              
              {/* Penguin character speech bubble */}
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center relative">
                    {/* Penguin body */}
                    <div className="w-10 h-14 bg-blue-900 rounded-t-full absolute"></div>
                    {/* Penguin belly */}
                    <div className="absolute top-6 left-1 w-8 h-7 bg-white rounded-full"></div>
                    {/* Penguin eyes */}
                    <div className="absolute top-5 left-3 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute top-5 left-6 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute top-5.5 left-3.5 w-1 h-1 bg-black rounded-full"></div>
                    <div className="absolute top-5.5 left-6.5 w-1 h-1 bg-black rounded-full"></div>
                    {/* Penguin beak */}
                    <div className="absolute top-7 left-3 w-4 h-2 bg-orange-500 rounded-full"></div>
                    {/* Penguin feet */}
                    <div className="absolute bottom-0 left-2 w-3 h-1.5 bg-orange-500 rounded-sm"></div>
                    <div className="absolute bottom-0 left-6 w-3 h-1.5 bg-orange-500 rounded-sm"></div>
                  </div>
                  <div className="text-xs text-center mt-1 font-medium">{page.penguinMood}</div>
                </div>
                <div className="flex-1">
                  <div className="bg-white p-3 rounded-lg rounded-bl-none relative shadow-sm border border-gray-100">
                    <div className="absolute -left-2 bottom-0 w-4 h-4 bg-white transform rotate-45 border-l border-b border-gray-100"></div>
                    <p className="text-sm italic">{page.penguinQuote}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 border-t border-gray-200 pt-4">
                <p className="text-sm text-gray-500 mb-2">
                  Journal prompt: Take 5 minutes to reflect and write your thoughts below.
                </p>
                <div className="mt-2 min-h-20 bg-white border border-dashed border-gray-300 rounded p-2 shadow-inner">
                  <div className="h-full w-full flex items-center justify-center text-gray-400 text-sm font-handwriting">
                    Your thoughts here...
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InteractiveJournal;
