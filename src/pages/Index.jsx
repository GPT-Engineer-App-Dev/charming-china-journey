import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FeaturedSection from '../components/FeaturedSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-yellow-100">
      <header className="bg-red-600 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Discover China</h1>
          <p className="text-xl">Experience the wonders of an ancient civilization</p>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Welcome to China</h2>
          <p className="text-lg mb-4">
            China, with its rich history spanning over 5,000 years, offers a unique blend of ancient traditions and modern marvels. From the Great Wall to the bustling streets of Shanghai, China is a land of contrasts and wonders.
          </p>
          <Button>Plan Your Trip</Button>
        </section>

        <FeaturedSection />

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Culture</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Immerse yourself in Chinese art, music, and festivals.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cuisine</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Savor the diverse flavors of authentic Chinese dishes.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>History</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Explore ancient sites and learn about China's rich past.</CardDescription>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-red-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Discover China. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
