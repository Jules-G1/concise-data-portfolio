
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
        fullDescription: "Developed and implemented a comprehensive time series forecasting model using Python and Facebook Prophet to predict retail sales patterns for a Fortune 500 retailer. The model incorporated seasonal trends, holiday effects, and external economic indicators to achieve high accuracy predictions. Implementation resulted in 12% inventory optimization, significantly reducing carrying costs while maintaining service levels.",
        tags: ["Python", "Prophet", "Time Series", "Tableau"],
        link: "#",
        githubLink: "https://github.com/alexmorgan/retail-forecasting",
        demoLink: "https://retail-forecast-demo.example.com",
        imageUrl: ""
      },
      {
        title: "Market Segmentation Analysis",
        description: "Conducted customer segmentation analysis using clustering algorithms to identify key market segments for targeted marketing strategies.",
        fullDescription: "Performed in-depth customer segmentation analysis using K-means clustering and other unsupervised learning techniques to identify distinct customer groups based on purchasing behavior, demographics, and engagement patterns. The resulting segmentation was used to develop targeted marketing campaigns that increased conversion rates by 24% and customer retention by 18%.",
        tags: ["R", "K-means", "Data Visualization"],
        link: "#",
        githubLink: "https://github.com/alexmorgan/market-segmentation",
        imageUrl: ""
      },
      {
        title: "Financial Performance Dashboard",
        description: "Designed interactive financial KPI dashboard for executive team, providing real-time insights into business performance metrics.",
        fullDescription: "Created a comprehensive financial performance dashboard using Power BI that integrates data from multiple sources including ERP systems, CRM platforms, and manual inputs. The dashboard provides executives with real-time visibility into key performance indicators, financial health metrics, and trend analysis. The solution includes drill-down capabilities, automated alerts, and customizable views for different stakeholders.",
        tags: ["Power BI", "SQL", "Financial Analysis"],
        link: "#",
        demoLink: "https://finance-dashboard-demo.example.com",
        imageUrl: ""
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
