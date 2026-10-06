import React, { useState } from 'react';
import { 
  Play, Search, Globe, ChevronDown, House, Printer, 
  CheckSquare, ShieldCheck, Laptop, Code, Smartphone, Brain, GraduationCap, Lock,
  Box, Wrench, Rocket, Calendar, Phone, Mail, MapPin, X, ExternalLink,
  CheckCircle2, ArrowRight, Award, Users, Layers, Server, Activity, Filter
} from 'lucide-react';
import './App.css';

export default function App() {
  // Global & Interactivity States
  const [lang, setLang] = useState('en'); // 'en' | 'hi'
  const [selectedCenter, setSelectedCenter] = useState('JP');
  const [activeModal, setActiveModal] = useState(null); // 'products' | 'services' | 'projects' | 'events' | 'contact' | 'search' | 'print' | 'sector'
  const [searchQuery, setSearchQuery] = useState('');
  const [activeThematic, setActiveThematic] = useState(null);
  const [centerTab, setCenterTab] = useState('history');
  const [navActive, setNavActive] = useState('home');
  const [isSectorDrawerOpen, setIsSectorDrawerOpen] = useState(false);
  const [enquiryFormSubmitted, setEnquiryFormSubmitted] = useState(false);

  // Indian Mobile Number Validation State
  const [mobileNumber, setMobileNumber] = useState('');
  const [mobileError, setMobileError] = useState('');

  const handleMobileChange = (e) => {
    // Sanitize: allow digits only, max 10 digits
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
    setMobileNumber(digits);

    if (digits.length > 0) {
      if (!/^[6-9]/.test(digits)) {
        setMobileError('Indian mobile numbers must start with 6, 7, 8, or 9');
      } else if (digits.length < 10) {
        setMobileError(`Please enter a full 10-digit mobile number (${digits.length}/10)`);
      } else {
        setMobileError('');
      }
    } else {
      setMobileError('');
    }
  };

  // Netparam Regional Hubs Data
  const centersData = {
    JP: {
      nameEn: 'Netparam Center @ Jaipur (Head Office)',
      nameHi: 'नेटपरम केंद्र @ जयपुर (मुख्य कार्यालय)',
      location: 'Janpath, Nirman Nagar, Jaipur',
      lead: 'Headquarters & CBT Examination Hub',
      emblem: '/netparam-logo.png',
      heroBg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=80',
      descEn: `NETPARAM TECHNOLOGIES PVT. LTD. occupies a premier position as a pioneer in AI-driven assessment, computer-based examination platforms, and enterprise software engineering operating from Jaipur since 2012. Netparam has conducted proctored examination drives for over 100,000 candidates with zero impersonation using advanced biometric identity verification. Our Jaipur Head Office houses state-of-the-art software development labs and the technical internship wing for MERN Stack, Python/Django, and Data Science.`,
      descHi: `नेटपरम टेक्नोलॉजीज प्रा. लि. 2012 से जयपुर से संचालित एआई-संचालित मूल्यांकन, कंप्यूटर आधारित परीक्षा प्लेटफॉर्म और एंटरप्राइज सॉफ्टवेयर इंजीनियरिंग में एक अग्रणी स्थान रखता है। नेटपरम ने उन्नत बायोमेट्रिक पहचान सत्यापन का उपयोग करके 100,000 से अधिक उम्मीदवारों के लिए परीक्षा का आयोजन किया है।`,
      achievementsEn: [
        'Managed 100,000+ Proctored Computer-Based Test (CBT) Candidates',
        'ISO 9001:2015 Certified Examination & Software Operations',
        'Deploys On-Site Biometric Gate Verification & Barcode Scanning',
        'Developed Institute ERP, Yoga Power App & Green Bharat Portal',
        'Trained 5,000+ Engineering & BCA Students in Full-Stack Web Technologies'
      ],
      address: '747, Janpath, Rani Sati Nagar, Nirman Nagar, Jaipur - 302019, Rajasthan (India)',
      phone: '+91-76650-10205',
      fax: '+91-141-2550310',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.983940121172!2d75.7482!3d26.8878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4bc2a4b85c1%3A0x6b9071db19992c9f!2sNirman%20Nagar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1663579195296!5m2!1sen!2sin'
    },
    SK: {
      nameEn: 'Netparam Center @ Sikar',
      nameHi: 'नेटपरम केंद्र @ सीकर',
      location: 'Bajaj Road, Sikar',
      lead: 'Technical Training & Development Hub',
      emblem: '/netparam-logo.png',
      heroBg: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop&q=80',
      descEn: `Netparam's Sikar Center focuses on industry internships, full-stack developer training (MERN/MEAN), college workshops, and regional examination center monitoring. It provides hands-on project experience to B.Tech, BCA, MCA, and Diploma students.`,
      descHi: `नेटपरम सीकर केंद्र उद्योग इंटर्नशिप, फुल-स्टैक डेवलपर प्रशिक्षण (MERN/MEAN) और कॉलेज कार्यशालाओं पर केंद्रित है।`,
      achievementsEn: [
        'Dedicated 100+ Terminal Software Training Lab',
        'College Association & MoU Partnerships across Shekhawati Region',
        'Live Client Software Module Training'
      ],
      address: 'Bhati Mansion, Bajaj Road, Sikar - 332001, Rajasthan (India)',
      phone: '+91-83024-22333',
      fax: '+91-1572-255031',
      mapUrl: 'https://maps.google.com/?q=Sikar'
    },
    KT: {
      nameEn: 'Netparam Center @ Kota',
      nameHi: 'नेटपरम केंद्र @ कोटा',
      location: 'Talwandi, Kota',
      lead: 'Coaching & Academic Assessment Unit',
      emblem: '/netparam-logo.png',
      heroBg: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&auto=format&fit=crop&q=80',
      descEn: `Netparam Kota Center caters to computer-based mock testing, student analytics, and online test series delivery for institutes in the coaching hub of Kota.`,
      descHi: `नेटपरम कोटा केंद्र कंप्यूटर आधारित मॉक परीक्षण और ऑनलाइन टेस्ट श्रृंखला वितरण को पूरा करता है।`,
      achievementsEn: ['Mock CBT Engine for 25,000+ Students', 'Instant Scorecard Generation'],
      address: 'Plot 42, Rajiv Gandhi Nagar, Kota - 324005, Rajasthan',
      phone: '+91-76650-10205',
      fax: '+91-744-255031',
      mapUrl: 'https://maps.google.com/?q=Kota'
    }
  };

  const currentCenter = centersData[selectedCenter] || centersData.JP;

  // Practice Domains (8 Core Capabilities)
  const thematicAreas = [
    { id: 'cbt', icon: CheckSquare, nameEn: 'CBT & Exam Engine', nameHi: 'सीबीटी एवं परीक्षा इंजन', tag: 'High-Consequence Testing', descEn: 'High-throughput computer-based exam platform supporting multiple question formats, LAN isolation, and real-time result analytics.' },
    { id: 'biometric', icon: ShieldCheck, nameEn: 'Biometric Verification', nameHi: 'बायोमेट्रिक सत्यापन', tag: 'Anti-Impersonation', descEn: 'On-site fingerprint, face-match, and barcode admit card verification gateways to guarantee zero impersonation.' },
    { id: 'erp', icon: Laptop, nameEn: 'Campus ERP & Portals', nameHi: 'कैंपस ईआरपी एवं पोर्टल', tag: 'Institute Management', descEn: 'Integrated student admission, fee collection, gradebook, attendance, and exam management modules.' },
    { id: 'fullstack', icon: Code, nameEn: 'Full-Stack Development', nameHi: 'फुल-स्टैक डेवलपमेंट', tag: 'MERN & Python', descEn: 'Engineering scalable enterprise web portals, microservices architectures, and modern cloud dashboards.' },
    { id: 'mobile', icon: Smartphone, nameEn: 'Mobile App Engineering', nameHi: 'मोबाइल ऐप इंजीनियरिंग', tag: 'Android & iOS', descEn: 'Cross-platform React Native and Android native apps with offline sync and secure API backends.' },
    { id: 'ai', icon: Brain, nameEn: 'AI & Data Analytics', nameHi: 'एआई एवं डेटा एनालिटिक्स', tag: 'Smart Insights', descEn: 'Predictive candidate performance analytics, automated grading, and data visualization tools.' },
    { id: 'internship', icon: GraduationCap, nameEn: 'Student Internships', nameHi: 'छात्र इंटर्नशिप', tag: 'Industry Training', descEn: 'Practical project training for B.Tech/BCA students on live client software modules with expert mentorship.' },
    { id: 'security', icon: Lock, nameEn: 'Cyber Security & VAPT', nameHi: 'साइबर सुरक्षा एवं वीएपीटी', tag: 'Security Audit', descEn: 'Vulnerability assessment, code penetration testing, and ISO 27001 compliance auditing.' }
  ];

  // Domain-Specific Distinct Products, Services & Projects Map (100% Unique per Domain)
  const domainDataMap = {
    cbt: {
      domainName: 'CBT & Examination Engine',
      products: [
        { title: 'Netparam Proctored CBT Engine 4.0', category: 'Testing Engine', desc: 'Secure, high-throughput computer-based exam platform supporting multi-section questions, set randomization, and LAN isolation.' },
        { title: 'OmniTest Lockdown Proctor Browser', category: 'Kiosk Browser', desc: 'Lockdown proctored browser restricting screen capture, alt-tab switching, dual monitors, and unauthorized background apps.' },
        { title: 'Instant Merit & Score Compiler', category: 'Analytics Engine', desc: 'Real-time score calculation, negative marking processor, answer key objection manager, and instant percentile rank list renderer.' },
        { title: 'Question Bank Vault & Key Encryption Studio', category: 'Pre-Exam Tool', desc: 'Secure question paper authoring suite with AES-256 payload encryption and role-based access control.' }
      ],
      services: [
        { title: 'Turnkey Exam Center Operations', category: 'Exam Conduct', desc: 'On-site server deployment, surveillance setup, local network isolation, technical proctors, and candidate logs.' },
        { title: 'Question Paper Digitization & Cryptographic Delivery', category: 'Pre-Exam Service', desc: 'AES-256 encrypted question paper packaging and OTP-unlocked delivery to exam center server nodes.' },
        { title: 'Post-Exam Objection & Dispute Management', category: 'Post-Exam Service', desc: 'Candidate answer sheet transparency portal, challenge filing workflow, and automated objection compilation.' }
      ],
      projects: [
        { title: 'Statewide Recruitment Exam Drive 2026', lead: 'Government Recruitment Board', desc: 'Proctored computer-based examination for 35,000+ candidates across 25 regional exam centers in Rajasthan.' },
        { title: 'Technical University Semester Exam Conduct', lead: 'State University Project', desc: 'End-to-end semester exam delivery for 18,000+ engineering students with instant result generation.' },
        { title: 'Defense Recruitment CBT Mock Infrastructure', lead: 'Institutional Client', desc: 'Custom offline LAN-isolated mock testing engine deployed across 50+ preparatory institutes.' }
      ]
    },
    biometric: {
      domainName: 'Biometric Verification & Anti-Impersonation',
      products: [
        { title: 'GateCheck Aadhaar Thumbprint Scanner', category: 'Identity Gateway', desc: 'On-site fingerprint scanner at exam hall entry gates to verify candidate identity against registration database.' },
        { title: 'FaceID Hall Ticket AI Scanner', category: 'Facial Recognition', desc: 'Real-time camera verification comparing candidate face at gate against application registration photo.' },
        { title: 'Barcode Gate Pass & Entry Auditor', category: 'Entry Management', desc: 'Handheld barcode scanner logging gate entry timestamps, seating roll numbers, and identity verification status.' },
        { title: 'Iris Identification Verification Terminal', category: 'High-Security Biometrics', desc: 'Dual-eye iris scanner designed for high-consequence government examination gate screening.' }
      ],
      services: [
        { title: 'On-Site Biometric Hardware Deployment & Operations', category: 'Hardware Operations', desc: 'Supply, setup, and technical operation of 200+ biometric verification counters with trained ground staff.' },
        { title: 'Post-Exam Impersonation Audit & Forensic Reporting', category: 'Audit Services', desc: 'Biometric entry log analysis and forensic report generation to catch duplicate entries or impersonators.' },
        { title: 'Biometric Aadhaar Vault Integration Services', category: 'API Integration', desc: 'Connecting institutional verification gateways with Aadhaar offline verification framework.' }
      ],
      projects: [
        { title: 'Zero-Impersonation Police Recruitment Gate Audit', lead: 'State Police Board', desc: 'Deployed 180 biometric gate verification stations across Jaipur & Jodhpur with 100% impersonation prevention.' },
        { title: 'University Hall Ticket Facial Verification Drive', lead: 'Academic University', desc: 'Verified 22,000 examinees using AI facial match at hall entry gates prior to exam hall entry.' },
        { title: 'Government Staff Verification Portal', lead: 'Departmental Exam Drive', desc: 'Biometric thumbprint and identity verification for regional departmental promotion examinations.' }
      ]
    },
    erp: {
      domainName: 'Campus ERP & Institute Management',
      products: [
        { title: 'Netparam Campus ERP (IMS 5.0)', category: 'Institute Software', desc: 'Integrated cloud ERP managing online student admissions, fee collection, attendance, and hall tickets.' },
        { title: 'AutoMarks Transcript & CGPA Generator', category: 'Academic Module', desc: 'Automated evaluation gradebook processing SGPA/CGPA transcripts and digital degree certificates.' },
        { title: 'Smart Campus Attendance & Leave Portal', category: 'Administration Module', desc: 'RFID & Mobile app attendance management for faculty and students with automated parent SMS alerts.' },
        { title: 'Student Fee Gateway & Accounting Hub', category: 'FinTech Module', desc: 'Multi-bank online payment gateway integration with instant e-receipt generation and fee ledger reconciliation.' }
      ],
      services: [
        { title: 'Legacy Campus Data Migration & Integration', category: 'Data Services', desc: 'Seamless migration of 10+ years of historical student records, marks, and financial ledgers to cloud ERP.' },
        { title: 'Custom University ERP Module Engineering', category: 'Customization Service', desc: 'Tailored development for hostel management, library automation, transport routes, and placement cells.' },
        { title: 'Cloud ERP Hosting & 24/7 SLA Maintenance', category: 'Cloud Infrastructure', desc: 'Managed AWS/Azure cloud hosting, automated daily backups, and dedicated 24/7 technical support.' }
      ],
      projects: [
        { title: 'Statewide Technical College Digital ERP Rollout', lead: 'Polytechnic & Degree Colleges', desc: 'Digitized 12 engineering colleges managing 25,000+ active student profiles and online fee collections.' },
        { title: 'Autonomous University Examination Gradebook ERP', lead: 'Autonomous Campus', desc: 'Built automated transcript engine processing semester results for 15,000 university students.' },
        { title: 'Multi-Campus Online Fee Automation Portal', lead: 'Educational Trust', desc: 'Integrated multi-bank payment gateway collecting ₹15+ Crore annual tuition fees with zero reconciliation errors.' }
      ]
    },
    fullstack: {
      domainName: 'Full-Stack Web Development',
      products: [
        { title: 'Netparam Microservices Web Architecture Engine', category: 'Enterprise Web', desc: 'Scalable React 19 and Node.js microservices framework built for high-consequence enterprise applications.' },
        { title: 'Green Bharat Sustainability & Tree Tracking Portal', category: 'E-Governance Platform', desc: 'Statewide environmental tracking portal featuring geotagged tree plantation drives and citizen verification.' },
        { title: 'Social Bharat Network & Emergency Donor Portal', category: 'Community Platform', desc: 'Community networking platform connecting 50,000+ members with real-time emergency blood donor search.' },
        { title: 'Netparam E-Governance Executive Dashboard', category: 'Admin Analytics', desc: 'Real-time administrative portal visualizing departmental KPIs, project timelines, and workflow approvals.' }
      ],
      services: [
        { title: 'Bespoke Enterprise Web Portal Engineering', category: 'Web Engineering', desc: 'Full lifecycle custom web application development using React.js, Node.js, Python/Django, and PostgreSQL.' },
        { title: 'REST API & GraphQL Microservices Architecture', category: 'Backend Architecture', desc: 'Designing high-throughput API gateways, Redis cache layers, and OAuth2 security protocols.' },
        { title: 'Legacy Web Application Refactoring & Modernization', category: 'Software Refactoring', desc: 'Migrating monolithic legacy web applications to modern React single-page apps and microservices.' }
      ],
      projects: [
        { title: 'Social Bharat Emergency Blood & Help Network', lead: 'Community Impact Project', desc: 'Geolocation matching system connecting blood donors with patients across Rajasthan with emergency alerts.' },
        { title: 'Green Bharat Environmental Plantation Portal', lead: 'Forest & Eco Initiative', desc: 'Geotagged tree tracking portal monitoring 100,000+ planted saplings across government drives.' },
        { title: 'Regional Industrial Chamber Corporate Portal', lead: 'Chamber of Commerce', desc: 'High-performance web portal serving 4,000+ corporate members with directory search and event booking.' }
      ]
    },
    mobile: {
      domainName: 'Mobile App Engineering',
      products: [
        { title: 'Yoga Power Digital Health & Workout App', category: 'Mobile Application', desc: 'Cross-platform React Native fitness app with structured video session guides, trainer booking, and subscriber analytics.' },
        { title: 'Netparam Campus Companion Mobile App', category: 'Student Mobile Portal', desc: 'Mobile app for students to check real-time attendance alerts, fee receipts, assignment updates, and exam schedules.' },
        { title: 'Field Inspector Mobile Data Collection Suite', category: 'Enterprise Mobile', desc: 'Offline-first mobile data collection app with geo-fencing, GPS tagging, photo uploads, and SQLite local sync.' },
        { title: 'Proctor Mobile Room Supervisor Assistant', category: 'Invigilator App', desc: 'Mobile app for exam superintendents to monitor real-time candidate attendance and room supervisor alerts.' }
      ],
      services: [
        { title: 'Cross-Platform React Native App Engineering', category: 'Mobile Development', desc: 'Single codebase iOS and Android app development delivering native-smooth 60fps performance.' },
        { title: 'Native Android Java / Kotlin Engineering', category: 'Native Mobile', desc: 'Optimized native Android app development for low-end devices and hardware peripheral integration.' },
        { title: 'App Store & Google Play Store Publishing Setup', category: 'Deployment Services', desc: 'End-to-end store listing, security compliance checks, push notification setup, and crash analytics.' }
      ],
      projects: [
        { title: 'Yoga Power Global Mobile Health App Launch', lead: 'Consumer Health Product', desc: 'Crossed 50,000+ active downloads on Play Store with daily streaming workout sessions.' },
        { title: 'Mobile Campus Connect Push Alert Network', lead: 'University Campus Project', desc: 'Deployed real-time mobile push notification infrastructure delivering exam alerts to 10,000+ students.' },
        { title: 'Statewide Environmental Field Inspection Mobile App', lead: 'Government Inspector Tool', desc: 'Offline-capable mobile app used by field officers to log 30,000+ geotagged inspection audit reports.' }
      ]
    },
    ai: {
      domainName: 'AI & Data Analytics',
      products: [
        { title: 'ExamScore Predictive Analytics & Topic Mapper', category: 'AI Analytics Engine', desc: 'AI predictive candidate performance engine identifying subject weaknesses and recommending practice sets.' },
        { title: 'AutoGrade Handwritten Answer Script AI', category: 'Computer Vision & LLM', desc: 'OCR & LLM-assisted evaluation engine for grading descriptive handwritten university answer scripts.' },
        { title: 'CoSiST Smart Traffic Computer Vision System', category: 'Smart City Vision AI', desc: 'AI-driven real-time traffic signal timing optimizer using camera feeds and vehicle queue density estimation.' },
        { title: 'Netparam Sentiment & Student Survey NLP Analyzer', category: 'Natural Language Processing', desc: 'NLP text analysis engine analyzing thousands of student feedback responses to gauge course satisfaction.' }
      ],
      services: [
        { title: 'Custom AI / Machine Learning Model Training', category: 'AI Engineering', desc: 'Building custom PyTorch and TensorFlow models for pattern recognition, forecasting, and classification.' },
        { title: 'PowerBI & D3.js Executive Analytics Dashboards', category: 'Business Intelligence', desc: 'Designing interactive visual dashboards for university deans, corporate executives, and project managers.' },
        { title: 'Computer Vision & Edge AI Deployment Services', category: 'Edge Computing', desc: 'Optimizing OpenCV and TensorRT vision algorithms for real-time edge processing devices.' }
      ],
      projects: [
        { title: 'Smart City Intelligent Traffic Signal Optimization', lead: 'Smart City Initiative', desc: 'Deployed computer vision density estimation across 12 busiest urban traffic intersections.' },
        { title: 'Automated Exam Script Grading AI Evaluation Pilot', lead: 'University R&D Project', desc: 'Evaluated 5,000 handwritten answer booklets with 98.4% correlation against senior human evaluators.' },
        { title: 'Institutional Candidate Performance Analytics Hub', lead: 'Educational Assessment Hub', desc: 'Processed 1 Million+ test data points to generate actionable student improvement insights for colleges.' }
      ]
    },
    internship: {
      domainName: 'Student Internships & Technical Training',
      products: [
        { title: 'Full-Stack MERN Developer Internship Track', category: 'Training Curriculum', desc: '6-month intensive training program covering HTML5/CSS3, React 19, Node.js, Express APIs, and MongoDB.' },
        { title: 'Python, Django & Machine Learning Track', category: 'Training Curriculum', desc: 'Practical hands-on data science curriculum covering Python 3, Django REST framework, Pandas, and ML models.' },
        { title: 'Java J2EE & Spring Boot Enterprise Track', category: 'Training Curriculum', desc: 'Enterprise Java software development, Spring Boot microservices, Hibernate ORM, and SQL management.' },
        { title: 'Cyber Security & VAPT Ethical Hacking Track', category: 'Training Curriculum', desc: 'Practical network security, web penetration testing, OWASP Top 10 vulnerabilities, and Linux CLI.' }
      ],
      services: [
        { title: 'Live Client Software Project Incubation', category: 'Internship Service', desc: 'Working directly on live production client software modules under 1-on-1 mentorship of senior engineers.' },
        { title: 'College Campus Technical Bootcamps & MoUs', category: 'Institutional Training', desc: 'Conducting 30-day hands-on technical workshops and signing skill-partner MoUs with engineering colleges.' },
        { title: 'Corporate Placement Assistance & Coding Prep', category: 'Career Support', desc: 'Technical resume building, DSA problem solving, mock technical interviews, and corporate referrals.' }
      ],
      projects: [
        { title: 'Jaipur Engineering Student Project Incubator', lead: 'Regional Skill Drive', desc: 'Mentored 5,000+ B.Tech & BCA students on real commercial web software codebases since 2012.' },
        { title: 'Shekhawati Technical Skill Enhancement Drive', lead: 'Rural Tech Empowerment', desc: 'Trained 1,200+ engineering students in Sikar on modern full-stack web and cloud API technologies.' },
        { title: 'Annual Netparam Hackathon & CodeFest Tournament', lead: 'Tech Community Event', desc: 'Hosted 500+ student coders building real-world web applications within 36-hour sprint challenges.' }
      ]
    },
    security: {
      domainName: 'Cyber Security & VAPT',
      products: [
        { title: 'Netparam VAPT Scanner Suite', category: 'Security Scanner', desc: 'Automated web application security vulnerability scanner checking for OWASP Top 10 security flaws.' },
        { title: 'SecurePortal WAF Lock Gateway', category: 'Web Firewall', desc: 'Web Application Firewall (WAF) filtering malicious SQL injection, XSS payloads, and DDoS floods.' },
        { title: 'Source Code Security & Dependency Auditor', category: 'SAST Security Tool', desc: 'Static application security testing (SAST) tool inspecting source code and open-source packages.' },
        { title: 'Exam Network Lock Sentinel', category: 'LAN Security', desc: 'Network monitoring utility detecting unauthorized Wi-Fi access, proxy servers, or USB peripherals during exams.' }
      ],
      services: [
        { title: 'ISO 27001 Security Audit & VAPT Certification', category: 'Security Audit', desc: 'Comprehensive penetration testing, vulnerability assessment, and official security compliance clearance.' },
        { title: 'CBT Exam Portal Anti-DDoS & Infrastructure Hardening', category: 'Infrastructure Defense', desc: 'Server OS hardening, SSL/TLS 1.3 setup, rate-limiting, and DDoS defense during live exam drives.' },
        { title: 'Corporate Cyber Security Training & Phishing Simulations', category: 'Security Awareness', desc: 'Employee security awareness training and simulated phishing campaigns for enterprise staff.' }
      ],
      projects: [
        { title: 'Government Sector Web Portal VAPT Security Audit', lead: 'Public Sector Audit', desc: 'Conducted security penetration testing for 15 municipal and recruitment exam web portals.' },
        { title: 'Banking Application Penetration Testing & Compliance', lead: 'FinTech Security', desc: 'Identified and remediated 34 security vulnerabilities prior to enterprise cloud deployment.' },
        { title: 'CBT Examination LAN Network Security Hardening', lead: 'High-Consequence Testing', desc: 'Secured LAN exam network against packet sniffing, spoofing, and MITM attacks across 20 centers.' }
      ]
    }
  };

  // Helper arrays for global search & all-item lists
  const allProductsList = Object.values(domainDataMap).flatMap(d => d.products);
  const allServicesList = Object.values(domainDataMap).flatMap(d => d.services);
  const allProjectsList = Object.values(domainDataMap).flatMap(d => d.projects);

  // Netparam Events List
  const eventsList = [
    { title: 'Full-Stack MERN Technical Bootcamp', date: 'October 20-22, 2026', loc: 'Netparam Jaipur Office', desc: '3-day hands-on workshop on React 19, Node.js APIs, and MongoDB deployment.' },
    { title: 'Cyber Security & Biometric Exam Drive Workshop', date: 'November 10, 2026', loc: 'Netparam Sikar Lab', desc: 'Technical seminar on anti-cheating exam security and proctoring protocols.' },
    { title: 'Winter Internship & Project Admission Drive 2026', date: 'December 01, 2026', loc: 'Jaipur & Sikar Hubs', desc: 'Screening drive for B.Tech, BCA, and MCA students for 6-month live project internships.' }
  ];

  // Handle Search Submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setActiveModal('search');
    }
  };

  // Filter Search Items
  const filteredProducts = allProductsList.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.desc.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredServices = allServicesList.filter(s => s.title.toLowerCase().includes(searchQuery.toLowerCase()) || s.desc.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="cdac-root">
      
      {/* 1. TOP HEADER & ANNOUNCEMENT TICKER */}
      <div className="top-header-bar">
        <div className="container top-header-container">
          
          {/* Marquee Ticker */}
          <div className="ticker-wrapper">
            <span className="ticker-badge">UPDATES</span>
            <div className="ticker-scroll-area">
              <div className="ticker-text-marquee">
                <a href="#content" className="ticker-link">
                  <Play size={10} color="#F97316" />
                  <strong>CBT Exam Drive 2026</strong> {lang === 'en' ? '- Online & Offline Examination Platform Live' : '- ऑनलाइन और ऑफलाइन परीक्षा प्लेटफॉर्म लाइव'}
                </a>
                <span style={{ opacity: 0.4 }}>|</span>
                <a href="#content" className="ticker-link">
                  <Play size={10} color="#F97316" />
                  <strong>Netparam Techzine</strong> {lang === 'en' ? '- Software Engineering & Tech Digest' : '- सॉफ्टवेयर इंजीनियरिंग एवं टेक पत्रिका'}
                </a>
                <span style={{ opacity: 0.4 }}>|</span>
                <a href="#content" className="ticker-link">
                  <Play size={10} color="#F97316" />
                  <strong>Internship Admissions</strong> {lang === 'en' ? '- MERN, Python & Cyber Security Batches Open' : '- एमईआरएन, पायथन और साइबर सुरक्षा बैच खुले हैं'}
                </a>
              </div>
            </div>
          </div>

          {/* Accessibility & Language Utilities */}
          <div className="top-nav-utilities">
            <div className="accessibility-links">
              <a href="#nav">{lang === 'en' ? 'Skip to navigation' : 'नेविगेशन पर जाएं'}</a>
              <span>|</span>
              <a href="#content">{lang === 'en' ? 'Skip to main content' : 'मुख्य विषय पर जाएं'}</a>
              <span>|</span>
              <button 
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`} 
                onClick={() => setLang('en')}
              >
                English
              </button>
              <span>|</span>
              <button 
                className={`lang-btn ${lang === 'hi' ? 'active' : ''}`} 
                onClick={() => setLang('hi')}
              >
                हिन्दी
              </button>
            </div>

            {/* Quick Search */}
            <form onSubmit={handleSearchSubmit} className="header-search-form">
              <input 
                type="text" 
                placeholder={lang === 'en' ? 'Search Netparam...' : 'खोजें...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="header-search-btn" aria-label="Search">
                <Search size={14} />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav className="netparam-navbar" id="nav">
        <div className="container netparam-nav-container">
          
          <a href="#" className="netparam-brand">
            <img src="/netparam-logo.png" alt="Netparam Logo" style={{ height: '44px', width: 'auto', objectFit: 'contain' }} />
          </a>

          <ul className="netparam-main-links">
            <li>
              <a 
                href="#" 
                className={navActive === 'home' ? 'active' : ''} 
                onClick={(e) => {
                  e.preventDefault();
                  setNavActive('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                aria-label="Home"
              >
                <House size={16} />
              </a>
            </li>
            <span className="nav-separator"></span>
            <li>
              <a 
                href="#about"
                className={navActive === 'about' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  setNavActive('about');
                  setCenterTab('history');
                  const el = document.getElementById('about');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {lang === 'en' ? 'About Us' : 'हमारे बारे में'}
              </a>
            </li>
            <span className="nav-separator"></span>
            <li>
              <a 
                href="#products" 
                className={navActive === 'products' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  setNavActive('products');
                  setActiveModal('products');
                }}
              >
                {lang === 'en' ? 'Products & Services' : 'उत्पाद एवं सेवाएं'}
              </a>
            </li>
            <span className="nav-separator"></span>
            <li>
              <a 
                href="#about" 
                className={navActive === 'cbt' ? 'active' : ''}
                onClick={(e) => { 
                  e.preventDefault(); 
                  setNavActive('cbt');
                  setCenterTab('cbt'); 
                  const el = document.getElementById('about'); 
                  if (el) el.scrollIntoView({ behavior: 'smooth' }); 
                }}
              >
                {lang === 'en' ? 'Examinations' : 'परीक्षाएं'}
              </a>
            </li>
            <span className="nav-separator"></span>
            <li>
              <a 
                href="#about" 
                className={navActive === 'internship' ? 'active' : ''}
                onClick={(e) => { 
                  e.preventDefault(); 
                  setNavActive('internship');
                  setCenterTab('internship'); 
                  const el = document.getElementById('about'); 
                  if (el) el.scrollIntoView({ behavior: 'smooth' }); 
                }}
              >
                {lang === 'en' ? 'Training & Internships' : 'प्रशिक्षण एवं इंटर्नशिप'}
              </a>
            </li>
            <span className="nav-separator"></span>
            <li>
              <a 
                href="#projects" 
                className={navActive === 'projects' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  setNavActive('projects');
                  setActiveModal('projects');
                }}
              >
                {lang === 'en' ? 'Projects' : 'परियोजनाएं'}
              </a>
            </li>
            <span className="nav-separator"></span>
            <li>
              <a 
                href="#contact" 
                className={navActive === 'contact' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  setNavActive('contact');
                  setActiveModal('contact');
                }}
              >
                {lang === 'en' ? 'Contact Us' : 'संपर्क करें'}
              </a>
            </li>
          </ul>

        </div>
      </nav>

      {/* 3. CENTER HERO BANNER (PARALLAX + BREADCRUMBS) */}
      <section className="center-hero-banner" style={{ backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.92) 0%, rgba(30, 41, 59, 0.85) 100%), url(${currentCenter.heroBg})` }}>
        <div className="container hero-banner-content">
          
          <div className="center-title-group">
            <h1>{lang === 'en' ? currentCenter.nameEn : currentCenter.nameHi}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ color: '#93C5FD', fontWeight: 600, fontSize: '0.95rem' }}>
                📍 {currentCenter.location} • {currentCenter.lead}
              </span>
              
              {/* Dynamic Regional Hub Switcher */}
              <div className="center-selector-dropdown">
                <Globe size={14} />
                <span>Switch Regional Hub:</span>
                <select value={selectedCenter} onChange={(e) => setSelectedCenter(e.target.value)}>
                  <option value="JP">Jaipur (Head Office)</option>
                  <option value="SK">Sikar (Training Hub)</option>
                  <option value="KT">Kota (Assessment Unit)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="center-breadcrumb">
            <a href="#"><House size={14} /></a>
            <span>/</span>
            <span>{lang === 'en' ? 'Regional Hubs' : 'क्षेत्रीय केंद्र'}</span>
            <span>/</span>
            <span style={{ color: '#FFF', fontWeight: 700 }}>{selectedCenter}</span>
            <button className="print-btn" onClick={() => setActiveModal('print')} title="Print page">
              <Printer size={14} />
              <span>{lang === 'en' ? 'Print' : 'प्रिंट'}</span>
            </button>
          </div>

        </div>
      </section>

      {/* 4. STICKY PRACTICE DOMAIN NAVIGATION BAR */}
      <nav className="sticky-thematic-bar">
        <div className="container-fluid" style={{ padding: 0 }}>
          <div className="thematic-grid-nav">
            {thematicAreas.map((item) => {
              const IconComp = item.icon;
              return (
                <button 
                  key={item.id} 
                  className={`thematic-item-btn ${activeThematic === item.id ? 'active' : ''}`}
                  onClick={() => setActiveThematic(activeThematic === item.id ? null : item.id)}
                >
                  <div className="thematic-icon-wrapper">
                    <IconComp size={20} />
                  </div>
                  <span className="thematic-label">
                    {lang === 'en' ? item.nameEn : item.nameHi}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* 5. MAIN CONTENT SECTION (NETPARAM PROFILE + 5 SIDE ACTION CARDS GRID) */}
      <main className="main-content-section" id="content">
        <div className="container">
          
          {/* Dynamic Selected Practice Domain Banner */}
          {activeThematic && (() => {
            const activeDomain = thematicAreas.find(a => a.id === activeThematic);
            if (!activeDomain) return null;
            const DomainIcon = activeDomain.icon;
            return (
              <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', color: '#FFF', borderRadius: '16px', padding: '28px 32px', marginBottom: '32px', borderLeft: '6px solid #2563EB', position: 'relative', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.15)' }}>
                <button 
                  onClick={() => setActiveThematic(null)}
                  style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(255,255,255,0.1)', border: 'none', color: '#FFF', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                >
                  <X size={18} />
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                  <div style={{ background: '#2563EB', color: '#FFF', width: 44, height: 44, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <DomainIcon size={24} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#F97316', fontWeight: 700, textTransform: 'uppercase' }}>{activeDomain.tag}</span>
                    <h3 style={{ margin: 0, fontSize: '1.6rem', fontWeight: 700, color: '#FFF' }}>{lang === 'en' ? activeDomain.nameEn : activeDomain.nameHi}</h3>
                  </div>
                </div>
                <p style={{ color: '#94A3B8', fontSize: '1rem', margin: '0 0 20px', maxWidth: '800px' }}>
                  {activeDomain.descEn}
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button className="action-card-btn" style={{ padding: '8px 20px' }} onClick={() => setActiveModal('contact')}>
                    Inquire for {activeDomain.nameEn}
                  </button>
                  <button className="print-btn" style={{ background: 'rgba(255,255,255,0.15)', color: '#FFF', padding: '8px 20px' }} onClick={() => setActiveModal('products')}>
                    View Related Products & Projects
                  </button>
                </div>
              </div>
            );
          })()}

          <div className="center-profile-grid">
            
            {/* Left Column: Netparam Overview Card */}
            <div className="profile-main-card" id="about">
              
              <div className="profile-header-group">
                <img src={currentCenter.emblem} alt="Emblem" className="profile-emblem" />
                <div className="profile-title-area">
                  <h2>{lang === 'en' ? currentCenter.nameEn : currentCenter.nameHi}</h2>
                  <div className="profile-subtitle">
                    ISO 9001:2015 Certified Examination, Software & Technical Training Provider
                  </div>
                </div>
              </div>

              {/* Interactive Tabs */}
              <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', borderBottom: '1px solid #E2E8F0', paddingBottom: '10px' }}>
                <button 
                  className={`lang-btn ${centerTab === 'history' ? 'active' : ''}`}
                  style={{ padding: '8px 16px', borderRadius: '6px', fontSize: '0.88rem' }}
                  onClick={() => setCenterTab('history')}
                >
                  Overview & History
                </button>
                <button 
                  className={`lang-btn ${centerTab === 'cbt' ? 'active' : ''}`}
                  style={{ padding: '8px 16px', borderRadius: '6px', fontSize: '0.88rem' }}
                  onClick={() => setCenterTab('cbt')}
                >
                  CBT Exam Systems
                </button>
                <button 
                  className={`lang-btn ${centerTab === 'internship' ? 'active' : ''}`}
                  style={{ padding: '8px 16px', borderRadius: '6px', fontSize: '0.88rem' }}
                  onClick={() => setCenterTab('internship')}
                >
                  Student Internship Hub
                </button>
              </div>

              {/* Tab 1: Overview */}
              {centerTab === 'history' && (
                <div className="profile-body-text">
                  <p>{lang === 'en' ? currentCenter.descEn : currentCenter.descHi}</p>
                  
                  <h4 style={{ color: '#0F172A', fontWeight: 700, marginTop: '24px', marginBottom: '14px' }}>
                    🌟 Core Pillars of Netparam Technologies:
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {currentCenter.achievementsEn.map((ach, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.94rem', color: '#334155' }}>
                        <CheckCircle2 size={18} color="#2563EB" style={{ flexShrink: 0 }} />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 2: CBT Exam Systems */}
              {centerTab === 'cbt' && (
                <div className="profile-body-text" id="examinations">
                  <p>
                    Netparam Technologies provides robust computer-based examination platforms for universities, government recruitment boards, and autonomous institutes with complete tamper-proof security.
                  </p>
                  <div style={{ background: '#F1F5F9', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #2563EB', marginTop: '16px' }}>
                    <div style={{ fontWeight: 700, color: '#0F172A' }}>CBT Exam Delivery Lifecycle:</div>
                    <div style={{ fontSize: '0.88rem', color: '#475569', marginTop: '4px' }}>
                      1. Pre-Exam Student Registration & Hall Ticket Portal<br />
                      2. Biometric Entry Verification & LAN Isolated Exam Conduct<br />
                      3. Instant Response Sheet Processing, Dispute Resolution & Merit Lists.
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Internship Hub */}
              {centerTab === 'internship' && (
                <div className="profile-body-text" id="training">
                  <p>
                    Our practical industry internship programs expose engineering (B.Tech) and computer application (BCA/MCA) students to real project environments under expert developer guidance.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '16px' }}>
                    <div style={{ padding: '12px', background: '#EFF6FF', borderRadius: '8px' }}>
                      <strong style={{ color: '#2563EB' }}>React JS (MERN Stack)</strong>
                      <div style={{ fontSize: '0.82rem', color: '#64748B' }}>Frontend & Node.js Backend</div>
                    </div>
                    <div style={{ padding: '12px', background: '#EFF6FF', borderRadius: '8px' }}>
                      <strong style={{ color: '#2563EB' }}>Python & Data Science</strong>
                      <div style={{ fontSize: '0.82rem', color: '#64748B' }}>Django, Pandas, ML Models</div>
                    </div>
                    <div style={{ padding: '12px', background: '#EFF6FF', borderRadius: '8px' }}>
                      <strong style={{ color: '#2563EB' }}>Java J2EE & Spring</strong>
                      <div style={{ fontSize: '0.82rem', color: '#64748B' }}>Enterprise Backend Systems</div>
                    </div>
                    <div style={{ padding: '12px', background: '#EFF6FF', borderRadius: '8px' }}>
                      <strong style={{ color: '#2563EB' }}>Cyber Security & VAPT</strong>
                      <div style={{ fontSize: '0.82rem', color: '#64748B' }}>Security Auditing & Penetration</div>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: 5 Quick Action Grid Cards */}
            <div className="side-action-column">
              
              {/* Card 1: Products */}
              <div className="action-card">
                <div className="action-card-left">
                  <div className="action-icon-circle">
                    <Box size={24} />
                  </div>
                  <div>
                    <div className="action-card-title">{lang === 'en' ? 'Products' : 'उत्पाद'}</div>
                    <div className="action-card-desc">CBT Engine, Campus ERP, Mobile Apps</div>
                  </div>
                </div>
                <button className="action-card-btn" onClick={() => setActiveModal('products')}>
                  {lang === 'en' ? 'Know More..' : 'अधिक जानें..'}
                </button>
              </div>

              {/* Card 2: Services */}
              <div className="action-card">
                <div className="action-card-left">
                  <div className="action-icon-circle" style={{ background: '#E0F2FE', color: '#0284C7' }}>
                    <Wrench size={24} />
                  </div>
                  <div>
                    <div className="action-card-title">{lang === 'en' ? 'Services' : 'सेवाएं'}</div>
                    <div className="action-card-desc">Exam Support, Biometric Audit, SQA</div>
                  </div>
                </div>
                <button className="action-card-btn" onClick={() => setActiveModal('services')}>
                  {lang === 'en' ? 'Know More..' : 'अधिक जानें..'}
                </button>
              </div>

              {/* Card 3: Projects */}
              <div className="action-card">
                <div className="action-card-left">
                  <div className="action-icon-circle" style={{ background: '#DCFCE7', color: '#16A34A' }}>
                    <Rocket size={24} />
                  </div>
                  <div>
                    <div className="action-card-title">{lang === 'en' ? 'Projects' : 'परियोजनाएं'}</div>
                    <div className="action-card-desc">Recruitment Drives, University ERP</div>
                  </div>
                </div>
                <button className="action-card-btn" onClick={() => setActiveModal('projects')}>
                  {lang === 'en' ? 'Know More..' : 'अधिक जानें..'}
                </button>
              </div>

              {/* Card 4: Events */}
              <div className="action-card">
                <div className="action-card-left">
                  <div className="action-icon-circle" style={{ background: '#FEF3C7', color: '#D97706' }}>
                    <Calendar size={24} />
                  </div>
                  <div>
                    <div className="action-card-title">{lang === 'en' ? 'Events' : 'कार्यक्रम'}</div>
                    <div className="action-card-desc">Tech Bootcamps, Intern Drives</div>
                  </div>
                </div>
                <button className="action-card-btn" onClick={() => setActiveModal('events')}>
                  {lang === 'en' ? 'Know More..' : 'अधिक जानें..'}
                </button>
              </div>

              {/* Card 5: Contact Us */}
              <div className="action-card">
                <div className="action-card-left">
                  <div className="action-icon-circle" style={{ background: '#F3E8FF', color: '#9333EA' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="action-card-title">{lang === 'en' ? 'Contact Us' : 'संपर्क करें'}</div>
                    <div className="action-card-desc">Jaipur HQ & Sikar Branch</div>
                  </div>
                </div>
                <button className="action-card-btn" onClick={() => setActiveModal('contact')}>
                  {lang === 'en' ? 'Know More..' : 'अधिक जानें..'}
                </button>
              </div>

            </div>

          </div>

        </div>
      </main>

      {/* 6. PRACTICE DOMAIN SHOWCASE GRID */}
      <section className="thematic-showcase-section">
        <div className="container">
          
          <div className="section-heading-block">
            <span className="section-tag-badge">PRACTICE DOMAINS</span>
            <h2 className="section-title-large">
              {lang === 'en' ? 'Core Capabilities & Technological Engineering' : 'मुख्य क्षमताएं एवं प्रौद्योगिकी इंजीनियरिंग'}
            </h2>
          </div>

          <div className="thematic-cards-grid">
            {thematicAreas.map((area) => {
              const IconComponent = area.icon;
              const isSelected = activeThematic === area.id;
              
              const handleDomainClick = () => {
                setActiveThematic(area.id);
                const el = document.getElementById('content');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              };

              return (
                <div 
                  className={`domain-card ${isSelected ? 'selected-active-domain' : ''}`} 
                  key={area.id}
                  style={{ cursor: 'pointer', border: isSelected ? '2px solid #2563EB' : '1px solid #E2E8F0', background: isSelected ? '#F0F9FF' : '#F8FAFC' }}
                  onClick={handleDomainClick}
                >
                  <div>
                    <div className="domain-card-header">
                      <div className="thematic-icon-wrapper" style={{ width: 44, height: 44, background: isSelected ? '#2563EB' : '#F1F5F9', color: isSelected ? '#FFF' : '#2563EB' }}>
                        <IconComponent size={22} />
                      </div>
                      <div>
                        <div className="domain-card-title">{lang === 'en' ? area.nameEn : area.nameHi}</div>
                        <span style={{ fontSize: '0.72rem', color: '#F97316', fontWeight: 700 }}>{area.tag}</span>
                      </div>
                    </div>
                    <p className="domain-card-desc">{lang === 'en' ? area.descEn : area.descEn}</p>
                  </div>

                  <div className="domain-card-footer">
                    <button 
                      className="lang-btn"
                      onClick={(e) => { e.stopPropagation(); handleDomainClick(); }}
                      style={{ 
                        background: isSelected ? '#DCFCE7' : '#F1F5F9', 
                        color: isSelected ? '#15803D' : '#0F172A',
                        fontSize: '0.76rem',
                        fontWeight: 700,
                        padding: '4px 10px',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      {isSelected ? '🟢 Active Practice' : '⚡ Activate Practice'}
                    </button>
                    <button className="print-btn" style={{ background: '#2563EB' }} onClick={(e) => { e.stopPropagation(); handleDomainClick(); }}>
                      Details <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. CERTIFICATIONS & INSTITUTIONAL PARTNERS CAROUSEL */}
      <section className="partners-section">
        <div className="container">
          <div style={{ textTransform: 'uppercase', fontSize: '0.78rem', letterSpacing: '0.1em', textAlign: 'center', marginBottom: '20px', color: '#93C5FD' }}>
            ISO Certified • Academic & Institutional MoUs • Enterprise Standards
          </div>

          <div className="partners-carousel-track">
            <div className="partner-logo-box">🎖️ ISO 9001:2015 Certified</div>
            <div className="partner-logo-box">🏛️ University Exam Alliances</div>
            <div className="partner-logo-box">💻 Technical College MoUs</div>
            <div className="partner-logo-box">🛡️ Biometric Security Standards</div>
            <div className="partner-logo-box">🌐 Cloud Enterprise Platform</div>
          </div>
        </div>
      </section>

      {/* 8. COMPREHENSIVE FOOTER WITH THREE TIERS */}
      <footer className="netparam-footer">
        
        {/* Tier 1: Main Footer Links & Map */}
        <div className="footer-tier-main">
          <div className="container footer-grid-3col">
            
            {/* Col 1: Regional Hubs */}
            <div>
              <div className="footer-col-title">Regional Hubs</div>
              <ul className="centers-list-grid">
                <li><a href="#content" onClick={() => setSelectedCenter('JP')}>Jaipur Head Office</a></li>
                <li><a href="#content" onClick={() => setSelectedCenter('SK')}>Sikar Branch Hub</a></li>
                <li><a href="#content" onClick={() => setSelectedCenter('KT')}>Kota Assessment Unit</a></li>
                <li><a href="#content" onClick={() => setSelectedCenter('JP')}>Jodhpur Examination Center</a></li>
                <li><a href="#content" onClick={() => setSelectedCenter('JP')}>Udaipur Partner Lab</a></li>
                <li><a href="#content" onClick={() => setSelectedCenter('JP')}>Bikaner Operations Desk</a></li>
                <li><a href="#content" onClick={() => setSelectedCenter('JP')}>Ajmer Technical Center</a></li>
                <li><a href="#content" onClick={() => setSelectedCenter('JP')}>Delhi NCR Liaison</a></li>
              </ul>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <div className="footer-col-title">Quick Links</div>
              <ul className="footer-links-list">
                <li><a href="#about">{lang === 'en' ? 'About Us' : 'हमारे बारे में'}</a></li>
                <li><a href="#products" onClick={() => setActiveModal('products')}>{lang === 'en' ? 'Products' : 'उत्पाद'}</a></li>
                <li><a href="#examinations">{lang === 'en' ? 'CBT Examinations' : 'परीक्षाएं'}</a></li>
                <li><a href="#training">{lang === 'en' ? 'Student Internships' : 'प्रशिक्षण'}</a></li>
                <li><a href="#projects" onClick={() => setActiveModal('projects')}>{lang === 'en' ? 'Projects' : 'परियोजनाएं'}</a></li>
                <li><a href="#events" onClick={() => setActiveModal('events')}>{lang === 'en' ? 'Events' : 'कार्यक्रम'}</a></li>
                <li><a href="#contact" onClick={() => setActiveModal('contact')}>{lang === 'en' ? 'Contact Us' : 'संपर्क करें'}</a></li>
              </ul>
            </div>

            {/* Col 3: Contact & Map */}
            <div>
              <div className="footer-col-title">{lang === 'en' ? 'Headquarters Location' : 'मुख्यालय स्थान'}</div>
              <div className="footer-map-card">
                <iframe 
                  src={currentCenter.mapUrl} 
                  title="Netparam Location Map" 
                  className="map-iframe"
                  loading="lazy"
                ></iframe>
                <p style={{ fontSize: '0.82rem', color: '#E2E8F0', margin: 0, lineHeight: 1.5 }}>
                  <strong>{currentCenter.nameEn}</strong><br />
                  {currentCenter.address}<br />
                  📞 Phone: {currentCenter.phone} | ✉️ Email: hr@netparam.in
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Tier 2: Bottom Copyright & Policies */}
        <div className="footer-bottom-bar">
          <div className="container">
            <div className="footer-bottom-links">
              <a href="#">Help</a> |
              <a href="#">Website Policies</a> |
              <a href="#">Terms & Conditions</a> |
              <a href="#">Reach Us</a> |
              <a href="#">Sitemap</a>
            </div>
            <div>
              Website owned & maintained by: <strong>NETPARAM TECHNOLOGIES PVT. LTD.</strong><br />
              © 2012 - {new Date().getFullYear()} Netparam Technologies. All rights reserved.
            </div>
          </div>
        </div>

      </footer>

      {/* 9. SIDE FLOATING UTILITY DRAWER BUTTON */}
      <button 
        className="floating-side-drawer-btn"
        onClick={() => setIsSectorDrawerOpen(!isSectorDrawerOpen)}
        title="Sector & Profile Filters"
      >
        <Filter size={18} />
        <span>Sectors</span>
      </button>

      {/* SIDE DRAWER MODAL */}
      {isSectorDrawerOpen && (
        <div className="modal-overlay" onClick={() => setIsSectorDrawerOpen(false)}>
          <div className="modal-card animate-fade-in" style={{ maxWidth: '500px' }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsSectorDrawerOpen(false)} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', cursor: 'pointer' }}>
              <X size={20} />
            </button>
            <h3 style={{ color: '#0F172A', marginBottom: '16px' }}>Target Sectors & Visitor Profiles</h3>
            
            <h4 style={{ fontSize: '0.95rem', color: '#2563EB', marginBottom: '8px' }}>🏢 By Sector:</h4>
            <ul style={{ listStyleType: 'square', paddingLeft: '20px', fontSize: '0.88rem', color: '#334155', lineHeight: 1.8 }}>
              <li>Universities & Autonomous Colleges</li>
              <li>Government Recruitment Boards</li>
              <li>Enterprise Software Clients</li>
              <li>Coaching & Assessment Hubs</li>
            </ul>

            <h4 style={{ fontSize: '0.95rem', color: '#2563EB', marginTop: '16px', marginBottom: '8px' }}>👤 By User Profile:</h4>
            <ul style={{ listStyleType: 'square', paddingLeft: '20px', fontSize: '0.88rem', color: '#334155', lineHeight: 1.8 }}>
              <li>Engineering & BCA Students</li>
              <li>Controller of Examinations</li>
              <li>IT & Software Hiring Partners</li>
              <li>Career Seekers & Exam Candidates</li>
            </ul>
          </div>
        </div>
      )}

      {/* MODAL 1: PRODUCTS MODAL */}
      {activeModal === 'products' && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-card animate-fade-in" style={{ maxWidth: '750px' }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveModal(null)} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', cursor: 'pointer' }}>
              <X size={24} />
            </button>
            <span className="ticker-badge" style={{ marginBottom: '12px', display: 'inline-block' }}>PRODUCTS PORTFOLIO</span>
            <h2 style={{ color: '#0F172A', margin: '0 0 16px' }}>
              {activeThematic && domainDataMap[activeThematic] 
                ? `${domainDataMap[activeThematic].domainName} Products`
                : 'Netparam Software & Exam Platforms'}
            </h2>
            
            {/* Domain Filter Buttons inside Modal */}
            <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '16px', borderBottom: '1px solid #E2E8F0' }}>
              <button 
                className={`lang-btn ${!activeThematic ? 'active' : ''}`}
                style={{ padding: '4px 12px', fontSize: '0.78rem', whiteSpace: 'nowrap' }}
                onClick={() => setActiveThematic(null)}
              >
                All Products ({allProductsList.length})
              </button>
              {thematicAreas.map(t => (
                <button 
                  key={t.id}
                  className={`lang-btn ${activeThematic === t.id ? 'active' : ''}`}
                  style={{ padding: '4px 12px', fontSize: '0.78rem', whiteSpace: 'nowrap' }}
                  onClick={() => setActiveThematic(t.id)}
                >
                  {t.nameEn}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '55vh', overflowY: 'auto', paddingRight: '4px' }}>
              {(activeThematic && domainDataMap[activeThematic] 
                ? domainDataMap[activeThematic].products 
                : allProductsList).map((p, idx) => (
                <div key={idx} style={{ padding: '16px', background: '#F8FAFC', borderRadius: '8px', borderLeft: '4px solid #2563EB' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0F172A' }}>{p.title}</div>
                  <span style={{ fontSize: '0.75rem', color: '#F97316', fontWeight: 700 }}>{p.category}</span>
                  <div style={{ fontSize: '0.88rem', color: '#475569', marginTop: '6px' }}>{p.desc}</div>
                </div>
              ))}
            </div>

            <button className="action-card-btn" style={{ width: '100%', marginTop: '20px', padding: '12px' }} onClick={() => setActiveModal('contact')}>
              Inquire for Product Licensing & Demo
            </button>
          </div>
        </div>
      )}

      {/* MODAL 2: SERVICES MODAL */}
      {activeModal === 'services' && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-card animate-fade-in" style={{ maxWidth: '750px' }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveModal(null)} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', cursor: 'pointer' }}>
              <X size={24} />
            </button>
            <span className="ticker-badge" style={{ background: '#0284C7', marginBottom: '12px', display: 'inline-block' }}>SERVICES</span>
            <h2 style={{ color: '#0F172A', margin: '0 0 16px' }}>
              {activeThematic && domainDataMap[activeThematic] 
                ? `${domainDataMap[activeThematic].domainName} Services`
                : 'Netparam Technical Services'}
            </h2>
            
            {/* Domain Filter Buttons */}
            <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '16px', borderBottom: '1px solid #E2E8F0' }}>
              <button 
                className={`lang-btn ${!activeThematic ? 'active' : ''}`}
                style={{ padding: '4px 12px', fontSize: '0.78rem', whiteSpace: 'nowrap' }}
                onClick={() => setActiveThematic(null)}
              >
                All Services ({allServicesList.length})
              </button>
              {thematicAreas.map(t => (
                <button 
                  key={t.id}
                  className={`lang-btn ${activeThematic === t.id ? 'active' : ''}`}
                  style={{ padding: '4px 12px', fontSize: '0.78rem', whiteSpace: 'nowrap' }}
                  onClick={() => setActiveThematic(t.id)}
                >
                  {t.nameEn}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '55vh', overflowY: 'auto', paddingRight: '4px' }}>
              {(activeThematic && domainDataMap[activeThematic] 
                ? domainDataMap[activeThematic].services 
                : allServicesList).map((s, idx) => (
                <div key={idx} style={{ padding: '16px', background: '#F0F9FF', borderRadius: '8px', borderLeft: '4px solid #0284C7' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0F172A' }}>{s.title}</div>
                  <span style={{ fontSize: '0.75rem', color: '#0284C7', fontWeight: 700 }}>{s.category}</span>
                  <div style={{ fontSize: '0.88rem', color: '#475569', marginTop: '6px' }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: PROJECTS MODAL */}
      {activeModal === 'projects' && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-card animate-fade-in" style={{ maxWidth: '750px' }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveModal(null)} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', cursor: 'pointer' }}>
              <X size={24} />
            </button>
            <span className="ticker-badge" style={{ background: '#16A34A', marginBottom: '12px', display: 'inline-block' }}>CASE STUDIES</span>
            <h2 style={{ color: '#0F172A', margin: '0 0 16px' }}>
              {activeThematic && domainDataMap[activeThematic] 
                ? `${domainDataMap[activeThematic].domainName} Projects`
                : 'Key Netparam Projects'}
            </h2>
            
            {/* Domain Filter Buttons */}
            <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '16px', borderBottom: '1px solid #E2E8F0' }}>
              <button 
                className={`lang-btn ${!activeThematic ? 'active' : ''}`}
                style={{ padding: '4px 12px', fontSize: '0.78rem', whiteSpace: 'nowrap' }}
                onClick={() => setActiveThematic(null)}
              >
                All Projects ({allProjectsList.length})
              </button>
              {thematicAreas.map(t => (
                <button 
                  key={t.id}
                  className={`lang-btn ${activeThematic === t.id ? 'active' : ''}`}
                  style={{ padding: '4px 12px', fontSize: '0.78rem', whiteSpace: 'nowrap' }}
                  onClick={() => setActiveThematic(t.id)}
                >
                  {t.nameEn}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '55vh', overflowY: 'auto', paddingRight: '4px' }}>
              {(activeThematic && domainDataMap[activeThematic] 
                ? domainDataMap[activeThematic].projects 
                : allProjectsList).map((pj, idx) => (
                <div key={idx} style={{ padding: '16px', background: '#F0FDF4', borderRadius: '8px', borderLeft: '4px solid #16A34A' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0F172A' }}>{pj.title}</div>
                  <span style={{ fontSize: '0.75rem', color: '#16A34A', fontWeight: 700 }}>{pj.lead}</span>
                  <div style={{ fontSize: '0.88rem', color: '#475569', marginTop: '6px' }}>{pj.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MODAL 4: EVENTS MODAL */}
      {activeModal === 'events' && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-card animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveModal(null)} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', cursor: 'pointer' }}>
              <X size={24} />
            </button>
            <span className="ticker-badge" style={{ background: '#D97706', marginBottom: '12px', display: 'inline-block' }}>CALENDAR</span>
            <h2 style={{ color: '#0F172A', margin: '0 0 16px' }}>Bootcamps & Events</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {eventsList.map((ev, idx) => (
                <div key={idx} style={{ padding: '16px', background: '#FFFBEB', borderRadius: '8px', borderLeft: '4px solid #D97706' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0F172A' }}>{ev.title}</div>
                  <div style={{ fontSize: '0.8rem', color: '#D97706', fontWeight: 600 }}>📅 {ev.date} • 📍 {ev.loc}</div>
                  <div style={{ fontSize: '0.88rem', color: '#475569', marginTop: '6px' }}>{ev.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MODAL 5: CONTACT MODAL */}
      {activeModal === 'contact' && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-card animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveModal(null)} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', cursor: 'pointer' }}>
              <X size={24} />
            </button>
            <span className="ticker-badge" style={{ background: '#9333EA', marginBottom: '12px', display: 'inline-block' }}>CONNECT WITH US</span>
            <h2 style={{ color: '#0F172A', margin: '0 0 16px' }}>Contact {currentCenter.nameEn}</h2>
            
            {enquiryFormSubmitted ? (
              <div style={{ padding: '24px', background: '#F0FDF4', color: '#16A34A', borderRadius: '8px', textAlign: 'center' }}>
                ✓ Thank you! Your enquiry has been routed to Netparam {selectedCenter} desk. Our team will contact you within 2 hours.
              </div>
            ) : (
              <form 
                onSubmit={(e) => { 
                  e.preventDefault(); 
                  if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
                    setMobileError('Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9');
                    return;
                  }
                  setEnquiryFormSubmitted(true); 
                }} 
                style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
              >
                <input type="text" required placeholder="Full Name *" style={{ padding: '12px', borderRadius: '6px', border: '1px solid #CBD5E1' }} />
                <input type="email" required placeholder="Email Address *" style={{ padding: '12px', borderRadius: '6px', border: '1px solid #CBD5E1' }} />
                
                {/* Enforced 10-digit Indian Mobile Input */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <span style={{ position: 'absolute', left: '12px', fontSize: '0.88rem', fontWeight: 700, color: '#475569' }}>
                      🇮🇳 +91
                    </span>
                    <input 
                      type="tel" 
                      required 
                      maxLength={10}
                      placeholder="Mobile Number (10 digits starting 6-9) *" 
                      value={mobileNumber}
                      onChange={handleMobileChange}
                      style={{ 
                        padding: '12px 12px 12px 68px', 
                        borderRadius: '6px', 
                        border: mobileError ? '2px solid #EF4444' : '1px solid #CBD5E1',
                        fontSize: '0.92rem',
                        outline: 'none',
                        width: '100%',
                        boxSizing: 'border-box'
                      }} 
                    />
                  </div>
                  {mobileError && (
                    <span style={{ fontSize: '0.78rem', color: '#EF4444', fontWeight: 600 }}>
                      ⚠️ {mobileError}
                    </span>
                  )}
                </div>

                <select style={{ padding: '12px', borderRadius: '6px', border: '1px solid #CBD5E1' }}>
                  <option>CBT Examination Platform Requirement</option>
                  <option>Campus ERP / Institute Software</option>
                  <option>Student Internship & Training Application</option>
                  <option>Custom Web / Mobile Application</option>
                </select>
                <textarea rows={3} placeholder="Tell us about your requirements..." style={{ padding: '12px', borderRadius: '6px', border: '1px solid #CBD5E1' }}></textarea>
                <button type="submit" className="action-card-btn" style={{ padding: '12px', fontSize: '0.95rem' }}>
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* MODAL 6: SEARCH RESULTS MODAL */}
      {activeModal === 'search' && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-card animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveModal(null)} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', cursor: 'pointer' }}>
              <X size={24} />
            </button>
            <h3 style={{ color: '#0F172A' }}>Search Results for "{searchQuery}"</h3>
            
            <div style={{ marginTop: '16px' }}>
              <h4 style={{ color: '#2563EB' }}>Matching Products:</h4>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((p, idx) => (
                  <div key={idx} style={{ padding: '10px', borderBottom: '1px solid #E2E8F0' }}>
                    <strong>{p.title}</strong> - <span style={{ fontSize: '0.85rem', color: '#64748B' }}>{p.desc}</span>
                  </div>
                ))
              ) : (
                <div style={{ color: '#94A3B8', fontSize: '0.9rem' }}>No direct products found.</div>
              )}

              <h4 style={{ color: '#2563EB', marginTop: '16px' }}>Matching Services:</h4>
              {filteredServices.length > 0 ? (
                filteredServices.map((s, idx) => (
                  <div key={idx} style={{ padding: '10px', borderBottom: '1px solid #E2E8F0' }}>
                    <strong>{s.title}</strong> - <span style={{ fontSize: '0.85rem', color: '#64748B' }}>{s.desc}</span>
                  </div>
                ))
              ) : (
                <div style={{ color: '#94A3B8', fontSize: '0.9rem' }}>No direct services found.</div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL 7: PRINT PREVIEW SIMULATOR */}
      {activeModal === 'print' && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-card animate-fade-in" style={{ textAlign: 'center' }} onClick={(e) => e.stopPropagation()}>
            <Printer size={48} color="#2563EB" style={{ marginBottom: '16px' }} />
            <h3>Print Document Ready</h3>
            <p style={{ color: '#475569', fontSize: '0.95rem' }}>
              Optimized printable summary of <strong>{currentCenter.nameEn}</strong> has been generated.
            </p>
            <button className="action-card-btn" style={{ padding: '10px 24px' }} onClick={() => window.print()}>
              Trigger Browser Print Dialog
            </button>
          </div>
        </div>
      )}

      {/* BACK TO TOP BUTTON */}
      <a href="#" id="backtotop" title="Go to top">
        ↑
      </a>

    </div>
  );
}
