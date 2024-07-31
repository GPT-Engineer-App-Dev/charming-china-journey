import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturedSection = () => {
  const featuredAttractions = [
    {
      title: "Great Wall of China",
      description: "One of the world's most iconic landmarks, stretching over 13,000 miles.",
      image: "/placeholder.svg"
    },
    {
      title: "Forbidden City",
      description: "The imperial palace complex in Beijing, home to Chinese emperors for centuries.",
      image: "/placeholder.svg"
    },
    {
      title: "Terracotta Army",
      description: "Thousands of life-sized clay soldiers guarding Emperor Qin Shi Huang's tomb.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6">Featured Attractions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredAttractions.map((attraction, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{attraction.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={attraction.image} alt={attraction.title} className="w-full h-48 object-cover mb-4" />
              <CardDescription>{attraction.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
