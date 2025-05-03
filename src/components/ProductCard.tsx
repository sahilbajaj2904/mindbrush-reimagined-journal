
import React from "react";
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
  return (
    <Card className="overflow-hidden border border-dearme-primary/10 transition-all duration-300 hover:shadow-md group">
      <div className="aspect-square overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"/>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.tag && (
          <div className="absolute top-3 right-3 bg-dearme-primary text-white px-3 py-1 text-xs font-medium rounded-full z-20">
            {product.tag}
          </div>
        )}
      </div>
      <CardContent className="p-5">
        <h3 className="font-serif font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
        <p className="font-semibold text-dearme-primary">{product.price}</p>
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
