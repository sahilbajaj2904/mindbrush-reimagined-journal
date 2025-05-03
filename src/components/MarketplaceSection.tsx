
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
      image: "https://images.unsplash.com/photo-1589495374902-741e6d394d6e?q=80&w=800&auto=format&fit=crop",
      tag: "Bestseller",
      category: "anxiety"
    },
    {
      id: "2",
      name: "Storm to Still",
      description: "For every storm inside, there's a calm after.",
      price: "₹1,199",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
      category: "anger"
    },
    {
      id: "3",
      name: "Feel It. Heal It.",
      description: "A journal for emotions that don't have easy names.",
      price: "₹1,299",
      image: "https://images.unsplash.com/photo-1506784926709-22f1ec395907?q=80&w=800&auto=format&fit=crop",
      category: "sadness"
    },
    {
      id: "4",
      name: "Pause Please",
      description: "Practice patience and focus in a noisy world.",
      price: "₹1,099",
      image: "https://images.unsplash.com/photo-1626197031507-c17099753f88?q=80&w=800&auto=format&fit=crop",
      tag: "New",
      category: "impulse"
    },
    {
      id: "5",
      name: "Unjumble Me",
      description: "For when your brain's doing too much.",
      price: "₹899",
      image: "https://images.unsplash.com/photo-1599008633840-052c7f756385?q=80&w=800&auto=format&fit=crop",
      category: "overthinking"
    },
    {
      id: "6",
      name: "My Secret Space",
      description: "Where all feelings are welcome.",
      price: "₹1,499",
      image: "https://images.unsplash.com/photo-1598520106830-8c45c2035460?q=80&w=800&auto=format&fit=crop",
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
          
          {/* Desktop Category Tabs */}
          <div className="hidden md:block">
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
              <TabsList className="grid grid-cols-3 lg:grid-cols-7 mb-8">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="text-sm whitespace-normal py-2 h-auto"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          {/* Mobile Category Dropdown */}
          <div className="md:hidden flex flex-wrap gap-4 justify-center">
            <select 
              className="w-full p-2 border border-gray-300 rounded-md"
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
