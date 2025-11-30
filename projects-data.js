// Projects data for grid display and modals
const projectsData = [
  {
    id: 1,
    title: "AI Operations & Support Engineer | T2D2",
    image: "./assets/png/t2d2.png",
    alt: "T2D2 - AI Operations Platform with Computer Vision and YOLO",
    shortDesc: "AI-powered diagnostics and computer vision solutions",
    techStack: "Python, OpenCV, YOLO, Computer Vision, Machine Learning, HITL, AWS",
    description: [
      "Collaborated directly with the CEO and CTO to optimize tech operations and streamline development workflows",
      "Handled customer support tickets and technical troubleshooting across platform components",
      "Built an AI-powered report generator to automate diagnostics and streamline report delivery",
      "Designed and deployed a machine learning pipeline to process and analyze image-based data for computer vision tasks",
      "Developed a geospatial image data extraction system to retrieve latitude and longitude from annotated images and implemented IoU (Intersection over Union) calculations for evaluating model performance",
      "Implemented Human-in-the-Loop (HITL) systems to enhance the accuracy and reliability of computer vision outputs"
    ],
    link: "https://app.t2d2.ai/home",
    linkText: "View Project"
  },
  {
    id: 2,
    title: "Technical Lead | M-agi-c Solutions",
    image: "./assets/jpeg/Andromeda-transformed.jpeg",
    alt: "M-agi-c Solutions - Full-Stack AI Platform with Langflow and LangChain",
    shortDesc: "Full-stack AI platform with AWS infrastructure",
    techStack: "AWS (Lambda, S3, EC2), Langflow, LangChain, Vector DBs, CI/CD, Docker, GitHub Actions, PostgreSQL",
    description: [
      "Led a team of developers to build two full-stack products (web and mobile) from the ground up, ensuring clean architecture, robust backend services, and on-time delivery",
      "Collaborated with senior developers to plan and execute scalable AI-first systems",
      "Designed and implemented CI/CD pipelines to streamline deployment and testing workflows, reducing manual overhead and improving code reliability",
      "Developed and integrated AI agents using Langflow and Langchain for automation, personalization, and data analysis",
      "Built data ingestion and parsing systems using OpenAI API for extracting structured insights from unstructured inputs",
      "Deployed and managed infrastructure using AWS services including Lambda, S3, EC2, and CloudWatch to ensure scalability and high availability"
    ],
    link: "https://m-agi-c.com/",
    linkText: "View Project"
  },
  {
    id: 3,
    title: "Data Insights Platform | Acadia Data",
    image: "./assets/png/logo-adt.png",
    alt: "Acadia Data - Predictive Analytics Platform with RAG-based AI Agent",
    shortDesc: "Predictive analytics with RAG-based AI agent",
    techStack: "Python, RAG, Machine Learning, DVC, d6tflow, Ensemble Methods, API Development",
    description: [
      "Collaborated with the ex-lead data scientist at Bloomberg to build AI-driven features and data infrastructure for an early-stage analytics platform",
      "Built a funding prediction model using machine learning techniques to support startup investment analysis",
      "Developed a module to convert Jupyter notebooks to HTML, enabling seamless integration of data science reports into the platform's frontend",
      "Created an AI call agent using Retrieval-Augmented Generation (RAG) to respond to user queries with contextual insights from proprietary datasets",
      "Designed and deployed REST APIs for streamlined data access and automated user interactions",
      "Worked with DVC and d6tflow for reproducible ML pipelines and versioned data workflows, improving model development and deployment cycles",
      "Supported end-to-end data pipeline development including ingestion, transformation, and model inference"
    ],
    link: "https://www.acadiadata.net/",
    linkText: "View Project"
  },
  {
    id: 4,
    title: "NetLogo Software Showcase Website",
    image: "./assets/png/netlogo.png",
    alt: "NetLogo Software Showcase Website - Flask Web Application",
    shortDesc: "User-friendly website showcasing NetLogo software",
    techStack: "Flask, Python, HTML, CSS, JavaScript, jQuery, NetLogo, Responsive Design",
    description: [
      "Created a user-friendly website to showcase NetLogo software using Flask",
      "Designed responsive features and integrated NetLogo functionalities",
      "Enhanced user experience with modern UI/UX principles"
    ],
    link: null,
    linkText: null
  },
  {
    id: 5,
    title: "Comprehensive Web Application",
    image: "./assets/jpeg/webd.jpg",
    alt: "Comprehensive Web Application - Flask Material Dashboard with PostgreSQL",
    shortDesc: "Multi-page web app with CRUD operations",
    techStack: "Flask, Python, PostgreSQL, SQLAlchemy, Material Dashboard, Data Visualization",
    description: [
      "Developed a comprehensive 10-12 page web application using Flask Material Dashboard template",
      "Implemented CRUD operations for clients and campaigns with PostgreSQL backend using SQLAlchemy",
      "Designed user-friendly interface with data visualization capabilities"
    ],
    link: null,
    linkText: null
  },
  {
    id: 6,
    title: "SentimentAnalyzerX",
    image: "./assets/mp4/SentimentAnalyzerX.mp4",
    alt: "SentimentAnalyzerX - Sentiment Analysis Web Application",
    shortDesc: "Web app for sentiment analysis with MongoDB",
    techStack: "HTML, CSS, JavaScript, Python, MongoDB, Sentiment Analysis, Web Development",
    description: [
      "Built a web application for sentiment analysis providing accurate classification (positive, negative, neutral)",
      "Implemented user registration and data storage in MongoDB for insights and sentiment tracking",
      "Designed for social media analysis, feedback processing, and sentiment monitoring"
    ],
    link: "https://github.com/Gyani25k/SentimentAnalyzerX",
    linkText: "View GitHub",
    isVideo: true
  },
  {
    id: 7,
    title: "Natural Language Interface to Database (NLIDB)",
    image: "./assets/mp4/NLIDB.mp4",
    alt: "Natural Language Interface to Database - NLP Program",
    shortDesc: "NLP program converting natural language to SQL",
    techStack: "Python, MySQL, Natural Language Processing (NLP), PyQt, EasyGui, Database Queries",
    description: [
      "Developed a Natural Language Processing program that converts natural language queries to SQL",
      "Built graphical user interface using PyQt and EasyGui for intuitive interaction",
      "Implemented MySQL database integration with support for select queries"
    ],
    link: "https://github.com/Gyani25k/randomProjects/blob/main/NLIDB_modifiedcode.py",
    linkText: "View GitHub",
    isVideo: true
  },
  {
    id: 8,
    title: "Machine Learning Projects",
    image: "https://www.fsm.ac.in/blog/wp-content/uploads/2022/08/ml-e1610553826718.jpg",
    alt: "Machine Learning Projects - Credit Card Fraud Detection, Breast Cancer Classification, Fashion Recognition",
    shortDesc: "Collection of ML projects including fraud detection and classification",
    techStack: "Machine Learning, Python, scikit-learn, TensorFlow, PyTorch, Data Analysis, Classification Algorithms, Predictive Modeling",
    description: [
      "Developed multiple machine learning projects including credit card fraud detection, breast cancer classification, and fashion recognition",
      "Implemented various classification algorithms and predictive modeling techniques",
      "Applied data analysis and model training best practices across different domains"
    ],
    link: "https://github.com/Gyani25k/ML_projects",
    linkText: "View GitHub"
  }
];

