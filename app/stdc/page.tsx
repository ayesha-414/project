"use client";

import { useState } from "react";
import Header from "@/components/Header";

import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Home, ChevronRight, BookOpen, FileText, CheckCircle, Users, Award, Calendar, CreditCard, ArrowRight, Play } from "lucide-react";
type ProgramKey = "ss" | "tcs" | "ds" | "cs";

export default function STDCPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeProgram, setActiveProgram] = useState<ProgramKey>("ss");
  const [alumniIndex, setAlumniIndex] = useState(0);



  const programs: { id: ProgramKey; name: string }[] = [
    { id: "ss", name: "Software Systems" },
    { id: "tcs", name: "Theoretical Computer Science" },
    { id: "ds", name: "Data Science" },
    { id: "cs", name: "Cyber Security" },
  ];


  const notableAlumni = [
  { 
    name: "Dr. Pravin Shankar", 
    position: "Data Science Director", 
    organization: "Meta/WhatsApp USA",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pravin" 
  },
  { 
    name: "Harini Seshadri", 
    position: "Executive Director", 
    organization: "Morgan Stanley, Bengaluru",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Harini"
  },
  { 
    name: "Kasiviswanathan M", 
    position: "Executive Director", 
    organization: "JPMorgan Chase & Co, USA",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kasiviswanathan"
  },
  { 
    name: "Dr. Parameswaran R", 
    position: "Research Scientist", 
    organization: "Meta, San Francisco",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Parameswaran"
  },
  { 
    name: "Gowri Sekar", 
    position: "Managing Director", 
    organization: "Goldman Sachs, Bengaluru",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gowri"
  },
  { 
    name: "Laks Srini", 
    position: "Co Founder & CTO", 
    organization: "Zerodown, USA",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Laks"
  },
  { 
    name: "Raghavan S", 
    position: "Aviation Management", 
    organization: "Indian Navy",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Raghavan"
  },
  { 
    name: "R.K. Karthikeyan", 
    position: "IPS", 
    organization: "Ministry of Home Affairs, India",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karthikeyan"
  },
];
  const nextAlumni = () => {
    setAlumniIndex((prev) => (prev + 1) % notableAlumni.length);
  };

  const prevAlumni = () => {
    setAlumniIndex((prev) =>
      prev === 0 ? notableAlumni.length - 1 : prev - 1
    );
  };

  const curriculum: Record<ProgramKey, Record<string, string[]>> = {

    ss: {
      "Semester 1": [
        "Calculus and Its Applications",
        "English for Professional Skills",
        "Applied Physics",
        "Digital Electronics",
        "Problem Solving and C Programming",
        "Mathematical Foundations Lab",
        "C Programming Lab",
        "Applied Physics and Digital Electronics Lab",
        "Personality And Character Development"
      ],
      "Semester 2": [
        "Discrete Structures",
        "Linear Algebra",
        "Data Structures and Algorithms",
        "Object Oriented Programming",
        "Computer Organization",
        "Data Structures Lab",
        "Object Computing Lab",
        "Python Programming Lab",
        "Personality And Character Development"
      ],
      "Semester 3": [
        "Probability, Stochastic Processes and Statistics",
        "Database Management System",
        "Transform Techniques",
        "Design and Analysis of Algorithms",
        "Microprocessor and Embedded Systems",
        "Design and Analysis of Algorithms Lab",
        "Embedded Systems Lab",
        "RDBMS Lab"
      ],
      "Semester 4": [
        "Accounting and Financial Management",
        "Computer Networks",
        "Operations Research",
        "Operating Systems",
        "Software Engineering Techniques",
        "Computer Networks Lab",
        "Unix System Prograaming Lab",
        "Web Development Lab"
      ],
      "Semester 5": [
        "Big Data and Modern Databases",
        "Java Programming",
        "Machine Learning",
        "Theory Of Computing",
        "Professional Elective I",
        "Big Data and Modern Databases Lab",
        "Java Programming Lab",
        "Machine Learning Lab"
      ],
      "Semester 6": [
        "Cloud Computing",
        "Artificial Intelligence",
        "Distributed Computing",
        "Software Patterns",
        "Professional Elective II",
        "Cloud Computing Lab",
        "Artificial Intelligence Lab",
        "Mobile Application Development Lab"
      ],
      "Semester 7": [
        "Project Work I - Duration of 6 months"
      ],
      "Semester 8": [
        "Principles Of Compiler Design",
        "Data Mining",
        "Data Mining",
        "Software Project Management",
        "Professional Elective III",
        "Open Elective I",
        "Compiler Design Lab",
        "Data Mining and Visualization Lab",
        "Capstone Project Lab"
      ],
      "Semester 9": [
        "Digital Image Processing and Computer Vision",
        "Information Retrieval",
        "Deep Learning",
        "Professional Elective IV",
        "Open Elective II",
        "Digital Image Processing and Computer Vision Lab",
        "Information Retrieval Lab",
        "Deep Learning Lab"
      ],
      "Semester 10": [
        "Project Work II - Duration of 6 months"
      ],
      "List of Electives":[
        "Software Metrics",
        "Parallel Programming",
        "Data Compression",
        "Computer Graphics",
        "Principles of Programming Languages",
        "Agile Software Development",
        "Social Network Analysis",
        "Predictive Analysis",
        "Security In Computing",
        "Advanced Systems Programming",
        "Statistical Learning",
        "Applied Graph Theory",
        "Wireless Netwroks",
        "Network Forensics",
        "Reinforcement Learning",
        "Principles of Management and Behavioral Science",
        "Entrepreneurship",
        "Environmental Science and Green Computing",
        "Mathematical Modelling",
        "Computational Finance",
        "Ethical Hacking",
        "Natural Language Processing",
        "Internet of Things",
        "Virtual and Augumented Reality",
        "Computer Forensics",
        "Advanced Algorithms"
      ]
    },

    tcs: {
      "Semester 1": [
        "Calculus and Its Applications",
        "English for Professional Skills",
        "Applied Physics",
        "Digital Electronics",
        "Problem Solving and C Programming",
        "Applied Physics and Digital Electronics Lab",
        "C Programming Lab",
        "Mathematics Laboratory",
        "Personality And Character Development"
      ],
      "Semester 2": [
        "Discrete Structures",
        "Abstract Algebra",
        "Data Structures and Algorithms",
        "Object Oriented Programming",
        "Transforms and Its Applications",
        "Data Structures Lab",
        "Object Oriented Programming Lab",
        "Python Programming",
        "Personality And Character Development"
      ],
      "Semester 3": [
        "Probability And Statistics",
        "Linear Algebra",
        "Graph Theory",
        "Advanced Data Structures",
        "Computer Organization And Assembly Language Programming",
        "Statistical Computing And R Programming Lab",
        "Advanced Data Structures Lab",
        "Scientific Computing Lab"
      ],
      "Semester 4": [
        "Stochastic Processes",
        "Computer Networks",
        "Optimization Techniques",
        "Operating Systems",
        "Database Management System",
        "Computer Networks Lab",
        "Operating Systems Lab",
        "RDBMS Lab"
      ],
      "Semester 5": [
        "Theory Of Computing",
        "Computational Number Theory And Cryptography",
        "Machine Learning",
        "Design And Analysis Of Algorithms",
        "Professional Elective - I",
        "Machine Learning Lab",
        "Design And Analysis Of Algorithms Lab",
        "Java Programming Lab"
      ],
      "Semester 6": [
        "Cloud Computing",
        "Artificial Intelligence",
        "Software Engineering",
        "Principles Of Compiler Design",
        "Professional Elective – II",
        "Cloud Computing Lab",
        "Compiler Design Lab",
        "Software Patterns Lab"
      ],
      "Semester 7": [
        "Project Work 1 – Industry / Research Project - Duration of 6 months"
      ],
      "Semester 8": [
        "Game Theory",
        "Advanced Algorithms",
        "Data Mining",
        "Professional Elective III",
        "Open Elective I",
        "Functional Programming Lab",
        "Data Mining and Visualization Lab",
        "Research Specialization Lab"
      ],
      "Semester 9": [
        "Security In Computing",
        "Digital Image Processing and Computer Vision",
        "Information Retrieval",
        "Professional Elective IV",
        "Open Elective II",
        "Security In Computing Lab",
        "Digital Image Processing and Computer Vision Lab",
        "Information Retrieval Lab"
      ],
      "Semester 10": [
        "Project Work 1 – Industry / Research Project - Duration of 6 months"
      ],
      "List of Electives":[
        "Mathematical Analysis",
        "Social Network Analysis",
        "Computer Graphics",
        "Random Graphs",
        "Data Compression",
        "Advanced Operating Systems",
        "Probabilistic Graphical Models",
        "Big Data And Modern Database Systems",
        "Functional Analysis",
        "Epidemic Modles",
        "Computational Complexity Theory",
        "Network Science",
        "Mathematical Modelling",
        "Exact Algorithms For Hard Problems",
        "Wireless Networks",
        "Statistical Learning",
        "Large Scale Machine Learning",
        "Security Modelling And Analysis",
        "Parallel and Distributed Computing",
        "Deep Learning",
        "Reinforcement Learning",
        "Quantum Computing",
        "Computational Geometry",
        "Computational Finance",
        "Natural Language Processing",
        "Logic for Computer Science",
        "Internet Of Things",
        "Digital Topology",
        "Computer Forensics",
        "Virtual and Augumented Reality",
        "Mobile Technology",
        "Environmental Science And Green Computing",
        "Accounting and Financial Management",
        "Principles Of Management And Behavioral Sciences",
        "Entrepreneurship"
      ]
    },

    ds: {
      "Semester 1": [
        "Calculus And Its Applications",
        "Basics Of Computational Biology",
        "Digital Electronics",
        "Problem Solving & C Programming",
        "English For Professional Skills",
        "Mathematical Foundations Lab",
        "C Programming Lab",
        "Digital Electronics Lab",
        "Personality And Character Development"
      ],
      "Semester 2": [
        "Discrete Structures",
        "Abstract Algebra",
        "Data Structures and Algorithms",
        "Object Oriented Programming",
        "Theory Of Probability",
        "Object Computing Lab",
        "Data Structures Lab",
        "Python Programming Lab",
        "Personality And Character Development"
      ],
      "Semester 3": [
        "Applied Statistics",
        "Linear Algebra",
        "Graph Theory",
        "Advanced Data Structures",
        "Computer Organization And Assembly Language Programming",
        "Applied Statistics And R Programming Lab",
        "Advanced Data Structures Lab",
        "Scientific Computing Lab"
      ],
      "Semester 4": [
        "Optimization Techniques",
        "Database Management System",
        "Predictive Analytics",
        "Operating Systems",
        "Transforms And Its Applications",
        "Data Analytics & Visualisation Lab",
        "RDBMS Lab",
        "Operating Systems Lab"
              ],
      "Semester 5": [
        "Design And Analysis Of Algorithms",
        "Stochastic Models",
        "Computer Networks",
        "Machine Learning",
        "Professional Elective-I",
        "Design And Analysis Of Algorithms Lab",
        "Machine Learning Lab",
        "Java Programming Lab"
              ],
      "Semester 6": [
        "Cloud Computing",
        "Deep Learning",
        "Big Data &Modern Database Systems",
        "Artificial Intelligence",
        "Professional Elective –II",
        "Cloud Computing Lab",
        "Big Data & Modern Database Systems Lab",
        "Deep Learning Lab"
      ],
      "Semester 7": [
        "Project Work I - Duration of 6 months"
      ],
      "Semester 8": [
        "Reinforcement Learning",
        "Natural Language Processing",
        "Deployable Aspects of Machine Learning",
        "Professional Elective-III",
        "Open Elective-I",
        "Reinforcement Learning Lab",
        "Deployable Aspects of Machine Learning Lab",
        "Capstone Project"
      ],
      "Semester 9": [
        "Data Privacy And Security",
        "Data Mining",
        "Information Retrieval",
        "Professional Elective – IV (Self Study)",
        "Open Elective-II",
        "Information Retrieval Lab",
        "Data Privacy And Security Lab",
        "Data Mining Lab"
      ],
      "Semester 10": [
        "Project Work II - Duration of 6 months"
      ],
    
    "List of Electives":[
      "Data Compression",
      "Statiscal Learning",
      "Digital Image Processing and Computer Vision",
      "Multimedia Analytics",
      "Computational Neuroscience",
      "Adversarial Machine Learning",
      "Marketing Analytics",
      "Computer Graphics",
      "Algorithms For Bioinformatics",
      "Mathematical Modelling",
      "Software Engineering",
      "Applied Graph Algorithms",
      "Game Theory",
      "Social Network Data Analytics",
      "Network Science",
      "Parallel and Distributed Computing",
      "Large Scale Machine Learning",
      "Wireless Networks",
      "Survival Analytics",
      "Randomized Algorithms",
      "Probabilistic Graphical Models",
      "Topological Data Analysis",
      "Random Graphs",
      "Computational Finance",
      "Computational Geometry",
      "Principles Of Management And Behavioural Sciences",
      "Entrepreneurship",
      "Information And Coding Theory",
      "Accounting And Financial Management",
      "Environmental Science And Green Computing",
      "Functional Analysis",
      "Advanced Optimization Techniques",
      "Internet Of Things",
      "Mobile Technology",
      "Virtual and Augumented Reality",
      "Ethical Hacking",
      "Computer Forensics",
      "Advanced Algorithms"
    ]
    },
    cs: {
      "Semester 1": [
        "Calculus And Its Applications",
        "Basics Of Computational Biology",
        "Digital Electronics",
        "Problem Solving & C Programming",
        "English For Professional Skills",
        "Mathematical Foundations Lab",
        "C Programming Lab",
        "Digital Electronics Lab",
        "Personality And Character Development"
      ],
      "Semester 2": [
        "Discrete Structures",
        "Algebra And Number Theory",
        "Data Structures and Algorithms",
        "Object Oriented Programming",
        "Computer Architecture",
        "Data Structures Lab",
        "Object Computing Lab",
        "Python Programming Lab",
        "Personality And Character Development"
              ],
      "Semester 3": [
        "Probability, Stochastic Processes and Statistics",
        "Linear Algebra",
        "Microcontrollers And Embedded Systems",
        "Database Management System",
        "Design And Analysis Of Algorithms",
        "Embedded Systems Lab",
        "Design And Analysis Of Algorithms Lab",
        "RDBMS Lab"
      ],
      "Semester 4": [
        "Optimization Techniques",
        "Computer Networks",
        "Cryptography",
        "Operating Systems",
        "Hardware Security",
        "Computer Networks Lab",
        "Java Programming Lab",
        "Operating Systems Lab"
      ],
      "Semester 5": [
        "Network Security",
        "Cryptanalysis",
        "Machine Learning",
        "Software Security and Exploitation",
        "Professional Elective I",
        "Software Security and Exploitation Lab",
        "Machine Learning Lab",
        "Ethical Hacking & Malware Analysis Lab"
      ],
      "Semester 6": [
        "Cloud Security",
        "Principles Of Compiler Design",
        "Data Mining",
        "Secure Coding",
        "Professional Elective II",
        "Cloud Security Lab",
        "Data Mining And Visualization Lab",
        "Web Engineering Lab"
      ],
      "Semester 7": [
        "Project Work I - Duration of 6 months"
      ],
      "Semester 8": [
        "Digital Image Processing and Computer Vision",
        "Computer Forensics",
        "Data Privacy",
        "Professional Elective III",
        "Open Elective I",
        "Digital Image Processing and Vision Lab",
        "Computer Forensics Lab",
        "Security Capstone Lab"
      ],
      "Semester 9": [
        "Threat Hunting",
        "Blockchain Technology",
        "Mobile Security",
        "Professional Elective IV",
        "Open Elective II",
        "Threat Hunting Lab",
        "Mobile Security Lab",
        "Memory Forensics Lab"
      ],
      "Semester 10": [
        "Project Work II - Duration of 6 months"
      ],
      "List of Electives":[
        "Information And Coding Theory",
        "Quantum Computing",
        "Post Quantum Cryptography",
        "Active Defense Using Deception",
        "Security Modeling And Analysis",
        "Computer Graphics",
        "Artificial Intelligence",
        "Social Network Analysis",
        "Applied Graph Theory",
        "Multimedia Security",
        "Identity And Access Management",
        "Internet Of Things",
        "Data Compression",
        "Big Data And Modern Database Systems",
        "Biometric Security",
        "Game Theory",
        "Deep Learning",
        "Natural Language Processing",
        "Reinforcement Learning",
        "Distributed Computing",
        "Software Patterns",
        "Virtual And Augmented Reality",
        "Essentials Of Cyber Physical System Security",
        "Principles Of Management",
        "Environmental Science And Green Computing",
        "Computational Finance",
        "Entrepreneurship",
        "Statistical Learning",
        "Mathematical Modelling",
        "Adversarial Machine Learning",
        "Network Science",
        "Information Retrieval",
        "Ethics and Cyber Law",
        "Advanced Algorithms"
      ]
    },
  };
  const alumniSpeaks = [
    {
      name: "Andal Priya Darshini J",
      role: "Senior Software Engineer, Apple, USA",
      program: "M.Sc Theoretical Computer Science (2007-2012)",
      comment:
        "Looking back on my journey within the program, it's evident that it was a period of profound transformation. I gained invaluable knowledge and skills, but more importantly, I developed a deep-seated passion for continual growth and positive impact.",
      img: "/placeholder.svg",
    },
    {
      name: "Sai Pujitha Guthi",
      role: "Senior Software Engineer, Netflix, Seattle, USA",
      program: "M.Sc Software Engineering (2009-2014)",
      comment:
        "Reflecting back on the impact of M.Sc Software engineering on my career, I was consistently impressed by the program's commitment to staying abreast of technological advancements.",
      img: "/placeholder.svg",
    },
    {
      name: "Rishab R Bafna",
      role: "Vice President, JP Morgan Chase & Co, USA",
      program: "M.Sc TCS (2012-2017)",
      comment:
        "As a proud alumnus of PSG Tech’s M.Sc. TCS program, I can confidently say that the courses offer a strong foundation for a successful tech career.",
      img: "/placeholder.svg",
    },
    {
      name: "Niranjana R",
      role: "Data & Applied Scientist, Microsoft, Hyderabad",
      program: "M.Sc TCS (2015-2020)",
      comment:
        "The course gave me immense opportunities to learn the right skills and connect with the right people.",
      img: "/placeholder.svg",
    },
  ];
  const achievementCategories = ["All", "Entrepreneurs", "PhD Holders", "Higher Studies", "Events", "Sports & Culturals"];

  const [activeAchievement, setActiveAchievement] = useState("All");

  const achievements = [
  // -------------------- Entrepreneurs --------------------
    {
      name: "Karunya Sampath",
      role: "Founder & CEO, Payoda Technology Inc., Coimbatore",
      img: "/placeholder.svg",
      category: "Entrepreneurs",
    },
    {
      name: "Vidya Devarajan",
      role: "Director, Kovan Labs",
      img: "/placeholder.svg",
      category: "Entrepreneurs",
    },
    {
      name: "Senthil Natarajan",
      role: "Managing Director, Kovai Pazha Mudir Nilayam, Coimbatore",
      img: "/placeholder.svg",
      category: "Entrepreneurs",
    },
    {
      name: "Kuberan Marimuthu",
      role: "CEO, Cypherd Wallet, USA",
      img: "/placeholder.svg",
      category: "Entrepreneurs",
    },
    {
      name: "B. Ramprasath",
      role: "Co-Founder and CTO, Foxsense Innovations, Coimbatore",
      img: "/placeholder.svg",
      category: "Entrepreneurs",
    },
    {
      name: "Rukaiya Dahodwala",
      role: "Honest Mocha Entrepreneur, Redmond, Washington, USA",
      img: "/placeholder.svg",
      category: "Entrepreneurs",
    },
    {
      name: "Sethuraman T.A",
      role: "Co-Founder and CEO, Jungroo Learning, Bengaluru",
      img: "/placeholder.svg",
      category: "Entrepreneurs",
    },
    {
      name: "Cibe Hariharan",
      role: "Co-Founder and CEO, Jungroo Learning, Bengaluru",
      img: "/placeholder.svg",
      category: "Entrepreneurs",
    },

    // -------------------- PhD Holders --------------------
    {
      name: "Dr Arun Kumar",
      role: "PhD – Stanford University",
      img: "/placeholder.svg",
      category: "PhD Holders",
    },
    {
      name: "Dr. Aditi Mukherjee",
      role: "Research Scientist at Peraton Labs",
      img: "/placeholder.svg",
      category: "PhD Holders",
    },
    {
      name: "Dr. Sridhar Venkatesan",
      role: "Associate Professor, University of Florida",
      img: "/placeholder.svg",
      category: "PhD Holders",
    },
    {
      name: "Dr. Akshaya Mani",
      role: "Applied Researcher",
      img: "/placeholder.svg",
      category: "PhD Holders",
    },
    {
      name: "Dr. Yashwanth Ramamurthi",
      role: "International Institute of Information Technology, Bangalore",
      img: "/placeholder.svg",
      category: "PhD Holders",
    },
    {
      name: "Dr. Rathin Jeyeram",
      role: "Learning Planet Institute, Université Paris Cité",
      img: "/placeholder.svg",
      category: "PhD Holders",
    },

    // -------------------- Higher Studies --------------------
    {
      name: "Meera Devi",
      role: "MS Computer Science – Germany",
      img: "/placeholder.svg",
      category: "Higher Studies",
    },
    {
      name: "Vaishali Surianarayanan",
      role: "Senior PhD candidate (Fully Funded) in Computer Science at UCSB",
      img: "/placeholder.svg",
      category: "Higher Studies",
    },
    {
      name: "Pavithra Elumalai",
      role: "PhD Scholar, University of Göttingen and University of Tübingen",
      img: "/placeholder.svg",
      category: "Higher Studies",
    },
    {
      name: "Surya Prasath",
      role: "Pursuing MS in Data Science, University of Maryland, USA",
      img: "/placeholder.svg",
      category: "Higher Studies",
    },
    {
      name: "Naman Bhargava",
      role: "MSc Data Science, Michigan University",
      img: "/placeholder.svg",
      category: "Higher Studies",
    },
    {
      name: "Ashwatha E S",
      role: "MSc Software Engineering, Northeastern University, Boston",
      img: "/placeholder.svg",
      category: "Higher Studies",
    },
    {
      name: "Charan K R",
      role: "MSc Computer Science, New York University",
      img: "/placeholder.svg",
      category: "Higher Studies",
    },
    {
      name: "Gowtham R",
      role: "MSc Computer Science, Trinity College, Ireland",
      img: "/placeholder.svg",
      category: "Higher Studies",
    },
    {
      name: "Lakshminarayanan Ravi",
      role: "Pursuing MS in Computer Science Engineering, Northeastern University, USA",
      img: "/placeholder.svg",
      category: "Higher Studies",
    },
    {
      name: "Saket Vempaty",
      role: "Research Scholar at IIIT Hyderabad",
      img: "/placeholder.svg",
      category: "Higher Studies",
    },
    {
      name: "N. Krishna",
      role: "Pursuing M.Sc Mathematics, Simon Fraser University, Canada",
      img: "/placeholder.svg",
      category: "Higher Studies",
    },

    // -------------------- Events --------------------
    {
      name: "Tech Symposium",
      role: "National Level Event Winners",
      img: "/placeholder.svg",
      category: "Events",
    },
    {
      name: "MSc Cyber Security",
      role: "TN Police Hackethon 2022, Bagged Third Prize",
      img: "/placeholder.svg",
      category: "Events",
    },
    {
      name: "MSc Cyber Security",
      role: "National Level Embedded Security CTF 2022, Top 20 among 500 teams",
      img: "/placeholder.svg",
      category: "Events",
    },
    {
      name: "MSc Cyber Security",
      role: "GIT X 2022, Best Innovation Prize",
      img: "/placeholder.svg",
      category: "Events",
    },
    {
      name: "MSc Cyber Security",
      role: "Caterpillar Hackethon 2021 and 2022, Finalists",
      img: "/placeholder.svg",
      category: "Events",
    },
    {
      name: "M.Sc Software Systems",
      role: "Cookr Food Tech Hackethon 2024, Winners",
      img: "/placeholder.svg",
      category: "Events",
    },
    {
      name: "Tamjid L",
      role: "Decoding 2022, First Prize",
      img: "/placeholder.svg",
      category: "Events",
    },
    {
      name: "Mahizha N.S",
      role: "Manas Codeathon 2023, Runner-Up",
      img: "/placeholder.svg",
      category: "Events",
    },
    {
      name: "MSc Data Science",
      role: "Bosch University Hackethon 2024, Winners",
      img: "/placeholder.svg",
      category: "Events",
    },
    {
      name: "MSc Data Science",
      role: "Paper Presentation in 9th National Conference on Computer Vision Pattern Recognition Image Processing Graphics NCVPRIPG 2024 at IIST",
      img: "/placeholder.svg",
      category: "Events",
    },
    {
      name: "MSc Data Science",
      role: "Societe Generale Global Solutions Hackethon 2023, Finalists",
      img: "/placeholder.svg",
      category: "Events",
    },
    {
      name: "M.Sc Data Science",
      role: "Smart India Hackethon 2022, First Prize Rs.1,00,000",
      img: "/placeholder.svg",
      category: "Events",
    },
    {
      name: "Varun Vaibhav A.S",
      role: "IIIT Hackethon on Healthcare 2023",
      img: "/placeholder.svg",
      category: "Events",
    },
    {
      name: "Mukund Elumalai",
      role: "KLA Hackethon 2020, Cash Prize Rs.34,000",
      img: "/placeholder.svg",
      category: "Events",
    },
    {
      name: "Kirushikesh DB",
      role: "Filed a Patent on NLP during the Internship at IBM Research",
      img: "/placeholder.svg",
      category: "Events",
    },
    {
      name: "M.Sc Theoretical Computer Science",
      role: "Societe Generale Group Hackethon, Runner-up",
      img: "/placeholder.svg",
      category: "Events",
    },

    // -------------------- Sports & Culturals --------------------
    {
      name: "Athletics Team",
      role: "Inter College Champions",
      img: "/placeholder.svg",
      category: "Sports & Culturals",
    },
    {
      name: "Karthick Ravi",
      role: "Badminton State Rank Holder",
      img: "/placeholder.svg",
      category: "Sports & Culturals",
    },
    {
      name: "Charankumar P",
      role: "Guinness World Record holder ‘Football Touches with Alternating Feet in one minute’",
      img: "/placeholder.svg",
      category: "Sports & Culturals",
    },
    {
      name: "Sai Karthik",
      role: "Petrichor 23 Techno Cultural Feast, IIT Palakkad - Breaking Band, 2nd Position",
      img: "/placeholder.svg",
      category: "Sports & Culturals",
    },
    {
      name: "Alagu Prakalya",
      role: "AI Tamilnadu Kalambagam - Talk on ‘Building GPT models of Tamil’",
      img: "/placeholder.svg",
      category: "Sports & Culturals",
    },
    {
      name: "Lalit Kishore",
      role: "Tamilnadu Archery Championship, Gold Medallist",
      img: "/placeholder.svg",
      category: "Sports & Culturals",
    },
  ];

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 gradient-bg">
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Five Year Integrated M.Sc <span className="text-[#e8505b]">Programmes</span>
          </h1>
          <p className="text-white/80 text-xl">Department of Applied Mathematics and Computational Sciences</p>
          
          <div className="flex items-center gap-2 mt-6 text-white/70">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Programme Details</span>
          </div>

          {/* Alumni Audio Link */}
          <div className="mt-8">
            <button className="flex items-center gap-2 bg-[#e8505b] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d43f4a] transition-colors">
              <Play className="w-5 h-5" />
              LISTEN TO OUR ALUMNI
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl card-shadow overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-2xl font-bold text-[#1a1a2e]">Five Year Integrated M.Sc Programmes</h2>
                  
                  {/* Programme Tabs */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {programs.map((program) => (
                      <button
                        key={program.id}
                        onClick={() => setActiveProgram(program.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          activeProgram === program.id
                            ? "bg-[#1c3879] text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {program.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 p-4 bg-gray-50 border-b">
                  {[
                    { id: "overview", label: "Overview", icon: BookOpen },
                    { id: "curriculum", label: "Curriculum", icon: FileText },
                    { id: "selection", label: "Selection Process", icon: CheckCircle },
                    { id: "alumni", label: "Alumni Speaks", icon: Users },
                    { id: "achievements", label: "Achievements", icon: Award },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                        activeTab === tab.id
                          ? "bg-[#1c3879] text-white"
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="p-6">
                  {activeTab === "overview" && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-[#1c3879] mb-3">About the Department</h4>
                        <p className="text-gray-600 leading-relaxed">
                          The Department of Applied Mathematics and Computational Sciences comprises of dedicated faculty members who are undoubtedly the assets worthy of mention. The department is known for its discipline and for the importance it gives to the overall development of students in grooming them towards becoming good software professionals, research scientists and data analysts. The department has its own library with the latest books, national and international journals and magazines. The computer centre is well equipped with the most recent hardware and software. The department has vibrant research culture to keep in touch with the ever-growing technologies. The faculty members participate regularly in refresher courses and symposia conducted by top-notch Universities, Research Institutions and Professional Bodies like Association for Computing Machinery, IEEE. The department organizes technical symposia at national and international levels at regular intervals. Apart from stressing consistent and good academic performance, the department encourages participation in co-curricular and extracurricular activities to bring out the latent talents in its students. The students are provided with ample opportunities to improve their organizational skills and group dynamics.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-[#1c3879] mb-3">About the Programmes</h4>
                        
                        <div className="space-y-4">
                          <div className="bg-[#1c3879]/5 rounded-xl p-4">
                            <h5 className="font-bold text-[#1c3879] mb-2">M.Sc. Software Systems</h5>
                            <p className="text-gray-600 text-sm">
                              was started in the year 1997 for the first time in the country and well received by leading software industries across the globe. The programme has been designed to meet the challenging needs of the industry, by ensuring a good understanding of the software design process and to develop resilient applications using state-of-the art technologies. The programme has been renamed as Software Systems since 2014.
                            </p>
                          </div>

                          <div className="bg-[#e8505b]/5 rounded-xl p-4">
                            <h5 className="font-bold text-[#e8505b] mb-2">M.Sc. Theoretical Computer Science</h5>
                            <p className="text-gray-600 text-sm">
                              is yet another innovative programme introduced in 2007. Any industry grows only if it has a strong R&D division. In order that Research be fruitful, the R&D Team should have persons with strong theoretical background. “It is the theory that describes what can be observed”, said Albert Einstein. M.Sc Theoretical Computer Science has been designed to augment human resources for the R&D divisions of software industries.
                            </p>
                          </div>

                          <div className="bg-[#2e7d32]/5 rounded-xl p-4">
                            <h5 className="font-bold text-[#2e7d32] mb-2">M.Sc Data Science</h5>
                            <p className="text-gray-600 text-sm">
                              Increasing demand in processing and handling the plethora of data, the Department of AM&CS started an innovative five year integrated M.Sc Data Science programme in the year 2015, the first of its kind in India. The curriculum of the programme is well designed to provide rigorous training on the scalable techniques for big data analysis, machine learning, optimization techniques, and artificial intelligence. This programme will equip the students to provide holistic experience encompassing technical and leadership skills which are vital for successfully creating value through analytics and AI in any domain. The graduates from this programme are in huge demand by the industry with an excellent placement record.
                            </p>
                          </div>

                          <div className="bg-[#ff9800]/5 rounded-xl p-4">
                            <h5 className="font-bold text-[#ff9800] mb-2">M.Sc. Cyber Security</h5>
                            <p className="text-gray-600 text-sm">
                             As the drive towards digital transformation continues to ceaselessly gather momentum, they also significantly raise cyber security risks and threat levels. Business is evolving itself at the pace of algorithmic speeds and digital risks are constantly challenging even the most financially robust companies. With the huge skills gap of cyber security workforce globally, there is an urgent need to modernize Cyber security education to include vital skills. The five year integrated M.Sc. Cyber Security programme, the first of its kind in India aims to prepare students with the technical knowledge and skills needed to protect and defend computer systems and networks. The programme has a strong and wide technical base and internship programs which are the most critical aspects to a good cyber security education.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-[#1c3879] mb-3">Programme Highlights</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            Two semesters (7th and 10th) rigorous internships in reputed industries and top-notch institutions
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            Unique feature for the success of the programmes
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            Excellent placement record with top companies globally
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === "curriculum" && (
                    <div className="space-y-8">

                      {/* Programme Structure (keep your intro) */}
                      <div className="bg-[#1c3879]/5 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-[#1c3879] mb-3">Programme Structure</h4>
                        <p className="text-gray-600 leading-relaxed">
                          All the four programmes follow a meticulously planned curriculum based on Choice Based Credit System,
                          updated regularly to meet the challenging requirements of the industry.
                        </p>
                      </div>

                      {/* Dynamic Curriculum */}
                      <div>
                        <h4 className="text-xl font-bold text-[#1c3879] mb-4">
                          {programs.find(p => p.id === activeProgram)?.name} – Semester Wise Curriculum
                        </h4>

                        <div className="grid md:grid-cols-2 gap-4">
                          {Object.entries(curriculum[activeProgram]).map(([semester, subjects]) => (
                            <div
                              key={semester}
                              className="bg-[#1c3879] text-white rounded-xl p-5"
                            >
                              <h5 className="font-bold text-lg mb-3">{semester}</h5>

                              <ul className="space-y-2">
                                {subjects.map((subject, idx) => (
                                  <li
                                    key={idx}
                                    className="text-white/90 text-sm flex items-start gap-2"
                                  >
                                    <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                                    {subject}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>


                      </div>

                    </div>
                  )}

                  {activeTab === "selection" && (
                    <div className="space-y-6">
                      <div className="bg-[#1c3879]/5 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-[#1c3879] mb-3">Eligibility</h4>
                        <p className="text-gray-600 leading-relaxed">
                          An excellent academic record in Higher Secondary examination of the (10+2) curriculum prescribed by 
                          the appropriate authority of the Government of Tamil Nadu or any other exam recognised as equivalent 
                          with Mathematics and Physics as two of the subjects of study. Only Indian Nationals are eligible to apply.
                        </p>
                      </div>

                      <div className="bg-[#e8505b]/5 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-[#e8505b] mb-3">Entrance Test</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Shortlisted candidates with an excellent academic record in Higher Secondary examination (based on 
                          Math and Physics HSC marks) will be called for a computer based entrance examination at the 
                          <strong> College Campus on 4th June 2025</strong>.
                        </p>
                        <ul className="mt-4 space-y-2 text-gray-600">
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            Duration: ONE hour
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            Multiple Choice Questions from Mathematics in +2 level
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-2 flex-shrink-0"></span>
                            Questions will be in English and Tamil
                          </li>
                        </ul>
                      </div>

                      <div className="bg-[#2e7d32]/5 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-[#2e7d32] mb-3">Counselling</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Counselling will be held for shortlisted candidates from the entrance examination from 
                          <strong> 4th June Afternoon onwards</strong>, at the college campus. This counselling is to identify 
                          the <strong>SPARK and COMMITMENT</strong> of the applicant to study 5-year integrated Masters programme 
                          (M.Sc SS/TCS/DS/CS) at PSG College of Technology.
                        </p>
                        <p className="text-gray-500 text-sm mt-3">
                          However, call for counselling does not confer any right of admission.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "alumni" && (
                    <div className="space-y-10">

                      {/* Alumni Speaks */}
                      <div>
                        <h4 className="text-xl font-bold text-[#1c3879] mb-6">Alumni Speaks</h4>

                        <div className="space-y-6">
                          {alumniSpeaks.map((a, i) => (
                            <div key={i} className="bg-gray-50 rounded-xl p-6 flex gap-4">

                              <Image
                                src={a.img}
                                alt={a.name}
                                width={80}
                                height={80}
                                className="rounded-full"
                              />

                              <div>
                                <h5 className="font-bold text-[#1c3879]">{a.name}</h5>
                                <p className="text-sm text-[#e8505b]">{a.role}</p>
                                <p className="text-xs text-gray-500 mb-2">{a.program}</p>

                                <p className="text-sm text-gray-600 leading-relaxed">
                                  {a.comment}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}

                  {activeTab === "achievements" && (
                    <div className="space-y-8">

                      <p className="text-center font-semibold text-[#7b2ff7]">Filter by:</p>

                      <div className="flex flex-wrap gap-3 justify-center">
                        {achievementCategories.map((cat, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveAchievement(cat)}
                            className={`px-6 py-2 border rounded-md text-sm font-medium transition ${
                              activeAchievement === cat
                                ? "bg-blue-700 text-white"
                                : "border-blue-600 text-blue-600 hover:bg-blue-50"
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>

                      <div className="grid md:grid-cols-4 gap-6">
                        {(activeAchievement === "All"
                          ? achievements
                          : achievements.filter(a => a.category === activeAchievement)
                        ).map((a, i) => (
                          <div key={i} className="bg-white rounded-xl shadow p-5 text-center">

                            <Image
                              src={a.img}
                              alt={a.name}
                              width={120}
                              height={120}
                              className="rounded-full mx-auto mb-4"
                            />

                            <h4 className="font-bold text-purple-700">{a.name}</h4>

                            <p className="text-sm text-gray-600 mt-2">{a.role}</p>
                          </div>
                        ))}
                      </div>

                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Notable Alumni Card */}
              <div className="bg-white rounded-2xl card-shadow p-6 text-center">

                <h4 className="text-xl font-bold text-[#1c3879] mb-4">
                  🎓 Notable Alumni
                </h4>

                <div className="relative bg-[#1c3879]/10 rounded-xl p-6 mb-4">

                  <button
                    onClick={prevAlumni}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#1c3879] text-white w-8 h-8 rounded-full"
                  >
                    ‹
                  </button>

                  <button
                    onClick={nextAlumni}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1c3879] text-white w-8 h-8 rounded-full"
                  >
                    ›
                  </button>

                  <div className="w-16 h-16 bg-white rounded-full overflow-hidden flex items-center justify-center mx-auto mb-3 border-2 border-white shadow-sm">
                  {notableAlumni[alumniIndex].image ? (
                    <img 
                      src={notableAlumni[alumniIndex].image} 
                      alt={notableAlumni[alumniIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-[#1c3879] font-bold text-xl">
                      {notableAlumni[alumniIndex].name.charAt(0)}
                    </span>
                  )}
                </div>

                  <h5 className="font-bold text-[#1c3879]">
                    {notableAlumni[alumniIndex].name}
                  </h5>

                  <p className="text-sm font-medium text-[#e8505b]">
                    {notableAlumni[alumniIndex].position}
                  </p>

                  <p className="text-xs text-gray-500">
                    {notableAlumni[alumniIndex].organization}
                  </p>
                </div>
              </div>

              <div className="important-dates">
                <h4 className="text-xl font-bold mb-6">Important Dates</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Last date for application submission</p>
                      <p className="text-white font-bold">23rd May 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Notification of shortlisted candidates for entrance test</p>
                      <p className="text-white font-bold">29th May 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Entrance test</p>
                      <p className="text-white font-bold">4th June 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Counselling in the campus</p>
                      <p className="text-white font-bold">4th June Afternoon - 7th June 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Notification of final selected candidates for admission</p>
                      <p className="text-white font-bold">10th June 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Last date for fee payment</p>
                      <p className="text-white font-bold">16th June 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CreditCard className="w-5 h-5 text-[#e8505b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/70 text-sm">Cost of application</p>
                      <p className="text-white font-bold">750 INR</p>
                    </div>
                  </li>
                </ul>
                <Link href="/apply" className="btn-secondary w-full justify-center mt-6">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-white rounded-2xl card-shadow p-6">
                <h4 className="text-lg font-bold text-[#1c3879] mb-4">How to apply?</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Application can be made only through online by entering all the particulars including marks along with 
                  online payment by Net banking/Credit card/Debit card/UPI. One application is sufficient for all the four 
                  programmes (SS/TCS/DS/CS) and preference of courses can be selected. All dates are subject to change 
                  based on HSC examination results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
