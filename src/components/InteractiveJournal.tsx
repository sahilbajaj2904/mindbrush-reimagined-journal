
import React, { useState, useRef, useEffect } from "react";
import { BookOpen, ArrowLeft, ArrowRight, Pen, Sticker, Emoji } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface JournalPage {
  id: number;
  title: string;
  content: string;
  penguinMood: string;
  penguinQuote: string;
  color: string;
  textureUrl: string;
}

const journalPages: JournalPage[] = [
  {
    id: 1,
    title: "Understanding Your Emotions",
    content: "Learning to identify and name your emotions is the first step to emotional wellness.",
    penguinMood: "Curious",
    penguinQuote: "When you name your feelings, they become less overwhelming!",
    color: "bg-blue-50",
    textureUrl: "linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1%)"
  },
  {
    id: 2,
    title: "Mindfulness Journey",
    content: "Take a moment to breathe deeply and notice your surroundings with all your senses.",
    penguinMood: "Peaceful",
    penguinQuote: "Remember, staying present is a superpower!",
    color: "bg-purple-50",
    textureUrl: "linear-gradient(90deg, hsla(277, 75%, 84%, 1) 0%, hsla(297, 50%, 51%, 1) 100%)"
  },
  {
    id: 3,
    title: "Gratitude Practice",
    content: "List three things you're grateful for today, no matter how small they might seem.",
    penguinMood: "Happy",
    penguinQuote: "Finding joy in little things makes every day brighter!",
    color: "bg-yellow-50",
    textureUrl: "linear-gradient(90deg, hsla(46, 73%, 75%, 1) 0%, hsla(176, 73%, 88%, 1) 100%)"
  },
  {
    id: 4,
    title: "Stress Management",
    content: "What activities help you feel calm when you're stressed? Make a list of your go-to strategies.",
    penguinMood: "Thoughtful",
    penguinQuote: "Having a toolbox of coping skills helps during tough times!",
    color: "bg-green-50",
    textureUrl: "linear-gradient(90deg, hsla(139, 70%, 75%, 1) 0%, hsla(63, 90%, 76%, 1) 100%)"
  },
  {
    id: 5,
    title: "Confidence Building",
    content: "Write down three strengths you have and how they've helped you face challenges.",
    penguinMood: "Proud",
    penguinQuote: "Remember your strengths when things get difficult!",
    color: "bg-orange-50",
    textureUrl: "linear-gradient(90deg, hsla(39, 100%, 77%, 1) 0%, hsla(22, 90%, 57%, 1) 100%)"
  }
];

// Audio for page flips
const pageFlipSound = new Audio("/page-flip.mp3");
pageFlipSound.volume = 0.4;

const playPageFlip = () => {
  try {
    if (pageFlipSound.paused) {
      pageFlipSound.currentTime = 0;
      pageFlipSound.play().catch(err => console.log("Audio playback prevented:", err));
    } else {
      const newSound = pageFlipSound.cloneNode() as HTMLAudioElement;
      newSound.volume = 0.4;
      newSound.play().catch(err => console.log("Audio playback prevented:", err));
    }
  } catch (e) {
    console.log("Audio error:", e);
  }
};

const InteractiveJournal = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState("right");
  const [pageAngle, setPageAngle] = useState(0);
  const [cornerLift, setCornerLift] = useState(0);
  const [isWriting, setIsWriting] = useState(false);
  const [writtenText, setWrittenText] = useState("");
  const [showStickers, setShowStickers] = useState<boolean[]>([false, false, false]);
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [isDrawMode, setIsDrawMode] = useState(false);
  const [writingProgress, setWritingProgress] = useState(0);
  
  const bookRef = useRef<HTMLDivElement>(null);
  const journalContentRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartTime = useRef<number | null>(null);
  const drawingContext = useRef<{
    isDrawing: boolean;
    lastX: number;
    lastY: number;
    color: string;
  }>({
    isDrawing: false,
    lastX: 0,
    lastY: 0,
    color: "#5e3b1c"
  });
  
  // Initialize canvas for drawing
  useEffect(() => {
    if (canvasRef.current && isDrawMode) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 2;
      }
    }
  }, [isDrawMode, canvasRef]);
  
  // Text writing animation effect
  useEffect(() => {
    if (isWriting && writingProgress < journalPages[currentPage].content.length) {
      const timer = setTimeout(() => {
        setWritingProgress(prev => prev + 1);
        setWrittenText(journalPages[currentPage].content.substring(0, writingProgress + 1));
      }, 50); // Adjust speed of writing animation
      return () => clearTimeout(timer);
    }
  }, [isWriting, writingProgress, currentPage]);
  
  // Reset writing animation when page changes
  useEffect(() => {
    setIsWriting(true);
    setWritingProgress(0);
    setWrittenText("");
    setShowStickers([false, false, false]);
    setSelectedEmoji(null);
    
    // Start writing animation after a short delay
    const timer = setTimeout(() => {
      setIsWriting(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [currentPage]);
  
  // Shadow effect update based on book angle
  useEffect(() => {
    if (bookRef.current) {
      const shadowIntensity = Math.abs(pageAngle) / 90;
      bookRef.current.style.filter = `drop-shadow(0 ${10 + shadowIntensity * 10}px ${5 + shadowIntensity * 15}px rgba(0,0,0,${0.2 + shadowIntensity * 0.3}))`;
    }
  }, [pageAngle]);

  // Touch event handlers for swipe
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartTime.current = Date.now();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartX.current || isFlipping) return;
      
      const touchX = e.touches[0].clientX;
      const diff = touchStartX.current - touchX;
      const diffRatio = Math.abs(diff) / window.innerWidth;
      
      // Lift the corner based on touch movement
      setCornerLift(diffRatio * 40);
      
      // Early corner lift animation during move
      if (diff > 20) {
        setFlipDirection("right");
      } else if (diff < -20) {
        setFlipDirection("left");
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartX.current || !touchStartTime.current || isFlipping) return;
      
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX.current - touchEndX;
      const timeDiff = Date.now() - touchStartTime.current;
      
      // Reset corner lift
      setCornerLift(0);
      
      // If it was a fast swipe or significant movement, trigger page flip
      if ((Math.abs(diff) > 50 || (Math.abs(diff) > 20 && timeDiff < 300))) {
        if (diff > 0 && currentPage < journalPages.length - 1) {
          nextPage();
        } else if (diff < 0 && currentPage > 0) {
          prevPage();
        }
      }
      
      touchStartX.current = null;
      touchStartTime.current = null;
    };

    if (journalContentRef.current) {
      const element = journalContentRef.current;
      element.addEventListener('touchstart', handleTouchStart);
      element.addEventListener('touchmove', handleTouchMove);
      element.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchmove', handleTouchMove);
        element.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [currentPage, isFlipping, journalPages.length]);

  const nextPage = () => {
    if (currentPage < journalPages.length - 1 && !isFlipping) {
      setFlipDirection("right");
      setIsFlipping(true);
      
      // Play page flip sound
      playPageFlip();
      
      // Animate page turn with ripple and fold effect
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
      
      // Play page flip sound
      playPageFlip();
      
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
  
  // Drawing functionality
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current || !isDrawMode) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      drawingContext.current.isDrawing = true;
      
      if ('touches' in e) {
        drawingContext.current.lastX = e.touches[0].clientX - rect.left;
        drawingContext.current.lastY = e.touches[0].clientY - rect.top;
      } else {
        drawingContext.current.lastX = e.clientX - rect.left;
        drawingContext.current.lastY = e.clientY - rect.top;
      }
    }
  };
  
  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current || !isDrawMode || !drawingContext.current.isDrawing) return;
    
    e.preventDefault();
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      let currentX, currentY;
      
      if ('touches' in e) {
        currentX = e.touches[0].clientX - rect.left;
        currentY = e.touches[0].clientY - rect.top;
      } else {
        currentX = e.clientX - rect.left;
        currentY = e.clientY - rect.top;
      }
      
      ctx.strokeStyle = drawingContext.current.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(drawingContext.current.lastX, drawingContext.current.lastY);
      ctx.lineTo(currentX, currentY);
      ctx.stroke();
      
      drawingContext.current.lastX = currentX;
      drawingContext.current.lastY = currentY;
    }
  };
  
  const endDrawing = () => {
    drawingContext.current.isDrawing = false;
  };
  
  const toggleSticker = (index: number) => {
    const newStickers = [...showStickers];
    newStickers[index] = !newStickers[index];
    setShowStickers(newStickers);
  };
  
  const selectEmoji = (emoji: string) => {
    setSelectedEmoji(emoji);
  };
  
  const toggleDrawMode = () => {
    setIsDrawMode(!isDrawMode);
  };
  
  const changeDrawColor = (color: string) => {
    drawingContext.current.color = color;
  };
  
  const page = journalPages[currentPage];

  // Calculate dynamic styles based on flip state
  const pageTransform = isFlipping 
    ? `rotateY(${pageAngle}deg)` 
    : cornerLift > 0 
      ? `rotateY(${cornerLift > 0 && flipDirection === "left" ? -cornerLift : cornerLift}deg)` 
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
        <div className="absolute -inset-2 bg-gradient-to-r from-[#5e3b1c] to-[#7a4829] rounded-lg shadow-xl z-0">
          {/* Cover texture */}
          <div className="absolute inset-0 opacity-20 bg-repeat" 
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundSize: '100px 100px'
              }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/20"></div>
        </div>
        
        {/* Embossed title on cover */}
        <div className="absolute top-4 left-0 right-0 text-center">
          <h3 className="font-serif text-[#e0d5c0] opacity-70 tracking-wider text-lg transform -translate-y-1">
            Dear Me
          </h3>
        </div>
        
        {/* Book spine with texture and detail */}
        <div className="absolute left-0 inset-y-0 w-6 bg-gradient-to-r from-[#4a2e16] to-[#6a3b1c] rounded-l-lg z-0 transform translate-x-[-2px]">
          <div className="absolute inset-0 opacity-10 bg-repeat" 
               style={{ 
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm20 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 37a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm10-17h20v20H20V20zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                 backgroundSize: '8px 8px'
               }}>
          </div>
        </div>
        
        {/* Book binding details - thread effect */}
        <div className="absolute left-3 inset-y-2 flex flex-col justify-around z-0">
          <div className="h-1 w-3 bg-[#e0d5c0] opacity-30 rounded-full"></div>
          <div className="h-1 w-3 bg-[#e0d5c0] opacity-30 rounded-full"></div>
          <div className="h-1 w-3 bg-[#e0d5c0] opacity-30 rounded-full"></div>
          <div className="h-1 w-3 bg-[#e0d5c0] opacity-30 rounded-full"></div>
          <div className="h-1 w-3 bg-[#e0d5c0] opacity-30 rounded-full"></div>
        </div>
        
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
            className={`relative overflow-hidden rounded-lg`}
            style={{
              transformOrigin: flipDirection === 'right' ? 'left center' : 'right center',
              transform: pageTransform,
              transition: isFlipping ? 'none' : 'transform 0.5s ease',
              backfaceVisibility: 'hidden',
              filter: `brightness(${pageBrightness}%)`,
              boxShadow: isFlipping 
                ? `${flipDirection === 'right' ? '-' : ''}5px 0 15px rgba(0,0,0,${shadowOpacity})` 
                : '0 1px 3px rgba(0,0,0,0.1)',
              zIndex: pageZIndex,
              background: page.textureUrl
            }}
            ref={journalContentRef}
          >
            {/* Paper texture overlay */}
            <div 
              className="absolute inset-0 z-0 opacity-30" 
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundSize: '100px 100px'
              }}
            ></div>

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
            
            <CardContent className="p-6 bg-white bg-opacity-90 relative">
              <h2 className="text-2xl font-serif mb-4 text-gray-800">{page.title}</h2>
              
              {isDrawMode ? (
                <div className="relative border-2 border-dashed border-gray-300 rounded-lg overflow-hidden">
                  <canvas 
                    ref={canvasRef}
                    width={400}
                    height={300}
                    className="bg-white w-full cursor-crosshair"
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={endDrawing}
                    onMouseOut={endDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={endDrawing}
                  />
                  
                  {/* Color palette */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 p-2 bg-white rounded-full shadow-lg animate-fade-in">
                    {["#5e3b1c", "#e63946", "#457b9d", "#2a9d8f", "#e9c46a", "#264653"].map((color) => (
                      <button
                        key={color}
                        className="w-6 h-6 rounded-full border border-gray-300 transform transition-transform hover:scale-110"
                        style={{ backgroundColor: color }}
                        onClick={() => changeDrawColor(color)}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <div className="border-l-4 border-mindblue-200 pl-4 py-2 mb-6 text-gray-600 italic relative">
                    {isWriting ? (
                      <div className="flex">
                        <span>{writtenText}</span>
                        <span className="animate-pulse ml-0.5">|</span>
                        {writingProgress < page.content.length && (
                          <div className="absolute -right-6 top-0">
                            <Pen className="h-4 w-4 text-gray-400 animate-pulse" />
                          </div>
                        )}
                      </div>
                    ) : (
                      page.content
                    )}
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
                          {/* Penguin face animations */}
                          <div className="w-10 h-14 bg-blue-900 rounded-t-full absolute"></div>
                          <div className="absolute top-6 left-1 w-8 h-7 bg-white rounded-full"></div>
                          <div className="absolute top-5 left-3 w-2 h-2 bg-white rounded-full"></div>
                          <div className="absolute top-5 left-6 w-2 h-2 bg-white rounded-full"></div>
                          <div className={`absolute top-5.5 left-3.5 w-1 h-1 bg-black rounded-full ${isWriting ? 'animate-pulse' : ''}`}></div>
                          <div className={`absolute top-5.5 left-6.5 w-1 h-1 bg-black rounded-full ${isWriting ? 'animate-pulse' : ''}`}></div>
                          <div className="absolute top-7 left-3 w-4 h-2 bg-orange-500 rounded-full"></div>
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
                      
                      {/* Stickers and emoji toolbar */}
                      <div className="flex justify-between mt-4">
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex items-center space-x-1 rounded-full px-3"
                            onClick={toggleDrawMode}
                          >
                            <Pen className="h-4 w-4" />
                            <span className="text-xs">{isDrawMode ? "Write Text" : "Draw Instead"}</span>
                          </Button>
                        </div>
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="rounded-full h-8 w-8"
                            onClick={() => toggleSticker(0)}
                          >
                            <Sticker className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="rounded-full h-8 w-8"
                            onClick={() => selectEmoji("😊")}
                          >
                            <Emoji className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      {/* Stickers */}
                      {showStickers[0] && (
                        <div className="absolute top-20 right-6 w-16 h-16 emoji-pop z-20"
                             style={{
                               backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cpath fill=\'%23ffcc00\' d=\'M50 0 L100 50 L50 100 L0 50 Z\'/%3E%3Cpath fill=\'%23ff6600\' d=\'M50 20 L80 50 L50 80 L20 50 Z\'/%3E%3Cpath fill=\'%23ffffff\' d=\'M38 38 L62 38 L62 62 L38 62 Z\'/%3E%3C/svg%3E")',
                               backgroundSize: 'cover',
                               transform: 'rotate(15deg)',
                               filter: 'drop-shadow(2px 2px 3px rgba(0,0,0,0.3))'
                             }}
                        ></div>
                      )}
                      
                      {/* Emoji */}
                      {selectedEmoji && (
                        <div className="absolute top-32 right-12 text-3xl emoji-pop z-20"
                             style={{ 
                               animation: 'emoji-pop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), bounce 2s infinite' 
                             }}
                        >
                          {selectedEmoji}
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
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
              
              {/* Page ripple effect */}
              <div 
                className="absolute inset-0 rounded-lg z-10 overflow-hidden"
                style={{
                  transform: pageTransform,
                  opacity: Math.min(Math.abs(pageAngle) / 45, 1) * 0.4
                }}
              >
                <div className="w-full h-full" style={{
                  background: `radial-gradient(circle at ${flipDirection === 'right' ? 'left' : 'right'} center, transparent, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.2) 100%)`,
                }}>
                </div>
              </div>
              
              {/* Page fold crease */}
              <div 
                className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-r from-white/30 to-black/30 z-30"
                style={{ 
                  left: flipDirection === 'right' ? '0' : 'auto',
                  right: flipDirection === 'left' ? '0' : 'auto',
                  transform: `rotateY(${pageAngle/2}deg) translateZ(1px)`,
                  boxShadow: `0 0 15px rgba(0,0,0,${shadowOpacity})`
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
                className={`absolute inset-0 rounded-lg z-5`} 
                style={{
                  background: journalPages[flipDirection === 'right' ? Math.min(currentPage + 1, journalPages.length - 1) : Math.max(currentPage - 1, 0)]?.textureUrl || 'linear-gradient(to right, #e6e9f0 0%, #eef1f5 100%)',
                  transform: flipDirection === 'right' 
                    ? 'rotateY(180deg) translateZ(-1px)' 
                    : 'rotateY(-180deg) translateZ(-1px)',
                  backfaceVisibility: 'hidden',
                  opacity: Math.abs(pageAngle) > 90 ? 1 : 0
                }}
              />
            </>
          )}
          
          {/* Corner fold effect when hovering/starting to swipe */}
          {cornerLift > 0 && !isFlipping && (
            <div 
              className="absolute z-20"
              style={{
                top: 0,
                [flipDirection === 'right' ? 'right' : 'left']: 0,
                width: `${cornerLift * 3}px`,
                height: `${cornerLift * 3}px`,
                borderRadius: '2px',
                background: 'linear-gradient(135deg, transparent 50%, rgba(240,230,210,0.8) 50%)',
                boxShadow: `${flipDirection === 'right' ? '-' : ''}2px 2px 5px rgba(0,0,0,0.2)`,
                transform: `rotate(${flipDirection === 'right' ? '-' : ''}3deg) scale(${0.8 + cornerLift/40})`,
                transformOrigin: `${flipDirection === 'right' ? 'right' : 'left'} top`,
                transition: 'all 0.1s ease-out',
              }}
            />
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
        
        {/* Instructional overlay for first visit */}
        <div className="absolute inset-0 bg-black/40 text-white flex items-center justify-center rounded-lg z-40 opacity-0 pointer-events-none transition-opacity group-hover:opacity-100">
          <div className="text-center p-4 bg-black/60 rounded-lg">
            <p className="text-sm">Swipe left/right to turn pages</p>
            <p className="text-sm mt-1">Tap and hold to write or draw</p>
          </div>
        </div>
      </div>
      
      {/* Add page flip audio element */}
      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes emoji-pop {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          70% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default InteractiveJournal;

