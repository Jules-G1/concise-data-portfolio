
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const technicalSkills = [
    "Python", "R", "SQL", "Tableau", "Power BI", 
    "Excel", "Machine Learning", "Statistical Analysis", 
    "Data Visualization", "ETL"
  ];

  const businessSkills = [
    "Business Intelligence", "Financial Analysis", "Market Research", 
    "Project Management", "Strategy Development", "Risk Analysis", 
    "Forecasting", "Process Optimization"
  ];

  return (
    <section id="skills" className="section-container bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Business Skills</h3>
              <div className="flex flex-wrap gap-2">
                {businessSkills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-sm py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
