
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioContent } from "@/config/portfolioContent";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const { title, items, viewProjectButtonText } = portfolioContent.projects;
  const [selectedProject, setSelectedProject] = useState<null | typeof items[0]>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openProjectModal = (project: typeof items[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  
  const closeProjectModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="section-container">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((project, index) => (
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
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => openProjectModal(project)}
                >
                  {viewProjectButtonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      {selectedProject && (
        <ProjectModal 
          isOpen={isModalOpen} 
          onClose={closeProjectModal} 
          project={selectedProject} 
        />
      )}
    </section>
  );
};

export default Projects;
