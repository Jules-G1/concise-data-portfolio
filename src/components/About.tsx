
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioContent } from "@/config/portfolioContent";

const About = () => {
  const { title, paragraphs } = portfolioContent.about;
  
  return (
    <section id="about" className="section-container">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">{title}</h2>
        <Card>
          <CardContent className="pt-6">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
