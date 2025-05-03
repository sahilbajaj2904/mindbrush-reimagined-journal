
import React, { useState } from "react";

interface Page {
  content: string;
  prompt?: string;
}

const InteractiveJournal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const pages: Page[] = [
    { content: "" },
    { content: "", prompt: "What emotions did you experience today?" },
    { content: "", prompt: "What was one positive moment from your day?" },
    { content: "", prompt: "What's something you're looking forward to?" },
    { content: "", prompt: "What's one thing you're grateful for today?" },
  ];

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      const audio = new Audio("/page-flip.mp3");
      audio.volume = 0.5;
      audio.play().catch((e) => console.log("Audio playback error:", e));
    }
  };

  const flipPage = (direction: "next" | "prev") => {
    const audio = new Audio("/page-flip.mp3");
    audio.volume = 0.5;
    audio.play().catch((e) => console.log("Audio playback error:", e));

    if (direction === "next" && currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div
      className="relative shadow-xl bg-white rounded-md overflow-hidden cursor-pointer w-[340px] md:w-[400px] lg:w-[440px] h-[450px] md:h-[550px] lg:h-[620px] transition-all duration-500"
      onClick={handleClick}
    >
      {!isOpen ? (
        // Cover of the journal
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/b79010c0-0837-4c87-8f63-22d67c102527.png"
            alt="Dear Calm Journal Cover"
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <>
          {/* Open journal */}
          <div className="absolute inset-0 flex">
            <div className="w-1/2 h-full bg-white p-4 border-r border-dashed border-gray-300">
              <div className="h-full flex flex-col items-center justify-center">
                <p className="text-gray-400 italic mb-4 text-center">
                  {currentPage === 0
                    ? "Daily Check-in"
                    : `Day ${currentPage}`}
                </p>
                {currentPage > 0 && (
                  <div className="text-center">
                    <p className="text-gray-700 mb-6">{pages[currentPage].prompt}</p>
                    <textarea
                      className="border border-gray-300 rounded p-2 w-full h-40 resize-none text-sm focus:outline-none focus:border-penguin-400"
                      placeholder="Write your thoughts here..."
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="w-1/2 h-full bg-penguin-50 p-4 flex flex-col">
              <div className="flex flex-col h-full justify-between">
                <div className="text-center flex-grow flex items-center justify-center">
                  <div className="max-w-xs">
                    {currentPage === 0 ? (
                      <div className="text-center">
                        <h3 className="font-serif font-medium text-xl mb-4">Welcome to your journal</h3>
                        <p className="text-sm text-gray-600 mb-6">
                          This is a safe space for you to explore your emotions.
                          Take a few minutes each day to check in with yourself.
                        </p>
                        <div className="bg-penguin-100 p-3 rounded-lg">
                          <p className="text-sm italic text-penguin-800">
                            "Learning to identify and name your emotions is the first step to emotional wellness."
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-sm text-gray-600">
                          {currentPage === pages.length - 1
                            ? "Congratulations on completing today's entry!"
                            : "Keep going! You're doing great."}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      flipPage("prev");
                    }}
                    disabled={currentPage === 0}
                    className={`px-3 py-1 rounded ${
                      currentPage === 0
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-penguin-600 hover:bg-penguin-100"
                    }`}
                  >
                    ← Prev
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      flipPage("next");
                    }}
                    disabled={currentPage === pages.length - 1}
                    className={`px-3 py-1 rounded ${
                      currentPage === pages.length - 1
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-penguin-600 hover:bg-penguin-100"
                    }`}
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InteractiveJournal;
