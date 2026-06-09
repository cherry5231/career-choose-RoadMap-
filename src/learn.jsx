import { useState } from "react";
function Learn() {
  const [search, setSearch] = useState("");
  const careers = [
    {
      title: "Frontend Developer",
      beginner: "HTML, CSS, JavaScript, Git, Responsive Design",
      intermediate: "TypeScript, React, Redux, API Integration, Tailwind CSS",
      advanced: "Next.js, Performance Optimization, Testing (Jest/Cypress), Web Security, System Design (Frontend)",
      tools: "VS Code, GitHub, Figma, Chrome DevTools"
    },

    {
      title: "Backend Developer",
      beginner: "Programming Basics, HTTP, Java/Python/Node.js basics",
      intermediate: "Express.js, Django, Spring Boot, REST APIs, SQL, Authentication",
      advanced: "Microservices, System Design, Redis, Kafka/RabbitMQ, Security",
      tools: "Postman, Docker, Git, Linux, Nginx"
    },

    {
      title: "Full Stack Developer",
      beginner: "HTML, CSS, JavaScript, Git",
      intermediate: "React, Node.js, Express, MongoDB/SQL, API Integration",
      advanced: "System Design, Scalability, Deployment, CI/CD, Cloud Basics",
      tools: "VS Code, GitHub, Docker, AWS"
    },

    {
      title: "Data Scientist",
      beginner: "Python, Statistics, Probability, Excel",
      intermediate: "Pandas, NumPy, SQL, Data Visualization, Machine Learning",
      advanced: "Deep Learning, Feature Engineering, MLOps, Model Tuning",
      tools: "Jupyter Notebook, TensorFlow, PyTorch, Tableau"
    },

    {
      title: "AI Engineer",
      beginner: "Python, Linear Algebra, Probability",
      intermediate: "Machine Learning, Neural Networks, NLP",
      advanced: "LLMs, Deep Learning Architectures, MLOps, Model Optimization",
      tools: "TensorFlow, PyTorch, Hugging Face, OpenAI APIs"
    },
    {
  title: "Cybersecurity Analyst",
  beginner: "Networking Basics, Linux Basics, Security Fundamentals",
  intermediate: "Ethical Hacking, Penetration Testing, Cryptography, Firewalls",
  advanced: "Threat Intelligence, Malware Analysis, SOC Operations",
  tools: "Wireshark, Kali Linux, Metasploit"
},

{
  title: "Cloud Engineer",
  beginner: "Networking Basics, Linux, Virtualization",
  intermediate: "AWS, Azure, GCP Services, Docker, CI/CD Basics",
  advanced: "Kubernetes, Infrastructure as Code, Cloud Security, Scalability",
  tools: "AWS Console, Terraform, Docker, Kubernetes"
},

{
  title: "Civil Engineer",
  beginner: "Physics, Engineering Mathematics, Basics of Structures",
  intermediate: "AutoCAD, Surveying, Concrete Technology, Soil Mechanics",
  advanced: "Structural Design, STAAD Pro, Construction Management, Earthquake Engineering",
  tools: "AutoCAD, STAAD Pro, Revit"
},

{
  title: "Mechanical Engineer",
  beginner: "Physics, Mathematics, Engineering Drawing",
  intermediate: "Thermodynamics, Fluid Mechanics, Machine Design, CAD",
  advanced: "Robotics, Manufacturing Systems, CFD, Automation",
  tools: "SolidWorks, AutoCAD, ANSYS, MATLAB"
},

{
  title: "Doctor",
  beginner: "Biology, Chemistry, Human Anatomy Basics",
  intermediate: "Physiology, Pathology, Pharmacology, Diagnosis",
  advanced: "Surgery, Specialized Medicine, Emergency Care",
  tools: "Medical Instruments, Diagnostic Systems"
},


{
  title: "Chartered Accountant (CA)",
  beginner: "Accounting Basics, Mathematics, Economics",
  intermediate: "Financial Accounting, Cost Accounting, Taxation, Auditing",
  advanced: "Corporate Law, Financial Analysis, Risk Management, GST, Income Tax Planning",
  tools: "Excel, Tally, SAP, Accounting Software"
},

{
  title: "Lawyer",
  beginner: "General Knowledge, English, Logical Reasoning",
  intermediate: "Constitutional Law, Criminal Law, Civil Law, Contract Law",
  advanced: "Litigation, Case Strategy, Legal Drafting, Corporate Law, Arbitration",
  tools: "Manupatra, SCC Online, MS Word"
},

{
  title: "Architect",
  beginner: "Mathematics, Physics, Drawing Basics",
  intermediate: "AutoCAD, Building Design, Structural Basics, Materials Science",
  advanced: "Urban Planning, Sustainable Design, 3D Modeling, Project Management",
  tools: "AutoCAD, Revit, SketchUp, Lumion"
},

{
  title: "Interior Designer",
  beginner: "Drawing, Color Theory, Creativity",
  intermediate: "Space Planning, Furniture Design, Lighting Design, Materials",
  advanced: "3D Visualization, Client Management, Luxury Design Concepts",
  tools: "AutoCAD, SketchUp, 3ds Max, Photoshop, Figma"
},

{
  title: "Fashion Designer",
  beginner: "Drawing, Fashion Basics, Color Theory",
  intermediate: "Textile Design, Pattern Making, Garment Construction",
  advanced: "Fashion Branding, Trend Forecasting, Luxury Design",
  tools: "Adobe Illustrator, Photoshop, CLO3D"
},

{
  title: "Chef",
  beginner: "Cooking Basics, Food Hygiene, Knife Skills",
  intermediate: "Culinary Techniques, Baking, Menu Planning, Nutrition",
  advanced: "Restaurant Management, International Cuisines, Food Innovation",
  tools: "Kitchen Equipment, Recipe Software"
},

{
  title: "Hotel Manager",
  beginner: "Communication Skills, Basic Hospitality",
  intermediate: "Customer Service, Front Office Management, Housekeeping",
  advanced: "Revenue Management, Operations, Event Management",
  tools: "Opera PMS, Hotel Management Software"
},

{
  title: "Digital Marketer",
  beginner: "Marketing Basics, Social Media Usage",
  intermediate: "SEO, SEM, Google Ads, Content Marketing, Email Marketing",
  advanced: "Conversion Optimization, Analytics, Marketing Automation, Branding Strategy",
  tools: "Google Analytics, Meta Ads Manager, SEMrush"
},

{
  title: "Content Writer",
  beginner: "English Writing, Grammar, Reading Habits",
  intermediate: "Blogging, SEO Writing, Copywriting",
  advanced: "Content Strategy, Storytelling, Brand Writing, Technical Writing",
  tools: "WordPress, Grammarly, Google Docs"
},

{
  title: "Journalist",
  beginner: "English, General Knowledge, Writing Skills",
  intermediate: "Reporting, Interviewing, News Writing, Research",
  advanced: "Investigative Journalism, Media Ethics, Editorial Work",
  tools: "CMS Platforms, Camera Equipment, Editing Tools"
},

{
  title: "Pharmacist",
  beginner: "Biology, Chemistry Basics",
  intermediate: "Pharmacology, Drug Formulation, Medical Terminology",
  advanced: "Clinical Pharmacy, Drug Safety, Research",
  tools: "Lab Equipment, Pharmacy Software"
},

{
  title: "Psychologist",
  beginner: "Biology, Basic Psychology",
  intermediate: "Cognitive Psychology, Behavioral Studies, Statistics",
  advanced: "Clinical Psychology, Therapy Methods, Psychological Assessment",
  tools: "SPSS, Research Tools, Assessment Tests"
},

{
  title: "Data Analyst",
  beginner: "Excel, Basic Math, Logical Thinking",
  intermediate: "SQL, Python, Data Visualization, Statistics",
  advanced: "Predictive Analytics, Business Intelligence, Machine Learning Basics",
  tools: "Power BI, Tableau, Excel, Python Libraries"
},

{
  title: "Electrical Engineer",
  beginner: "Physics, Mathematics, Basic Circuits",
  intermediate: "Circuit Theory, Electronics, Control Systems",
  advanced: "Power Systems, Automation, Embedded Systems, Robotics",
  tools: "MATLAB, AutoCAD Electrical, Simulink"
},

{
  title: "Aerospace Engineer",
  beginner: "Physics, Calculus, Mechanics",
  intermediate: "Aerodynamics, Thermodynamics, Fluid Mechanics, Materials Science",
  advanced: "Propulsion Systems, Flight Mechanics, Avionics, Satellite Systems, CFD Analysis",
  tools: "MATLAB, CATIA, SolidWorks, ANSYS"
},

{
  title: "Game Developer",
  beginner: "Programming Basics (C#/C++), Mathematics",
  intermediate: "Unity, Unreal Engine, Physics Simulation, 3D Modeling Basics",
  advanced: "Game AI, Multiplayer Systems, Optimization, Graphics Programming",
  tools: "Unity, Unreal Engine, Blender"
},

{
  title: "Animator",
  beginner: "Drawing, Creativity, Storyboarding Basics",
  intermediate: "2D/3D Animation, Motion Design, Character Design",
  advanced: "VFX, Cinematic Animation, Rigging, Simulation",
  tools: "Blender, Maya, After Effects"
},
{
  title: "Astronaut",
  beginner: "Physics, Mathematics, Biology",
  intermediate: "Aerospace Training, Robotics, Space Systems",
  advanced: "Space Missions, EVA (Spacewalks), Orbital Mechanics, Mission Control",
  tools: "Space Simulators, NASA Training Systems"
},

{
  title: "Marine Biologist",
  beginner: "Biology, Chemistry, Environmental Science",
  intermediate: "Marine Ecosystems, Oceanography, Research Methods",
  advanced: "Deep Sea Research, Conservation Biology, Marine Data Analysis",
  tools: "Sonar Systems, Lab Equipment, Research Vessels"
},

{
  title: "Geologist",
  beginner: "Earth Science, Physics, Chemistry",
  intermediate: "Mineralogy, Petrology, Field Mapping",
  advanced: "Tectonics, Seismology, Resource Exploration",
  tools: "GIS Software, Rock Analysis Tools"
},

{
  title: "Urban Planner",
  beginner: "Geography, Economics, Social Studies",
  intermediate: "City Design, Infrastructure Planning, Transportation Systems",
  advanced: "Smart Cities, Sustainable Development, Policy Planning",
  tools: "GIS, AutoCAD, Urban Simulation Tools"
},

{
  title: "Environmental Scientist",
  beginner: "Biology, Chemistry, Ecology",
  intermediate: "Pollution Control, Climate Science, Environmental Laws",
  advanced: "Climate Modeling, Sustainability Systems, Environmental Impact Analysis",
  tools: "GIS, Remote Sensing Tools"
},

{
  title: "Forensic Scientist",
  beginner: "Biology, Chemistry, Physics",
  intermediate: "Crime Scene Analysis, Toxicology, DNA Analysis",
  advanced: "Digital Forensics, Criminal Investigation Science",
  tools: "Lab Instruments, Forensic Software"
},

{
  title: "Anthropologist",
  beginner: "Social Science, History",
  intermediate: "Cultural Studies, Archaeology Basics, Field Research",
  advanced: "Human Evolution Studies, Ethnography, Research Publishing",
  tools: "Excavation Tools, Survey Software"
},

{
  title: "Archaeologist",
  beginner: "History, Geography",
  intermediate: "Excavation Techniques, Ancient Civilizations Study",
  advanced: "Carbon Dating, Artifact Analysis, Historical Reconstruction",
  tools: "GIS, Excavation Tools, Lab Analysis Systems"
},

{
  title: "Linguist",
  beginner: "Languages, Grammar",
  intermediate: "Phonetics, Syntax, Semantics",
  advanced: "Computational Linguistics, AI Language Models, Translation Systems",
  tools: "NLP Tools, Linguistic Software"
},

{
  title: "Economist (Public Policy Focus)",
  beginner: "Mathematics, Economics Basics",
  intermediate: "Policy Analysis, Development Economics",
  advanced: "Global Economics, Fiscal Policy Design, Data Modeling",
  tools: "R, Stata, Excel"
},

{
  title: "Data Privacy Analyst",
  beginner: "Computer Basics, Networking",
  intermediate: "Cybersecurity Laws, Data Protection Frameworks",
  advanced: "GDPR Compliance, Privacy Engineering, Risk Analysis",
  tools: "Security Auditing Tools, Encryption Software"
},

{
  title: "Product Manager",
  beginner: "Communication, Business Basics",
  intermediate: "Product Design, Market Research, Agile Methodology",
  advanced: "Product Strategy, Scaling Products, User Analytics",
  tools: "Jira, Notion, Figma, Analytics Tools"
},

{
  title: "Startup Founder / Entrepreneur",
  beginner: "Business Basics, Communication",
  intermediate: "Market Research, Finance, Product Development",
  advanced: "Scaling Business, Investment Pitching, Leadership",
  tools: "CRM Tools, Financial Dashboards"
},

{
  title: "Pilot (Commercial Aviation Focus)",
  beginner: "Physics, Geography",
  intermediate: "Flight Theory, Navigation, Aviation Rules",
  advanced: "Commercial Flight Operations, Emergency Handling",
  tools: "Flight Simulators, Cockpit Systems"
},

{
  title: "Logistics Manager",
  beginner: "Business Basics, Math",
  intermediate: "Supply Chain Management, Inventory Control",
  advanced: "Global Logistics, Optimization Systems",
  tools: "ERP Systems, SAP, Tracking Software"
},

{
  title: "Biotechnologist",
  beginner: "Biology, Chemistry",
  intermediate: "Genetics, Microbiology, Lab Techniques",
  advanced: "Genetic Engineering, Bioinformatics, Pharmaceutical Research",
  tools: "PCR Machines, Lab Automation Tools"
},

{
  title: "Political Scientist",
  beginner: "History, Civics",
  intermediate: "Political Theory, International Relations",
  advanced: "Policy Research, Governance Systems, Data-Driven Politics",
  tools: "Statistical Tools, Survey Platforms"
},

{
  title: "Game Designer",
  beginner: "Creativity, Storytelling",
  intermediate: "Game Mechanics, Level Design, UX Basics",
  advanced: "Game Economy Design, Player Psychology",
  tools: "Unity Editor, Unreal Editor, Design Tools"
},
{
  title: "Fashion Designer",
  beginner: "Drawing, Creativity",
  intermediate: "Textile Design, Pattern Making, Sewing",
  advanced: "Fashion Branding, Trend Forecasting, Luxury Design",
  tools: "Adobe Illustrator, Photoshop, CLO3D"
},

{
  title: "Chef",
  beginner: "Cooking Basics, Hygiene",
  intermediate: "Culinary Techniques, Baking, Nutrition",
  advanced: "Restaurant Management, International Cuisine Mastery",
  tools: "Kitchen Equipment, Recipe Systems"
},
{
  title: "Sociologist",
  beginner: "Social Studies, Communication",
  intermediate: "Social Theories, Research Methods, Data Analysis",
  advanced: "Social Policy, Cultural Studies, Field Research",
  tools: "Surveys, Statistical Tools"
},

{
  title: "Air Traffic Controller",
  beginner: "Geography, Communication Skills",
  intermediate: "Aviation Rules, Radar Systems, Coordination",
  advanced: "Air Traffic Management, Emergency Coordination",
  tools: "Radar Systems, Control Towers"
},

{
  title: "Civil Service Officer (IAS/IPS)",
  beginner: "General Studies, Current Affairs",
  intermediate: "Governance, Law, Public Administration",
  advanced: "Policy Making, Administration Leadership, Crisis Management",
  tools: "Government Systems, Data Reports"
},

{
  title: "Dentist",
  beginner: "Biology, Basic Anatomy, Chemistry",
  intermediate: "Oral Anatomy, Dental Procedures, Radiology Basics",
  advanced: "Oral Surgery, Prosthodontics, Orthodontics, Periodontics",
  tools: "Dental Instruments, X-Ray Machines"
},

{
  title: "Pharmacist",
  beginner: "Biology, Chemistry Basics",
  intermediate: "Pharmacology, Drug Formulation, Drug Interactions",
  advanced: "Clinical Pharmacy, Drug Safety, Research",
  tools: "Pharmacy Software, Lab Equipment"
},

{
  title: "Teacher",
  beginner: "Subject Knowledge, Communication Skills",
  intermediate: "Teaching Methods, Classroom Management, Psychology Basics",
  advanced: "Curriculum Design, Educational Technology, Student Evaluation",
  tools: "Smart Boards, LMS Platforms"
},

{
  title: "Professor",
  beginner: "Subject Expertise, Academic Reading",
  intermediate: "Research Methods, Paper Writing, Teaching Skills",
  advanced: "Publications, Research Projects, Academic Leadership",
  tools: "Research Databases, LaTeX, Journals"
},{
  title: "Ethical Hacker (White Hat)",
  beginner: "Networking Basics, Linux Basics, Programming Basics",
  intermediate: "Penetration Testing, Vulnerability Scanning, Cryptography Basics",
  advanced: "Exploit Development, Reverse Engineering, Security Architecture",
  tools: "Kali Linux, Wireshark, Burp Suite"
},

{
  title: "DevRel Engineer (Developer Relations)",
  beginner: "Programming Basics, Communication Skills",
  intermediate: "APIs, Documentation Writing, Community Building",
  advanced: "Developer Advocacy, Technical Content Strategy, Product Feedback Loops",
  tools: "GitHub, Discord, Postman, Documentation Platforms"
},

{
  title: "Technical Writer",
  beginner: "English Writing, Grammar, Basic Tech Understanding",
  intermediate: "API Documentation, Software Manuals, Research Skills",
  advanced: "System Documentation, UX Writing, Developer Guides",
  tools: "Markdown, Notion, Confluence"
},

{
  title: "UX Researcher",
  beginner: "Psychology Basics, Communication Skills",
  intermediate: "User Interviews, Surveys, Usability Testing",
  advanced: "Behavioral Analysis, Product Insights, Research Strategy",
  tools: "Figma, Google Forms, Maze, UserTesting Tools"
},

{
  title: "Semiconductor Engineer",
  beginner: "Physics, Electronics, Mathematics",
  intermediate: "Circuit Design, VLSI Basics, Digital Electronics",
  advanced: "Chip Design, Fabrication Processes, Nanotechnology",
  tools: "Cadence, SPICE Simulation Tools"
},

{
  title: "Robotics Engineer",
  beginner: "Physics, Programming Basics",
  intermediate: "Sensors, Actuators, Embedded Systems",
  advanced: "Autonomous Systems, AI Robotics, Industrial Automation",
  tools: "ROS, Arduino, Raspberry Pi"
},

{
  title: "Astrophysicist",
  beginner: "Physics, Mathematics",
  intermediate: "Quantum Mechanics, Cosmology, Telescopic Observation",
  advanced: "Black Holes, Dark Matter Research, Space Modeling",
  tools: "Telescope Systems, Simulation Software"
},

{
  title: "Actuary",
  beginner: "Mathematics, Statistics Basics",
  intermediate: "Probability, Risk Modeling, Financial Mathematics",
  advanced: "Insurance Modeling, Pension Systems, Predictive Analytics",
  tools: "Excel, R, Python"
},

{
  title: "Ethical AI Specialist",
  beginner: "AI Basics, Programming",
  intermediate: "Machine Learning, Bias Detection, Data Ethics",
  advanced: "AI Governance, Policy Design, Fairness Auditing",
  tools: "Python, AI Audit Frameworks"
},

{
  title: "Hydrologist",
  beginner: "Earth Science, Physics",
  intermediate: "Water Systems, Rainfall Modeling, GIS Basics",
  advanced: "Flood Prediction, Climate-Water Interaction Modeling",
  tools: "GIS Software, Hydrology Simulation Tools"
},

{
  title: "Cartographer",
  beginner: "Geography, Mapping Basics",
  intermediate: "GIS Systems, Spatial Analysis",
  advanced: "Satellite Mapping, Digital Map Design",
  tools: "ArcGIS, QGIS"
},

{
  title: "Sound Engineer",
  beginner: "Physics of Sound, Basic Audio Knowledge",
  intermediate: "Audio Mixing, Recording Techniques",
  advanced: "Sound Design for Film/Games, Acoustics Engineering",
  tools: "Pro Tools, FL Studio, Ableton Live"
},

{
  title: "Industrial Designer",
  beginner: "Drawing, Creativity",
  intermediate: "Product Design, CAD Modeling",
  advanced: "Manufacturing Design, Ergonomics, Prototyping",
  tools: "SolidWorks, Rhino, Adobe Suite"
},

{
  title: "Meteorologist",
  beginner: "Physics, Mathematics",
  intermediate: "Weather Systems, Climate Modeling",
  advanced: "Storm Prediction, Atmospheric Science Research",
  tools: "Satellite Data Systems, Forecasting Models"
},

{
  title: "Food Scientist",
  beginner: "Chemistry, Biology",
  intermediate: "Food Processing, Microbiology, Nutrition Science",
  advanced: "Food Innovation, Preservation Technology, Lab Testing",
  tools: "Lab Equipment, Spectroscopy Tools"
},

{
  title: "Game AI Developer",
  beginner: "Programming Basics",
  intermediate: "Game Engines, AI Basics, Pathfinding Algorithms",
  advanced: "NPC Intelligence Systems, Procedural Generation",
  tools: "Unity, Unreal Engine, Python"
},

{
  title: "Voice Actor",
  beginner: "Voice Control, Reading Skills",
  intermediate: "Voice Modulation, Script Interpretation",
  advanced: "Character Acting, Dubbing, Studio Recording",
  tools: "Microphones, Audio Editing Software"
},

{
  title: "Conservation Officer (Wildlife)",
  beginner: "Biology, Environmental Science",
  intermediate: "Wildlife Tracking, Ecology, Field Research",
  advanced: "Conservation Planning, Ecosystem Management",
  tools: "GPS Trackers, Drones"
},

{
  title: "Perfusionist (Heart-Lung Specialist)",
  beginner: "Biology, Chemistry",
  intermediate: "Human Physiology, Medical Equipment Handling",
  advanced: "Cardiopulmonary Bypass Systems, Surgical Support",
  tools: "Heart-Lung Machine, Hospital Surgical Systems"
},{
  title: "Game Tester (QA for Games)",
  beginner: "Basic Gaming Knowledge, Attention to Detail",
  intermediate: "Bug Reporting, Test Case Writing, Game Mechanics Understanding",
  advanced: "Automation Testing, Performance Testing, QA Pipeline Design",
  tools: "Jira, Test Frameworks"
},

{
  title: "Elevator Technician",
  beginner: "Basic Electronics, Mechanical Systems",
  intermediate: "Hydraulic Systems, Wiring Diagrams, Maintenance Procedures",
  advanced: "Elevator Installation, Safety Systems, Automation Control",
  tools: "Diagnostic Tools, Multimeters, Mechanical Kits"
},

{
  title: "Wind Turbine Technician",
  beginner: "Physics, Basic Electrical Knowledge",
  intermediate: "Mechanical Systems, Turbine Components, Safety Procedures",
  advanced: "Power Systems, High-Altitude Maintenance, Grid Integration",
  tools: "Climbing Gear, Diagnostic Software"
},

{
  title: "UX Writer",
  beginner: "English Writing, Grammar, Communication",
  intermediate: "Microcopy Writing, UX Principles, User Psychology",
  advanced: "Product Voice Strategy, Conversion Optimization Writing",
  tools: "Figma, Notion, Google Docs"
},

{
  title: "Data Privacy Engineer",
  beginner: "Networking Basics, Programming Basics",
  intermediate: "Encryption, Data Protection Laws, Secure Systems Design",
  advanced: "Privacy Architecture, GDPR, CCPA Compliance Systems",
  tools: "Security Frameworks, Encryption Libraries"
},

{
  title: "Digital Forensics Expert",
  beginner: "Computer Basics, Cybersecurity Fundamentals",
  intermediate: "File System Analysis, Malware Detection, Log Analysis",
  advanced: "Cybercrime Investigation, Reverse Engineering, Incident Response",
  tools: "EnCase, Autopsy, Wireshark"
},

{
  title: "3D Printing Engineer",
  beginner: "Design Basics, CAD Fundamentals",
  intermediate: "3D Modeling, Printing Materials, Printer Calibration",
  advanced: "Industrial Prototyping, Material Engineering, Automation",
  tools: "Blender, SolidWorks, Cura"
},

{
  title: "Prosthetics Engineer",
  beginner: "Biology, Physics, Basic Engineering",
  intermediate: "Biomechanics, Material Science, CAD Modeling",
  advanced: "Neural-Controlled Prosthetics, Robotics Integration",
  tools: "3D Printers, CAD Software, Biomedical Tools"
},

{
  title: "Renewable Energy Engineer",
  beginner: "Physics, Mathematics, Environmental Science",
  intermediate: "Solar Systems, Wind Energy, Electrical Systems",
  advanced: "Smart Grids, Energy Storage Systems, Sustainability Design",
  tools: "Simulation Software, Energy Modeling Tools"
},

{
  title: "Space Systems Engineer",
  beginner: "Physics, Calculus, Programming Basics",
  intermediate: "Orbital Mechanics, Spacecraft Design, Propulsion Systems",
  advanced: "Satellite Systems, Mission Planning, Deep Space Systems",
  tools: "MATLAB, Simulation Software, CAD Tools"
},

{
  title: "Behavioral Economist",
  beginner: "Economics Basics, Psychology Basics",
  intermediate: "Decision Theory, Human Behavior Modeling, Statistics",
  advanced: "Market Behavior Analysis, Policy Design, Predictive Modeling",
  tools: "R, Python, Statistical Software"
},

{
  title: "Genetic Counselor",
  beginner: "Biology, Genetics Basics",
  intermediate: "Human Genetics, Inheritance Patterns, Counseling Skills",
  advanced: "Genetic Risk Analysis, Medical Advisory, Research Interpretation",
  tools: "Genetic Testing Databases, Medical Software"
},

{
  title: "AI Prompt Engineer",
  beginner: "AI Basics, Language Model Understanding",
  intermediate: "Prompt Design, NLP Concepts, Testing Outputs",
  advanced: "LLM Optimization, Agent Design, AI Workflow Systems",
  tools: "OpenAI API, LangChain, Hugging Face"
},

{
  title: "Drone Operator",
  beginner: "Physics, Basic Electronics",
  intermediate: "Drone Navigation, Aerial Mapping, Controls",
  advanced: "Industrial Drone Operations, Autonomous Flight Systems",
  tools: "DJI Software, Flight Controllers"
},

{
  title: "Waste Management Engineer",
  beginner: "Environmental Science Basics",
  intermediate: "Recycling Systems, Waste Processing, Sustainability Methods",
  advanced: "Smart Waste Systems, Circular Economy Design",
  tools: "Environmental Monitoring Systems"
},

{
  title: "Cybercrime Investigator",
  beginner: "Computer Basics, Networking",
  intermediate: "Digital Evidence Collection, Cyber Law Basics",
  advanced: "Criminal Tracking, Malware Analysis, Forensics Investigation",
  tools: "Forensic Software, Security Monitoring Tools"
},

{
  title: "Ergonomics Specialist",
  beginner: "Biology, Human Anatomy Basics",
  intermediate: "Workplace Design, Human-Machine Interaction",
  advanced: "Industrial Ergonomics, Safety System Design",
  tools: "CAD Tools, Simulation Software"
},

{
  title: "Sports Analyst",
  beginner: "Sports Knowledge, Statistics Basics",
  intermediate: "Data Analysis, Performance Tracking, Video Analysis",
  advanced: "Predictive Modeling, Team Strategy Analysis",
  tools: "Excel, Python, Sports Analytics Software"
},{
  title: "Actor",
  beginner: "Voice Control, Expression, Confidence",
  intermediate: "Script Reading, Character Understanding, Stage Performance",
  advanced: "Method Acting, Film Acting, Improvisation, Emotional Depth",
  tools: "Stage, Camera Setup, Rehearsal Spaces"
},

{
  title: "Director (Film/Theatre)",
  beginner: "Story Understanding, Creativity, Communication",
  intermediate: "Script Breakdown, Actor Direction, Scene Planning",
  advanced: "Cinematic Storytelling, Production Management, Visual Storytelling",
  tools: "Camera, Editing Software, Storyboard Tools"
},

{
  title: "Screenwriter",
  beginner: "Writing Skills, Grammar, Storytelling Basics",
  intermediate: "Script Structure, Dialogue Writing, Character Arcs",
  advanced: "Film Structure Mastery, Screenplay Polishing, Pitching Scripts",
  tools: "Final Draft, Celtx, Google Docs"
},

{
  title: "Painter",
  beginner: "Drawing Basics, Color Theory",
  intermediate: "Composition, Shading, Acrylic/Oil Techniques",
  advanced: "Art Style Development, Gallery-Level Artwork, Concept Art",
  tools: "Brushes, Canvas, Paints, Sketchbooks"
},

{
  title: "Sculptor",
  beginner: "Clay Modeling Basics, Creativity",
  intermediate: "Human Anatomy Sculpting, Materials Handling",
  advanced: "Large-Scale Sculptures, Installation Art",
  tools: "Clay, Stone Tools, Carving Equipment"
},

{
  title: "Musician",
  beginner: "Basic Rhythm, Instrument Fundamentals",
  intermediate: "Music Theory, Composition, Performance Skills",
  advanced: "Professional Production, Live Performance Mastery, Songwriting",
  tools: "Instruments, DAWs, Microphones"
},

{
  title: "Singer",
  beginner: "Breathing Control, Pitch Training",
  intermediate: "Vocal Range Development, Singing Techniques",
  advanced: "Studio Recording, Live Performance, Vocal Styling",
  tools: "Microphone, Vocal Coach, Recording Studio"
},

{
  title: "Dancer",
  beginner: "Body Coordination, Rhythm",
  intermediate: "Dance Styles, Choreography Basics",
  advanced: "Professional Choreography, Stage Performance, Storytelling Through Dance",
  tools: "Studio Space, Music Systems"
},

{
  title: "Choreographer",
  beginner: "Dance Basics, Rhythm Understanding",
  intermediate: "Movement Design, Group Coordination",
  advanced: "Stage Production Choreography, Film Choreography",
  tools: "Music Editing Tools, Rehearsal Studios"
},

{
  title: "Fashion Model",
  beginner: "Posture, Walking Techniques, Confidence",
  intermediate: "Runway Walking, Posing, Photo Shoots",
  advanced: "Brand Representation, International Modeling",
  tools: "Portfolio, Fashion Studios"
},

{
  title: "Makeup Artist",
  beginner: "Skin Basics, Hygiene, Color Matching",
  intermediate: "Bridal Makeup, Creative Makeup, Contouring",
  advanced: "Film/TV Makeup, Special Effects Makeup",
  tools: "Brushes, Cosmetic Kits"
},

{
  title: "Photographer",
  beginner: "Camera Basics, Lighting Fundamentals",
  intermediate: "Portrait, Landscape, Composition Skills",
  advanced: "Commercial Photography, Storytelling, Editing Mastery",
  tools: "DSLR, Lightroom, Photoshop"
},

{
  title: "Film Editor",
  beginner: "Basic Video Editing, Storytelling Sense",
  intermediate: "Cuts, Transitions, Color Grading",
  advanced: "Film Pacing, Cinematic Editing, VFX Integration",
  tools: "Premiere Pro, DaVinci Resolve"
},

{
  title: "Content Creator (YouTube/Instagram)",
  beginner: "Basic Video Creation, Communication Skills",
  intermediate: "Audience Engagement, Scripting, Editing",
  advanced: "Branding, Monetization, Storytelling Strategy",
  tools: "Phone Camera, Editing Apps, Analytics Tools"
},

{
  title: "Poet",
  beginner: "Writing Basics, Vocabulary Building",
  intermediate: "Rhyming, Metaphors, Emotional Expression",
  advanced: "Published Poetry, Literary Style Development",
  tools: "Notebook, Writing Apps"
},

{
  title: "Journalist (Creative Writing Focus)",
  beginner: "Writing Skills, Curiosity",
  intermediate: "Story Research, Interviewing, Reporting",
  advanced: "Investigative Storytelling, Feature Writing",
  tools: "Recorder, CMS, Camera"
},

{
  title: "Interior Stylist (Decor Focus)",
  beginner: "Color Sense, Creativity",
  intermediate: "Space Styling, Furniture Arrangement",
  advanced: "Luxury Interior Styling, Brand Styling",
  tools: "Mood Boards, Design Catalogs"
},

{
  title: "Event Planner",
  beginner: "Communication, Organization Skills",
  intermediate: "Event Coordination, Budgeting, Vendor Management",
  advanced: "Large-Scale Event Production, Luxury Events",
  tools: "Planning Apps, Spreadsheets"
},

{
  title: "Travel Blogger",
  beginner: "Writing, Photography Basics",
  intermediate: "Content Creation, Storytelling, Video Editing",
  advanced: "Brand Collaborations, Monetized Travel Content",
  tools: "Camera, Editing Apps, Blogging Platforms"
},

{
  title: "Voice Artist (Dubbing)",
  beginner: "Voice Control, Reading Fluency",
  intermediate: "Character Voices, Emotion Delivery",
  advanced: "Professional Dubbing, Animation Voice Acting",
  tools: "Microphone, Audio Editing Software"
},{
  title: "Art Director",
  beginner: "Drawing Basics, Color Theory, Creativity",
  intermediate: "Visual Storytelling, Branding Design, Composition",
  advanced: "Creative Direction for Films/Ads, Brand Identity Systems",
  tools: "Adobe Photoshop, Illustrator, Figma"
},

{
  title: "Set Designer (Film/Theatre)",
  beginner: "Drawing, Spatial Imagination",
  intermediate: "Stage Layout Design, Props Understanding, Lighting Basics",
  advanced: "Film Set Construction, Immersive Environment Design",
  tools: "Sketching Tools, 3D Visualization Software"
},

{
  title: "Costume Designer",
  beginner: "Fashion Basics, Drawing, Fabric Knowledge",
  intermediate: "Character Costume Design, Stitching Basics",
  advanced: "Film/Theatre Costume Production, Historical Costume Design",
  tools: "Sewing Machines, Fabric Tools, Design Software"
},

{
  title: "Fragrance Designer (Perfumer)",
  beginner: "Basic Chemistry Understanding, Smell Recognition",
  intermediate: "Fragrance Blending, Scent Composition",
  advanced: "Luxury Perfume Creation, Brand Scent Identity Design",
  tools: "Scent Kits, Chemical Compounds, Lab Equipment"
},

{
  title: "Toy Designer",
  beginner: "Drawing, Creativity, Imagination",
  intermediate: "Product Design, Child Psychology Basics",
  advanced: "Toy Manufacturing Design, Safety Testing, Branding",
  tools: "CAD Tools, 3D Modeling Software"
},

{
  title: "Calligrapher",
  beginner: "Handwriting Control, Pen Techniques",
  intermediate: "Typography Styles, Decorative Writing",
  advanced: "Professional Branding Calligraphy, Custom Design Work",
  tools: "Brushes, Ink Pens, Calligraphy Sets"
},

{
  title: "Illustrator",
  beginner: "Sketching, Anatomy Basics",
  intermediate: "Digital Illustration, Storytelling Visuals",
  advanced: "Book Illustration, Editorial Illustration, Concept Art",
  tools: "Procreate, Photoshop, Drawing Tablets"
},

{
  title: "Animator (2D Focus)",
  beginner: "Drawing Basics, Frame Understanding",
  intermediate: "Character Animation, Motion Principles",
  advanced: "Storyboarding, Cinematic Animation Sequences",
  tools: "Adobe Animate, Toon Boom Harmony"
},

{
  title: "Theatre Actor",
  beginner: "Voice Control, Stage Confidence",
  intermediate: "Dialogue Delivery, Improvisation",
  advanced: "Live Performance Mastery, Emotional Expression",
  tools: "Stage, Scripts, Rehearsal Spaces"
},

{
  title: "Theatre Director",
  beginner: "Story Reading, Communication Skills",
  intermediate: "Stage Blocking, Actor Coordination",
  advanced: "Full Theatre Production Direction, Stage Storytelling",
  tools: "Stage Setup, Scripts, Lighting Systems"
},

{
  title: "Literary Editor",
  beginner: "Grammar, Reading Habits",
  intermediate: "Manuscript Editing, Story Structure Analysis",
  advanced: "Publishing Decisions, Author Collaboration",
  tools: "Word Processors, Editing Software"
},

{
  title: "Publisher",
  beginner: "Reading, Communication Skills",
  intermediate: "Book Selection, Editing Coordination",
  advanced: "Publishing Strategy, Market Analysis, Author Management",
  tools: "Publishing Platforms, CRM Tools"
},

{
  title: "Advertising Creative (Copy + Visual)",
  beginner: "Writing Skills, Creativity",
  intermediate: "Ad Copywriting, Campaign Ideas, Branding Basics",
  advanced: "Viral Campaign Design, Brand Storytelling Strategy",
  tools: "Canva, Photoshop, Google Ads Tools"
},

{
  title: "Voice Coach",
  beginner: "Voice Control, Breathing Techniques",
  intermediate: "Vocal Training Methods, Tone Shaping",
  advanced: "Professional Singing/Voice Training, Performance Coaching",
  tools: "Microphones, Audio Analysis Tools"
},

{
  title: "Dance Choreography Assistant",
  beginner: "Dance Basics, Rhythm",
  intermediate: "Movement Learning, Coordination",
  advanced: "Assisting Choreography Design for Stage/Film",
  tools: "Music Editing Apps, Rehearsal Studios"
},

{
  title: "Florist",
  beginner: "Plant Basics, Color Sense",
  intermediate: "Flower Arrangement, Bouquet Design",
  advanced: "Event Floral Design, Luxury Arrangements",
  tools: "Floral Tools, Design Boards"
},

{
  title: "Wedding Planner",
  beginner: "Communication, Organization",
  intermediate: "Vendor Management, Budgeting, Event Design",
  advanced: "Luxury Weddings, Destination Wedding Planning",
  tools: "Planning Software, Spreadsheets"
},

{
  title: "Tattoo Artist",
  beginner: "Drawing, Sketching Skills",
  intermediate: "Skin Anatomy, Tattoo Techniques",
  advanced: "Custom Tattoo Design, Professional Studio Work",
  tools: "Tattoo Machines, Inks, Sketchpads"
},

{
  title: "Museum Curator",
  beginner: "History, Art Appreciation",
  intermediate: "Artifact Study, Exhibition Design",
  advanced: "Museum Management, Cultural Preservation",
  tools: "Archival Systems, Catalog Software"
},

{
  title: "Travel Photographer",
  beginner: "Camera Basics, Composition",
  intermediate: "Storytelling Through Photos, Editing",
  advanced: "Documentary Travel Projects, Commercial Travel Shoots",
  tools: "DSLR, Lightroom, Drones"
}];
 const filteredCareers = careers.filter((career) =>
    career.title.toLowerCase().includes(search.toLowerCase())
  );

  
return (
  <div>
    <h1 className="page-title">
      Explore Career Roadmaps
    </h1>

    <input
      type="text"
      className="search-box"
      placeholder="🔍 Search careers..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    {filteredCareers.length === 0 && (
      <h2 style={{ textAlign: "center" }}>
        No career found 😔
      </h2>
    )}

    <div className="learn-container">
      {filteredCareers.map((career) => (
        <div className="career-card" key={career.title}>
          <h2>{career.title}</h2>

          <h4>Beginner</h4>
          <p>{career.beginner}</p>

          <h4>Intermediate</h4>
          <p>{career.intermediate}</p>

          <h4>Advanced</h4>
          <p>{career.advanced}</p>

          <h4>Tools</h4>
          <p>{career.tools}</p>
        </div>
      ))}
    </div>
  </div>
);
}

export default Learn;
