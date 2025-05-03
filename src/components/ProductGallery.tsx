
import React, { useState } from "react";
import { BookOpen } from "lucide-react";
import InteractiveJournal from "./InteractiveJournal";

const mainImage = "public/lovable-uploads/f1d52397-f748-4b2f-8d36-c8d419b71ec6.png";

const thumbnails = [
  "public/lovable-uploads/f1d52397-f748-4b2f-8d36-c8d419b71ec6.png",
  "public/lovable-uploads/774a5c68-208a-44a9-b9e9-806cfd018250.png",
  "public/lovable-uploads/17253d3a-6240-4141-859d-b616dbf30006.png",
  "public/lovable-uploads/1289542d-fc29-4c51-ac54-e95b021b7ff2.png",
  "public/lovable-uploads/e598dd28-818e-43e9-8cf3-a8a8d984336b.png",
];

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(mainImage);
  const [showJournal, setShowJournal] = useState(false);

  return (
    <div>
      <div className="mb-4 aspect-square relative overflow-hidden rounded-xl border border-dearme-accent/20 shadow-md bg-gradient-to-b from-dearme-light to-dearme-background">
        {showJournal ? (
          <div className="w-full h-full flex items-center justify-center book-pattern p-4">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full max-w-md transform scale-[0.85] relative">
                {/* Book shadow effect */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] h-8 bg-black opacity-10 blur-md rounded-full z-0"></div>
                <InteractiveJournal />
              </div>
            </div>
          </div>
        ) : (
          <img 
            src={selectedImage || mainImage} 
            alt="DearMe Emotional Wellness Journal"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      
      <div className="grid grid-cols-6 gap-2">
        {thumbnails.map((thumb, index) => (
          <button 
            key={index}
            className={`border rounded-md overflow-hidden aspect-square ${
              selectedImage === thumb && !showJournal 
                ? 'border-dearme-accent shadow-md' 
                : 'border-dearme-accent/20 hover:border-dearme-accent/50'
            }`}
            onClick={() => {
              setSelectedImage(thumb);
              setShowJournal(false);
            }}
          >
            <img 
              src={thumb} 
              alt={`DearMe Journal thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
        <button 
          className={`border rounded-md overflow-hidden aspect-square flex items-center justify-center ${
            showJournal 
              ? 'border-dearme-accent bg-dearme-mint/20 shadow-md' 
              : 'border-dearme-accent/20 hover:border-dearme-accent/50 hover:bg-dearme-mint/10'
          }`}
          onClick={() => setShowJournal(true)}
        >
          <BookOpen className="h-5 w-5 text-dearme-accent" />
        </button>
      </div>
    </div>
  );
};

export default ProductGallery;
