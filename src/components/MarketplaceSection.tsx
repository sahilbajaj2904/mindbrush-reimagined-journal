
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MarketplaceSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", name: "All Journals" },
    { id: "anxiety", name: "Anxiety & Calmness" },
    { id: "anger", name: "Anger & Frustration" },
    { id: "sadness", name: "Sadness & Self-Compassion" },
    { id: "impulse", name: "Impulse & Attention Control" },
    { id: "overthinking", name: "Overthinking & Self-Doubt" },
    { id: "general", name: "General Emotional Intelligence" },
  ];

  const products = [
    {
      id: "1",
      name: "Dear Calm",
      description: "A safe space to untangle anxious thoughts and build inner peace.",
      price: "₹999",
      image: "/lovable-uploads/1f4c6378-cebf-4ca5-9cab-427617b8b3e5.png",
      tag: "Bestseller",
      category: "anxiety"
    },
    {
      id: "2",
      name: "Storm to Still",
      description: "For every storm inside, there's a calm after.",
      price: "₹1,199",
      image: "/lovable-uploads/17253d3a-6240-4141-859d-b616dbf30006.png",
      category: "anger"
    },
    {
      id: "3",
      name: "Feel It. Heal It.",
      description: "A journal for emotions that don't have easy names.",
      price: "₹1,299",
      image: "/lovable-uploads/774a5c68-208a-44a9-b9e9-806cfd018250.png",
      category: "sadness"
    },
    {
      id: "4",
      name: "Pause Please",
      description: "Practice patience and focus in a noisy world.",
      price: "₹1,099",
      image: "/lovable-uploads/c2d8aef4-d4f2-4385-8d50-950eb424bb11.png",
      tag: "New",
      category: "impulse"
    },
    {
      id: "5",
      name: "Unjumble Me",
      description: "For when your brain's doing too much.",
      price: "₹899",
      image: "/lovable-uploads/d8f713e5-cd5a-4701-a25c-811f4dd321d2.png",
      category: "overthinking"
    },
    {
      id: "6",
      name: "My Secret Space",
      description: "Where all feelings are welcome.",
      price: "₹1,499",
      image: "/lovable-uploads/e598dd28-818e-43e9-8cf3-a8a8d984336b.png",
      tag: "Premium",
      category: "general"
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dearme-text font-serif">Emotional Wellness Journal Collection</h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore our range of specialized journals designed to support specific emotional needs for teens and families.
          </p>
          
          {/* Desktop Category Tabs - Improved styling */}
          <div className="hidden md:block">
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
              <TabsList className="grid grid-cols-3 lg:grid-cols-7 mb-8 bg-dearme-light border border-dearme-primary/10 p-1 rounded-lg">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="text-sm whitespace-normal py-2 h-auto font-medium data-[state=active]:bg-white data-[state=active]:text-dearme-primary data-[state=active]:shadow-sm"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          {/* Mobile Category Dropdown - Improved styling */}
          <div className="md:hidden flex flex-wrap gap-4 justify-center">
            <select 
              className="w-full p-2 border border-dearme-primary/20 rounded-md bg-white shadow-sm text-dearme-text focus:outline-none focus:ring-2 focus:ring-dearme-primary/20"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-10 md:mt-16">
          {/* Mobile Carousel View */}
          <div className="md:hidden">
            <Carousel className="w-full">
              <CarouselContent>
                {filteredProducts.map((product) => (
                  <CarouselItem key={product.id}>
                    <div className="p-1">
                      <ProductCard product={product} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6">
                <CarouselPrevious className="static transform-none mx-2" />
                <CarouselNext className="static transform-none mx-2" />
              </div>
            </Carousel>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-dearme-primary text-white hover:bg-dearme-accent px-8 py-6 text-lg">
            Browse All Products
          </Button>
          <p className="mt-4 text-sm text-gray-500">Free shipping on all orders above ₹1,999</p>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;
