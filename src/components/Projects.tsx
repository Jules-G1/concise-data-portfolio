
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Retail Sales Forecasting",
      description: "Built a time series forecasting model to predict retail sales for a Fortune 500 company, resulting in 12% inventory optimization.",
      tags: ["Python", "Prophet", "Time Series", "Tableau"],
      link: "#"
    },
    {
      title: "Market Segmentation Analysis",
      description: "Conducted customer segmentation analysis using clustering algorithms to identify key market segments for targeted marketing strategies.",
      tags: ["R", "K-means", "Data Visualization"],
      link: "#"
    },
    {
      title: "Financial Performance Dashboard",
      description: "Designed interactive financial KPI dashboard for executive team, providing real-time insights into business performance metrics.",
      tags: ["Power BI", "SQL", "Financial Analysis"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section-container">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="project-card">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="flex flex-wrap gap-1 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={project.link}>View Project</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
