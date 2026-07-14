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
  phone: "08087279615",
  email: "hello@vigilant.tech",
  address: "HN 48/1, Pitrukrupa Building, near Datta Mandir, Satara Road, Dhankawadi, Pune - 411043",
  rating: "4.9★",
  established: "2013",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Solutions", to: "/solutions" },
  { label: "Industries", to: "/industries" },
  { label: "Products", to: "/products" },
  { label: "Projects", to: "/projects" },
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
  {
    slug: "cctv",
    icon: Cctv,
    name: "CCTV Surveillance",
    short: "Enterprise camera networks.",
    desc: "HD analog & IP recording for round-the-clock coverage.",
    image: hCctv,
    why: "Traditional surveillance is no longer enough. Modern businesses require proactive monitoring, high-definition evidence, and instant remote accessibility to prevent losses and ensure compliance.",
    where: "Deployed across vast perimeters, high-traffic retail floors, sensitive server rooms, and critical intersections.",
    how: "We design topologies based on lighting conditions, required pixel density for facial recognition, and bandwidth availability, terminating at secure, centralized NVRs.",
    maintenance: "Quarterly lens cleaning, focus calibration, and storage health checks ensure zero dropped frames.",
    bestPractices: ["Avoid direct sunlight pointing", "Maintain 30-day continuous archive", "Use WDR cameras for glass entrances"],
    technicalHighlights: [
      { label: "Max Resolution", value: "8MP (4K)" },
      { label: "Compression", value: "H.265+" },
      { label: "Storage", value: "Up to 128TB RAID" },
    ],
    benefits: ["Crystal clear 1080p to 4K resolution", "Exceptional low-light performance", "Vandal-proof housing options", "Seamless mobile and desktop viewing"],
    applications: ["Perimeter Security", "Parking Lots", "Retail Floors", "Manufacturing Units"],
    gallery: [
      hCctv,
      iRet
    ],
    faqs: [
      { q: "How much storage is included?", a: "We customize NVR storage based on your retention requirements, typically ranging from 30 to 90 days using enterprise-grade surveillance drives." },
      { q: "Can I view the cameras on my phone?", a: "Yes, all our systems include secure, encrypted mobile app access for iOS and Android." }
    ],
    relatedSolutions: ["ip-cameras", "network", "amc"]
  },
  {
    slug: "ip-cameras",
    icon: Camera,
    name: "IP Cameras",
    short: "Edge AI cameras.",
    desc: "4K AI cameras with edge analytics and cloud playback.",
    image: iWar,
    why: "IP cameras represent the modern standard of surveillance, offering superior image quality, smart motion zones, and integration with advanced AI analytics like line-crossing and object-removal detection.",
    where: "Ideal for corporate lobbies, high-security zones, jewelry stores, and environments requiring pristine detail.",
    how: "Cameras are powered via PoE (Power over Ethernet), dramatically simplifying cable runs and centralizing power backup through the network switch.",
    maintenance: "Firmware updates to patch vulnerabilities, PoE budget monitoring, and network port health checks.",
    bestPractices: ["Implement separate VLANs for cameras", "Use CAT6 pure copper cabling", "Enable edge storage (SD card) as backup"],
    technicalHighlights: [
      { label: "Analytics", value: "Human/Vehicle classification" },
      { label: "Connectivity", value: "Gigabit PoE" },
      { label: "Night Vision", value: "Full-color Starlight" },
    ],
    benefits: ["True 4K Ultra HD video", "Edge AI for human/vehicle detection", "Power over Ethernet (PoE) simplicity", "Cloud backup capabilities"],
    applications: ["Corporate Lobbies", "High-Security Zones", "Jewelry Stores", "Server Rooms"],
    gallery: [
      iWar,
      hCctv
    ],
    faqs: [
      { q: "Do IP cameras require a lot of bandwidth?", a: "Modern IP cameras use H.265+ compression, reducing bandwidth and storage requirements by up to 50% compared to older standards." },
      { q: "What is edge AI?", a: "The camera itself processes video to identify humans or vehicles, significantly reducing false alarms from shadows or animals." }
    ],
    relatedSolutions: ["cctv", "network"]
  },
  {
    slug: "biometric",
    icon: Fingerprint,
    name: "Biometric Attendance",
    short: "Fingerprint & Face.",
    desc: "Fingerprint, face & palm-vein attendance for teams of any size.",
    image: hBio,
    why: "Automate workforce management with precision. Our biometric solutions completely eliminate buddy punching, streamline HR workflows, and integrate seamlessly with payroll software.",
    where: "Factory gates for shift workers, corporate office entrances, hospital staff corridors, and school faculty rooms.",
    how: "Terminals are deployed at strategic entry points, connected via TCP/IP to a centralized server where HR teams manage rosters and pull automated reports.",
    maintenance: "Sensor cleaning, database backups, and firmware updates to improve facial recognition accuracy under different lighting.",
    bestPractices: ["Use face recognition for high-traffic hygiene", "Mount at 1.2m height", "Avoid direct sunlight on facial terminals"],
    technicalHighlights: [
      { label: "Speed", value: "< 0.3 seconds per scan" },
      { label: "Anti-Spoofing", value: "Liveness detection" },
      { label: "Capacity", value: "Up to 50,000 faces" },
    ],
    benefits: ["Sub-second recognition speed", "Touchless face & palm options", "Seamless HRMS API integration", "Anti-spoofing technology"],
    applications: ["Corporate Offices", "Factory Gates", "Hospital Staff Entrances", "Educational Institutes"],
    gallery: [
      hBio,
      iHos
    ],
    faqs: [
      { q: "Are face recognition terminals safe for hygiene?", a: "Absolutely. We highly recommend touchless face terminals for healthcare, food processing, and high-traffic corporate environments." },
      { q: "Can it integrate with our existing payroll software?", a: "Yes, our systems support standard API and database integrations with major HRMS platforms like SAP, Oracle, and Keka." }
    ],
    relatedSolutions: ["access"]
  },
  {
    slug: "access",
    icon: KeyRound,
    name: "Access Control",
    short: "Card & Mobile access.",
    desc: "Card, mobile and biometric access with strict audit trails.",
    image: hAcc,
    why: "Control exactly who goes where, and when. Enterprise access control secures sensitive intellectual property and assets while maintaining fluid movement for authorized personnel.",
    where: "R&D labs, executive suites, server rooms (MDF/IDF), and main glass entrances.",
    how: "Controllers are hidden securely inside facility ceilings, wiring down to readers on the wall and magnetic locks on the door frames, preventing tampering.",
    maintenance: "Electromagnetic lock alignment checks, backup battery tests, and database purge of ex-employees.",
    bestPractices: ["Integrate with fire alarm for auto-unlock", "Use fail-secure locks on IT rooms", "Enforce anti-passback rules"],
    technicalHighlights: [
      { label: "Credentials", value: "Mifare, NFC, Bluetooth" },
      { label: "Controllers", value: "2/4/8 Door Panels" },
      { label: "Integration", value: "Fire Alarm & CCTV" },
    ],
    benefits: ["Centralized software management", "Instant credential revocation", "Comprehensive audit logs", "Fire-alarm integration for emergency unlock"],
    applications: ["Server Rooms", "Executive Suites", "R&D Labs", "24x7 Gyms"],
    gallery: [
      hAcc,
      hNet
    ],
    faqs: [
      { q: "What happens during a power failure?", a: "All systems are backed by UPS and feature fail-safe or fail-secure magnetic locks based on local fire safety regulations." },
      { q: "Can employees use their smartphones to unlock doors?", a: "Yes, we offer Bluetooth and NFC-enabled mobile credentials, allowing users to unlock doors by waving their phone." }
    ],
    relatedSolutions: ["biometric", "smart"]
  },
  {
    slug: "vdp",
    icon: DoorOpen,
    name: "Video Door Phones",
    short: "Smart visitor verification.",
    desc: "Visitor verification with two-way audio and cloud unlock.",
    image: hVdp,
    why: "Never miss a visitor. Smart video door phones connect to your smartphone, allowing you to see, speak to, and grant access to visitors from anywhere in the world.",
    where: "Main gates of luxury villas, apartment complexes, independent homes, and secure executive offices.",
    how: "An outdoor bell unit with an integrated HD camera is wired via PoE to indoor touchscreen monitors, which sync with cloud servers for remote app access.",
    maintenance: "Outdoor unit lens cleaning, app updates, and microphone dust removal.",
    bestPractices: ["Install outdoor unit away from direct glare", "Use IP-based intercoms for large societies", "Integrate with digital door locks"],
    technicalHighlights: [
      { label: "Display", value: "7-inch to 10-inch IPS" },
      { label: "Audio", value: "Two-way noise canceling" },
      { label: "Remote", value: "iOS / Android Cloud Unlock" },
    ],
    benefits: ["HD wide-angle camera", "Two-way noise canceling audio", "Remote app unlock", "Night vision capabilities"],
    applications: ["Luxury Villas", "Apartment Complexes", "Independent Homes", "Executive Offices"],
    gallery: [
      hVdp,
      hSma
    ],
    faqs: [
      { q: "Can I unlock the door for a delivery when I'm not home?", a: "Yes, the connected mobile app allows you to view the visitor and remotely trigger the electric lock." },
      { q: "Is the outdoor unit weather resistant?", a: "Absolutely. Our outdoor bell units are IP65 and IK08 rated against dust, heavy rain, and vandalism." }
    ],
    relatedSolutions: ["smart", "cctv"]
  },
  {
    slug: "network",
    icon: Network,
    name: "Structured Networking",
    short: "Enterprise cabling & switching.",
    desc: "Enterprise switching, Wi-Fi 6 and cable management.",
    image: hNet,
    why: "A security system is only as reliable as the network it runs on. Poor cabling leads to camera drops, slow attendance syncing, and access control delays. We build robust, scalable structured cabling backbones.",
    where: "Throughout corporate campuses, traversing hotel floors, and spanning massive industrial warehouses.",
    how: "We execute meticulous cable runs using certified pure copper Cat6 or Fiber Optics, terminating perfectly into labeled patch panels inside cooled network racks.",
    maintenance: "Rack dust management, switch firmware updates, and PoE budget load balancing.",
    bestPractices: ["Strictly adhere to 90-meter Cat6 limits", "Color-code patch cables by device type", "Always use L2+ managed switches for security"],
    technicalHighlights: [
      { label: "Bandwidth", value: "10 Gigabit Backbones" },
      { label: "Power", value: "PoE, PoE+, Hi-PoE" },
      { label: "Wireless", value: "Wi-Fi 6 Mesh Roaming" },
    ],
    benefits: ["Gigabit PoE+ infrastructure", "Certified Cat6/Fiber runs", "Neat, labeled rack management", "Seamless Wi-Fi roaming"],
    applications: ["Corporate Campuses", "Hotels", "Hospitals", "Warehouses"],
    gallery: [
      hNet,
      iWar
    ],
    faqs: [
      { q: "Do you certify the network runs?", a: "Yes, all network points are tested and certified for Gigabit throughput before handover." },
      { q: "Do you provide managed switches?", a: "We exclusively deploy L2/L3 managed switches for commercial projects to ensure optimal traffic routing and security VLANs." }
    ],
    relatedSolutions: ["ip-cameras"]
  },

  {
    slug: "smart",
    icon: ShieldCheck,
    name: "Smart Security",
    short: "Integrated alarms & sensors.",
    desc: "Integrated alarms, sensors and automations in one app.",
    image: hSma,
    why: "Unify your defenses. Smart security ties intrusion alarms, motion sensors, and cameras into a single, intelligent ecosystem that actively repels intruders.",
    where: "Jewelry stores, luxury independent homes, remote warehouses, and bank branches.",
    how: "A central smart hub communicates wirelessly via secure RF protocols with door contacts, PIR motion sensors, and panic buttons, instantly triggering sirens and push notifications.",
    maintenance: "Replacing lithium batteries in wireless sensors every 2-3 years and testing SIM card cellular connectivity.",
    bestPractices: ["Use pet-immune PIR sensors in homes", "Always install a dual-path (Wi-Fi + 4G) hub", "Place sirens out of arm's reach"],
    technicalHighlights: [
      { label: "Protocol", value: "Encrypted RF (433/868MHz)" },
      { label: "Backup", value: "4G LTE Cellular" },
      { label: "Battery", value: "Up to 3 Years (Sensors)" },
    ],
    benefits: ["Instant push notifications", "Wireless sensor deployment", "App-based arm/disarm", "Loud physical sirens"],
    applications: ["Jewelry Stores", "Luxury Homes", "Warehouses", "Bank Branches"],
    gallery: [
      hSma,
      hAcc
    ],
    faqs: [
      { q: "Are the sensors battery-powered?", a: "Yes, our wireless sensors run on long-life lithium batteries lasting up to 3 years, eliminating messy wiring." },
      { q: "Does it work without Wi-Fi?", a: "Our smart hubs include 4G LTE cellular backup to ensure alerts and calls go through even if the internet drops or power fails." }
    ],
    relatedSolutions: ["vdp", "cctv"]
  }
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
  { name: "eSSL", domain: "esslsecurity.com" },
  { name: "Honeywell", domain: "honeywell.com" },
  { name: "HIKVISION", domain: "hikvision.com" },
  { name: "D-Link", domain: "dlink.com" },
  { name: "Panasonic", domain: "panasonic.com" },
  { name: "ZKTeco", domain: "zkteco.com" },
  { name: "CP PLUS", domain: "cpplusworld.com" },
  { name: "Godrej", domain: "godrej.com" },
  { name: "NETGEAR", domain: "netgear.com" },
  { name: "Yale", domain: "yalehome.com" },
  { name: "BioMax", domain: "biomaxsecurity.com" },
  { name: "Dahua", domain: "dahuasecurity.com" },
  { name: "WD", domain: "westerndigital.com" },
  { name: "Seagate", domain: "seagate.com" }
];

export const CLIENTS = [
  { name: "Cipla", domain: "cipla.com" },
  { name: "Aditya Birla Capital", domain: "adityabirlacapital.com" },
  { name: "ICMR", domain: "icmr.nic.in" },
  { name: "Kalyani", domain: "kalyanigroup.com" },
  { name: "Bharati Hospital", domain: "bharatividyapeethhospital.com" },
  { name: "Zuari Agro Chemicals", domain: "zuari.in" },
  { name: "Esbee Realty", domain: "esbeerealty.com" },
  { name: "La densitae", domain: "ladensitae.com" },
  { name: "DYP", domain: "dypatil.edu" },
  { name: "Cummins", domain: "cummins.com" },
  { name: "SMC Super", domain: "" },
  { name: "Privilege", domain: "" },
  { name: "traveltime", domain: "traveltime.com" },
  { name: "IMAX Multispeciality", domain: "imaxhospital.com" },
  { name: "Silver Birch", domain: "silverbirch.co.in" },
  { name: "Manikchand", domain: "manikchandgroup.com" },
  { name: "Karma Realty", domain: "karmarealty.in" },
  { name: "Garve Developers", domain: "garvedevelopers.com" },
  { name: "Dodke Landmarks", domain: "dodkelandmarks.com" },
  { name: "Bhandari Associates", domain: "bhandariassociates.co.in" },
  { name: "PVR Projects Ltd", domain: "pvrcinemas.com" },
  { name: "Sonai", domain: "sonaidairy.com" },
  { name: "Skoda", domain: "skoda-auto.com" },
  { name: "Honda", domain: "honda.com" },
  { name: "Hyundai", domain: "hyundai.com" },
  { name: "Mahindra", domain: "mahindra.com" },
  { name: "Maruti Suzuki", domain: "marutisuzuki.com" },
  { name: "Kia", domain: "kia.com" },
  { name: "Tata", domain: "tatamotors.com" },
  { name: "TVS", domain: "tvsmotor.com" },
  { name: "Bajaj", domain: "bajajauto.com" }
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
