// InGage Careers Experience - Master Data (Source of Truth)
export const careersHeroData = {
  badge: "CAREERS AT INGAGE",
  headline: "BUILD YOUR FUTURE WITH INGAGE",
  subheadline: "WHERE TECHNOLOGY MEETS OPPORTUNITY",
  description:
    "Join a passionate team working across immersive technology, AR, VR, AI, IoT, digital twins, and emerging technologies. Build practical solutions that transform engineering education and enterprise computing.",
  stats: [
    { value: "150+", label: "Engineers & Creators" },
    { value: "Chennai HQ", label: "Perungudi Innovation Hub" },
    { value: "4", label: "Specialized R&D Labs" },
    { value: "100%", label: "Hands-on Innovation" },
  ],
};

export const careersIntroData = {
  badge: "WHAT'S NEXT FOR YOU",
  heading: "EXPLORE CAREERS AT INGAGE",
  description:
    "What's next for your career? At InGage, you'll work alongside people building practical experiences with emerging technologies. From immersive learning and enterprise solutions to AI, IoT and digital experiences, every project is an opportunity to learn, create and make an impact.",
};

export const careerCategories = [
  {
    id: "graduates",
    number: "01",
    badge: "EARLY CAREER",
    title: "Graduates",
    description:
      "Accelerate your professional trajectory with structured mentoring, hands-on production codebases, and direct involvement in cutting-edge spatial computing and AI projects.",
    accentColor: "blue",
    cta: "Explore Graduate Roles",
    filterKey: "Graduate",
    image: "/assets/careers/pathway-graduates.jpg",
  },
  {
    id: "experienced",
    number: "02",
    badge: "EXPERIENCED ROLES",
    title: "Experienced Professionals",
    description:
      "Tackle complex technical challenges across distributed IoT gateways, computer vision pipelines, Unreal/Unity engines, and scalable educational cloud platforms.",
    accentColor: "green",
    cta: "Explore Experienced Roles",
    filterKey: "Experienced",
    image: "/assets/careers/pathway-experienced.jpg",
  },
  {
    id: "internships",
    number: "03",
    badge: "INTERNSHIPS & FELLOWSHIPS",
    title: "Students / Internships",
    description:
      "Gain real-world industry experience through semester-long internships, guided capstone projects, and direct collaboration with senior technical architects.",
    accentColor: "navy",
    cta: "Explore Internships",
    filterKey: "Internship",
    image: "/assets/careers/pathway-internships.jpg",
  },
  {
    id: "locations",
    number: "04",
    badge: "GLOBAL WORKPLACES",
    title: "Explore by Location",
    description:
      "Discover on-site opportunities at our Chennai Headquarters (Perungudi), campus research nodes across India, and flexible hybrid collaboration models.",
    accentColor: "charcoal",
    cta: "View Locations",
    filterKey: "Chennai",
    image: "/assets/careers/pathway-locations.jpg",
  },
];

export const lifeAtIngage = [
  {
    id: "culture",
    title: "PEOPLE & CULTURE",
    tag: "INCLUSIVE & PURPOSE-DRIVEN",
    description:
      "A culture rooted in curiosity, mutual respect, and high autonomy. We value makers who question assumptions, experiment boldly, and take pride in craft.",
    image: "/assets/hero/ingage-1.jpg",
  },
  {
    id: "growth",
    title: "LEARNING & GROWTH",
    tag: "CONTINUOUS UPSKILLING",
    description:
      "Weekly technical deep dives, sponsored certifications from Google, IBM, and Oracle, patent filing support, and access to state-of-the-art hardware sandboxes.",
    image: "/assets/hero/ingage-2.jpg",
  },
  {
    id: "innovation",
    title: "COLLABORATION & INNOVATION",
    tag: "CROSS-DISCIPLINARY CRAFT",
    description:
      "Engineers, 3D artists, hardware specialists, and instructional designers collaborating closely to turn visionary concepts into scalable reality.",
    image: "/assets/hero/ingage-3.jpg",
  },
];

export const whyIngagePoints = [
  {
    number: "01",
    title: "WORK WITH EMERGING TECHNOLOGY",
    desc: "Direct daily access to enterprise VR/AR headsets, NVIDIA GPU clusters, autonomous drone test cages, and industrial IoT testbenches.",
  },
  {
    number: "02",
    title: "BUILD REAL-WORLD SOLUTIONS",
    desc: "Create impactful educational systems and industrial digital twins used by 5,00,000+ students and leading engineering enterprises across India.",
  },
  {
    number: "03",
    title: "CONTINUOUS LEARNING",
    desc: "Learn through live masterclasses, hackathon mentoring, and collaborative research with tier-1 academic institutions and tech leaders.",
  },
  {
    number: "04",
    title: "COLLABORATIVE CULTURE",
    desc: "Work in flat, agile squads where every voice shapes the architectural roadmap and good ideas always take precedence.",
  },
  {
    number: "05",
    title: "GROW YOUR CAREER",
    desc: "Rapid merit-based career progression, dual track technical and leadership pathways, and continuous mentorship from industry veterans.",
  },
  {
    number: "06",
    title: "MAKE AN IMPACT",
    desc: "Democratize high-end technology education, bridge the university-industry skills gap, and shape India's next generation of engineers.",
  },
];

export const technologiesList = [
  { name: "AR", label: "Augmented Reality", desc: "Interactive spatial overlays & industrial HUDs" },
  { name: "VR", label: "Virtual Reality", desc: "High-immersion physics simulations & training bays" },
  { name: "MR", label: "Mixed Reality", desc: "Holographic interaction with physical environments" },
  { name: "AI", label: "Artificial Intelligence", desc: "Computer vision, NLP pipelines & predictive models" },
  { name: "IoT", label: "Internet of Things", desc: "Connected sensor telemetry & edge gateways" },
  { name: "IIoT", label: "Industrial IoT", desc: "SCADA integration & smart factory communication" },
  { name: "3D", label: "3D Spatial Modeling", desc: "High-fidelity photogrammetry & asset rendering" },
  { name: "DIGITAL TWINS", label: "Digital Twins", desc: "Real-time bi-directional physical system replicas" },
  { name: "METAVERSE", label: "Spatial Worlds", desc: "Multi-user networked collaborative simulation suites" },
  { name: "5G", label: "Ultra-Low Latency", desc: "Edge tele-operations & high-throughput streaming" },
  { name: "EMBEDDED SYSTEMS", label: "Embedded Hardware", desc: "ARM Cortex firmware, RTOS & custom PCB design" },
];

export const opportunitiesList = [
  {
    id: "ar-vr-dev",
    title: "AR/VR Developer",
    department: "Immersive Technology",
    location: "Chennai (HQ)",
    type: "Full-time",
    level: "Experienced",
    experience: "2–5 Years",
    about:
      "We are looking for an AR/VR Developer to build next-generation spatial computing simulations, interactive educational labs, and enterprise digital twin applications using Unity/Unreal Engine.",
    responsibilities: [
      "Design, build, and optimize immersive AR/VR applications for Meta Quest, HTC Vive, and Apple Vision Pro.",
      "Collaborate with 3D artists and instructional designers to integrate physics-based interactions and spatial audio.",
      "Optimize rendering pipelines for high frame rates and zero motion latency on standalone VR headsets.",
      "Integrate live hardware telemetry (MQTT/WebSockets) into 3D spatial digital twins.",
    ],
    requirements: [
      "Strong proficiency in C# and Unity 3D or C++ and Unreal Engine 5.",
      "Solid understanding of 3D math, spatial coordinate systems, shaders, and physics engines.",
      "Experience with OpenXR SDK, WebXR, and VR controller interaction toolkits.",
      "B.E./B.Tech in Computer Science, Game Design, or equivalent practical experience.",
    ],
    skills: ["Unity 3D", "Unreal Engine 5", "C#", "OpenXR", "3D Math", "Shaders", "Spatial Audio"],
  },
  {
    id: "unity-dev",
    title: "Unity Developer",
    department: "Technology",
    location: "Chennai (HQ)",
    type: "Full-time",
    level: "Graduate / Experienced",
    experience: "1–4 Years",
    about:
      "Join our core technology team to architect interactive educational simulations, gamified learning modules, and modular 3D simulation scenes deployed in university CoE labs.",
    responsibilities: [
      "Implement clean, modular game logic and simulation state machines in Unity C#.",
      "Profile and optimize memory usage, draw calls, and lighting for cross-platform desktop and mobile delivery.",
      "Build reusable UI toolkits for technical experiments and interactive lab equipment.",
      "Write automated unit tests and participate in active peer code reviews.",
    ],
    requirements: [
      "Strong command of C# object-oriented programming and Unity component architecture.",
      "Experience with Unity UI Toolkit, animations, and Particle Systems.",
      "Familiarity with version control (Git) and CI/CD asset build pipelines.",
      "Passion for creating smooth, responsive, user-friendly interactive experiences.",
    ],
    skills: ["C#", "Unity Engine", "Git", "UI Toolkit", "Profiler", "Cross-Platform Deployment"],
  },
  {
    id: "3d-designer",
    title: "3D Spatial Designer",
    department: "Creative Technology",
    location: "Chennai (HQ)",
    type: "Full-time",
    level: "Experienced",
    experience: "2–4 Years",
    about:
      "Create high-precision 3D models, photorealistic materials, and optimized industrial CAD assets for engineering lab simulations and spatial digital twins.",
    responsibilities: [
      "Model, unwrap, texture, and rig detailed industrial machinery, robotics arms, drones, and lab equipment.",
      "Create PBR materials and lighting setups in Blender / Maya and Substance Painter.",
      "Optimize poly counts and LODs (Levels of Detail) for real-time WebGL and standalone VR engines.",
      "Work closely with XR developers to verify visual fidelity and accurate scale dimensions.",
    ],
    requirements: [
      "Extensive portfolio showcasing hard-surface 3D modeling, texturing, and lighting.",
      "Mastery of Blender, Maya, Substance 3D Painter, and Photoshop.",
      "Deep understanding of real-time PBR workflows, draw call budgets, and texture atlas optimization.",
      "Knowledge of CAD file conversions (STEP, IGES, STL) to real-time polygons is a strong plus.",
    ],
    skills: ["Blender", "Maya", "Substance Painter", "PBR Texturing", "Hard Surface Modeling", "Low Poly LODs"],
  },
  {
    id: "ai-ml-dev",
    title: "AI / ML Developer",
    department: "Artificial Intelligence",
    location: "Chennai (HQ)",
    type: "Full-time",
    level: "Experienced",
    experience: "2–5 Years",
    about:
      "Develop edge computer vision models, anomaly detection algorithms, and LLM fine-tuning pipelines integrated into InGage's smart lab hardware and educational platforms.",
    responsibilities: [
      "Train, fine-tune, and evaluate deep learning models for object detection, defect inspection, and gesture recognition.",
      "Quantize and deploy neural networks on edge compute nodes (NVIDIA Jetson, TensorRT, ONNX).",
      "Build RESTful microservices for real-time model inferencing and telemetry processing.",
      "Mentor student cohorts on practical ML pipelines and cloud sandbox topologies.",
    ],
    requirements: [
      "Strong proficiency in Python, PyTorch, OpenCV, and scikit-learn.",
      "Experience deploying models using TensorRT, ONNX Runtime, and Docker containers.",
      "Solid foundation in linear algebra, statistics, and neural network optimization.",
      "Familiarity with cloud platforms (Google Cloud Vertex AI / AWS SageMaker).",
    ],
    skills: ["Python", "PyTorch", "OpenCV", "TensorRT", "Docker", "Edge AI", "Computer Vision"],
  },
  {
    id: "iot-embedded-eng",
    title: "IoT & Embedded Systems Engineer",
    department: "Hardware Engineering",
    location: "Chennai (HQ)",
    type: "Full-time",
    level: "Graduate / Experienced",
    experience: "1–4 Years",
    about:
      "Design custom microcontroller firmware, industrial sensor arrays, and IoT telemetry gateways that power physical CoE research labs in engineering colleges.",
    responsibilities: [
      "Develop embedded C/C++ firmware for ARM Cortex-M microcontrollers and ESP32 nodes.",
      "Implement industrial communication protocols: MQTT, CoAP, Modbus, CAN, and LoRaWAN.",
      "Design and test custom sensor PCBs and test fixtures for agricultural and robotics telemetry.",
      "Ensure robust error-handling, low-power sleep cycles, and encrypted over-the-air (OTA) updates.",
    ],
    requirements: [
      "Solid knowledge of Embedded C/C++, FreeRTOS, and hardware interfacing (I2C, SPI, UART).",
      "Hands-on experience with oscilloscopes, logic analyzers, and PCB schematic design (KiCAD/Eagle).",
      "Understanding of network stacks, sockets, and MQTT cloud integration.",
      "Degree in Electronics & Communication, Electrical, Mechatronics, or related field.",
    ],
    skills: ["Embedded C", "FreeRTOS", "ARM Cortex", "MQTT", "LoRaWAN", "KiCAD", "PCB Debugging"],
  },
  {
    id: "academic-trainer",
    title: "Technical Trainer & Lab Consultant",
    department: "Academic Enablement",
    location: "Chennai (Hybrid)",
    type: "Full-time",
    level: "Experienced",
    experience: "2–5 Years",
    about:
      "Deliver instructor-led training modules in Google Cloud, Drone Technology, and AI/IoT to faculty members and student cohorts across partner universities.",
    responsibilities: [
      "Conduct hands-on technical bootcamps and Faculty Development Programs (FDPs) on campus.",
      "Guide students through end-to-end capstone projects and Google/Oracle certification pathways.",
      "Assist institutions with lab testbench commissioning and technical curriculum mapping.",
      "Serve as a technical judge and mentor during state and national hackathons.",
    ],
    requirements: [
      "Strong presentation, communication, and hands-on lab demonstration skills.",
      "Technical proficiency in at least two domains: Cloud (GCP/AWS), Python AI, IoT, or Robotics.",
      "Google Cloud ACE or Oracle OCI certification is a significant advantage.",
      "Passion for empowering students and elevating academic learning outcomes.",
    ],
    skills: ["Google Cloud", "Technical Pedagogy", "Python", "IoT Labs", "FDP Delivery", "Public Speaking"],
  },
];
