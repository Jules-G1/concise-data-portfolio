
// Configuration centrale des textes du portfolio
// Modifiez ce fichier pour personnaliser facilement votre portfolio

export const portfolioContent = {
  // Informations générales
  name: "Alex Morgan",
  title: "Data Analyst & Business Intelligence Specialist",
  email: "alex@example.com",
  phone: "(123) 456-7890",
  linkedin: "linkedin.com/in/alexmorgan",
  github: "github.com/alexmorgan",
  
  // Sections
  hero: {
    contactButtonText: "Contact Me",
    linkedinButtonText: "View LinkedIn",
  },
  
  about: {
    title: "About Me",
    paragraphs: [
      "I'm a data-driven business analyst with a passion for turning complex data into actionable business insights. With a background in business administration and data science, I bring a unique perspective to solving business problems through data analysis.",
      "Currently pursuing an MBA with a focus on Business Analytics, I'm equipped with skills in data visualization, statistical analysis, and machine learning to drive evidence-based decision making for organizations.",
    ],
  },
  
  skills: {
    title: "Skills & Expertise",
    technicalSectionTitle: "Technical Skills",
    technicalSkills: [
      "Python", "R", "SQL", "Tableau", "Power BI", 
      "Excel", "Machine Learning", "Statistical Analysis", 
      "Data Visualization", "ETL"
    ],
    businessSectionTitle: "Business Skills",
    businessSkills: [
      "Business Intelligence", "Financial Analysis", "Market Research", 
      "Project Management", "Strategy Development", "Risk Analysis", 
      "Forecasting", "Process Optimization"
    ],
  },
  
  projects: {
    title: "Featured Projects",
    items: [
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
    ],
    viewProjectButtonText: "View Project"
  },
  
  contact: {
    title: "Get In Touch",
    infoCardTitle: "Contact Information",
    infoCardDescription: "Feel free to reach out through any of these channels",
    formCardTitle: "Send a Message",
    formCardDescription: "I'll get back to you as soon as possible",
    formPlaceholders: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Your message..."
    },
    submitButtonText: "Send Message"
  },
  
  footer: {
    copyright: (year: number) => `© ${year} Alex Morgan. All rights reserved.`,
  },
  
  header: {
    links: [
      { text: "About", href: "/#about" },
      { text: "Skills", href: "/#skills" },
      { text: "Projects", href: "/#projects" },
      { text: "Contact", href: "/#contact" }
    ],
    contactButtonText: "Contact"
  }
};
