
import React, { useState } from "react";

const mainImage = "public/lovable-uploads/f1d52397-f748-4b2f-8d36-c8d419b71ec6.png";

const thumbnails = [
  "public/lovable-uploads/f1d52397-f748-4b2f-8d36-c8d419b71ec6.png",
  "public/lovable-uploads/774a5c68-208a-44a9-b9e9-806cfd018250.png",
  "public/lovable-uploads/17253d3a-6240-4141-859d-b616dbf30006.png",
  "public/lovable-uploads/1289542d-fc29-4c51-ac54-e95b021b7ff2.png",
  "public/lovable-uploads/e598dd28-818e-43e9-8cf3-a8a8d984336b.png",
];

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(mainImage);

  return (
    <div>
      <div className="mb-4 aspect-square relative overflow-hidden rounded-lg border">
        <img 
          src={selectedImage} 
          alt="Mindbrush Journal"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="grid grid-cols-5 gap-2">
        {thumbnails.map((thumb, index) => (
          <button 
            key={index}
            className={`border rounded-md overflow-hidden aspect-square ${selectedImage === thumb ? 'border-black' : 'border-gray-200'}`}
            onClick={() => setSelectedImage(thumb)}
          >
            <img 
              src={thumb} 
              alt={`Mindbrush Journal thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
