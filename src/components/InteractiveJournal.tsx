
import React, { useState, useRef, useEffect } from "react";
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
    title: "Confidence Building",
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
  const [pageAngle, setPageAngle] = useState(0);
  const bookRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Shadow effect update based on book angle
    if (bookRef.current) {
      const shadowIntensity = Math.abs(pageAngle) / 90;
      bookRef.current.style.filter = `drop-shadow(0 ${10 + shadowIntensity * 10}px ${5 + shadowIntensity * 15}px rgba(0,0,0,${0.2 + shadowIntensity * 0.3}))`;
    }
  }, [pageAngle]);

  const nextPage = () => {
    if (currentPage < journalPages.length - 1 && !isFlipping) {
      setFlipDirection("right");
      setIsFlipping(true);
      
      // Animate page turn
      let angle = 0;
      const interval = setInterval(() => {
        angle += 6;
        setPageAngle(angle);
        
        if (angle >= 90) {
          clearInterval(interval);
          setCurrentPage(currentPage + 1);
          
          // Reset angle in reverse to complete animation
          let reverseAngle = 90;
          const reverseInterval = setInterval(() => {
            reverseAngle -= 6;
            setPageAngle(reverseAngle);
            
            if (reverseAngle <= 0) {
              clearInterval(reverseInterval);
              setPageAngle(0);
              setIsFlipping(false);
            }
          }, 16);
        }
      }, 16);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setFlipDirection("left");
      setIsFlipping(true);
      
      // Animate page turn
      let angle = 0;
      const interval = setInterval(() => {
        angle -= 6;
        setPageAngle(angle);
        
        if (angle <= -90) {
          clearInterval(interval);
          setCurrentPage(currentPage - 1);
          
          // Reset angle in reverse to complete animation
          let reverseAngle = -90;
          const reverseInterval = setInterval(() => {
            reverseAngle += 6;
            setPageAngle(reverseAngle);
            
            if (reverseAngle >= 0) {
              clearInterval(reverseInterval);
              setPageAngle(0);
              setIsFlipping(false);
            }
          }, 16);
        }
      }, 16);
    }
  };
  
  const page = journalPages[currentPage];

  // Calculate dynamic styles based on flip state
  const pageTransform = isFlipping 
    ? `rotateY(${pageAngle}deg)` 
    : 'rotateY(0deg)';
    
  const pageZIndex = isFlipping ? 20 : 10;

  // Calculate shadow and lighting effects based on page angle
  const brightnessFactor = Math.cos(Math.abs(pageAngle) * Math.PI / 180);
  const pageBrightness = 100 - Math.abs(pageAngle) / 2;
  const shadowOpacity = 0.3 + Math.abs(pageAngle) / 180;

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="book-container relative" ref={bookRef}>
        {/* Book covers */}
        <div className="absolute -inset-2 bg-gradient-to-r from-[#5e3b1c] to-[#7a4829] rounded-lg shadow-xl z-0"></div>
        
        {/* Book spine */}
        <div className="absolute left-0 inset-y-0 w-6 bg-gradient-to-r from-[#4a2e16] to-[#6a3b1c] rounded-l-lg z-0 transform translate-x-[-2px]"></div>
        
        {/* Book binding details */}
        <div className="absolute left-3 inset-y-2 w-[2px] bg-[#e0d5c0] opacity-30 z-0"></div>
        <div className="absolute left-4 inset-y-2 w-[1px] bg-[#e0d5c0] opacity-20 z-0"></div>
        
        {/* Book edge effects - top, right, bottom */}
        <div className="absolute left-6 right-0 top-0 h-2 bg-gradient-to-b from-[#f0e6d2] to-transparent rounded-tr-sm z-0"></div>
        <div className="absolute right-0 top-2 bottom-2 w-2 bg-gradient-to-l from-[#f0e6d2] to-transparent rounded-br-sm z-0"></div>
        <div className="absolute left-6 right-0 bottom-0 h-2 bg-gradient-to-t from-[#f0e6d2] to-transparent rounded-br-sm z-0"></div>
        
        {/* Previous pages (stack effect) */}
        <div className="absolute inset-[4px] -right-[1px] bg-[#f0e6d2] rounded-r-lg shadow-inner z-[1]" style={{
          transform: 'translateZ(-2px)',
          boxShadow: 'inset 4px 0 3px rgba(0,0,0,0.1), inset 0 0 3px rgba(0,0,0,0.1)'
        }}></div>
        <div className="absolute inset-[6px] -right-[2px] bg-[#f5f0e6] rounded-r-lg shadow-inner z-[2]" style={{
          transform: 'translateZ(-4px)',
          boxShadow: 'inset 3px 0 2px rgba(0,0,0,0.05)'
        }}></div>
        
        {/* Navigation buttons */}
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-30">
          <Button 
            variant="outline" 
            size="icon" 
            className={`rounded-full shadow-md bg-white ${currentPage === 0 || isFlipping ? 'opacity-50' : 'hover:bg-gray-100'}`}
            onClick={prevPage} 
            disabled={currentPage === 0 || isFlipping}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </div>
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-30">
          <Button 
            variant="outline" 
            size="icon" 
            className={`rounded-full shadow-md bg-white ${currentPage === journalPages.length - 1 || isFlipping ? 'opacity-50' : 'hover:bg-gray-100'}`}
            onClick={nextPage} 
            disabled={currentPage === journalPages.length - 1 || isFlipping}
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Current page with flip effect */}
        <div 
          className="relative rounded-lg overflow-hidden z-[5]"
          style={{
            perspective: '1500px',
            transformStyle: 'preserve-3d',
          }}
        >
          <Card 
            className={`${page.color} relative overflow-hidden rounded-lg`}
            style={{
              transformOrigin: flipDirection === 'right' ? 'left center' : 'right center',
              transform: pageTransform,
              transition: isFlipping ? 'none' : 'transform 0.5s ease',
              backfaceVisibility: 'hidden',
              filter: `brightness(${pageBrightness}%)`,
              boxShadow: isFlipping 
                ? `${flipDirection === 'right' ? '-' : ''}5px 0 15px rgba(0,0,0,${shadowOpacity})` 
                : '0 1px 3px rgba(0,0,0,0.1)',
              zIndex: pageZIndex
            }}
          >
            {/* Page edge effects */}
            <div className="absolute left-0 inset-y-0 w-[3px] bg-gradient-to-r from-[#e0d5c0] to-transparent rounded-l-sm opacity-80"></div>
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-b from-[#e0d5c0] to-transparent rounded-t-sm opacity-70"></div>
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-t from-[#e0d5c0] to-transparent rounded-b-sm opacity-70"></div>
            <div className="absolute right-0 inset-y-0 w-[2px] bg-gradient-to-l from-[#e0d5c0] to-transparent rounded-r-sm opacity-70"></div>
            
            {/* Page spine shadow */}
            <div className="absolute left-0 inset-y-0 w-[8px] bg-gradient-to-r from-black to-transparent opacity-10 z-20"></div>
            
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
                     background: 'repeating-linear-gradient(#f9f9f9, #f9f9f9 24px, #e0e0e0 25px)',
                     boxShadow: 'inset 0 0 10px rgba(0,0,0,0.05)'
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
          
          {/* Page turning effect - additional elements */}
          {isFlipping && (
            <>
              {/* Dynamic page shadow during turn */}
              <div 
                className="absolute inset-0 bg-black rounded-lg opacity-0 transition-opacity z-10"
                style={{ 
                  opacity: Math.abs(pageAngle) > 45 ? ((Math.abs(pageAngle) - 45) / 45) * 0.4 : 0,
                  transform: pageTransform 
                }}
              />
              
              {/* Page edge during turn */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-[#f0e6d2] z-20"
                style={{ 
                  left: flipDirection === 'right' ? '0' : 'auto',
                  right: flipDirection === 'left' ? '0' : 'auto',
                  transform: `rotateY(${pageAngle/2}deg) translateZ(1px)`,
                  boxShadow: `0 0 5px rgba(0,0,0,${shadowOpacity/2})`
                }}
              />
              
              {/* Glimpse of next/previous page */}
              <div 
                className={`absolute inset-0 ${journalPages[flipDirection === 'right' ? currentPage + 1 : currentPage - 1]?.color || 'bg-gray-50'} rounded-lg z-5`} 
                style={{
                  transform: flipDirection === 'right' 
                    ? 'rotateY(180deg) translateZ(-1px)' 
                    : 'rotateY(-180deg) translateZ(-1px)',
                  backfaceVisibility: 'hidden',
                  opacity: Math.abs(pageAngle) > 90 ? 1 : 0
                }}
              />
            </>
          )}
        </div>

        {/* Page counting display - book thickness visualization */}
        <div className="absolute -right-2 bottom-4 flex flex-col items-center z-40">
          <div className="text-xs text-gray-500 mb-1 bg-white px-2 py-0.5 rounded-full shadow-sm">
            {currentPage + 1}/{journalPages.length}
          </div>
          <div className="w-2 bg-gray-100 rounded-full overflow-hidden h-24 shadow-inner">
            <div 
              className="bg-mindblue-200 w-full rounded-full transition-all duration-300"
              style={{ 
                height: `${((currentPage + 1) / journalPages.length) * 100}%`,
                boxShadow: 'inset 0 -2px 3px rgba(0,0,0,0.1)'
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveJournal;
