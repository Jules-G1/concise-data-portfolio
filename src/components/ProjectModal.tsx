
import React from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Image, BarChart2 } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    fullDescription?: string;
    tags: string[];
    link: string;
    githubLink?: string;
    demoLink?: string;
    imageUrl?: string;
  };
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  // Déterminer s'il s'agit du premier projet (Retail Sales Forecasting)
  const isFirstProject = project.title === "Retail Sales Forecasting";
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground mt-2">
            {project.tags.join(" • ")}
          </DialogDescription>
        </DialogHeader>
        
        {/* Image placeholder */}
        <div className="bg-muted/50 rounded-md h-64 flex items-center justify-center mb-4">
          {project.imageUrl ? (
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover rounded-md" 
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-muted-foreground">
              <Image className="h-10 w-10 mb-2 opacity-50" />
              <span>Image du projet</span>
            </div>
          )}
        </div>
        
        {/* Project description */}
        <div className="space-y-4">
          <p className="text-foreground">
            {project.fullDescription || project.description}
          </p>
          
          {/* BI tool integration - Looker Studio iframe for first project */}
          {isFirstProject ? (
            <div className="w-full overflow-hidden">
              <iframe 
                width="100%" 
                height="443" 
                src="https://lookerstudio.google.com/embed/reporting/cb440aa1-50ff-4f61-b603-7c23cd8333cc/page/HgUJF" 
                frameBorder="0" 
                style={{ border: 0 }} 
                allowFullScreen 
                sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              ></iframe>
            </div>
          ) : (
            <Card className="p-4 bg-muted/30 border border-dashed">
              <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
                <BarChart2 className="h-10 w-10 mb-2 opacity-50" />
                <p className="text-center">Intégration d'outil BI</p>
                <p className="text-xs text-center mt-1">Tableaux de bord, visualisations et analyse de données</p>
              </div>
            </Card>
          )}
        </div>
        
        {/* Links section */}
        <div className="flex flex-wrap gap-3 mt-4">
          <Button asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Voir le projet
            </a>
          </Button>
          
          {project.githubLink && (
            <Button variant="outline" asChild>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Code className="mr-2 h-4 w-4" />
                Code source
              </a>
            </Button>
          )}
          
          {project.demoLink && (
            <Button variant="outline" asChild>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Démo en direct
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
