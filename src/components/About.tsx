
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">About Me</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground mb-4">
              I'm a data-driven business analyst with a passion for turning complex data into
              actionable business insights. With a background in business administration and data science,
              I bring a unique perspective to solving business problems through data analysis.
            </p>
            <p className="text-muted-foreground">
              Currently pursuing an MBA with a focus on Business Analytics, I'm equipped with skills in
              data visualization, statistical analysis, and machine learning to drive evidence-based 
              decision making for organizations.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
