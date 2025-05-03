import React from "react";
import ProductCard from "./ProductCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const MarketplaceSection = () => {
  const products = [
    {
      id: "1",
      name: "Classic Mindfulness Journal",
      description: "A guided journal with prompts to foster daily reflection and mindfulness practices.",
      price: "₹999",
      image: "https://images.unsplash.com/photo-1589495374902-741e6d394d6e?q=80&w=800&auto=format&fit=crop",
      tag: "Bestseller"
    },
    {
      id: "2",
      name: "Teen Emotion Explorer Kit",
      description: "Specially designed for teens to navigate complex emotions through creative expression.",
      price: "₹1,199",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "3",
      name: "Parent-Child Connection Journal",
      description: "Shared journaling experience designed to strengthen parent-teen relationships.",
      price: "₹1,299",
      image: "https://images.unsplash.com/photo-1506784926709-22f1ec395907?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "4",
      name: "Anxiety Management Journal",
      description: "Therapeutic writing prompts and exercises to help manage anxiety and stress.",
      price: "₹1,099",
      image: "https://images.unsplash.com/photo-1626197031507-c17099753f88?q=80&w=800&auto=format&fit=crop",
      tag: "New"
    },
    {
      id: "5",
      name: "Gratitude & Positivity Journal",
      description: "Focus on developing gratitude practice and positive thinking habits.",
      price: "₹899",
      image: "https://images.unsplash.com/photo-1599008633840-052c7f756385?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "6",
      name: "Personalized Wellness Tracker",
      description: "Customizable journal with mood tracking, goal setting, and wellness activities.",
      price: "₹1,499",
      image: "https://images.unsplash.com/photo-1598520106830-8c45c2035460?q=80&w=800&auto=format&fit=crop",
      tag: "Premium"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dearme-text font-serif">Discover Our Journal Collection</h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore our range of customizable journals designed to support emotional wellness for teens and families.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-dearme-primary text-white hover:bg-dearme-accent">All Journals</Button>
            <Button variant="outline" className="border-dearme-primary/20 text-dearme-primary hover:bg-dearme-primary/5">For Teens</Button>
            <Button variant="outline" className="border-dearme-primary/20 text-dearme-primary hover:bg-dearme-primary/5">For Parents</Button>
            <Button variant="outline" className="border-dearme-primary/20 text-dearme-primary hover:bg-dearme-primary/5">Gift Sets</Button>
          </div>
        </div>

        <div className="mt-10 md:mt-16">
          {/* Mobile Carousel View */}
          <div className="md:hidden">
            <Carousel className="w-full">
              <CarouselContent>
                {products.map((product) => (
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
            {products.map((product) => (
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
