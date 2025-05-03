
import React from "react";
import { User, Clock, Users, Star } from "lucide-react";

const ProductHighlights = () => {
  return (
    <div className="border-b">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div className="h-10 w-10 rounded-full border flex items-center justify-center">
              <User className="h-5 w-5 text-gray-700" />
            </div>
            <div>
              <h3 className="font-medium">ENDORSED BY</h3>
              <p className="text-sm text-gray-600">Psychologists, Teachers and Mindfulness experts</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div className="h-10 w-10 rounded-full border flex items-center justify-center">
              <Clock className="h-5 w-5 text-gray-700" />
            </div>
            <div>
              <h3 className="font-medium">NO RISK PURCHASE</h3>
              <p className="text-sm text-gray-600">66 day money-back guarantee</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div className="h-10 w-10 rounded-full border flex items-center justify-center">
              <Users className="h-5 w-5 text-gray-700" />
            </div>
            <div>
              <h3 className="font-medium">50,000+ HAPPY CUSTOMERS</h3>
              <p className="text-sm text-gray-600">Join the movement</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div className="h-10 w-10 rounded-full border flex items-center justify-center">
              <Star className="h-5 w-5 text-gray-700" />
            </div>
            <div>
              <h3 className="font-medium">RATED 4.79 STARS</h3>
              <p className="text-sm text-gray-600">Based on 50,000 customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHighlights;
