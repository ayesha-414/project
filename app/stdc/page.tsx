"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  Home, ChevronRight, BookOpen, FileText, CheckCircle,
  Users, Award, Calendar, CreditCard, ArrowRight, Play,
} from "lucide-react";

type ProgramKey = "ss" | "tcs" | "ds" | "cs" | "cf";

export default function STDCPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeProgram, setActiveProgram] = useState<ProgramKey>("ss");
  const [alumniIndex, setAlumniIndex] = useState(0);
  const [activeAchievement, setActiveAchievement] = useState("All");

  useEffect(() => {
    const interval = setInterval(() => {
      setAlumniIndex((prev) =>
        prev === notableAlumni.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const programs: { id: ProgramKey; name: string }[] = [
    { id: "ss",  name: "Software Systems" },
    { id: "tcs", name: "Theoretical Computer Science" },
    { id: "ds",  name: "Data Science" },
    { id: "cs",  name: "Cyber Security" },
    { id: "cf",  name: "Computational Finanace" },
  ];

  const notableAlumni = [
  {
    name: "Dr. Pravin Shankar",
    position: "Data Science Director",
    organization: "Meta/WhatsApp USA",
    image: "/notable_alumini_img/pravin_shankar.png",
  },
  {
    name: "Harini Seshadri",
    position: "Executive Director",
    organization: "Morgan Stanley, Bengaluru",
    image: "/notable_alumini_img/harini.jpeg",
  },
  {
    name: "Kasiviswanathan M",
    position: "Executive Director",
    organization: "JPMorgan Chase & Co, USA",
    image: "/notable_alumini_img/kasiviswanathan.jpeg",
  },
  {
    name: "Dr. Parameswaran R",
    position: "Research Scientist",
    organization: "Meta, San Francisco",
    image: "/notable_alumini_img/parameswaran.jpeg",
  },
  {
    name: "Gowri Sekar",
    position: "Managing Director",
    organization: "Goldman Sachs, Bengaluru",
    image: "/notable_alumini_img/gowrisekar.jpeg",
  },
  {
    name: "Laks Srini",
    position: "Co Founder & CTO",
    organization: "Zerodown, USA",
    image: "/notable_alumini_img/Laks_srini .jpeg",
  },
  {
    name: "Raghavan Sivakumar S (Veteran)",
    position: "Aviation Management",
    organization: "Indian Navy",
    image: "/notable_alumini_img/ragavan_sivakumar.jpeg",
  },
  {
    name: "R.K. Karthikeyan",
    position: "IPS",
    organization: "Ministry of Home Affairs, India",
    image: "/notable_alumini_img/RK.Karthikeyan.png",
  },
];


  const nextAlumni = () => setAlumniIndex((p) => (p + 1) % notableAlumni.length);
  const prevAlumni = () => setAlumniIndex((p) => (p === 0 ? notableAlumni.length - 1 : p - 1));

  const curriculum: Record<ProgramKey, Record<string, string[]>> = {
    ss: {
      "Semester I": ["Calculus","Professional Communication","Applied Physics","Digital Electronics and Logic Design","C Programming","Mathematical Foundations Lab","C Programming Lab","Applied Physics and Digital Electronics Lab","Personality And Character Development"],
      "Semester II": ["Discrete Mathematics","Linear Algebra","Data Structures and Algorithms","Object Oriented Programming","Computer Organization and Assembly Language Programming","Data Structures Lab","Object Computing Lab","Python Programming Lab","Personality And Character Development"],
      "Semester III": ["Probability and Statistics","Database Management System","Transform Techniques","Design and Analysis of Algorithms","Operating Systems","Design and Analysis of Algorithms Lab","UNIX/LINUX System Programming Lab","RDBMS Lab"],
      "Semester IV": ["Accounting and Financial Management","Computer Networks","Optimization Techniques","Theory Of Computing","Software Engineering and Agile Methodologies","Computer Networks Lab","Scientific Computing Lab","Full-Stack Development Lab"],
      "Semester V": ["Big Data Management Systems","Java Programming","Machine Learning","Principles Of Compiler Design","Professional Elective I","Big Data Management Systems Lab","Java Programming Lab","Machine Learning Lab"],
      "Semester VI": ["Cloud Computing","Artificial Intelligence","Distributed Computing","Data Mining and Visulization","Professional Elective II","Disrtibuted Computing Lab","Artificial Intelligence Lab","Mobile Application Development Lab"],
      "Semester VII": ["Project Work I"],
      "Semester VIII": ["Software Architecture and Design","Natural Language Processing and Deep Learning","Software Security","Professional Elective III","Open Elective I","Software Security Lab","Natural Language Processing and Deep Learning Lab","Capstone Project Lab"],
      "Semester IX": ["Digital Image Processing and Computer Vision","Software Product Management","Generative AI","Professional Elective IV","Open Elective II","Digital Image Processing and Computer Vision Lab","Embedded and IOT Lab","Generative AI Lab"],
      "Semester X": ["Project Work II"],
      "List of Electives": ["Big Data Analytics","Simulation and Modelling Techniques","Principles of Programming Languages","Data Engineering","Social Network Analysis","Graph Machine Learning","Advanced Systems Programming","Parallel Programming","Applied Graph Theory","Wireless Networks","UI/UX Design and Human-Computer Interaction","Reinforcement Learning","Quantum Computing","Software Quality Management","Blockchain and its Applications","Responsive AI"],
      "List of Open Electives": ["Principles of Management and Behavioural Science","Experiencing Entrepreneurship","Environmental Science and Green Computing","Game Theory","Computational Finance","Ethical Hacking","Machine Learning Operations","Computer Forensics","Advanced Algorithms","Constraint Logic Programming","Number Theorey and Cryptography","Open Source Intelligence","Stochastic Models","Data Compression","Data Privacy and Security","GPU Architecture and Programming"],
    },
    tcs: {
      "Semester I": [
        "Calculus and Its Applications",
        "English for Professional Skills",
        "Applied Physics",
        "Digital Electronics and Logical Design",
        "Problem Solving and C Programming",
        "Applied Physics and Digital Electronics Lab",
        "C Programming Lab",
        "Mathematics Laboratory",
        "Personality And Character Development"],
      "Semester II": [
        "Discrete Structures",
        "Abstract Algebra",
        "Data Structures and Algorithms",
        "Object Oriented Programming",
        "Transforms Techniques",
        "Data Structures Lab",
        "Object Oriented Programming Lab",
        "Python Programming Lab",
        "Personality And Character Development"],

      "Semester III": [
        "Probability And Statistics",
        "Linear Algebra",
        "Graph Theory",
        "Advanced Data Structures",
        "Computer Organization And Assembly Language Programming",
        "Statistical Computing And R Programming Lab",
        "Advanced Data Structures Lab",
        "Scientific Computing Lab"],
      "Semester IV": [
        "Stochastic Processes",
        "Computational Number Theory and Cryptography",
        "Optimization Techniques",
        "Operating Systems",
        "Database Management System",
        "Java programming Lab",
        "Operating Systems Lab",
        "RDBMS Lab"],
      "Semester V": [
        "Theory Of Computing",
        "Computational Networks",
        "Machine Learning",
        "Design And Analysis Of Algorithms",
        "Professional Elective - I",
        "Computer Networks Lab",
        "Machine Learning Lab",
        "Design And Analysis Of Algorithms Lab",
        ],
      "Semester VI": [
        "Principles of Compiler Design",
        "Artificial Intelligence",
        "Software Engineering",
        "deep Learning",
        "Professional Elective – II",
        "Compiler Design Lab",
        "Deep Learning",
        "Software Patterns Lab"],
      "Semester VII": [
        "Project Work 1 – Industry / Research Project"],
      "Semester VIII": [
        "Reinforcement Learning",
        "Advanced Algorithms",
        "Distributed Systems",
        "Professional Elective III",
        "Open Elective I",
        "Reinforcement Learning Lab",
        "Distributed Systems Lab",
        "Research Specialization Lab"
      ],
      "Semester IX": [
        "Game theory", 
        "Information Retrieval",
        "Simulation and Mathematical Modelling",
        "Professional Elective IV",
        "Open Elective II",
        "Information Retrieval Lab",
        "Simulation and Mathematical Modelling Lab",
        "Research Specialization Lab"
      ],
      "Semester X": ["Project Work 1 – Industry / Research Project "],
      "List of Electives": ["Mathematical Analysis",
        "Social Network Analysis", 
        "Computer Graphics and Visualization",
        "Random Graphs",
        "Data Compression",
        "Advanced Operating Systems",
        "Probabilistic Graphical Models",
        "Big Data And Modern Database Systems",
        "Epidemic Models",
        "Computational Complexity Theory",
        "Network Science",
        "Exact Algorithms For Hard Problems",
        "Wireless Networks",
        "Statistical Learning",
        "Large Scale Machine Learning",
        "Security Modelling And Analysis",
        "Quantum computing",
        "Generative AI",
        "Cloud Computing",
        "Algorithms with Randomness",
        "Approximation Algorithms",
        "Distributed Network Algorithms",
        "Theorectical Machine Learning",
        "Block Chain Technology",
        "Security in Computing",
        "Computer Forensics",
        "Deep Generative Models",
      "Post Quantum Cryptography"],
      "List of Open Electives":[
        "Computational Finance",
        "Computational Geometry",
        "Logic for Computer Science",
        "Internet of Things",
        "Digital Topology",
        "Computer Forensics",
        "Virtual and Augmented Reality",
        "Mobile Technology",
        "Digital Image Processing and Computer vision",
        "Algorithmic crypt Analysis",
        "Responsive AI",
        "Data Privacy",
        "Environmental Science and Green Computing",
        "Accounting and Financial Managament ",
        "Principles of Management and Behavioural Sciences",
        "Enterpreneuship",
      ],
    },
    ds: {

      "Semester I": [
        "Calculus and Its Applications",
        "Basics of Computational Biology",
        "Digital Electronics and Logic Design",
        "Problem Solving & C Programming",
        "Professional Communications",
        "Mathematical Foundations Lab",
        "C Programming Lab",
        "Digital Electronics Lab",
        "Personality and Character Development"
      ],

      "Semester II": [
        "Discrete Structures",
        "Abstract Algebra",
        "Data Structures and Algorithms",
        "Object Oriented Programming",
        "Theory of Probability",
        "Object Computing Lab",
        "Data Structures Lab",
        "Python Programming Lab",
        "Personality and Character Development"
      ],

      "Semester III": [
        "Applied Statistics",
        "Linear Algebra",
        "Graph Theory",
        "Advanced Data Structures",
        "Computer Organization and Assembly Language Programming",
        "Applied Statistics and R Programming Lab",
        "Advanced Data Structures Lab",
        "Scientific Computing Lab"
      ],

      "Semester IV": [
        "Optimization Techniques",
        "Database Management System",
        "Predictive Analytics",
        "Operating Systems",
        "Transforms and Its Applications",
        "Data Analytics & Visualisation Lab",
        "RDBMS Lab",
        "Operating Systems Lab"
      ],

      "Semester V": [
        "Design and Analysis of Algorithms",
        "Stochastic Models",
        "Computer Networks",
        "Machine Learning",
        "Professional Elective I",
        "Design and Analysis of Algorithms Lab",
        "Machine Learning Lab",
        "Java Programming Lab"
      ],

      "Semester VI": [
        "Cloud Computing",
        "Deep Learning",
        "Big Data & Modern Database Systems",
        "Artificial Intelligence",
        "Professional Elective II",
        "Cloud Computing Lab",
        "Big Data & Modern Database Systems Lab",
        "Deep Learning Lab"
      ],

      "Semester VII": [
        "Project Work I"
      ],

      "Semester VIII": [
        "Reinforcement Learning",
        "Natural Language Processing",
        "Generative AI Models",
        "Professional Elective III",
        "Open Elective I",
        "Reinforcement Learning Lab",
        "Natural Language Processing Lab",
        "Capstone Project"
      ],

      "Semester IX": [
        "Data Privacy and Security",
        "Responsible AI",
        "Information Retrieval",
        "Professional Elective IV",
        "Open Elective II",
        "Data Privacy and Security Lab",
        "Responsible AI Lab",
        "Information Retrieval Lab"
      ],

      "Semester X": [
        "Project Work II"
      ],
      "Professional Electives": [
        "Data Compression",
        "Digital Image Processing and Computer Vision",
        "Multimedia Analytics",
        "Computational Neuroscience",
        "Adversarial Machine Learning",
        "Marketing Analytics",
        "Computer Graphics",
        "Algorithms for Bioinformatics",
        "Simulation and Mathematical Modeling",
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
        "Data Mining",
        "Data Engineering"
      ],
      "Open Electives": [
        "Computational Finance",
        "Computational Geometry",
        "Principles of Management and Behavioural Sciences",
        "Entrepreneurship",
        "Information and Coding Theory",
        "Accounting and Financial Management",
        "Environmental Science and Green Computing",
        "Functional Analysis",
        "Advanced Integer Optimization",
        "Internet of Things",
        "Mobile Technology",
        "Virtual and Augmented Reality",
        "Ethical Hacking",
        "Computer Forensics",
        "Advanced Algorithms"
      ]
    },
    cs: {
      "Semester I": ["Calculus And Its Applications",
        "Professional Communication",
        "Applied Physics",
        "Digital Electronics and Logic Design",
        "C Programming",
        "Mathematical Foundations Lab",
        "C Programming Lab",
        "Applied Physics and Digital Electronics Laboratory",
        "Personality And Character Development"],
      "Semester II": [
        "Discrete Mathematics",
        "Algebra And Number Theory",
        "Data Structures",
        "Object Oriented Programming",
        "Computer Architecture",
        "Data Structures Laboratory",
        "Object Computing Laboratory",
        "Python Programming Laboratory",
        "Personality And Character Development"],
      "Semester III": [
        "Probability and Statistics",
        "Linear Algebra",
        "Microcontrollers And Embedded Systems",
        "Database Management System",
        "Design And Analysis Of Algorithms",
        "Embedded Systems Laboratory",
        "Design And Analysis Of Algorithms Laboratory",
        "RDBMS Laboratory"],
      "Semester IV": ["Optimization Techniques",
        "Computer Networks",
        "Foundations Of Cryptography",
        "Operating Systems",
        "Hardware Security",
        "Computer Networks Laboratory",
        "Java Programming Laboratory",
        "Operating Systems Laboratory"],
      "Semester V": ["Network Security",
        "Secure Software Development and Refactor",
        "Machine Learning",
        "Applied Cryptography",
        "Professional Elective I",
        "Secure Software Development Laboratory",
        "Machine Learning Laboratory",
        "Ethical Hacking & Malware Analysis Laboratory"],
      "Semester VI": ["Cloud Security",
        "Principles Of Compiler Design",
        "Data Mining",
        "Software Security and Exploitation",
        "Professional Elective II",
        "Data Mining Laboratory",
        "Mobile Application Development Laboratory",
      "Web Engineering Laboratory"],
      "Semester VII": ["Project Work I"],
      "Semester VIII": ["Natural Language Processing and Deep Learning",
        "Mobile Security",
        "Data Privacy",
        "Professional Elective III",
        "Open Elective I",
        "NLP and Deep learning Laboratory",
        "Mobile Security Laboratory",
        "Security Capstone Laboratory"],
      "Semester IX": ["Threat Hunting",
        "Generative AI",
        "Blockchain Technology",
        "Professional Elective IV",
        "Open Elective II",
        "Threat Hunting Laboratory",
        "Network and memory Froensics Laboratory",
        "Generative AI Laboratory"],
      "Semester X": ["Project Work II "],
      "List of Professional Electives": [
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
        "Cryptanalysis",
        "Internet Of Things",
        "Data Compression",
        "Big Data And Modern Database Systems",
        "Biometric Security",
        "Game Theory",
        "Digital Image Processing And Computer Vision",
        "Reinforcement Learning",
        "Distributed Computing",
        "Digital Forensics",
        "Identity and Access Management",],
        "List of Open Electives":[
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
        "Ethics and Cyber Law","Advanced Algorithms",
        "Advanced Algorithms",
        "Deep Generative Models",
        "Responsible AI"],
    },

    cf: {
      "Semester I": [
        "Business Economics",
        "Discrete Mathematical Structures",
        "Calculus",
        "Problem Solving & C Programming",
        "Professional Communication",
        "Mathematical Foundations Lab",
        "C Programming Lab",
        "Economic Analysis Lab",
        "Personality and Character Development"
      ],

      "Semester II": [
        "Financial and Management Accounting",
        "Theory of Probability",
        "Differential Equations",
        "Data Structures and Algorithms",
        "Object Oriented Programming",
        "Object Computing Lab",
        "Data Structures and Algorithms Lab",
        "Python Programming Lab",
        "Personality and Character Development"
      ],
      "Semester III": [
        "Corporate Finance & Capital Markets",
        "Statistics",
        "Linear Algebra",
        "Design and Analysis of Algorithms",
        "Digital System Architecture",
        "Statistical Computing & R Programming Lab",
        "Design and Analysis of Algorithms Lab",
        "Numerical Computing Lab"
      ],

      "Semester IV": [
        "Fundamentals of Mathematical Finance",
        "Optimization Techniques",
        "Stochastic Process for Finance",
        "Operating Systems",
        "Data Base Management Systems",
        "Operating Systems Lab",
        "RDBMS Lab",
        "Java Programming Lab"
      ],
      "Semester V": [
        "Financial Derivatives",
        "Time Series Analysis and Forecasting",
        "Computer Networks & Information Security",
        "Machine Learning",
        "Professional Elective I",
        "Time Series Analysis and Forecasting Lab",
        "Machine Learning Lab",
        "Computer Networks & Information Security Lab"
      ],

      "Semester VI": [
        "Portfolio Theory and Management",
        "Software Engineering and Agile Technologies",
        "Artificial Intelligence",
        "Big Data Management Systems",
        "Professional Elective II",
        "Portfolio Theory and Management Lab",
        "Artificial Intelligence Lab",
        "Big Data Management Lab"
      ],
      "Semester VII": [
        "Project Work I"
      ],
      "Semester VIII": [
        "Natural Language Processing and Deep Learning",
        "Stochastic Calculus for Finance",
        "Cloud Computing",
        "Professional Elective III",
        "Open Elective I",
        "Natural Language Processing and Deep Learning Lab",
        "Simulation Techniques and Computing Lab",
        "Capstone Project"
      ],

      "Semester IX": [
        "Financial Risk Management",
        "Market Microstructure & Algorithmic Trading",
        "Financial Technology",
        "Professional Elective IV",
        "Open Elective II",
        "Financial Risk Management Lab",
        "Algorithmic Trading Lab",
        "Block Chain Lab"
      ],

      "Semester X": [
        "Project Work II"
      ],
      "Professional Electives": [
        "Real Analysis",
        "Functional Analysis",
        "Transform Techniques",
        "Graph Theory",
        "Game Theory",
        "Advanced Algorithms",
        "Reinforcement Learning",
        "Responsible AI",
        "Information Retrieval",
        "Generative AI",
        "Parallel and Distributed Computing",
        "Quantum Computing",
        "Data Engineering",
        "Intermediate Microeconomics",
        "Social Network Analysis"
      ],
      "Open Electives": [
        "Big Data Analytics",
        "Marketing Analytics",
        "Entrepreneurship",
        "Digital Image Processing and Computer Vision",
        "Probabilistic Graphical Models",
        "Multimedia Analytics",
        "Survival Analytics",
        "Data Privacy",
        "Adversarial Machine Learning",
        "Data Compression",
        "Deep Generative Models",
        "Principles of Management & Behavioral Sciences",
        "Intermediate Macroeconomics"
      ]
    }
  };
//3
  const alumniSpeaks = [
    { name: "Andal Priya Darshini J", role: "Senior Software Engineer, Apple, USA", program: "M.Sc Theoretical Computer Science (2007-2012)", comment: "Looking back on my journey within the program, it's evident that it was a period of profound transformation. I gained invaluable knowledge and skills, but more importantly, I developed a deep-seated passion for continual growth and positive impact. As part of the pioneering group in the M.Sc. in Theoretical Computer Science, we felt a sense of duty to pave the way for future students. This responsibility has since translated into a commitment to innovation and pushing boundaries in all aspects of our lives..", img: "/stdc_alumni/Andalpriyadharshini.jpg" },
    { name: "Sai Pujitha Guthi",      role: "Senior Software Engineer, Netflix, Seattle, USA", program: "M.Sc Software Engineering (2009-2014)", comment: "Reflecting back on the impact of M.Sc Software engineering on my career, I was consistently impressed by the program's commitment to staying abreast of technological advancements, ensuring students are well-prepared for the industry. A standout aspect was the chance to engage in two immersive internships, providing invaluable real-world exposure. These experiences not only applied classroom knowledge but also cultivated essential practical skills pivotal for my career trajectory. Throughout the program, the faculty's steadfast support and mentorship were instrumental in my growth as a software engineer. Their guidance proved invaluable in navigating challenges and seizing opportunities. Furthermore, the alumni network has been a tremendous resource, offering ongoing support, mentorship, and networking opportunities. Connecting with accomplished alumni has been both inspiring and beneficial, providing valuable insights into career progression. I am profoundly grateful for the enriching experiences and skills gained through this program. It has undoubtedly equipped me with the tools needed to excel in the ever-evolving landscape of the tech-industry.",
       img: "/stdc_alumni/Saipujitha.jpg" },
    { name: "Rishab R Bafna",         role: "Vice President, JP Morgan Chase & Co, USA", program: "M.Sc Theoretical Computer Science (2012-2017)", comment: "As a proud alumnus of PSG Tech’s M.Sc. Theoretical Computer Science program, I can confidently say that the courses offer a strong foundation for a successful tech /research career. The integrated five-year structure provides a solid postgraduate degree, giving graduates an edge in placements. The program is well-regarded for its strong placement record, with many students securing roles in top companies. The course ensures students gain in-depth knowledge in emerging tech fields. The inclusion of industry internships further enhances practical exposure, making graduates industry-ready.",
       img: "/stdc_alumni/Rishab.jpg" },
    { name: "Niranjana R",            role: "Data & Applied Scientist, Microsoft, Hyderabad", program: "M.Sc Theoretical Computer Science (2015-2020)", comment: "The course gave me immense opportunities to learn the right skills and connect with the right people, be it researchers or industry professionals. The curriculum is carefully curated to provide the technical knowledge and foundation needed to tackle, adapt and grow in a rapidly evolving field like Data Science. The two internships gave me the perfect opportunity to explore both research and industry and helped me find my calling.",
       img: "/stdc_alumni/Niranjana.jpg" },
    {
      name:"Ramanathan P",
      role:"AI/ML Engineering  at Statestreet",
      program:"M.Sc Software Engineering (2012-2017)",
      comment:"The Msc Software Engineering program at PSG tech greatly helped me to lay a strong foundation in computer science. The key highlights of the course which help to stand out from others are the continuous adaption of curriculum catering to industry trend changes and 6-month internship providing unique early exposure to the industry. On top of all, the culture of pairing with cohorts for mini projects, organizing events, and developing a strong alumni network aids growth in all aspects and created memories that I will cherish forever.",
      img:"/stdc_alumni/ramanathan.jpeg",
    },
    {
      name:"Arunkumar J D",
      role:"Senior Software Engineer, Google, Bengaluru",
      program:"M.Sc Theoretical Computer Science (2014-2019)",
      comment:"The M.Sc TCS is a distinguished program that provides students with a strong foundation in computer science theory while nurturing their research aspirations. Its well-rounded curriculum balances academic rigor with practical application, making it an ideal choice for those planning to pursue careers in research or software engineering. Regularly updated to align with industry trends and technological advancements, the program ensures students remain ahead in the evolving tech landscape. With valuable internship opportunities, this course is a game-changer for those aiming to make a meaningful impact in the world of technology.",
      img:"/stdc_alumni/arunkumar_jd.jpeg",
    },
    {
      name:"Uday Lakshmi",
      role:"Software Engineer, Google, Bengaluru",
      program:"M.Sc Software Systems (2014-2019)",
      comment:"The M.Sc. Software Systems (AMCS) program at PSG Tech provided me with a strong foundation in problem-solving and practical software development. The hands-on learning approach and exceptional faculty played a crucial role in shaping my career and helping me achieve my goals",
      img:"/stdc_alumni/Udaylakshmi.jpg",
    },
    {
      name:"Monisha Pushpanathan",
      role:"Senior Data Engineer, Amazon, Canada",
      program:"M.Sc Software Engineering (2007-2012)",
      comment:"The 5-year Integrated MSc (Software Engineering) program provided me with a strong foundation in Computer Science fundamentals while allowing me to explore electives of my interest, including Advanced Databases and Distributed Computing. The two six-month internships gave me hands-on industry experience, and the program’s dedicated placement initiative helped me secure interviews with top tech companies, ultimately leading to a full-time offer. Beyond academics, participating in co-curricular clubs enriched my college experience, and organizing the annual tech symposium, “Login,” helped me develop valuable leadership and strategic planning skills. This program played a critical role in shaping my technical expertise and professional growth.",
      img:"/stdc_alumni/MonishaPushpanathan.jpg",
    },
    {
      name:"Karthik Ravi",
      role:"Software Development Engineer, Amazon, Chennai",
      program:"M.Sc Software Systems (2018-2023)",
      comment:"The MSc Integrated program at PSG College of Technology offers an excellent course structure with well-trained faculty, ensuring a strong foundation in both theoretical and practical aspects. With at least three projects per semester, students gain hands-on experience that makes transitioning into corporate life seamless. The well-equipped labs and 24/7 open-bay access foster innovation, allowing students to experiment, build projects, and explore new technologies. The rigorous training and industry-aligned curriculum provide outstanding placement opportunities, instilling confidence to excel in the professional world.",
      img:"/stdc_alumni/KarthikRavi.jpg",
    },
    {
      name:"Pradeep Kumar S",
      role:"Senior System Software Engineer, Nvidia, Bengaluru",
      program:"M.Sc Theoretical Computer Science (2015-2020)",
      comment:"The MSc TCS program is an excellent blend of mathematical and applied fundamentals, equipping students with the essential skills for a career in Computer Science. I am truly grateful for having pursued this course, as it provided me with the knowledge necessary for my current role. One of the standout features of the program is the 7th-semester internship, which offers students practical experience, allowing them to apply their learning and step out of their comfort zones.",
      img:"/stdc_alumni/Pradeepkumar.jpg",
    },
    {
      name:"Aravindan Elango",
      role:"Senior Engineering Manager, Adobe, Bengaluru",
      program:"M.Sc Software Engineering (2007-2012)",
      comment:"The MSc Software Engineering program at PSG Tech offers a unique blend of academic rigor and industry exposure, making graduates highly competitive in the software industry. With two six-month internships at leading tech companies, students gain invaluable hands-on experience, applying their knowledge to real-world challenges even before graduation. The curriculum is designed to foster strong technical expertise, problem-solving abilities, and teamwork, ensuring a smooth transition into professional roles. This program has consistently shaped skilled and industry-ready software engineers, making it an excellent choice for aspiring professionals.",
      img:"/stdc_alumni/AravindanIlango.jpg",
    },
    {
      name:"Varsha Parthasarathy",
      role:"Data Scientist, Boeing, Bengaluru",
      program:"M.Sc Data Science (2018-2023)",
      comment:"As an alumnus of the five-year integrated M.Sc. Data Science program at PSG College of Technology, I can confidently say that this course played a pivotal part in my career. The program’s well-structured curriculum, hands-on learning approach, and strong industry exposure gave me a significant edge in job interviews and professional settings. One of the standout aspects of this course is its perfect blend of data science and computer science fundamentals.",
      img:"/stdc_alumni/VarshaParthasarathy.jpg",
    },
    {
      name:"Karthik Baskar",
      role:"Software Engineering Manager, KLA Tencor India, Chennai",
      program:"M.Sc Software Engineering (2008-2013)",
      comment:"The course strikes an ideal balance between establishing a solid foundation for students and equipping them with the necessary skills to be immediately effective in the workplace. The college and department offer essential infrastructure and outstanding faculty to ensure high quality education. It has been a privilege to have taken this course at PSG Tech.",
      img:"/stdc_alumni/KarthikBaskar.jpg",
    },
    {
      name:"Mukund Elumalai",
      role:"Senior Analyst(Research), KLA Tencor India, Chennai",
      program:"M.Sc Data Science (2017-2022)",
      comment:"The Data Science course offered by the AMCS department at PSG Tech is a complete package. It features an ever-adapting and robust curriculum, practical learning opportunities through two six-month internships, qualified and supportive faculty, well-structured lab programs with sufficient resources, and a strong alumni network. This program has shaped my future, and I highly recommend it to students seeking a holistic education.",
      img:"/stdc_alumni/MukundElumalai.jpg",
    },
    {
      name:"Gopinath Sundaram",
      role:"Senior Engineering Manager, eBay, Washington, USA",
      program:"M.Sc Software Engineering (2006-2011)",
      comment:"MSc Software Engineering has been one of the best courses since its inception, helping to develop world-class talent who have become entrepreneurs, advisors, and engineers in numerous firms around the globe. The fundamentals taught in the course have been instrumental in my career to this point. The best part about the course and department is that they not only focus on academic classes but also help to develop well-rounded individuals who are ready to face the world. The two-semester internship is unique to this course and helps prepare students, establish connections, and gain exposure while studying. The set of courses, whose curriculum is regularly updated to meet industrial standards, has been shaping the future of multiple companies through the talents it has created.",
      img:"/stdc_alumni/gopinath.jpeg",
    },
    {
      name:"Dhanasree Rajamani",
      role:"Staff Software Engineer, Palo Alto Networks, USA",
      program:"M.Sc Software Engineering (2012-2017)",
      comment:"The MSc Software Engineering program at PSG College of Technology truly helped me connect the dots between theoretical knowledge and practical application. Each course was paired with hands-on projects, allowing me to implement the concepts I learned in real-world scenarios. Additionally, the opportunity to complete 2 six-month internships provided invaluable industry exposure, helping me gain firsthand experience and a deeper understanding of the software engineering field. The course curriculum is highly relevant to current industry standards and technologies, ensuring I built a strong technical foundation that has been crucial in my career. Beyond the academic aspect, the program's rich network of alumni has been a tremendous asset. The guidance and support from this network have played a significant role in my success during my Master’s studies in the USA, helping me navigate challenges and seize opportunities in the field.",
      img:"/stdc_alumni/dhanashree.jpeg",
    },
    {
      name:"Praveen Sivakumar",
      role:"Software Development Engineer, Walmart Global Tech India, Bengaluru",
      program:"M.Sc Theoretical Computer Science (2019-2024)",
      comment:"M.Sc. Theoretical Computer Science is a rigorous programme that offers a perfect blend of mathematics and computer science courses. This programme has equipped me with strong fundamentals to effectively tackle any problem related to computer science.",
      img:"/stdc_alumni/PraveenSivakumar.jpg",
    },
    {
      name:"Shruthi NK",
      role:"Technical Program Manager, Uber",
      program:"M.Sc Software Engineering (2002-2007)",
      comment:"The M.Sc. Integrated Software Systems course is a truly visionary program. The fundamentals and curriculum we studied 20 years ago still remain relevant today. The strong foundation it provided empowered me to reboot my career with confidence after a 7-year break. Everything about the course - its curriculum, structure, faculty, alumni network, and placements continues to be exceptional. It’s undoubtedly one of the most valuable experiences of my professional development.",
      img:"/stdc_alumni/shruthi.png",
    },
    {
      name:"Reeni Mathew",
      role:"Senior Principal Engineer, Arcesium",
      program:"M.Sc Software Engineering (2007-2012)",
      comment:"The M.Sc. Software Engineering course at PSG Tech went a long way in helping me strengthen my basics in all areas of Computer Science and Software Engineering. It was unique in the sense that it simultaneously laid emphasis on the core courses like Theoretical Computer Science and Mathematics as well as a plethora of electives. Such a format helps one become strong in the fundamentals as well as develop areas of interest in topics of one's interest. Hence I feel it is the best undergraduate course if one wishes to pursue higher (doctoral) studies in the field of Computer Science.",
      img:"/stdc_alumni/reeni.jpeg",
    },
    {
      name:"Asvika M",
      role:"Software Developer,PhonePe, Bengaluru",
      program:"M.Sc Cyber Security (2020-2025)",
      comment:"The MSc Cybersecurity program at the Department of AMCS has been pivotal in developing both my technical skills and personal growth. The hands-on approach, with extensive lab sessions and projects , bridges theory with real-world industry practices, preparing me for a successful career in cybersecurity. The faculty's guidance has been transformative, shaping me into a skilled cyber security professional and the individual I am today.",
      img:"/stdc_alumni/asvika.jpg",
    },
    {
      name:"Pugazhendhi M",
      role:"Senior Software Developer, Unbound Security",
      program:"M.Sc Cyber Security (2020-2025)",
      comment:"Pursuing my MSc in Cybersecurity in the AMCS department, with its inspiring faculty, helped me foster my passion for cybersecurity. The hands-on learning and internships provided invaluable industry exposure.",
      img:"/stdc_alumni/PugazhendhiM.jpg",
    },
    {
      name:"Vishvabala C S",
      role:"Associate Software Engineer, KLA Tencor India, Chennai",
      program:"M.Sc Cyber Security (2020-2025)",
      comment:"The MSc Cybersecurity program offers a dynamic blend of theory and hands-on experience, equipping students with the skills to navigate real-world security challenges. As Bruce Schneier aptly said, 'Security is a process, not a product', and this program fosters a mindset of continuous learning and adaptability. With cybersecurity at the heart of today’s digital landscape, this course serves as a strong foundation for careers across the tech spectrum—from software development to data science and beyond.",
      img:"/stdc_alumni/VishvabalaCS.jpg",
    },
    {
      name:"Meenakshi S Nair",
      role:"QR Analyst JPMorgan Chase & Co, Mumbai",
      program:"M.Sc Data Science (2020-2025)",
      comment:"The MSc Integrated Data Science program has been an incredible journey, exceeding my expectations at every step. The department’s proactive approach, expert faculty, and hands-on labs have helped me build a strong foundation in both theory and practice. My internship experience further provided invaluable exposure to the corporate world, reinforcing the real-world relevance of the curriculum and equipping me with both technical expertise and essential soft skills. This program has truly boosted my confidence and prepared me for a future in Data Science.",
      img:"/stdc_alumni/meenakshi.jpeg",
    },
    {
      name:"Shruthi S",
      role:"Senior ML Scientist at GoDaddy",
      program:"M.Sc Data Science (2015-2020)",
      comment:"The program offers a well-balanced blend of strong theoretical foundations and practical applications, effectively preparing students to tackle real-world challenges in AI, machine learning, and big data analytics. Its industry-aligned curriculum, combined with hands-on projects, ensures that students not only understand core concepts but also know how to apply them in real-world scenarios.The exposure to modern tools, collaborative learning environments, and problem-solving approaches further enhances the learning experience. In my current role, this program has significantly helped me approach problems more systematically, leverage data-driven insights, and build more efficient and scalable solutions. It has strengthened my ability to evaluate models critically, apply the right techniques for different use cases, and make informed technical decisions.Overall, the program equips students with the critical thinking, technical expertise, and adaptability required to excel in today’s data-driven and rapidly evolving technology landscape.",
      img:"/stdc_alumni/shruthi.jpeg",
    },
    {
      name:"Ashish K",
      role:"Senior Founding Engineer – Data & AI at DataGenie",
      program:"M.Sc Data Science (2019-2024)",
      comment:"The 5-year Integrated MSc in Data Science course played a pivotal role in shaping my career. It provided a strong learning environment with an exceptional peer group that constantly drove innovation, collaboration, and a shared passion to learn and build. The faculties were highly supportive and instrumental in strengthening my fundamentals. The department’s excellent placement network gave me opportunities to intern at companies like Goldman Sachs and PayPal, which significantly boosted my confidence and technical skills. This journey ultimately led me to my current role as Senior Founding Engineer – Data & AI at DataGenie, where I am involved in building a visionary product in the augmented analytics and AI space.",
      img:"/stdc_alumni/ashish.jpeg",
    },
    {
      name:"Vetrivel M D",
      role:"Cyber-Security Engineer at SLB",
      program:"MSc Cyber Security (2020-2025)",
      comment:"My MSc Cybersecurity journey at PSG College of Technology had a well-structured, industry-aligned syllabus that built a strong foundation. The faculty were highly supportive and focused on real understanding, not just theory. What stood out was the strong practical exposure - regular labs and hands-on projects actually prepared us for industry work. These experiences sharpened my real-world thinking and helped me approach problems with clarity and confidence. Most importantly, the alumni network is incredibly strong and supportive, always ready to guide, mentor, and open doors to opportunities.",
      img:"/stdc_alumni/vetrivel.jpeg",
    },
    {
      name:"Prethika G S",
      role:"Data and AI Consultant at Thorogood Associates.",
      program:"M.Sc Data Science",
      comment:"I am working as a Data and AI Consultant at Thorogood Associates.Below is what I feel the course helped me with, do let me know if there are any changes!Looking back, what makes the M.Sc Data Science program truly special is how it built us from the ground up. Before we specialised, the curriculum ensured we had a strong foundation, focusing on understanding the “why” behind every algorithm and technique, not just the “how.”The program was also incredibly hands-on. Projects were woven into every stage, and the complexity grew in a way that felt purposeful. By the time we reached advanced topics, we had the confidence and the tools to take them on.The internships were where everything clicked. Being exposed to real industry problems gave me a perspective that transformed how I approached my work. It became the perfect bridge between academic learning and professional practice.Beyond teaching me the concepts and tools of data science, the program shaped the way I think, helping me develop a problem-solving mindset, approach challenges from multiple angles, and think critically under pressure, skills I carry into everything I do.",
      img:"/stdc_alumni/prethika.jpeg",
    },
    {
      name:"Barath K",
      role:"Associate Cyber Security Engineer, Visa",
      program:"M.Sc. in Cyber Security",
      comment:"My M.Sc. in Cyber Security at PSG Tech provided a strong foundation in both theoretical and practical aspects of information security. The curriculum covered key domains such as network security, cryptography, ethical hacking, secure system design, and hands-on exposure to SIEM tools, which helped me understand real-time threat detection and monitoring.The program focused on practical learning through projects and case studies, which improved my ability to examine security incidents and create effective solutions. This approach significantly strengthened my analytical and problem-solving skills.The knowledge and experience I gained during the course helped me secure an internship at Visa as a Cybersecurity Intern, where I worked on real-time security operations. Based on my performance, I was subsequently offered a full-time role as an Associate Cyber Security Engineer.The curriculum at PSG Tech played a crucial role in preparing me for industry challenges and shaping my career in cybersecurity.",
      img:"/stdc_alumni/barathk.jpeg",
    }
  ];

  const achievementCategories = ["All","Entrepreneurs","PhD Holders","Higher Studies","Events","Sports & Culturals"];

  const achievements = [
    { name: "Karunya Sampath",        role: "Founder & CEO, Payoda Technology Inc., Coimbatore",           img: "/stdc_achievements/karunya.jpeg", category: "Entrepreneurs" },
    { name: "Vidya Devarajan",        role: "Director, Kovan Labs",                                        img: "/stdc_achievements/vidya_devarajan.jpeg", category: "Entrepreneurs" },
    { name: "Senthil Natarajan",      role: "Managing Director, Kovai Pazha Mudir Nilayam, Coimbatore",    img: "/stdc_achievements/senthil_natarajan.jpg", category: "Entrepreneurs" },
    { name: "Kuberan Marimuthu",      role: "CEO, Cypherd Wallet, USA",                                    img: "/stdc_achievements/kuberan.jpeg", category: "Entrepreneurs" },
    { name: "B. Ramprasath",          role: "Co-Founder and CTO, Foxsense Innovations, Coimbatore",        img: "/stdc_achievements/ramprasath.jpeg", category: "Entrepreneurs" },
    {
      name:"Rukaiya Dahodwala",
      role:"Honest Mocha Entrepreneur, Redmond, Washington, USA",
      img:"/stdc_achievements/rukaiya_dahodwala.jpeg",
      category:"Entrepreneurs",
    },
    {
      name:"Sethuraman T.A",
      role:"Co-Founder and CEO, Jungroo Learning, Bengaluru",
      img:"/stdc_achievements/sethuraman.jpeg",
      category:"Entrepreneurs",
    },
    {
      name:"Cibe Hariharan",
      role:"Co-Founder and CEO, Jungroo Learning, Bengaluru",
      img:"/stdc_achievements/cibe.jpeg",
      category:"Entrepreneurs",
    },
    //added
    {
      name:"Arvind Balasubramanian",
      role:"Head of Product at Candela Software Labs",
      img:"/stdc_achievements/arvindbalasunramanian.png",
      category:"Entrepreneurs",
    },
    //PhD Holders
    {
      name:"Dr. Aditi Mukherjee",
      role:"Research Scientist at Peraton Labs",
      img:"/stdc_achievements/aditi-mukherjee.jpg",
      category:"PhD Holders",
    },
    {
      name:"Dr. Sridhar Venkatesan",
      role:"Associate Professor, University of Florida",
      img:"/stdc_achievements/sridhar.jpeg",
      category:"PhD Holders",
    },
    {
      name:"Dr. Akshaya Mani",
      role:"Applied Researcher",
      img:"/stdc_achievements/akshaya m.jpeg",
      category:"PhD Holders",
    },
    {
      name:"Dr. Yashwanth Ramamurthi",
      role:"International Institute of Information Technology, Bangalore",
      img:"/stdc_achievements/yashwanth.jpeg",
      category:"PhD Holders",
    },
    {
      name:"Dr. Rathin Jeyeram",
      role:"Learning Planet Institute, Université Paris Cité",
      img:"/stdc_achievements/rathin.jpeg",
      category:"PhD Holders",
    },
    //Higher Studies
    {
      name:"Vaishali Surianarayanan",
      role:"Senior PhD candidate (Fully Funded) in Computer Science at UCSB",
      img:"/stdc_achievements/vaishali.jpeg",
      category:"PhD Holders",
    },
    {
      name:"Pavithra Elumalai",
      role:"PhD Scholar University of Göttingen and University of Tübingen",
      img:"/stdc_achievements/pavithra.png",
      category:"Higher Studies",
    },
    {
      name:"Surya Prasath",
      role:"Pursuing MS in Data Science, University of Maryland, USA",
      img:"/stdc_achievements/surya.jpeg",
      category:"Higher Studies",
    },
    {
      name:"Naman Bhargava",
      role:"MSc Data Science, Michigan university",
      img:"/stdc_achievements/naman.jpeg",
      category:"Higher Studies",
    },
    {
      name:"Ashwatha E S",
      role:"MSc Software Engineering, Northeastern University, Boston",
      img:"/stdc_achievements/ashwatha.png",
      category:"Higher Studies",
    },
    {
      name:"Charan K R",
      role:"MSc Computer Science, New York university",
      img:"/stdc_achievements/charan.png",
      category:"Higher Studies",
    },
    {
      name:"Gowtham R",
      role:"MSc Computer Science, Trinity College, Ireland",
      img:"/stdc_achievements/gowtham.jpeg",
      category:"Higher Studies",
    },
    {
      name:"Lakshminarayanan Ravi",
      role:"Pursuing MS in Computer Science Engineering, Northeastern University, USA",
      img:"/stdc_achievements/lakshminarayanan.jpeg",
      category:"Higher Studies",
    },
    {
      name:"Saket Vempaty",
      role:"Reasearch Scholar at IIIT Hyderabad",
      img:"/stdc_achievements/saket.jpeg",
      category:"Higher Studies",
    },
    {
      name:"N. Krishna",
      role:"Pursuing M.Sc Mathematics, Simon Fraser University, Canada",
      img:"/stdc_achievements/KrishnaN.jpg",
      category:"Higher Studies",
    },
    //added
    {
      name:"Sai Rakshith Somasundaram",
      role:"Ashoka University, Haryana",
      img:"/stdc_achievements/srs.png",
      category:"Higher Studies",
    },
    {
      name:"Arjun Ashok",
      role:"Mila - Quebec Artificial Intelligence Institute, Université de Montréal, Canada",
      img:"/stdc_achievements/arjun_ashok.png",
      category:"Higher Studies",
    },
    {
      name:"Sanjay Seetharaman",
      role:"The Institute of Mathematical Sciences,India",
      img:"/stdc_achievements/sanjay_seetharaman.png",
      category:"Higher Studies",
    },
    {
      name:"Kaushik Suresh",
      role:"Eindhoven University of Technology ,Netherlands",
      img:"/stdc_achievements/kaushik_suresh.png",
      category:"Higher Studies",
    },
    {
      name:"Varun S",
      role:"University of Southern Denmark",
      img:"/stdc_achievements/varun_s.png",
      category:"Higher Studies",
    },
    {
      name:"Krishnashree J B",
      role:"TIFR-School of Technology and Computer Science",
      img:"/stdc_achievements/krishnashree.png",
      category:"Higher Studies",
    },
    //Events
    { name: "MSc Cyber Security",     role: "TN Police Hackathon 2022, Bagged Third Prize",                img: "/stdc_achievements/PoliceHackethon.jpg", category: "Events" },
    {
      name:"MSc Cyber Security",
      role:"National Level Embedded Security CTF 2022, Top 20 among 500 teams",
      img:"/stdc_achievements/CTF2022.jpg",
      category:"Events",
    },
    {
      name:"MSc Cyber Security",
      role:"GIT X 2022, Best Innovation Prize",
      img:"/stdc_achievements/GITX.jpg",
      category:"Events",
    },
    {
      name:"MSc Cyber Security",
      role:"Caterpillar Hackethon 2021 and 2022, Finalists",
      img:"/stdc_achievements/Caterpillar.jpg",
      category:"Events",
    },
    {
      name:"M.Sc Software Systems",
      role:"Cookr Food Tech Hackethon 2024, Winners",
      img:"/stdc_achievements/Cookr.jpg",
      category:"Events",
    },
    {
      name:"Tamjid L",
      role:"Decoding 2022, First Prize",
      img:"/stdc_achievements/Tamjid.jpg",
      category:"Events",
    },
    {
      name:"Mahizha N.S",
      role:"Manas Codeathon 2023, Runner-Up",
      img:"/stdc_achievements/manas.jpeg",
      category:"Events",
    },
    {
      name:"MSc Data Science",
      role:"Bosch University Hackethon 2024, Winners",
      img:"/stdc_achievements/Bosch.jpg",
      category:"Events",
    },
    {
      name:"MSc Data Science",
      role:"Paper Presentation in 9th National Conference on Computer Vision Pattern Recognition Image Processing Graphics NCVPRIPG 2024 at IIST",
      img:"/stdc_achievements/9thNatConfe.jpg",
      category:"Events",
    },
    {
      name:"MSc Data Science",
      role:"Societe Generale Global Solutions Hackethon 2023, Finalists",
      img:"/stdc_achievements/SocieteGenre.jpg",
      category:"Events",
    },
    {
      name:"M.Sc Data Science",
      role:"Smart India Hackethon 2022, First Prize Rs.1,00,000",
      img:"/stdc_achievements/SmartIndia.jpg",
      category:"Events",
    },
    {
      name:"Varun Vaibhav A.S",
      role:"IIIT Hackethon on Healthcare 2023",
      img:"/stdc_achievements/IIIT.jpg",
      category:"Events",
    },
    {
      name:"Mukund Elumalai",
      role:"KLA Hackethon 2020, Cash Prize Rs.34,000",
      img:"/stdc_achievements/MukundElumalai.jpg",
      category:"Events",
    },
    {
      name:"Kirushikesh DB",
      role:"Filed a Patent on NLP during the Internship at IBM Research",
      img:"/stdc_achievements/Kirushikesh.jpg",
      category:"Events",
    },
    {
      name:"M.Sc Theoretical Computer Science",
      role:"Societe Generale Group Hackethon, Runner-up",
      img:"/stdc_achievements/societegenerale.png",
      category:"Events",
    },
    //added
    {
      name:"Rashmi N S",
      role:"Winner in HACK-A-THON 2024",
      img:"/stdc_achievements/rashmi_NS.png",
      category:"Events",
    },
    {
      name:"Swetha Muralidharan",
      role:"Runner-up in CATERPILLAR HACK-A-THON 2024",
      img:"/stdc_achievements/swetha_muralidharan.png",
      category:"Events",
    },
    {
      name:"Roshini. R",
      role:"Runner-up in VIRTUOSO – Ramanujan association of Mathematics",
      img:"/stdc_achievements/roshini_r.png",
      category:"Events",
    },
    {
      name:"B. Dayanitha & Deshna Shree M",
      role:"Winner in Error Exorcism (Coding Competition)",
      img:"/stdc_achievements/error.png",
      category:"Events",
    },
    {
      name:"Varun S",
      role:"Winner in Bosh FitFest GenAI Hackathon,Second runner-up in Data Science Student Championship by Machine Hack",
      img:"/stdc_achievements/varun_s.png",
      category:"Events",
    },
    {
      name:"Team Adengappa",
      role:"Runner-up in DSPARK 2026, a National Level Hackathon under the theme “Accelerating Innovation with AI”",
      img:"/stdc_achievements/adengappa.png",
      category:"Events",
    },
    {
      name:"Team Hacki-Dynamos",
      role:"Winner in Data Premier League",
      img:"/stdc_achievements/hacki.png",
      category:"Events",
    },
     {
      name:"Harshan M V",
      role:"Founder of youth run Model UN named Global Diplomatic Model United Nations",
      img:"/stdc_achievements/harshan.png",
      category:"Events",
    },
    //Sports & Culturals
    { name: "Karthick Ravi",          role: "Badminton State Rank Holder",                                 img: "/stdc_achievements/KarthikRavi.jpg", category: "Sports & Culturals" },
    { name: "Charankumar P",          role: "Guinness World Record holder — Football Touches with Alternating Feet in one minute’",             img: "/stdc_achievements/Guiness.jpg", category: "Sports & Culturals" },
    {
      name:"Sai Karthik",
      role:"Petrichor 23 Techno Cultural Feast, IIT Palakkad - Breaking Band, 2nd Position",
      img:"/stdc_achievements/Petrichor.jpg",
      category:"Sports & Culturals",
    },
    {
      name:"Alagu Prakalya",
      role:"AI Tamilnadu Kalambagam - Talk on ‘Building GPT models of Tamil’",
      img:"/stdc_achievements/Kalambagam.jpg",
      category:"Sports & Culturals",
    },
    { name: "Lalit Kishore",          role: "Tamilnadu Archery Championship, Gold Medallist",              img: "/stdc_achievements/Archery.jpg", category: "Sports & Culturals" },
    
    //added
    {
      name:"Vishva Vaisnavi N",
      role:"Won Dr. S. R. K. Prasad Memorial,Alumni Trophy for Hurdles conducted by CIT.",
      img:"/stdc_achievements/visvavaisnavi.png",
      category:"Sports & Culturals",
    },{
      name:"Karthic Sreenivas A",
      role:"Winner in Anna University Zonals 2024- Cricket & Anna University Interzonals 2024- Cricket ",
      img:"/stdc_achievements/karthicsreenivas.png",
      category:"Sports & Culturals",
    },{
      name:"M.Sc. Data Science",
      role:"Runner-up in 4x100 Relay",
      img:"/stdc_achievements/relay.png",
      category:"Sports & Culturals",
    },
  ];
  const innerBlock = "bg-[#f0f5fb] border border-[#d0e2f0] rounded-xl p-4 sm:p-5";

  return (
    <main className="bg-[#f4f7fb] min-h-screen">
      <Header />

      {/* ── Hero ── */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0ea5e9] overflow-hidden">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                Five Year Integrated M.Sc{" "}
                <span className="text-[#7dd3fc]">Programmes</span>
              </h1>
              <p className="text-white/80 text-base sm:text-lg md:text-xl">
                Department of Applied Mathematics and Computational Sciences
              </p>
              <div className="flex items-center gap-2 mt-4 sm:mt-6 text-white/70 text-sm sm:text-base">
                <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
                  <Home className="w-4 h-4" /> Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Programme Details</span>
              </div>
            </div>

            <div className="relative mt-6 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden p-2 sm:p-3 hover:scale-105 transition-all duration-500">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/UHYVJFjMuy4"
                    title="PSG Program Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-400 blur-3xl opacity-20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-10 sm:py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

            {/* ── Main card ── */}
            <div className="lg:col-span-2 space-y-0">
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-[#dce8f5]">

                {/* Programme selector */}
                <div className="p-4 sm:p-6 border-b border-[#dce8f5] bg-[#f0f6ff]">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a8a]">
                    Five Year Integrated M.Sc Programmes
                  </h2>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {programs.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setActiveProgram(p.id)}
                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base md:text-xl font-semibold transition-all ${
                          activeProgram === p.id
                            ? "bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] text-white shadow-md"
                            : "bg-white text-[#395A7F] border border-[#a3cae9] hover:bg-[#e8f4ff]"
                        }`}
                      >
                        {p.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab nav */}
                <div className="flex flex-wrap gap-2 p-3 sm:p-4 bg-[#f7faff] border-b border-[#dce8f5]">
                  {[
                    { id: "overview",     label: "Overview",          icon: BookOpen    },
                    { id: "curriculum",   label: "Curriculum",        icon: FileText    },
                    { id: "selection",    label: "Selection Process",  icon: CheckCircle },
                    { id: "alumni",       label: "Alumni Speaks",     icon: Users       },
                    { id: "achievements", label: "Achievements",      icon: Award       },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm md:text-base font-semibold transition-all ${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] text-white shadow-md"
                          : "bg-white text-[#395A7F] border border-[#a3cae9] hover:bg-[#e8f4ff]"
                      }`}
                    >
                      <tab.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                <div className="p-4 sm:p-6 text-[#1e293b]">

                  {/* OVERVIEW */}
                  {activeTab === "overview" && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-[#1e3a8a] mb-3">About the Department</h4>
                        <p className="text-grey-900 leading-relaxed text-base sm:text-lg md:text-xl text-justify">
                          The Department of Applied Mathematics and Computational Sciences comprises of dedicated faculty members who are undoubtedly the assets worthy of mention. The department is known for its discipline and for the importance it gives to the overall development of students in grooming them towards becoming good software professionals, research scientists and data analysts. The department has its own library with the latest books, national and international journals and magazines. The computer centre is well equipped with the most recent hardware and software. The department has vibrant research culture to keep in touch with the ever-growing technologies.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-[#1e3a8a] mb-3">About the Programmes</h4>
                        <div className="space-y-4 text-justify">
                          {[
                            { color: "#1671e8", label: "M.Sc. Software Systems", desc: "was started in the year 1997 for the first time in the country and well received by leading software industries across the globe. The programme has been designed to meet the challenging needs of the industry. Renamed as Software Systems since 2014." },
                            { color: "#f55862", label: "M.Sc. Theoretical Computer Science", desc: "is yet another innovative programme introduced in 2007. Designed to augment human resources for the R&D divisions of software industries, it merges Mathematics and Computer Science." },
                            { color: "#23a753", label: "M.Sc Data Science", desc: "started in 2015, the first of its kind in India. Provides rigorous training on scalable techniques for big data analysis, machine learning, optimization, and artificial intelligence." },
                            { color: "#ed8702", label: "M.Sc. Cyber Security", desc: "The first of its kind in India, prepares students with the technical knowledge and skills needed to protect and defend computer systems and networks with strong internship programs." },
                            { color: "#91388f", label: "M.Sc. Computational Finance", desc: "Focuses on quantitative methods, financial modeling, and data-driven decision-making in modern finance.Equips students with skills in risk analysis, algorithmic trading, and financial analytics." },
                          ].map((item, i) => (
                            <div key={i} className={innerBlock}>
                              <h5 className="text-base sm:text-lg md:text-xl font-bold mb-2" style={{ color: item.color }}>{item.label}</h5>
                              <p className="text-base sm:text-lg md:text-xl text-grey-900 text-justify leading-relaxed">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className={innerBlock}>
                        <h4 className="text-xl sm:text-2xl font-bold text-[#1e3a8a] mb-3">Programme Highlights</h4>
                        <ul className="space-y-2 text-grey-900 text-base sm:text-lg md:text-xl text-justify">
                          {[
                            "Two semesters (7th and 10th) rigorous internships in reputed industries and top-notch institutions",
                            "Unique feature for the success of the programmes",
                            "Excellent placement record with top companies globally",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-2 h-2 bg-[#e8505b] rounded-full mt-1.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* CURRICULUM */}
                  {activeTab === "curriculum" && (
                    <div className="space-y-8">
                      <div className={innerBlock}>
                        <h4 className="text-xl sm:text-2xl font-bold text-[#1e3a8a] mb-2">Programme Structure</h4>
                        <p className="text-grey-900 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
                          All five programmes follow a meticulously planned curriculum based on Choice Based Credit System, updated regularly to meet the challenging requirements of the industry.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-[#1e3a8a] mb-4">
                          {programs.find((p) => p.id === activeProgram)?.name} – Semester Wise Curriculum
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {Object.entries(curriculum[activeProgram]).map(([semester, subjects]) => (
                            <div key={semester} className="bg-[#f0f6ff] border border-[#c3ddf5] rounded-2xl p-4 sm:p-5 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                              <h5 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1e3a8a] mb-3">{semester}</h5>
                              <ul className="space-y-1.5">
                                {subjects.map((subject, idx) => (
                                  <li key={idx} className="text-[#334155] text-base sm:text-lg md:text-xl flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full mt-1.5 flex-shrink-0" />
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

                  {/* SELECTION */}
                  {activeTab === "selection" && (
                    <div className="space-y-6 text-justify">
                      {[
                        { color: "#1e3a8a", title: "Eligibility", body: "An excellent academic record in Higher Secondary examination of the (10+2) curriculum with Mathematics and Physics as two of the subjects of study.", bullets: [] },
                        { color: "#e8505b", title: "Entrance Test", body: "Shortlisted candidates will be called for a computer based entrance examination at the College Campus on 3rd June 2026 , Wednesday.", bullets: ["Duration: ONE hour.", "Multiple Choice Questions in +2 level Mathematics.", "Questions will be in English and Tamil.", "There will be negative marking for the wrong answer.", "Topics for Entrance examination will be Matrices and Determinants, Functions and Graphs, Algebra,Trigonometry, Differential Calculus, Integral Calculus, Differential Equations, Analytical Geometry, Vector Algebra and Probability"] },
                        { color: "#15803d", title: "Counselling", body: "Counselling will be held for shortlisted candidates from 3rd June 2026 , Wednesday Afternoon onwards, at the college campus, to identify the SPARK and COMMITMENT of the applicant. Applicants can choose preference of programms at the time of counselling.", bullets: [] },
                      ].map((block, i) => (
                        <div key={i} className={innerBlock}>
                          <h4 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: block.color }}>{block.title}</h4>
                          <p className="text-grey-900 text-base sm:text-lg md:text-xl leading-relaxed">{block.body}</p>
                          {block.bullets.length > 0 && (
                            <ul className="mt-3 space-y-1.5">
                              {block.bullets.map((b, bi) => (
                                <li key={bi} className="flex items-start gap-2 text-grey-900 text-base sm:text-lg md:text-xl">
                                  <span className="w-1.5 h-1.5 bg-[#e8505b] rounded-full mt-1.5 flex-shrink-0" />
                                  {b}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* ALUMNI SPEAKS */}
                  {activeTab === "alumni" && (
                    <div className="space-y-6">
                      {alumniSpeaks.map((a, i) => (
                        <div key={i} className="program-card">
                          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                            <div className="flex-shrink-0">
                              <img
                                src={a.img}
                                alt={a.name}
                                className="w-16 h-16 sm:w-[90px] sm:h-[90px] object-cover rounded-md border-2 border-[#a3cae9]"
                              />
                            </div>
                            <div className="flex-1">
                              <h5 className="font-bold text-[#1a1a2e] text-xl sm:text-2xl">{a.name}</h5>
                              <p className="text-[#1c3879] text-base sm:text-lg font-medium">{a.role}</p>
                              <p className="text-[#e8505b] text-base sm:text-lg">{a.program}</p>
                              <p className="text-gray-900 text-base sm:text-lg md:text-xl mt-3 leading-relaxed text-justify">{a.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* ACHIEVEMENTS */}
                  {activeTab === "achievements" && (
                    <div className="space-y-6">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {achievementCategories.map((cat, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveAchievement(cat)}
                            className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
                              activeAchievement === cat
                                ? "bg-[#1e3a8a] text-white border-[#1e3a8a]"
                                : "bg-white text-[#395A7F] border-[#a3cae9] hover:bg-[#e8f4ff]"
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                        {(activeAchievement === "All"
                          ? achievements
                          : achievements.filter((a) => a.category === activeAchievement)
                        ).map((a, i) => (
                          <div key={i} className="bg-[#f0f6ff] border border-[#c3ddf5] rounded-2xl p-4 sm:p-6 text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col items-center">
                            <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-3 sm:mb-4">
                              <Image
                                src={a.img}
                                alt={a.name}
                                fill
                                sizes="128px"
                                className="object-cover rounded-full border-2 border-[#a3cae9]"
                              />
                            </div>
                            <h4 className="text-base sm:text-lg font-bold text-[#1e3a8a] leading-tight">{a.name}</h4>
                            <p className="text-sm sm:text-base text-grey-900 mt-2 leading-relaxed">{a.role}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-6">
              {/* Notable Alumni */}
              <div className="bg-white rounded-2xl shadow-md border border-[#dce8f5] p-4 sm:p-6 text-center">
                <h4 className="text-xl sm:text-2xl font-bold text-[#1e3a8a] mb-4">🎓 Notable Alumni</h4>
                <div className="relative bg-[#f0f6ff] rounded-xl p-5 sm:p-6">
                  <button onClick={prevAlumni} className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#1e3a8a] text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-lg font-bold hover:bg-[#395A7F] transition-colors">‹</button>
                  <button onClick={nextAlumni} className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1e3a8a] text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-lg font-bold hover:bg-[#395A7F] transition-colors">›</button>

                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden">
                    <img src={notableAlumni[alumniIndex].image} alt={notableAlumni[alumniIndex].name} className="w-full h-full object-cover rounded-full" />
                  </div>

                  <h5 className="text-lg sm:text-xl font-bold text-[#1e3a8a] leading-tight">
                    {notableAlumni[alumniIndex].name.includes("(Veteran)") ? (
                      <>
                        {notableAlumni[alumniIndex].name.replace(" (Veteran)", "")}
                        <br />
                        <span className="text-[#1e3a8a] font-bold">(Veteran)</span>
                      </>
                    ) : (
                      notableAlumni[alumniIndex].name
                    )}
                  </h5>
                  <p className="text-base sm:text-lg font-medium text-[#e8505b] mt-1">{notableAlumni[alumniIndex].position}</p>
                  <p className="text-base sm:text-lg text-[#64748b] mt-0.5">{notableAlumni[alumniIndex].organization}</p>
                </div>

                <div className="flex justify-center gap-1.5 mt-3">
                  {notableAlumni.map((_, i) => (
                    <button key={i} onClick={() => setAlumniIndex(i)} className={`w-2 h-2 rounded-full transition-all ${i === alumniIndex ? "bg-[#1e3a8a] w-4" : "bg-[#a3cae9]"}`} />
                  ))}
                </div>
              </div>

              {/* Important Dates */}
              <div className="bg-gradient-to-br from-[#1e3a8a] to-[#0ea5e9] text-white rounded-3xl p-4 sm:p-6 shadow-xl">
                <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Important Dates</h4>
                <ul className="space-y-4">
                  {[
                    { label: "Last date for application submission", date: "23rd May 2026 , Saturday", icon: Calendar },
                    { label: "Notification of shortlisted candidates", date: "29th May 2026 , Friday", icon: Calendar },
                    { label: "Entrance test", date: "3rd June 2026 , Wednesday", icon: Calendar },
                    { label: "Counselling in the campus", date: "3rd June Afternoon,Wednesday – 6th June 2026 , Saturday", icon: Calendar },
                    { label: "Notification of final selected candidates", date: "9th June 2026 , Tuesday", icon: Calendar },
                    { label: "Last date for fee payment", date: "16th June 2026 , Tuesday", icon: Calendar },
                    { label: "Cost of application", date: "750 INR", icon: CreditCard },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-[#7dd3fc] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/75 text-base sm:text-xl font-bold">{item.label}</p>
                        <p className="text-white font-bold text-sm sm:text-lg">{item.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link href="https://apply.psgtech.ac.in/" className="mt-6 flex items-center justify-center gap-2 bg-white text-[#1e3a8a] font-bold px-6 py-3 rounded-xl hover:bg-[#e8f4ff] transition-colors w-full">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* How to apply */}
              <div className="bg-white rounded-2xl shadow-md border border-[#dce8f5] p-4 sm:p-6">
                <h4 className="text-xl sm:text-2xl font-bold text-[#1e3a8a] mb-3">How to apply?</h4>
                <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed text-justify">
                  Application can be made only through online by entering all the particulars including marks along with online payment by Net banking / Credit card / Debit card / UPI. <strong>One application is sufficient for all five programmes (SS / TCS / DS / CS / CF)</strong> and preference of programme can be expressed at the time of counselling. All dates are subject to change based on HSC examination results.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Top Recruiters */}
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-10 mt-10 sm:mt-12">
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-[#1c3879] text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight">Top Recruiters</h2>
              <div className="w-20 h-1.5 bg-[#1c3879] mt-2 rounded-full"></div>
            </div>
            <div className="w-full flex justify-center items-center py-4 sm:py-8">
              <div className="max-w-[1000px] w-full px-4">
                <img src="/toprecruiters.png" alt="Top Recruiters" className="mx-auto h-auto object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Facilities */}
        <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-10 mt-8 sm:mt-12 mb-12 sm:mb-16">
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-[#1c3879] text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight">Facilities</h2>
              <div className="w-20 h-1.5 bg-[#1c3879] mt-2 rounded-full"></div>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md border border-gray-100">
                <iframe
                  src="https://www.youtube.com/embed/34uCuXp51I0?autoplay=0&rel=0"
                  title="Facilities Video"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <p className="text-gray-900 mt-4 sm:mt-6 font-medium italic text-center text-sm sm:text-base">
              Applied Mathematics and Computational Sciences Laboratories
            </p>
          </div>
        </section>

      </section>

      <Footer />
    </main>
  );
}