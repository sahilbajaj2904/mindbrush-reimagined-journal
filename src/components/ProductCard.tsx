
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    tag?: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [imageError, setImageError] = useState(false);
  
  const handleImageError = () => {
    console.log(`Image failed to load: ${product.image}`);
    setImageError(true);
  };

  // Default fallback image if product image fails to load
  const fallbackImage = "/placeholder.svg";

  return (
    <Card className="overflow-hidden border border-dearme-primary/10 transition-all duration-300 hover:shadow-md group">
      <div className="aspect-square overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10"/>
        {imageError ? (
          <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400 flex items-center justify-center">
            <img 
              src={fallbackImage}
              alt="Placeholder"
              className="w-1/2 h-1/2 object-contain opacity-40"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-700 font-medium text-lg">Journal Cover</p>
            </div>
          </div>
        ) : (
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={handleImageError}
          />
        )}
        {/* Title overlay on image */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <h3 className="font-serif font-semibold text-xl text-white drop-shadow-md">
            {product.name}
          </h3>
        </div>
        {product.tag && (
          <div className="absolute top-3 right-3 bg-dearme-primary text-white px-3 py-1 text-xs font-medium rounded-full z-20">
            {product.tag}
          </div>
        )}
      </div>
      <CardContent className="p-5">
        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
        <p className="font-semibold text-dearme-primary">₹999</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button 
          variant="outline" 
          className="w-1/2 border-dearme-primary text-dearme-primary hover:bg-dearme-primary/5"
        >
          Customize
        </Button>
        <Button className="w-1/2 bg-dearme-primary text-white hover:bg-dearme-accent">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
