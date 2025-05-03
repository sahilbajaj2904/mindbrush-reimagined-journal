
import React, { useState } from "react";
import { Book, BookOpen, ArrowLeft, ArrowRight } from "lucide-react";
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
  
  const nextPage = () => {
    if (currentPage < journalPages.length - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 300);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 0) {
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
      <div className="relative">
        <Card className={`${page.color} shadow-lg transform ${isFlipping ? 'scale-90 opacity-50' : ''} transition-all duration-300`}>
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full shadow-md bg-white" 
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
              className="rounded-full shadow-md bg-white" 
              onClick={nextPage} 
              disabled={currentPage === journalPages.length - 1}
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-mindblue-500" />
              <h3 className="text-lg font-medium">Dear Me Journal</h3>
            </div>
            <div className="text-sm text-gray-500">
              Page {currentPage + 1} of {journalPages.length}
            </div>
          </div>
          
          <CardContent className="p-6">
            <h2 className="text-2xl font-serif mb-4">{page.title}</h2>
            <p className="mb-6 text-gray-600">{page.content}</p>
            
            <div className="flex items-center mt-8 p-4 bg-white rounded-lg shadow-inner">
              <div className="flex-shrink-0 mr-4">
                <div className="w-16 h-16 bg-mindblue-100 rounded-full flex items-center justify-center">
                  {/* Replace with an actual penguin image or SVG */}
                  <div className="relative">
                    <div className="w-10 h-14 bg-blue-900 rounded-t-full"></div>
                    <div className="absolute top-6 left-1 w-8 h-4 bg-white rounded-full"></div>
                    <div className="absolute top-7 left-3 w-2 h-2 bg-black rounded-full"></div>
                    <div className="absolute top-9 left-2 w-6 h-1 bg-orange-500 rounded-full"></div>
                  </div>
                </div>
                <div className="text-xs text-center mt-1">{page.penguinMood} Penguin</div>
              </div>
              <div className="flex-1">
                <div className="bg-gray-100 p-3 rounded-lg rounded-bl-none relative">
                  <div className="absolute -left-2 bottom-0 w-2 h-2 bg-gray-100 transform rotate-45"></div>
                  <p className="text-sm italic">"{page.penguinQuote}"</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 border-t pt-4">
              <p className="text-sm text-gray-500">
                Journal prompt: Take 5 minutes to reflect and write your thoughts below.
              </p>
              <div className="mt-2 h-20 bg-white border border-dashed border-gray-300 rounded p-2">
                <div className="h-full w-full flex items-center justify-center text-gray-400 text-sm">
                  Your thoughts here...
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
