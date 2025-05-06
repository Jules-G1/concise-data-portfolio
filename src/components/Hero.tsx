
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { portfolioContent } from "@/config/portfolioContent";

const Hero = () => {
  const { name, title } = portfolioContent;
  const { contactButtonText, linkedinButtonText } = portfolioContent.hero;
  
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="animate-fade-up text-3xl md:text-5xl font-bold tracking-tighter">
            {name}
          </h1>
          <p className="animate-fade-up [animation-delay:200ms] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px]">
            {title}
          </p>
          <div className="animate-fade-up [animation-delay:400ms] flex flex-wrap justify-center gap-4 mt-6">
            <Button asChild>
              <a href="/#contact">
                {contactButtonText} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                {linkedinButtonText}
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_40%)]" />
    </section>
  );
};

export default Hero;
