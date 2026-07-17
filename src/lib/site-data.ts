import {
  Camera, Cctv, Fingerprint, KeyRound, DoorOpen, Network, Wrench, ShieldCheck,
  Home, Building2, Warehouse, Factory, Hospital, GraduationCap, Store, Users,
} from "lucide-react";

import hCctv from "@/assets/generated/vg_hero_cctv_1782929048114.png";
import hBio from "@/assets/generated/vg_hero_biometric_1782929058214.png";
import hAcc from "@/assets/generated/vg_hero_access_1782929073126.png";
import hNet from "@/assets/generated/vg_hero_network_1782929083774.png";
import hSma from "@/assets/generated/vg_hero_smart_1782929093657.png";
import hVdp from "@/assets/generated/vg_hero_vdp_1782929106135.png";
import iWar from "@/assets/generated/vg_ind_warehouse_1782929126782.png";
import iHos from "@/assets/generated/vg_ind_hospital_1782929138859.png";
import iRet from "@/assets/generated/vg_ind_retail_1782929149260.png";

import iTurnstile from "@/assets/generated/turnstile_boom_barrier_1784034437261.png";
import iPA from "@/assets/generated/pa_system_1784034448704.png";
import iVisitor from "@/assets/generated/visitor_management_1784034460882.png";
import iBMS from "@/assets/generated/building_management_1784034478832.png";
import iFire from "@/assets/generated/fire_alarm_1784034491513.png";
import iHomeAuto from "@/assets/generated/home_automation_1784034502400.png";
import iCanteen from "@/assets/generated/canteen_management_1784034522878.png";
import iHRMS from "@/assets/generated/hrms_software_1784034535334.png";
import iMetal from "@/assets/generated/metal_detector_1784034546417.png";
import iEPBX from "@/assets/generated/epbx_system_1784034566454.png";
import iGuard from "@/assets/generated/guard_patrol_1784034576238.png";
import iUPS from "@/assets/generated/online_ups_1784034586185.png";
import iHotel from "@/assets/generated/hotel_locks_1784034598783.png";


import p1 from "@/assets/products/vg_x4_dome.png";
import p2 from "@/assets/products/vg_bullet_pro.png";
import p3 from "@/assets/products/vg_nvr_16.png";
import p4 from "@/assets/products/vg_bio_f10.png";
import p5 from "@/assets/products/vg_access_mini.png";
import p6 from "@/assets/products/vg_vdp_7.png";
import p7 from "@/assets/products/vg_switch_24.png";
import p8 from "@/assets/products/vg_alarm_hub.png";

export const BRAND = {
  name: "Vigilant Techno Services",
  short: "Vigilant",
  tagline: "Protecting What Matters Through Intelligent Security.",
  city: "Pune",
  phone: "+91- 8087279615",
  email: "info@vigilanttechno.com",
  emails: {
    support: "support@vigilanttechno.com",
    sales: "sales@vigilanttechno.com",
    info: "info@vigilanttechno.com"
  },
  website: "www.vigilanttechno.com",
  address: "S. No. 51, Office No. 105, Dwarika Dham, Near ISCON Temple, Katraj-Kondhawa Road, Tilekar Nagar, Pune 411048",
  rating: "4.9★",
  established: "2013",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Solutions", to: "/solutions" },
  { label: "Products", to: "/products" },
  { label: "Gallery", to: "/gallery" },
  { label: "Reviews", to: "/reviews" },
  { label: "About", to: "/about" },
] as const;

export type Solution = {
  slug: string;
  icon: any;
  name: string;
  short: string;
  desc: string;
  image: string;
  why: string;
  where: string;
  how: string;
  maintenance: string;
  bestPractices: string[];
  technicalHighlights: { label: string; value: string }[];
  benefits: string[];
  applications: string[];
  gallery: string[];
  faqs: { q: string; a: string }[];
  relatedSolutions: string[];
};

export const SOLUTIONS: Solution[] = [
  { slug: "cctv", icon: Cctv, name: "CCTV & Security Surveillance", short: "Enterprise cameras.", desc: "HD analog & IP recording.", image: hCctv, why: "Traditional surveillance is no longer enough.", where: "Deployed across vast perimeters.", how: "We design topologies based on lighting conditions.", maintenance: "Quarterly lens cleaning.", bestPractices: ["Avoid direct sunlight"], technicalHighlights: [{label: "Resolution", value: "4K"}], benefits: ["Crystal clear video"], applications: ["Retail"], gallery: [hCctv], faqs: [], relatedSolutions: [] },
  { slug: "access-control", icon: KeyRound, name: "Access Control System", short: "Card & Mobile access.", desc: "Strict audit trails.", image: hAcc, why: "Control exactly who goes where.", where: "R&D labs and executive suites.", how: "Controllers hidden securely.", maintenance: "Lock alignment checks.", bestPractices: ["Anti-passback"], technicalHighlights: [{label: "Credentials", value: "Mobile"}], benefits: ["Audit logs"], applications: ["Offices"], gallery: [hAcc], faqs: [], relatedSolutions: [] },
  { slug: "biometric", icon: Fingerprint, name: "Biometric Attendance System", short: "Fingerprint & Face.", desc: "Fingerprint, face & palm-vein.", image: hBio, why: "Automate workforce management.", where: "Factory gates and offices.", how: "Terminals connected via TCP/IP.", maintenance: "Sensor cleaning.", bestPractices: ["Use face recognition"], technicalHighlights: [{label: "Speed", value: "< 0.3s"}], benefits: ["Touchless"], applications: ["Offices"], gallery: [hBio], faqs: [], relatedSolutions: [] },
  { slug: "turnstile", icon: ShieldCheck, name: "Turnstile & Boom Barrier System", short: "Physical security.", desc: "Secure pedestrian and vehicle access.", image: iTurnstile, why: "Control physical entry flow.", where: "Main gates and lobbies.", how: "Installed with heavy-duty motors.", maintenance: "Motor lubrication.", bestPractices: ["Integrate with access control"], technicalHighlights: [{label: "Type", value: "Tripod/Flap"}], benefits: ["Crowd control"], applications: ["Lobbies"], gallery: [iTurnstile], faqs: [], relatedSolutions: [] },
  { slug: "pa-system", icon: ShieldCheck, name: "P. A. System", short: "Public address.", desc: "Clear audio announcements.", image: iPA, why: "Mass communication during emergencies.", where: "Factories and schools.", how: "Zoned speakers connected to amplifiers.", maintenance: "Cable integrity checks.", bestPractices: ["Use ceiling speakers indoors"], technicalHighlights: [{label: "Zones", value: "Multiple"}], benefits: ["Clear audio"], applications: ["Schools"], gallery: [iPA], faqs: [], relatedSolutions: [] },
  { slug: "visitor", icon: ShieldCheck, name: "Visitor Management System", short: "Digital lobby.", desc: "Seamless visitor tracking.", image: iVisitor, why: "Paper logs are insecure.", where: "Corporate lobbies.", how: "Tablet-based sign-in with badge printing.", maintenance: "Software updates.", bestPractices: ["Pre-register visitors"], technicalHighlights: [{label: "Check-in", value: "Self-serve"}], benefits: ["Professional image"], applications: ["Corporate"], gallery: [iVisitor], faqs: [], relatedSolutions: [] },
  { slug: "bms", icon: Building2, name: "Building Management System (BMS)", short: "Unified control.", desc: "Centralized building automation.", image: iBMS, why: "Energy efficiency and central control.", where: "Large commercial buildings.", how: "Sensors integrated into a central dashboard.", maintenance: "Sensor calibration.", bestPractices: ["Monitor HVAC efficiency"], technicalHighlights: [{label: "Integration", value: "HVAC, Lighting"}], benefits: ["Energy savings"], applications: ["Commercial"], gallery: [iBMS], faqs: [], relatedSolutions: [] },
  { slug: "fire-alarm", icon: ShieldCheck, name: "Fire Alarm System", short: "Early detection.", desc: "Smoke and fire alerts.", image: iFire, why: "Life safety is paramount.", where: "All commercial buildings.", how: "Addressable smoke detectors.", maintenance: "Annual testing.", bestPractices: ["Regular drills"], technicalHighlights: [{label: "Type", value: "Addressable"}], benefits: ["Early warning"], applications: ["All Sectors"], gallery: [iFire], faqs: [], relatedSolutions: [] },
  { slug: "home-auto", icon: Home, name: "Home Automation System", short: "Smart living.", desc: "Control lights, climate and security.", image: iHomeAuto, why: "Convenience and luxury.", where: "Villas and apartments.", how: "Wireless and wired smart hubs.", maintenance: "Firmware updates.", bestPractices: ["Secure Wi-Fi network"], technicalHighlights: [{label: "Control", value: "Mobile/Voice"}], benefits: ["Convenience"], applications: ["Residential"], gallery: [iHomeAuto], faqs: [], relatedSolutions: [] },
  { slug: "canteen", icon: ShieldCheck, name: "Canteen Management System", short: "Automated dining.", desc: "Paperless meal tracking.", image: iCanteen, why: "Stop food wastage and fraud.", where: "Factory cafeterias.", how: "Biometric or card-based POS.", maintenance: "Device cleaning.", bestPractices: ["Pre-book meals"], technicalHighlights: [{label: "Tracking", value: "Real-time"}], benefits: ["Cost savings"], applications: ["Factories"], gallery: [iCanteen], faqs: [], relatedSolutions: [] },
  { slug: "hrms", icon: Users, name: "Attendance/Payroll/HRMS Software", short: "Workforce tracking.", desc: "Integrated HR software.", image: iHRMS, why: "Streamline HR processes.", where: "Offices and factories.", how: "Cloud-based software.", maintenance: "Cloud backups.", bestPractices: ["Regular sync"], technicalHighlights: [{label: "Platform", value: "Cloud"}], benefits: ["Automated payroll"], applications: ["Corporate"], gallery: [iHRMS], faqs: [], relatedSolutions: [] },
  { slug: "metal-detector", icon: ShieldCheck, name: "Metal Detector-Hand Held/Door Frame", short: "Weapon detection.", desc: "High sensitivity metal detectors.", image: iMetal, why: "Prevent concealed weapons.", where: "Malls and secure facilities.", how: "Multi-zone door frames.", maintenance: "Sensitivity calibration.", bestPractices: ["Clear pathways"], technicalHighlights: [{label: "Zones", value: "Up to 33"}], benefits: ["High security"], applications: ["Malls"], gallery: [iMetal], faqs: [], relatedSolutions: [] },
  { slug: "network", icon: Network, name: "Hardware & Networking", short: "Structured cabling.", desc: "Enterprise switching and Wi-Fi.", image: hNet, why: "Reliable IT backbone.", where: "Offices and campuses.", how: "Cat6/Fiber optic runs.", maintenance: "Rack management.", bestPractices: ["Label everything"], technicalHighlights: [{label: "Speed", value: "Gigabit"}], benefits: ["Zero downtime"], applications: ["IT"], gallery: [hNet], faqs: [], relatedSolutions: [] },
  { slug: "epbx", icon: ShieldCheck, name: "EPBX System", short: "Office intercom.", desc: "Business communication systems.", image: iEPBX, why: "Internal communication.", where: "Offices and hotels.", how: "IP-PBX servers.", maintenance: "Software patches.", bestPractices: ["Use IP phones"], technicalHighlights: [{label: "Extensions", value: "Unlimited"}], benefits: ["Free internal calls"], applications: ["Offices"], gallery: [iEPBX], faqs: [], relatedSolutions: [] },
  { slug: "vdp", icon: DoorOpen, name: "Video Door Phone", short: "Visitor verification.", desc: "Two-way audio and cloud unlock.", image: hVdp, why: "Never miss a visitor.", where: "Villas and apartments.", how: "PoE connected outdoor unit.", maintenance: "Lens cleaning.", bestPractices: ["Install away from glare"], technicalHighlights: [{label: "Audio", value: "Two-way"}], benefits: ["Remote unlock"], applications: ["Residential"], gallery: [hVdp], faqs: [], relatedSolutions: [] },
  { slug: "guard", icon: ShieldCheck, name: "Guard Patrol System", short: "Security tracking.", desc: "Track guard movements and patrols.", image: iGuard, why: "Ensure guards are patrolling.", where: "Large campuses.", how: "RFID checkpoints.", maintenance: "Device charging.", bestPractices: ["Randomize routes"], technicalHighlights: [{label: "Tech", value: "RFID"}], benefits: ["Accountability"], applications: ["Campuses"], gallery: [iGuard], faqs: [], relatedSolutions: [] },
  { slug: "ups", icon: ShieldCheck, name: "Online UPS Backup System", short: "Uninterrupted power.", desc: "Reliable power backup for critical systems.", image: iUPS, why: "Prevent data loss during outages.", where: "Server rooms.", how: "Double conversion UPS.", maintenance: "Battery health checks.", bestPractices: ["Load balancing"], technicalHighlights: [{label: "Type", value: "Online"}], benefits: ["Clean power"], applications: ["Data Centers"], gallery: [iUPS], faqs: [], relatedSolutions: [] },
  { slug: "hotel-locks", icon: ShieldCheck, name: "Hotel Locks", short: "Card access.", desc: "Secure hospitality locking systems.", image: iHotel, why: "Guest security and convenience.", where: "Hotels and resorts.", how: "RFID mortise locks.", maintenance: "Battery replacement.", bestPractices: ["Integrate with PMS"], technicalHighlights: [{label: "Tech", value: "Mifare"}], benefits: ["Keyless entry"], applications: ["Hospitality"], gallery: [iHotel], faqs: [], relatedSolutions: [] }
];

export type Industry = {
  slug: string;
  icon: any;
  name: string;
  image: string;
  challenges: string;
  details: { title: string; content: string }[];
  recommendedProducts: string[];
  gallery: string[];
  faqs: { q: string; a: string }[];
};

export const INDUSTRIES: Industry[] = [
  { 
    slug: "homes", icon: Home, name: "Homes & Villas", 
    image: hSma, 
    challenges: "Balancing aesthetics with security, preventing unauthorized access, and monitoring properties remotely while maintaining family privacy.", 
    details: [
      { title: "Perimeter Defense", content: "Installing discreet but effective cameras and active deterrence systems around boundary walls." },
      { title: "Visitor Management", content: "Smart video door phones allowing homeowners to verify and unlock gates directly from their smartphones, even while traveling." }
    ],
    recommendedProducts: ["vg-x4-dome", "vg-vdp-7", "vg-alarm-hub"], gallery: [], faqs: [] 
  },
  { 
    slug: "apartments", icon: Building2, name: "Housing Societies", 
    image: hVdp, 
    challenges: "Managing massive daily visitor flow, securing common areas like pools and parking, and maintaining vast camera networks across multiple towers.", 
    details: [
      { title: "Guard Room Centralization", content: "Deploying high-capacity NVRs and video walls for security guards to monitor 100+ cameras simultaneously." },
      { title: "Vehicle Access", content: "UHF readers and boom barriers for automated resident parking access without manual intervention." }
    ],
    recommendedProducts: ["vg-bullet-pro", "vg-nvr-16", "vg-vdp-7"], gallery: [], faqs: [] 
  },
  { 
    slug: "retail", icon: Store, name: "Retail & Stores", 
    image: iRet, 
    challenges: "Preventing inventory shrinkage, monitoring cash registers closely, and analyzing customer footfall across peak hours.", 
    details: [
      { title: "Cash Counter Monitoring", content: "Deploying high-resolution cameras with audio recording strictly above POS systems to resolve disputes." },
      { title: "Intrusion Alarms", content: "Securing glass storefronts with vibration sensors and motion detectors tied to loud sirens." }
    ],
    recommendedProducts: ["vg-x4-dome", "vg-nvr-16", "vg-alarm-hub"], gallery: [], faqs: [] 
  },
  { 
    slug: "warehouses", icon: Warehouse, name: "Warehouses", 
    image: iWar, 
    challenges: "Securing vast perimeters, monitoring loading docks, and ensuring employee safety across highly active forklift zones.", 
    details: [
      { title: "Long-Range Surveillance", content: "Using PTZ (Pan-Tilt-Zoom) and high-power IR bullet cameras to cover long aisles and dark corners." },
      { title: "Fiber Optic Networking", content: "Running armored fiber optic cables across massive spans to ensure zero data loss." }
    ],
    recommendedProducts: ["vg-bullet-pro", "vg-switch-24"], gallery: [], faqs: [] 
  },
  { 
    slug: "factories", icon: Factory, name: "Factories", 
    image: iWar, 
    challenges: "Operating in harsh environments, tracking thousands of worker shifts accurately, and ensuring compliance monitoring.", 
    details: [
      { title: "Rugged Biometrics", content: "Deploying IP65-rated face recognition terminals at factory gates that work flawlessly despite dust and poor lighting." },
      { title: "Machine Monitoring", content: "Strategically placing cameras to monitor assembly lines and ensure safety protocols are followed." }
    ],
    recommendedProducts: ["vg-bio-f10", "vg-bullet-pro", "vg-switch-24"], gallery: [], faqs: [] 
  },
  { 
    slug: "hospitals", icon: Hospital, name: "Hospitals", 
    image: iHos, 
    challenges: "Protecting sensitive areas like pharmacies, ensuring patient privacy, and implementing touchless access for hygiene.", 
    details: [
      { title: "ICU & Pharmacy Security", content: "Strict biometric access control on medicine storage and critical care wings to prevent unauthorized entry." },
      { title: "Corridor Coverage", content: "Using corridor-mode IP cameras to capture long, narrow hallways without wasting pixels on walls." }
    ],
    recommendedProducts: ["vg-bio-f10", "vg-access-mini", "vg-x4-dome"], gallery: [], faqs: [] 
  },
  { 
    slug: "schools", icon: GraduationCap, name: "Education", 
    image: hBio, 
    challenges: "Ensuring student safety, strict visitor management, and campus-wide emergency broadcasting without feeling like a prison.", 
    details: [
      { title: "Playground & Gate Coverage", content: "High-definition monitoring of pickup/drop-off zones to ensure students leave with authorized guardians." },
      { title: "Staff Attendance", content: "Automated biometric attendance systems for teachers integrated with the school's payroll software." }
    ],
    recommendedProducts: ["vg-bullet-pro", "vg-access-mini"], gallery: [], faqs: [] 
  },
  { 
    slug: "offices", icon: Users, name: "Corporate Offices", 
    image: hAcc, 
    challenges: "Seamless employee access, robust network infrastructure, and securing boardrooms and server MDFs.", 
    details: [
      { title: "Mobile Access", content: "Allowing employees to unlock office doors using secure Bluetooth credentials on their smartphones." },
      { title: "Clean Aesthetics", content: "Deploying flush-mount dome cameras and invisible cable routing to match premium interior designs." }
    ],
    recommendedProducts: ["vg-bio-f10", "vg-access-mini", "vg-switch-24"], gallery: [], faqs: [] 
  },
];

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  mrp: number;
  badge?: string;
  short: string;
  desc: string;
  image: string;
  hoverImage?: string;
  lifestyleImages: string[];
  specs: { label: string; value: string }[];
  applications: string[];
  downloads: { name: string; url: string }[];
  faqs: { q: string; a: string }[];
  accessories: string[];
};

export const PRODUCTS: Product[] = [
  { 
    id: "p1", slug: "vg-x4-dome", name: "VG X4 Dome 4K AI", category: "IP Cameras", price: 14990, mrp: 17900, badge: "New", 
    short: "8MP AI dome with smart motion zones.", 
    desc: "The VG X4 is a premium 8-Megapixel network dome camera designed for discreet, high-end indoor environments. Featuring deep-learning AI for human and vehicle classification, it eliminates false alarms caused by shadows and pets. Its IK10 vandal-resistant housing ensures durability.",
    image: p1, hoverImage: p1, 
    lifestyleImages: [hCctv, iRet],
    specs: [{ label: "Resolution", value: "8MP / 4K Ultra HD" }, { label: "Lens", value: "2.8mm Wide Angle" }, { label: "IR Range", value: "30m Starlight Night Vision" }, { label: "Protection", value: "IP67 Water & IK10 Vandal" }, { label: "Power", value: "PoE (802.3af) or 12V DC" }], 
    applications: ["Retail Stores", "Corporate Offices", "Hotel Lobbies"], downloads: [], faqs: [], accessories: ["vg-nvr-16", "vg-switch-24"] 
  },
  { 
    id: "p2", slug: "vg-bullet-pro", name: "VG Bullet Pro 5MP", category: "IP Cameras", price: 9990, mrp: 12500, badge: "Bestseller", 
    short: "Color night vision with edge analytics.", 
    desc: "Engineered for perimeter defense. The VG Bullet Pro captures 5MP video in full color even in pitch darkness using its advanced F1.0 aperture lens and warm supplemental lights. Perfect for factory walls and warehouse exteriors.",
    image: p2, hoverImage: p2, 
    lifestyleImages: [iWar],
    specs: [{ label: "Resolution", value: "5MP HD" }, { label: "Lens", value: "3.6mm" }, { label: "IR Range", value: "40m Color Night Vision" }, { label: "Protection", value: "IP67 Weatherproof" }], 
    applications: ["Warehouses", "Factory Perimeters", "Parking Lots"], downloads: [], faqs: [], accessories: ["vg-nvr-16", "vg-switch-24"] 
  },
  { 
    id: "p3", slug: "vg-nvr-16", name: "VG NVR 16-Channel", category: "Recorders", price: 22990, mrp: 26900, 
    short: "16ch 4K NVR with 8TB storage capacity.", 
    desc: "The brain of your surveillance network. This 16-channel Network Video Recorder supports 4K incoming bandwidth, H.265+ compression, and dual SATA ports for up to 16TB of total archive storage.",
    image: p3, hoverImage: p3, 
    lifestyleImages: [hNet],
    specs: [{ label: "Channels", value: "16 IP Cameras" }, { label: "Storage", value: "2 x SATA (Up to 16TB total)" }, { label: "Decoding", value: "Up to 8MP (4K)" }, { label: "Compression", value: "H.265+" }], 
    applications: ["Control Rooms", "Housing Societies", "Commercial Buildings"], downloads: [], faqs: [], accessories: ["vg-x4-dome", "vg-bullet-pro"] 
  },
  { 
    id: "p4", slug: "vg-bio-f10", name: "VG Bio F10 Face Reader", category: "Biometric", price: 18990, mrp: 21500, badge: "Pro", 
    short: "Touchless face & palm attendance.", 
    desc: "A flagship touchless biometric terminal featuring visible light facial recognition and palm-vein scanning. Boasts an incredible <0.3s recognition speed and anti-spoofing algorithms to reject printed photos or masks.",
    image: p4, hoverImage: p4, 
    lifestyleImages: [hBio],
    specs: [{ label: "Face Capacity", value: "10,000" }, { label: "Speed", value: "<0.3s" }, { label: "Connectivity", value: "Wi-Fi, TCP/IP, Wiegand" }, { label: "Display", value: "5-inch IPS Touch" }], 
    applications: ["Hospitals", "Corporate Entrances", "Factories"], downloads: [], faqs: [], accessories: ["vg-access-mini"] 
  },
  { 
    id: "p5", slug: "vg-access-mini", name: "VG Access Mini", category: "Access Control", price: 7490, mrp: 8990, 
    short: "RFID + PIN access for internal doors.", 
    desc: "A sleek, mullion-mount card reader with a capacitive touch keypad. Designed to sit perfectly on aluminum glass door frames for internal office access control.",
    image: p5, hoverImage: p5, 
    lifestyleImages: [hAcc],
    specs: [{ label: "Card Capacity", value: "5,000" }, { label: "Standards", value: "Mifare 13.56MHz" }, { label: "Output", value: "Wiegand 26/34" }, { label: "Power", value: "12V DC" }], 
    applications: ["Server Rooms", "Meeting Rooms", "Executive Cabins"], downloads: [], faqs: [], accessories: ["vg-bio-f10"] 
  },
  { 
    id: "p6", slug: "vg-vdp-7", name: "VG Smart VDP 7″", category: "Video Door Phones", price: 12490, mrp: 14900, badge: "Smart", 
    short: "7-inch IPS panel with cloud unlock.", 
    desc: "An elegant indoor monitor paired with an IP65 outdoor bell unit. Receive calls on your smartphone, view the visitor in HD, and trigger the door lock from anywhere in the world.",
    image: p6, hoverImage: p6, 
    lifestyleImages: [hVdp],
    specs: [{ label: "Display", value: "7-inch IPS Touch" }, { label: "Camera", value: "2MP HD" }, { label: "App", value: "iOS / Android" }, { label: "Unlock", value: "App / RFID Card / Monitor" }], 
    applications: ["Villas", "Luxury Apartments", "Independent Homes"], downloads: [], faqs: [], accessories: ["vg-alarm-hub"] 
  },
  { 
    id: "p7", slug: "vg-switch-24", name: "VG PoE Switch 24-Port", category: "Networking", price: 32990, mrp: 38500, 
    short: "Managed gigabit PoE+ for camera networks.", 
    desc: "The backbone of your IP camera network. Provides 370W of total PoE+ power across 24 gigabit ports, with 4 SFP uplink slots for long-distance fiber connections. Features L2+ management for VLANs and QoS.",
    image: p7, hoverImage: p7, 
    lifestyleImages: [hNet],
    specs: [{ label: "Ports", value: "24 × Gigabit PoE+" }, { label: "PoE Budget", value: "370W" }, { label: "Uplink", value: "4 × SFP Gigabit" }, { label: "Management", value: "L2+ (VLAN, QoS, IGMP)" }], 
    applications: ["Server Racks", "Data Centers", "Large Campuses"], downloads: [], faqs: [], accessories: ["vg-nvr-16", "vg-x4-dome"] 
  },
  { 
    id: "p8", slug: "vg-alarm-hub", name: "VG Smart Alarm Hub", category: "Smart Security", price: 8990, mrp: 10500, 
    short: "Wireless hub for sensors & sirens.", 
    desc: "The central brain of our intrusion detection system. Connects up to 64 wireless sensors (PIR, door contacts, smoke detectors) using encrypted RF, with dual Wi-Fi and 4G LTE communication for guaranteed alerts.",
    image: p8, hoverImage: p8, 
    lifestyleImages: [hSma],
    specs: [{ label: "Zones", value: "64 Wireless Zones" }, { label: "Backup Battery", value: "12 Hours" }, { label: "Cellular", value: "4G LTE SIM Slot" }, { label: "App", value: "Push Notifications / Calls" }], 
    applications: ["Jewelry Stores", "Homes", "Offices"], downloads: [], faqs: [], accessories: ["vg-vdp-7"] 
  },
];

export const TESTIMONIALS = [
  { quote: "The team delivered a 64-camera deployment across our manufacturing plant ahead of schedule. Cable work was immaculate.", name: "Rohan Mehta", role: "Plant Director, Tata Industries", avatar: "", type: "Industrial" },
  { quote: "We replaced three vendors with Vigilant. Their AMC response is genuinely under an hour, every single time.", name: "Anita Sharma", role: "Facilities Head, Lodha Group", avatar: "", type: "Residential" },
  { quote: "Best-in-class advice. They specified exactly what we needed — no overselling.", name: "Dr. Iqbal Khan", role: "Director, Sahyadri Hospitals", avatar: "", type: "Commercial" },
  { quote: "Their networking and rack management is the cleanest I've ever seen in Pune.", name: "Suresh Pillai", role: "IT Head, Tech Mahindra", avatar: "", type: "Commercial" },
];

export type Project = {
  slug: string;
  name: string;
  type: string;
  scope: string;
  image: string;
  clientBackground: string;
  businessRequirement: string;
  securityChallenges: string;
  networkDesign: string;
  installationJourney: string;
  resultsAchieved: string;
  customerBenefits: string;
  timeline: string;
  gallery: string[];
  equipmentUsed: string[];
  relatedSolutions: string[];
};

export const PROJECTS: Project[] = [
  { 
    slug: "lodha-belmondo", name: "Lodha Belmondo", type: "Premium Residential", scope: "240 cameras · 18 access points · 4 control rooms", 
    image: hVdp, 
    clientBackground: "A sprawling luxury residential township spread over 100 acres, featuring a golf course, multiple high-rise towers, and vast clubhouses.",
    businessRequirement: "The management needed a unified surveillance architecture that could replace disjointed analog systems across different phases, centralizing monitoring into a single Master NOC.",
    securityChallenges: "Extremely long distances between towers caused data drops. The aesthetic of the luxury township could not be compromised by ugly wiring or massive camera housings.",
    networkDesign: "We engineered a 10G fiber-optic ring topology connecting 4 edge IDFs. If one fiber link was cut by landscaping equipment, the network would auto-heal within milliseconds.",
    installationJourney: "Over 45 days, our certified technicians laid 12 kilometers of armored fiber underground and installed 240 discreet 4K dome cameras flush with the architectural ceilings.",
    resultsAchieved: "Created a centralized, lag-free viewing experience for the security heads with 90 days of redundant storage.",
    customerBenefits: "Reduced security manpower costs by 30% while dramatically improving incident response times.",
    timeline: "45 Days",
    gallery: [hCctv, hNet],
    equipmentUsed: ["vg-x4-dome", "vg-nvr-16", "vg-switch-24"], relatedSolutions: ["cctv", "network"]
  },
  { 
    slug: "symbiosis", name: "Symbiosis Campus", type: "Education", scope: "Biometric attendance for 6,000 students", 
    image: hBio, 
    clientBackground: "One of India's premier educational institutions with massive daily footfall and strict attendance compliance requirements.",
    businessRequirement: "To completely digitize student and faculty attendance without causing bottlenecks at the entrances during the 15-minute intervals between classes.",
    securityChallenges: "Traditional fingerprint scanners were too slow (3 seconds per person) and unhygienic for thousands of daily scans.",
    networkDesign: "Deployed a dedicated gigabit VLAN solely for biometric traffic, ensuring instant synchronization with the central database.",
    installationJourney: "Installed 45 high-speed facial recognition terminals across 12 building entrances, complete with turnstile integration.",
    resultsAchieved: "Students simply walk through the turnstiles without stopping. The AI recognizes them in <0.3 seconds.",
    customerBenefits: "Eliminated buddy punching, improved hygiene, and provided real-time attendance dashboards to the administration.",
    timeline: "21 Days",
    gallery: [hNet],
    equipmentUsed: ["vg-bio-f10", "vg-switch-24"], relatedSolutions: ["biometric", "network"]
  },
  { 
    slug: "sahyadri", name: "Sahyadri Hospital", type: "Healthcare", scope: "Integrated CCTV + access for 5 wings", 
    image: iHos, 
    clientBackground: "A leading multi-specialty hospital requiring stringent security for critical care units, pharmacies, and patient privacy.",
    businessRequirement: "A completely touchless access control system for operating theaters and strict audit trails for the narcotics pharmacy.",
    securityChallenges: "Balancing the need for high security in restricted areas with the necessity for rapid emergency access during code-blue situations.",
    networkDesign: "Integrated the access control panels directly into the hospital's central fire alarm system for fail-safe automatic unlocking during emergencies.",
    installationJourney: "Worked exclusively during night shifts to avoid disrupting hospital operations, executing silent installations of biometric readers and cameras.",
    resultsAchieved: "Passed all state health compliance audits with a 100% score on physical security.",
    customerBenefits: "Total peace of mind regarding medicine inventory and zero friction for doctors entering sterile zones.",
    timeline: "30 Days",
    gallery: [hAcc],
    equipmentUsed: ["vg-bio-f10", "vg-access-mini", "vg-x4-dome"], relatedSolutions: ["access", "cctv"]
  },
  { 
    slug: "tata-motors", name: "Tata Motors Plant", type: "Industrial", scope: "Perimeter AI cameras with thermal alerts", 
    image: iWar, 
    clientBackground: "A massive automotive manufacturing facility with a 5-kilometer perimeter bordering dense vegetation.",
    businessRequirement: "To secure the perimeter from unauthorized entry and theft without relying entirely on foot patrols.",
    securityChallenges: "Total darkness along the perimeter and frequent false alarms caused by stray animals and wind-blown debris.",
    networkDesign: "Wireless Point-to-Multipoint (PtMP) links beaming camera feeds back to the central guard house from remote boundary walls where cabling was impossible.",
    installationJourney: "Mounted heavy-duty thermal cameras on 20-foot poles, calibrated with custom deep-learning algorithms to ignore animals.",
    resultsAchieved: "Achieved a 99% reduction in false alarms. Guards now only receive alerts when a human crosses the virtual tripwire.",
    customerBenefits: "Proactive interception of unauthorized entry before the perimeter is actually breached.",
    timeline: "60 Days",
    gallery: [hNet],
    equipmentUsed: ["vg-bullet-pro", "vg-switch-24"], relatedSolutions: ["ip-cameras", "network"]
  },
];

export const PROCESS = [
  { step: "01", title: "Free Site Survey", desc: "We map your premises and risks within 48 hours." },
  { step: "02", title: "Design & Quote", desc: "Transparent BoQ with engineering drawings." },
  { step: "03", title: "Installation", desc: "Clean cabling, label-perfect racks, zero shortcuts." },
  { step: "04", title: "Training", desc: "Your team learns the system end-to-end." },
  { step: "05", title: "Lifetime Support", desc: "Comprehensive support with 24×7 NOC monitoring." },
];

export const EXPERTISE = [
  "End to End solution, Complete Engineering, Consultancy Design Installation testing & Commissioning & Maintenance services.",
  "IP Based CCTV Design, Implementation, Operation & Maintenance.",
  "Futuristic Products for Energy & Building Management.",
  "Strategic Partner for Innovation Leader.",
  "Strong Ecosystem of partners & Internal Sources.",
  "Biometric, RFID, Face recognition & Physical Layer Security.",
  "Customized solutions and Design for each Customer."
];

export const PARTNERS = [
  { name: "Honeywell", domain: "honeywell.com", logo: "/Strategic Partners Logo/1-Honeywell-Logo.png" },
  { name: "Panasonic", domain: "panasonic.com", logo: "/Strategic Partners Logo/10-Panasonic.webp" },
  { name: "HIKVISION", domain: "hikvision.com", logo: "/Strategic Partners Logo/2-hikvision.png" },
  { name: "CP PLUS", domain: "cpplusworld.com", logo: "/Strategic Partners Logo/3-CP Plus.png" },
  { name: "eSSL", domain: "esslsecurity.com", logo: "/Strategic Partners Logo/4-essl.webp" },
  { name: "ZKTeco", domain: "zkteco.com", logo: "/Strategic Partners Logo/5-ZK.webp" },
  { name: "Godrej", domain: "godrej.com", logo: "/Strategic Partners Logo/6-Godrej.jpg" },
  { name: "Dahua", domain: "dahuasecurity.com", logo: "/Strategic Partners Logo/7-dahua-logo.png" },
  { name: "BioMax", domain: "biomaxsecurity.com", logo: "/Strategic Partners Logo/8-Biomax.png" },
  { name: "EZVIZ", domain: "ezviz.com", logo: "/Strategic Partners Logo/9-EZVIZ.png" },
  { name: "D-Link", domain: "dlink.com", logo: "/Strategic Partners Logo/D-Link-Logo.wine.png" },
  { name: "NETGEAR", domain: "netgear.com", logo: "/Strategic Partners Logo/Netgear-Logo.wine.png" },
  { name: "Seagate", domain: "seagate.com", logo: "/Strategic Partners Logo/Seagate.png" },
  { name: "WD", domain: "westerndigital.com", logo: "/Strategic Partners Logo/WD.png" },
  { name: "Yale", domain: "yalehome.com", logo: "/Strategic Partners Logo/Yele.png" }
];

export const CLIENTS = [
  { name: "Cipla", logo: "/Clients Logo/1-Cipla.png" },
  { name: "MKSSS's Pune", logo: "/Clients Logo/10-MKSSS's_Pune_logo.png" },
  { name: "Bharat Vidhyapeeth", logo: "/Clients Logo/11-Bharat Vidhyapeeth.png" },
  { name: "Aryan School", logo: "/Clients Logo/12-1 Aryan School.jpg" },
  { name: "Zuari Agro", logo: "/Clients Logo/12-Zuari Agro.jpg" },
  { name: "Engie", logo: "/Clients Logo/13-1 engie.png" },
  { name: "Traveltime", logo: "/Clients Logo/13-1 traveltime.jpeg" },
  { name: "Malpani", logo: "/Clients Logo/13-2 malpani.jpg" },
  { name: "Supermeter", logo: "/Clients Logo/13-supermeter.JPG" },
  { name: "Privilage Industries", logo: "/Clients Logo/14-Privilage industries.jpeg" },
  { name: "Vankyatesh Multistate", logo: "/Clients Logo/16-Vankyatesh multistate.jpg" },
  { name: "Bhandari Associate", logo: "/Clients Logo/17-Bhandari Associate.avif" },
  { name: "Dodake Landmarks", logo: "/Clients Logo/18-Dodake Landmarks.png" },
  { name: "Garve", logo: "/Clients Logo/19-garve.webp" },
  { name: "Aditya Birla", logo: "/Clients Logo/2-Aditya birla.jpg" },
  { name: "Karma Realty", logo: "/Clients Logo/20-Karma realty.jpeg" },
  { name: "Sonai Infra", logo: "/Clients Logo/22-Sonai Infra.jpg" },
  { name: "Ezbee Reality", logo: "/Clients Logo/23-Ezbee Reality.png" },
  { name: "Imax Hospital", logo: "/Clients Logo/24-Imax Hospital.png" },
  { name: "La Densitae", logo: "/Clients Logo/26-La Densitae.png" },
  { name: "Todkar Sanjeevani", logo: "/Clients Logo/28-Todkar Sanjeevani.png" },
  { name: "NDA Insignia", logo: "/Clients Logo/3-NDA_Insignia-1956.gif" },
  { name: "Solitire", logo: "/Clients Logo/4-4 Solitire.png" },
  { name: "ICMR", logo: "/Clients Logo/4-icmr_logo_verti.png" },
  { name: "Apollo Hospital", logo: "/Clients Logo/5-5 Apollo Hospital.png" },
  { name: "Kalyani Group", logo: "/Clients Logo/5-Kalyani_group.jpg" },
  { name: "District Tresury", logo: "/Clients Logo/6-1 District Tresury.jpg" },
  { name: "MTDC", logo: "/Clients Logo/6-2 MTDC.jpg" },
  { name: "Ebix Cash", logo: "/Clients Logo/6-6 Ebix Cash.png" },
  { name: "Manikchand", logo: "/Clients Logo/6-manikchand_logo.jpeg" },
  { name: "Effingut", logo: "/Clients Logo/7-1 effingut.jpg" },
  { name: "Bharati Hospital", logo: "/Clients Logo/7-Bharati Hos logo.png" },
  { name: "MIT", logo: "/Clients Logo/8-mit-logo.jpg" },
  { name: "DYP", logo: "/Clients Logo/9-DYP_LOGO.png" },
  { name: "PVR", logo: "/Clients Logo/PVR.jpg" },
  { name: "Skoda", logo: "/Clients Logo/30-Autombile Dealers/AKOYA Skoda.jpg" },
  { name: "Honda", logo: "/Clients Logo/30-Autombile Dealers/Honda.jpg" },
  { name: "Hyundai", logo: "/Clients Logo/30-Autombile Dealers/Hyundai.jpg" },
  { name: "Mahindra", logo: "/Clients Logo/30-Autombile Dealers/Mahindra-Group.jpg" },
  { name: "Maruti Suzuki", logo: "/Clients Logo/30-Autombile Dealers/Maruti-Suzuki-Logo-2019.jpg" },
  { name: "Kia", logo: "/Clients Logo/30-Autombile Dealers/RAC Kia.jpg" },
  { name: "TATA", logo: "/Clients Logo/30-Autombile Dealers/TATA.jpg" },
  { name: "TVS", logo: "/Clients Logo/30-Autombile Dealers/TVS-motors-logo.jpg" },
  { name: "Bajaj Auto", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Bajaj_auto_logo.svg" }
];

export const METRICS = [
  { value: "12+", label: "Years of Experience" },
  { value: "4,200+", label: "Installations" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "24×7", label: "Support" },
  { value: "60+", label: "Certified Technicians" },
];

export const BLOG = [
  { slug: "ai-cameras-2026", title: "How AI cameras are quietly replacing guard rooms in 2026", excerpt: "Edge analytics, smart zones and the new economics of surveillance.", date: "Jun 18, 2026", read: "6 min" },
  { slug: "amc-checklist", title: "The annual maintenance checklist every facility manager needs", excerpt: "A practical guide to keeping a 100+ camera deployment healthy.", date: "May 30, 2026", read: "4 min" },
  { slug: "biometric-vs-rfid", title: "Biometric vs RFID: choosing access control for modern offices", excerpt: "Cost, security, and the friction users will actually accept.", date: "May 12, 2026", read: "5 min" },
];

export const inr = (n: number) => `₹ ${n.toLocaleString("en-IN")}`;
