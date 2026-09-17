// InGage Internship Experience - Master Data (Source of Truth)

export const internshipHeroData = {
  badge: "ENTER THE WORLD OF INGAGE",
  headline: "START YOUR JOURNEY WITH INGAGE",
  subheadline: "LEARN. BUILD. EXPERIENCE.",
  description:
    "Turn classroom knowledge into practical experience through immersive technology, real-world projects and hands-on learning.",
  primaryCTA: "EXPLORE INTERNSHIPS",
  secondaryCTA: "VIEW PROGRAMS",
  metrics: [
    { value: "11+", label: "Specialized Tech Domains" },
    { value: "100%", label: "Hands-on Project Track" },
    { value: "Direct", label: "Industry Architect Mentorship" },
    { value: "Chennai HQ", label: "Perungudi Innovation Labs" },
  ],
};

export const internshipStorySteps = [
  {
    number: "01",
    phase: "DISCOVER",
    title: "Understand Emerging Tech Architecture",
    description:
      "Move beyond theoretical textbook definitions. Explore how spatial computing, edge telemetry, and deep learning function in actual production pipelines.",
    bgImage: "/assets/internship/internship-hero-bg.jpg",
    accent: "blue",
    tagline: "FOUNDATION & EXPLORATION",
  },
  {
    number: "02",
    phase: "BUILD",
    title: "Hands-on Engineering & Prototyping",
    description:
      "Write real code in Unity, Python, or Embedded C++. Wire hardware microcontrollers, build physics simulations, and test prototype sensors on live lab testbenches.",
    bgImage: "/assets/coe/drone-lab.jpg",
    accent: "green",
    tagline: "ACTIVE CREATION",
  },
  {
    number: "03",
    phase: "EXPERIENCE",
    title: "Immersive & Spatial Hardware Testing",
    description:
      "Deploy code to Meta Quest VR headsets, autonomous drone flight cages, and industrial robotic cells. Test your ideas in real physical and digital sandboxes.",
    bgImage: "/assets/internship/internship-immersive.jpg",
    accent: "cyan",
    tagline: "PHYSICAL-DIGITAL VALIDATION",
  },
  {
    number: "04",
    phase: "BECOME INDUSTRY READY",
    title: "Portfolio Development & Professional Growth",
    description:
      "Collaborate in agile engineering squads, participate in technical code reviews, document project architectures, and build tangible proof of your abilities.",
    bgImage: "/assets/hero/ingage-1.jpg",
    accent: "navy",
    tagline: "CAREER LAUNCHPAD",
  },
];

export const whyInternIngage = {
  intro:
    "An internship should be more than a certificate. It should be an opportunity to understand how technology is designed, built and applied in the real world.",
  points: [
    {
      number: "01",
      title: "HANDS-ON EXPERIENCE",
      description: "Work with practical technology rather than learning only through theory.",
    },
    {
      number: "02",
      title: "EMERGING TECHNOLOGIES",
      description: "Explore areas such as AR, VR, AI, IoT, digital twins and immersive technology.",
    },
    {
      number: "03",
      title: "REAL PROJECT EXPOSURE",
      description: "Understand how technology is applied to real-world challenges.",
    },
    {
      number: "04",
      title: "MENTORSHIP",
      description: "Learn through guidance, collaboration and feedback from practicing engineers.",
    },
    {
      number: "05",
      title: "INDUSTRY READINESS",
      description: "Develop practical skills that help bridge the gap between education and industry.",
    },
  ],
};

export const internshipTechnologies = [
  {
    id: "ar",
    name: "AR",
    fullTitle: "Augmented Reality",
    shortDesc: "Spatial HUDs, interactive digital overlays, and mobile AR frameworks.",
    application: "Building interactive equipment inspection overlays and industrial training views.",
  },
  {
    id: "vr",
    name: "VR",
    fullTitle: "Virtual Reality",
    shortDesc: "High-immersion physics environments and 6DoF spatial simulations.",
    application: "Developing full 3D spatial safety simulations and engineering test chambers.",
  },
  {
    id: "mr",
    name: "MR",
    fullTitle: "Mixed Reality",
    shortDesc: "Holographic spatial anchoring blending digital entities with physical spaces.",
    application: "Creating shared collaborative spatial meeting suites and live hardware overlays.",
  },
  {
    id: "ai",
    name: "AI",
    fullTitle: "Artificial Intelligence",
    shortDesc: "Computer vision, deep neural networks, and edge inferencing models.",
    application: "Training defect detection algorithms and gesture recognition models on edge nodes.",
  },
  {
    id: "iot",
    name: "IoT",
    fullTitle: "Internet of Things",
    shortDesc: "Microcontroller telemetry, sensor meshes, and MQTT broker communications.",
    application: "Connecting environmental sensor arrays and streaming live telemetry to dashboards.",
  },
  {
    id: "iiot",
    name: "IIoT",
    fullTitle: "Industrial IoT",
    shortDesc: "SCADA integration, Modbus industrial gateways, and smart factory telemetry.",
    application: "Prototyping manufacturing line monitor hubs and automated machine health checks.",
  },
  {
    id: "3d",
    name: "3D",
    fullTitle: "3D Spatial Modeling",
    shortDesc: "Precision hard-surface modeling, PBR textures, and real-time optimization.",
    application: "Crafting optimized CAD models and realistic digital twin machine parts.",
  },
  {
    id: "digital-twins",
    name: "DIGITAL TWINS",
    fullTitle: "Digital Twins",
    shortDesc: "Real-time bidirectional synchronization of physical machinery and 3D models.",
    application: "Linking physical motor telemetry to 3D real-time simulation mirrors.",
  },
  {
    id: "metaverse",
    name: "METAVERSE",
    fullTitle: "Multi-User Spatial Worlds",
    shortDesc: "Networked collaborative 3D worlds with persistent states and spatial audio.",
    application: "Designing multi-student virtual engineering laboratories and interactive halls.",
  },
  {
    id: "5g",
    name: "5G",
    fullTitle: "Ultra-Low Latency Networking",
    shortDesc: "Edge streaming, low-latency telemetry packets, and remote control protocols.",
    application: "Testing high-throughput video streaming for remote drone control setups.",
  },
  {
    id: "embedded",
    name: "EMBEDDED SYSTEMS",
    fullTitle: "Embedded Hardware & Firmware",
    shortDesc: "ARM Cortex architectures, FreeRTOS kernels, and PCB circuit prototyping.",
    application: "Writing bare-metal firmware and calibrating sensor bus signals.",
  },
  {
    id: "semiconductor",
    name: "SEMICONDUCTOR",
    fullTitle: "Silicon & VLSI Fundamentals",
    shortDesc: "Digital logic synthesis, FPGA prototyping, and hardware-software co-design.",
    application: "Implementing Verilog logic modules and testing FPGA signal pipelines.",
  },
];

export const internshipDomains = [
  {
    id: "immersive-tech",
    title: "Immersive Technology",
    description: "Architect multi-sensory experiences integrating spatial audio, haptics, and XR display engines.",
    image: "/assets/coe/metaverse-lab.jpg",
    badge: "SPATIAL COMPUTING",
  },
  {
    id: "ar-vr-dev",
    title: "AR / VR Development",
    description: "Write game logic, 3D math shaders, and OpenXR controller interactions in Unity and Unreal Engine.",
    image: "/assets/careers/careers-hero-vivid.jpg",
    badge: "GAME ENGINES",
  },
  {
    id: "3d-design",
    title: "3D Design & Animation",
    description: "Model, unwrap, texture, and rig detailed hard-surface machinery and industrial environment assets.",
    image: "/assets/hero/ingage-3.jpg",
    badge: "3D & VISUAL CRAFT",
  },
  {
    id: "ai-ml",
    title: "AI / Machine Learning",
    description: "Train edge computer vision pipelines, anomaly detection models, and real-time sensory data parsers.",
    image: "/assets/campus/cloud-lab.jpg",
    badge: "INTELLIGENT SYSTEMS",
  },
  {
    id: "iot-iiot",
    title: "IoT / IIoT",
    description: "Deploy connected sensor nodes, configure cloud gateways, and monitor real-time industrial telemetry.",
    image: "/assets/coe/agritech-lab.jpg",
    badge: "CONNECTED DEVICES",
  },
  {
    id: "embedded-systems",
    title: "Embedded Systems",
    description: "Program ARM microcontrollers, FreeRTOS tasks, and debug custom circuit boards using oscilloscopes.",
    image: "/assets/coe/embedded-lab.jpg",
    badge: "HARDWARE & FIRMWARE",
  },
  {
    id: "digital-twins-domain",
    title: "Digital Twin",
    description: "Create live data-driven 3D replicas of physical systems for predictive monitoring and simulation.",
    image: "/assets/internship/internship-immersive.jpg",
    badge: "SYSTEM REPLICAS",
  },
  {
    id: "software-dev",
    title: "Software Development",
    description: "Develop robust React frontend interfaces, cloud APIs, and microservices supporting InGage platforms.",
    image: "/assets/hero/ingage-2.jpg",
    badge: "FULL-STACK ARCHITECTURE",
  },
  {
    id: "ui-ux",
    title: "UI / UX Design",
    description: "Design ergonomic 2D/3D spatial user interfaces, interaction design flows, and design system tokens.",
    image: "/assets/internship/internship-hero-bg.jpg",
    badge: "SPATIAL INTERFACES",
  },
  {
    id: "engineering-tech",
    title: "Engineering Technology",
    description: "Integrate multi-disciplinary mechatronics, drone avionics, and agricultural spectral telemetry.",
    image: "/assets/coe/drone-lab.jpg",
    badge: "MECHATRONICS & UAV",
  },
];

export const internshipJourneyTimeline = [
  {
    step: "01",
    phase: "DISCOVER",
    title: "Understand the Technology & Problem",
    desc: "Dive deep into domain architectural concepts, study engineering requirements, and analyze the real-world challenge you will tackle.",
  },
  {
    step: "02",
    phase: "LEARN",
    title: "Develop Practical Knowledge",
    desc: "Gain hands-on familiarity with professional tools, SDKs, development hardware, and industry coding standards under mentor guidance.",
  },
  {
    step: "03",
    phase: "BUILD",
    title: "Work on Hands-on Assignments & Projects",
    desc: "Write production code, assemble firmware, design 3D components, and iterate on core project features in active sprint cycles.",
  },
  {
    step: "04",
    phase: "COLLABORATE",
    title: "Work with Mentors & Team Members",
    desc: "Participate in daily engineering standups, architectural walkthroughs, and peer code reviews to refine technical implementation.",
  },
  {
    step: "05",
    phase: "PRESENT",
    title: "Showcase Your Working Prototype",
    desc: "Demonstrate your working spatial application, IoT testbench, or AI pipeline to engineering leads and faculty mentors.",
  },
  {
    step: "06",
    phase: "GROW",
    title: "Build Confidence & Industry Readiness",
    desc: "Graduate from the internship with demonstrable project proof, architectural documentation, and practical industry problem-solving skills.",
  },
];

export const projectExperienceCategories = [
  {
    id: "ar-exp",
    number: "01",
    category: "AR Experience",
    title: "Interactive Industrial Equipment HUD",
    description: "Mobile and headset-based AR overlays that guide operators through mechanical maintenance procedures in real time.",
    image: "/assets/hero/ingage-3.jpg",
    tech: ["Unity", "ARKit/ARCore", "Spatial Anchoring", "C#"],
  },
  {
    id: "vr-sim",
    number: "02",
    category: "VR Simulation",
    title: "Virtual High-Voltage Substation Lab",
    description: "Physics-driven 6DoF simulation allowing students to safely practice hazardous electrical troubleshooting workflows.",
    image: "/assets/coe/metaverse-lab.jpg",
    tech: ["Unreal Engine 5", "OpenXR", "Spatial Audio", "C++"],
  },
  {
    id: "iot-proto",
    number: "03",
    category: "IoT Prototype",
    title: "Smart Environmental Telemetry Gateway",
    description: "Multi-sensor hardware array transmitting soil, temperature, and atmospheric telemetry over LoRaWAN and MQTT.",
    image: "/assets/coe/agritech-lab.jpg",
    tech: ["ESP32", "FreeRTOS", "MQTT", "Python Backend"],
  },
  {
    id: "ai-app",
    number: "04",
    category: "AI Application",
    title: "Edge Computer Vision Defect Scanner",
    description: "Real-time edge neural network analyzing assembly components on a conveyor belt with millisecond inference times.",
    image: "/assets/campus/cloud-lab.jpg",
    tech: ["PyTorch", "OpenCV", "TensorRT", "NVIDIA Jetson"],
  },
  {
    id: "3d-viz",
    number: "05",
    category: "3D Visualization",
    title: "Photorealistic Drone Avionics CAD Twin",
    description: "High-precision hard-surface CAD breakdown of carbon-fiber UAV airframes with animated exploded views.",
    image: "/assets/coe/drone-lab.jpg",
    tech: ["Blender", "Substance 3D", "PBR Materials", "WebGL"],
  },
  {
    id: "digital-twin-proj",
    number: "06",
    category: "Digital Twin",
    title: "6-Axis Robotic Kinematics Mirror",
    description: "Real-time bidirectional 3D twin reflecting physical robotic arm angles and joint telemetry with zero perceptible delay.",
    image: "/assets/coe/robotics-lab.jpg",
    tech: ["ROS 2", "WebSockets", "Unity 3D", "Modbus TCP"],
  },
];

export const whoIsThisFor = [
  {
    title: "Final-Year Students",
    desc: "Seeking rigorous capstone projects and hands-on technical validation before entering full-time engineering careers.",
    icon: "🎓",
  },
  {
    title: "Undergraduate Students",
    desc: "Looking to explore practical emerging technologies during semester breaks and academic terms.",
    icon: "📚",
  },
  {
    title: "Engineering Students",
    desc: "From Computer Science, ECE, EEE, Mechatronics, Mechanical, and allied engineering disciplines.",
    icon: "⚙️",
  },
  {
    title: "Technology Enthusiasts",
    desc: "Self-driven makers with strong curiosity for 3D graphics, robotics, machine learning, and hardware.",
    icon: "💡",
  },
  {
    title: "Recent Graduates",
    desc: "Transitioning into modern spatial computing, AI, or embedded systems domains with portfolio building.",
    icon: "🚀",
  },
  {
    title: "Students in Emerging Tech",
    desc: "Passionate about building real spatial applications, IoT grids, and industrial automation solutions.",
    icon: "🌐",
  },
];

export const whatYouTakeWithYou = [
  "PRACTICAL EXPERIENCE",
  "TECHNOLOGY EXPOSURE",
  "PROJECT EXPERIENCE",
  "PROBLEM SOLVING",
  "COLLABORATION",
  "INDUSTRY AWARENESS",
  "PORTFOLIO DEVELOPMENT",
  "CAREER CONFIDENCE",
];

export const internshipPrograms = [
  {
    id: "prog-arvr",
    name: "AR / VR & Spatial Computing Track",
    technology: "Unity 3D, Unreal Engine 5, OpenXR, C#",
    description: "Design immersive 3D spatial simulations, virtual laboratories, and interactive XR interfaces for enterprise headsets.",
    tags: ["Spatial Computing", "Hands-on", "Unity/Unreal"],
  },
  {
    id: "prog-ai",
    name: "Applied AI & Computer Vision Track",
    technology: "Python, PyTorch, OpenCV, Edge AI",
    description: "Train deep learning models for spatial gesture recognition, automated defect classification, and smart vision telemetry.",
    tags: ["Artificial Intelligence", "Edge Compute", "Python"],
  },
  {
    id: "prog-iot",
    name: "Industrial IoT & Connected Telemetry Track",
    technology: "MQTT, Node-RED, Python, Cloud Sandboxes",
    description: "Connect physical sensor clusters, architect telemetry pipelines, and stream live machine diagnostics to interactive dashboards.",
    tags: ["IoT / IIoT", "Smart Sensors", "Cloud Telemetry"],
  },
  {
    id: "prog-embedded",
    name: "Embedded Firmware & Robotics Track",
    technology: "ARM Cortex, FreeRTOS, Embedded C/C++, KiCAD",
    description: "Write low-level firmware for microcontrollers, interface hardware sensor buses, and calibrate robotic motor controllers.",
    tags: ["Embedded C", "FreeRTOS", "Hardware Debugging"],
  },
  {
    id: "prog-3d",
    name: "3D Spatial Design & Photogrammetry Track",
    technology: "Blender, Maya, Substance Painter, PBR",
    description: "Craft high-fidelity hard-surface 3D models, create real-time PBR materials, and optimize CAD assets for spatial engines.",
    tags: ["3D Modeling", "PBR Workflow", "Digital Assets"],
  },
  {
    id: "prog-twin",
    name: "Digital Twins & Industrial Simulation Track",
    technology: "Digital Twins, WebSockets, SCADA, Real-time 3D",
    description: "Build synchronized virtual counterparts of physical equipment that stream real-time operational state data.",
    tags: ["Digital Twins", "System Sync", "Simulation"],
  },
  {
    id: "prog-software",
    name: "Core Software & Full-Stack Systems Track",
    technology: "React, Node.js, REST APIs, Microservices",
    description: "Build robust web architectures, educational platforms, and data visualization interfaces supporting InGage lab systems.",
    tags: ["Web Engineering", "React", "Cloud Services"],
  },
];
