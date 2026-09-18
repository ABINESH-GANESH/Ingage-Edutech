/**
 * InGage EduTech - Master Hackathons Data Architecture
 * Source of truth for active challenge arenas and archived hackathon competitions.
 */

export const activeHackathons = [
  {
    id: "arena-cloud-2026",
    title: "National Cloud Infrastructure & DevSecOps Arena 2026",
    subtitle: "Enterprise Kubernetes Security, Zero-Trust Infrastructure & Multi-Cloud Observability",
    badge: "REGISTRATIONS OPEN",
    statusColor: "emerald",
    domain: "Cloud Computing & DevSecOps",
    targetTools: ["Google Cloud Platform (GCP)", "Kubernetes (GKE)", "Terraform", "Falco", "Prometheus"],
    description:
      "Design and deploy hardened multi-region Kubernetes infrastructure capable of sustaining simulated zero-day attack vectors while maintaining 99.99% service availability under heavy telemetry loads.",
    prizePool: "₹3,50,000",
    registrationDeadline: "April 30, 2026",
    finaleDate: "May 22-23, 2026",
    teamSize: "2 - 4 Members",
    eligibility: "Engineering Students (B.E / B.Tech / M.E / M.Tech / MCA)",
    format: "Hybrid (Phase 1 & 2 Online, Grand Finale at InGage CoE Lab)",
  },
  {
    id: "arena-edgeai-2026",
    title: "Next-Gen TinyML & Edge Robotics Challenge 2026",
    subtitle: "Low-Power Computer Vision, Autonomous UAV Navigation & Micro-Telemetry Pipelines",
    badge: "SUBMISSIONS ACTIVE",
    statusColor: "blue",
    domain: "Edge AI & Robotics",
    targetTools: ["ARM Cortex-M55", "ROS 2", "Edge Impulse", "TensorFlow Lite Micro", "FreeRTOS"],
    description:
      "Develop edge-quantized vision models executing on ultra-low-power microcontrollers for real-time obstacle avoidance and crop health anomaly scoring with zero cloud latency dependencies.",
    prizePool: "₹3,00,000",
    registrationDeadline: "May 15, 2026",
    finaleDate: "June 12-13, 2026",
    teamSize: "2 - 4 Members",
    eligibility: "Engineering & Polytechnic Students Across India",
    format: "Hybrid (Virtual Simulation + On-Bench Hardware Testing)",
  },
];

export const previousHackathons = [
  {
    id: "cyberforge-2026",
    title: "CyberForge 2026",
    year: "2026",
    subtitle: "Cloud Infrastructure Hardening, Zero-Trust Architecture & Threat Triage",
    domain: "Cloud Security, SIEM & DevSecOps",
    badge: "CONCLUDED • FEB 2026",
    prize: "₹2,50,000 Total Grant",
    targetTools: [
      "Google Cloud Platform (GCP)",
      "Kubernetes (GKE)",
      "Terraform IaC",
      "Splunk SIEM",
      "Linux eBPF",
      "HashiCorp Vault",
    ],
    description:
      "A national-level competitive engineering sandbox where finalist collegiate teams architected resilient multi-tenant cloud topographies, implemented automated zero-trust authorization policies, and defended live enterprise telemetry pipelines against persistent simulated attack vectors.",
    phases: [
      {
        number: "01",
        name: "Phase 1: Online",
        mode: "Asynchronous Code Submission",
        timing: "January 10 - 20, 2026",
        overview: "Infrastructure as Code (IaC) Hardening & Automated Vulnerability Benchmarking",
        metrics: [
          { label: "Compliance Benchmark", value: "CIS GCP Foundation Benchmark ≥ 98%" },
          { label: "Static Code Analysis", value: "0 High/Critical SAST/DAST Flaws" },
          { label: "IAM Architecture", value: "Strict Least-Privilege Granularity" },
        ],
        criteria:
          "Evaluation centered on clean modular Terraform architectures, state file encryption, zero hardcoded credentials, and automated container image signature verification.",
      },
      {
        number: "02",
        name: "Phase 2: Online / Offline",
        mode: "48-Hour Synchronous Defense Simulation",
        timing: "January 28 - 30, 2026",
        overview: "Live Red/Blue Sandbox Attack Vector Simulation & Intrusion Defense",
        shortlist: "Top 15 Collegiate Teams selected out of 420+ preliminary submissions",
        metrics: [
          { label: "Mean Time to Detect (MTTD)", value: "< 4 Minutes Average" },
          { label: "Incident Containment", value: "100% Attack Vector Isolation" },
          { label: "Forensic Integrity", value: "Automated Cryptographic Audit Export" },
        ],
        criteria:
          "Teams defended multi-cluster Kubernetes sandboxes against live privilege escalation, lateral movement, and simulated data exfiltration scripts deployed by corporate red-team judges.",
      },
      {
        number: "03",
        name: "Phase 3: Grand Finale",
        mode: "In-Person 24-Hour Hackathon & Jury Defense",
        timing: "February 14 - 15, 2026",
        venue: "InGage Cloud Center of Excellence, Chennai",
        overview: "Live Stress-Testing, DDoS Resilience & Executive Architectural Defense",
        benchmarks: [
          { label: "Resilience Benchmark", value: "Zero Downtime under 100k RPS DDoS" },
          { label: "Defense Presentation", value: "15-Min Technical Jury Cross-Exam" },
          { label: "Live Code Verification", value: "Reproducible CI/CD Pipeline Run" },
        ],
        criteria:
          "Finalists demonstrated runtime kernel-level observability, sub-second failover routing, and complete cost-optimized cloud topology governance before a panel of enterprise security directors.",
      },
    ],
    winner: {
      teamName: "Team AegisOps",
      institution: "Madras Institute of Technology (MIT), Anna University",
      members: [
        { name: "Adithya Vardhan", role: "Team Lead & Cloud Architect" },
        { name: "Priya Dharshini", role: "DevSecOps & CI/CD Specialist" },
        { name: "K. R. Karthik", role: "eBPF & Kernel Telemetry Engineer" },
        { name: "Vigneshwaran S.", role: "SIEM & Triage Analyst" },
      ],
      prize: "₹1,50,000 Cash Grant + Direct Fast-Track Cloud Security Interviews",
      solutionTitle: "Autonomous eBPF Runtime Security Mesh",
      solutionSummary:
        "Engineered a kernel-level runtime observability agent using Linux eBPF that detects and isolates unmapped container privilege escalations within 320ms on distributed Kubernetes clusters without CPU throughput degradation.",
    },
    runnersUp: [
      {
        position: "1st Runner-Up",
        badge: "1ST RUNNER-UP • SOUTH ZONE",
        teamName: "Team ZeroTrace",
        institution: "PSG College of Technology, Coimbatore",
        members: ["S. Harish (Lead)", "Naveen Kumar", "Divya Sri", "Gokul Nath"],
        prize: "₹60,000 Cash Grant",
        solutionTitle: "Real-Time IAM Auto-Revocation Engine",
        solutionSummary:
          "Developed an event-driven IAM governor on GCP using Eventarc and Cloud Functions that revokes anomalous elevated permissions in under 2 seconds.",
      },
      {
        position: "2nd Runner-Up",
        badge: "2ND RUNNER-UP • INNOVATION",
        teamName: "Team CipherSec",
        institution: "Vellore Institute of Technology (VIT), Chennai",
        members: ["Rohit Krishnan (Lead)", "Sneha Venkatesh", "Arvinth R."],
        prize: "₹40,000 Cash Grant",
        solutionTitle: "Zero-Knowledge Microservice Gatekeeper",
        solutionSummary:
          "Created a zero-knowledge proof authentication gateway verifying cross-service microsegmentation tokens without exposing underlying credential payloads.",
      },
    ],
  },
  {
    id: "vr-hackathon-2025",
    title: "Smart India VR Hackathon 2025",
    year: "2025",
    subtitle: "Spatial Interaction Design, Medical Digital Twins & Immersive Simulation",
    domain: "Spatial Computing, Extended Reality (XR) & Unity/Unreal",
    badge: "CONCLUDED • OCT 2025",
    prize: "₹2,00,000 Total Grant",
    targetTools: [
      "Unity 3D (URP)",
      "Unreal Engine 5",
      "OpenXR Standard SDK",
      "Meta Quest 3 Prototyping",
      "Blender 3D",
      "WebXR Device API",
    ],
    description:
      "A flagship immersive technology challenge focused on architecting spatial digital twins, multi-user surgical simulations, and industrial safety training modules running natively on standalone virtual reality hardware at steady 90 FPS.",
    phases: [
      {
        number: "01",
        name: "Phase 1: Online",
        mode: "Technical Concept Dossier & Spatial Prototype",
        timing: "September 01 - 12, 2025",
        overview: "Spatial Wireframing, Frame-Rate Budgets & 3D Asset Topology",
        metrics: [
          { label: "Polygon Budget", value: "< 100k Triangles per Scene" },
          { label: "Frame-Rate Target", value: "Locked 90 FPS Spec on Standalone" },
          { label: "Draw-Call Optimization", value: "< 120 Batched Draw Calls" },
        ],
        criteria:
          "Assessed on spatial UI ergonomics, physics-based hand tracking fidelity, occlusion handling, and asset optimization for lightweight mobile compute chipsets.",
      },
      {
        number: "02",
        name: "Phase 2: Online / Offline",
        mode: "36-Hour Continuous Build Hackathon",
        timing: "September 24 - 26, 2025",
        overview: "Interactive Medical Simulation & Multi-User Digital Twin Environment",
        shortlist: "Top 12 Regional Teams selected across 350+ institutional entries",
        metrics: [
          { label: "Haptic Latency", value: "< 12ms Response Time" },
          { label: "Inverse Kinematics", value: "6-DoF Precision Calibration" },
          { label: "Multi-User Sync", value: "Sub-50ms Delta Compression" },
        ],
        criteria:
          "Teams built synchronized spatial rooms enabling multiple remote engineers/surgeons to manipulate shared CAD digital twins in real time with spatial audio positioning.",
      },
      {
        number: "03",
        name: "Phase 3: Grand Finale",
        mode: "In-Person Headset Demonstration & Expert Review",
        timing: "October 18 - 19, 2025",
        venue: "InGage Immersive XR Sandbox Arena, Chennai",
        overview: "Live Medical Panel Evaluation & Industrial Safety Scenario Testing",
        benchmarks: [
          { label: "Clinical Review", value: "Scored by Senior Surgical Faculty" },
          { label: "Motion Sickness Index", value: "0% Visual-Vestibular Conflict" },
          { label: "Network Stress-Test", value: "Tested over 4G/5G Packet Loss" },
        ],
        criteria:
          "Final solutions were evaluated directly inside VR headsets by medical specialists and XR engineering directors on precision, procedural accuracy, and zero latency stutter.",
      },
    ],
    winner: {
      teamName: "Team HoloSurg",
      institution: "College of Engineering, Guindy (CEG), Anna University",
      members: [
        { name: "Kavitha Raman", role: "Team Lead & XR Simulation Dev" },
        { name: "Manoj Kumar", role: "Unity 3D Engine & Shader Specialist" },
        { name: "Sanjay Krishna", role: "Biomechanical 3D Modeler" },
        { name: "Aishwarya M.", role: "Spatial Audio & UX Designer" },
      ],
      prize: "₹1,20,000 Cash Grant + InGage XR Lab Incubation Fellowship",
      solutionTitle: "Sub-Millimeter Laparoscopic Surgical Twin",
      solutionSummary:
        "Constructed a high-fidelity laparoscopic surgical trainer with real-time soft-tissue mesh deformation, accurate force-feedback haptics, and automated incision error scoring for medical trainees.",
    },
    runnersUp: [
      {
        position: "1st Runner-Up",
        badge: "1ST RUNNER-UP • INNOVATION CUP",
        teamName: "Team SpatialNexus",
        institution: "SSN College of Engineering, Chennai",
        members: ["Deepak S. (Lead)", "Meera Raghavan", "Tarun Balaji"],
        prize: "₹50,000 Cash Grant",
        solutionTitle: "High-Voltage Substation XR Safety Simulator",
        solutionSummary:
          "Engineered a multi-user high-voltage transformer maintenance sandbox simulating arc flash electrical hazards and emergency isolation procedures with zero physical risk.",
      },
      {
        position: "2nd Runner-Up",
        badge: "2ND RUNNER-UP • UX EXCELLENCE",
        teamName: "Team SimuVerse",
        institution: "Thiagarajar College of Engineering (TCE), Madurai",
        members: ["Anand Raj (Lead)", "Pavithra S.", "Kevin Mathew"],
        prize: "₹30,000 Cash Grant",
        solutionTitle: "WebXR Collaborative Aerospace Engine Twin",
        solutionSummary:
          "Built a browser-accessible WebXR jet turbine disassembly suite running smoothly across desktop browsers, tablets, and standalone VR headsets.",
      },
    ],
  },
  {
    id: "iot-telemetry-2025",
    title: "IoT Smart Telemetry & Edge Hackathon 2025",
    year: "2025",
    subtitle: "Ultra-Low Power Edge Inferencing, TinyML & Industrial Telemetry Nodes",
    domain: "Embedded Systems, Edge AI, Industrial IoT & FreeRTOS",
    badge: "CONCLUDED • JUL 2025",
    prize: "₹2,00,000 Total Grant",
    targetTools: [
      "ARM Cortex-M4 / M33",
      "ESP32-S3 Microcontroller",
      "FreeRTOS Kernel",
      "Edge Impulse TinyML",
      "MQTT & LoRaWAN Protocols",
      "Grafana Live Dashboard",
    ],
    description:
      "An intensive hardware engineering hackathon challenging students to fabricate custom sensor nodes, quantize TinyML vibration anomaly models to run under 64KB RAM, and transmit industrial telemetry over long-range wireless networks.",
    phases: [
      {
        number: "01",
        name: "Phase 1: Online",
        mode: "Schematic Review & Firmware Simulation",
        timing: "June 10 - 22, 2025",
        overview: "Power Budgeting, Sensor Interfacing Schematics & Telemetry Payload Design",
        metrics: [
          { label: "Active Power Budget", value: "< 15mA Active Consumption" },
          { label: "Deep Sleep Current", value: "< 5µA Quiescent Current" },
          { label: "Payload Efficiency", value: "Binary CBOR Compressed Telemetry" },
        ],
        criteria:
          "Focused on electrical schematic cleanliness, component bill-of-materials cost optimization, FreeRTOS task priority assignment, and memory footprint management.",
      },
      {
        number: "02",
        name: "Phase 2: Online / Offline",
        mode: "40-Hour Physical Hardware Prototyping",
        timing: "July 08 - 10, 2025",
        overview: "Sensor Node Assembly, TinyML Edge Model Quantization & Gateway Transmission",
        shortlist: "Top 10 Hardware Finalist Teams selected from 290+ collegiate entries",
        metrics: [
          { label: "Inference Latency", value: "< 25ms on Cortex-M4 @ 80MHz" },
          { label: "Model Memory Footprint", value: "< 38KB Flash, < 14KB RAM" },
          { label: "LoRaWAN Packet Loss", value: "< 0.5% over 3.2km range" },
        ],
        criteria:
          "Teams flashed custom firmware onto physical hardware testbenches, capturing vibrational telemetry from 3-phase industrial induction motors under variable load conditions.",
      },
      {
        number: "03",
        name: "Phase 3: Grand Finale",
        mode: "Live Industrial Hardware Bench Stress-Testing",
        timing: "July 25 - 26, 2025",
        venue: "InGage Robotics & Embedded CoE Hub, Chennai",
        overview: "Physical Motor Fault Injection, Thermal Stress & Live Dashboard Evaluation",
        benchmarks: [
          { label: "Anomaly Accuracy", value: "≥ 96.5% Fault Classification" },
          { label: "Battery Life Projection", value: "3+ Years on Single 18650 Cell" },
          { label: "Failover Resilience", value: "Local Flash Buffering on Link Drop" },
        ],
        criteria:
          "Hardware was mounted on running industrial machinery with intentional bearing faults and thermal anomalies to test edge inferencing accuracy and telemetry reliability.",
      },
    ],
    winner: {
      teamName: "Team EdgeSense",
      institution: "Sri Sivasubramaniya Nadar (SSN) College of Engineering",
      members: [
        { name: "Pranav Sundar", role: "Team Lead & Embedded Firmware Engineer" },
        { name: "Varun Ram", role: "TinyML & DSP Model Developer" },
        { name: "Keerthana R.", role: "PCB & Power Optimization Specialist" },
        { name: "Nithya Sri", role: "Cloud IoT & Telemetry Architect" },
      ],
      prize: "₹1,20,000 Cash Grant + Turnkey Hardware Deployment Sponsorship",
      solutionTitle: "TinyML Predictive Maintenance Sensor Node",
      solutionSummary:
        "Engineered an autonomous vibration and thermal telemetry sensor running an INT8-quantized TinyML classifier on an ARM Cortex-M4 that detects early mechanical motor degradation with 3.4-year battery longevity over LoRaWAN.",
    },
    runnersUp: [
      {
        position: "1st Runner-Up",
        badge: "1ST RUNNER-UP • INDUSTRIAL IMPACT",
        teamName: "Team MicroTelemetry",
        institution: "Government College of Technology (GCT), Coimbatore",
        members: ["Rajesh Kannan (Lead)", "B. Sudhakar", "Mythili P."],
        prize: "₹50,000 Cash Grant",
        solutionTitle: "Solar-Harvesting Agri-Telemetry Probe",
        solutionSummary:
          "Created a multi-depth capacitive soil moisture and nitrogen-phosphorus-potassium (NPK) spectral telemetry probe with energy-harvesting supercapacitors.",
      },
      {
        position: "2nd Runner-Up",
        badge: "2ND RUNNER-UP • EDGE AI INNOVATION",
        teamName: "Team NodePulse",
        institution: "Kumaraguru College of Technology (KCT), Coimbatore",
        members: ["Vigneshwaran M. (Lead)", "S. Swetha", "Ashwin Kumar"],
        prize: "₹30,000 Cash Grant",
        solutionTitle: "Acoustic Pipeline Micro-Leak Classifier",
        solutionSummary:
          "Developed an edge acoustic FFT analyzer detecting early high-pressure pipeline micro-fractures in industrial environments with sub-10ms alert latency.",
      },
    ],
  },
];
