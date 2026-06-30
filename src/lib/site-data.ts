import {
  Camera, Cctv, Fingerprint, KeyRound, DoorOpen, Network, Wrench, ShieldCheck,
  Home, Building2, Warehouse, Factory, Hospital, GraduationCap, Store, Users,
} from "lucide-react";

export const BRAND = {
  name: "Vigilant Technologies",
  short: "Vigilant",
  tagline: "Protecting What Matters Through Intelligent Security.",
  city: "Pune, India",
  phone: "+91 98000 00000",
  email: "hello@vigilant.tech",
  address: "Vigilant House, Baner Road, Pune 411045",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Solutions", to: "/solutions" },
  { label: "Products", to: "/products" },
  { label: "Projects", to: "/projects" },
  { label: "AMC", to: "/amc" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export const SOLUTIONS = [
  { slug: "cctv", icon: Cctv, name: "CCTV Systems", desc: "HD analog & turbo HD recording for round-the-clock coverage." },
  { slug: "ip-cameras", icon: Camera, name: "IP Cameras", desc: "4K AI cameras with edge analytics and cloud playback." },
  { slug: "biometric", icon: Fingerprint, name: "Biometric Attendance", desc: "Fingerprint, face & palm-vein attendance for teams of any size." },
  { slug: "access", icon: KeyRound, name: "Access Control", desc: "Card, mobile and biometric access with audit trails." },
  { slug: "vdp", icon: DoorOpen, name: "Video Door Phones", desc: "Visitor verification with two-way audio and cloud unlock." },
  { slug: "network", icon: Network, name: "Structured Networking", desc: "Enterprise switching, Wi-Fi 6 and cable management." },
  { slug: "amc", icon: Wrench, name: "AMC & Support", desc: "Proactive maintenance with guaranteed response SLAs." },
  { slug: "smart", icon: ShieldCheck, name: "Smart Security", desc: "Integrated alarms, sensors and automations in one app." },
];

export const INDUSTRIES = [
  { icon: Home, name: "Homes & Villas" },
  { icon: Building2, name: "Apartments & Societies" },
  { icon: Store, name: "Retail & Restaurants" },
  { icon: Warehouse, name: "Warehouses" },
  { icon: Factory, name: "Factories & Industries" },
  { icon: Hospital, name: "Hospitals & Clinics" },
  { icon: GraduationCap, name: "Schools & Campuses" },
  { icon: Users, name: "Offices & Co-working" },
];

export const METRICS = [
  { value: "12+", label: "Years of Experience" },
  { value: "4,200+", label: "Installations" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "24×7", label: "Support" },
  { value: "60+", label: "Certified Technicians" },
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
  specs: { label: string; value: string }[];
};

export const PRODUCTS: Product[] = [
  { id: "p1", slug: "vg-x4-dome", name: "VG X4 Dome 4K AI", category: "IP Cameras", price: 14990, mrp: 17900, badge: "New", short: "8MP AI dome with smart motion zones.", specs: [{ label: "Resolution", value: "8MP / 4K" }, { label: "Lens", value: "2.8mm" }, { label: "IR Range", value: "30m" }, { label: "Protection", value: "IP67" }] },
  { id: "p2", slug: "vg-bullet-pro", name: "VG Bullet Pro 5MP", category: "IP Cameras", price: 9990, mrp: 12500, badge: "Bestseller", short: "Color night vision with edge analytics.", specs: [{ label: "Resolution", value: "5MP" }, { label: "Lens", value: "3.6mm" }, { label: "IR Range", value: "40m" }, { label: "Protection", value: "IP67" }] },
  { id: "p3", slug: "vg-nvr-16", name: "VG NVR 16-Channel", category: "Recorders", price: 22990, mrp: 26900, short: "16ch 4K NVR with 8TB storage and PoE.", specs: [{ label: "Channels", value: "16" }, { label: "Storage", value: "8TB" }, { label: "PoE Ports", value: "16" }, { label: "RAID", value: "Yes" }] },
  { id: "p4", slug: "vg-bio-f10", name: "VG Bio F10 Face Reader", category: "Biometric", price: 18990, mrp: 21500, badge: "Pro", short: "Touchless face & palm attendance.", specs: [{ label: "Users", value: "10,000" }, { label: "Speed", value: "<0.3s" }, { label: "Connectivity", value: "Wi-Fi / LAN" }, { label: "Display", value: "5″ IPS" }] },
  { id: "p5", slug: "vg-access-mini", name: "VG Access Mini Reader", category: "Access Control", price: 7490, mrp: 8990, short: "RFID + PIN access for offices.", specs: [{ label: "Cards", value: "5,000" }, { label: "Standards", value: "Mifare / EM" }, { label: "Output", value: "Wiegand" }, { label: "Power", value: "12V DC" }] },
  { id: "p6", slug: "vg-vdp-7", name: "VG Smart VDP 7″", category: "Video Door Phones", price: 12490, mrp: 14900, badge: "Smart", short: "7-inch IPS panel with cloud unlock.", specs: [{ label: "Display", value: "7″ IPS" }, { label: "Camera", value: "2MP" }, { label: "App", value: "iOS / Android" }, { label: "Unlock", value: "App / RFID" }] },
  { id: "p7", slug: "vg-switch-24", name: "VG PoE Switch 24-Port", category: "Networking", price: 32990, mrp: 38500, short: "Managed gigabit PoE+ for camera networks.", specs: [{ label: "Ports", value: "24 × Gigabit" }, { label: "PoE Budget", value: "370W" }, { label: "Uplink", value: "4 × SFP" }, { label: "Management", value: "L2+" }] },
  { id: "p8", slug: "vg-alarm-hub", name: "VG Smart Alarm Hub", category: "Smart Security", price: 8990, mrp: 10500, short: "Wireless hub for sensors & sirens.", specs: [{ label: "Zones", value: "Unlimited" }, { label: "Backup", value: "12hr" }, { label: "Cellular", value: "4G LTE" }, { label: "App", value: "Vigilant One" }] },
];

export const TESTIMONIALS = [
  { quote: "The team delivered a 64-camera deployment across our manufacturing plant ahead of schedule. Cable work was immaculate.", name: "Rohan Mehta", role: "Plant Director, Tata Industries" },
  { quote: "We replaced three vendors with Vigilant. Their AMC response is genuinely under an hour, every single time.", name: "Anita Sharma", role: "Facilities Head, Lodha Group" },
  { quote: "Best-in-class advice. They specified exactly what we needed — no overselling.", name: "Dr. Iqbal Khan", role: "Director, Sahyadri Hospitals" },
];

export const PROJECTS = [
  { name: "Lodha Belmondo", type: "Residential Society", scope: "240 cameras · 18 access points · 4 control rooms" },
  { name: "Symbiosis University", type: "Education Campus", scope: "Biometric attendance for 6,000 students" },
  { name: "Sahyadri Hospital", type: "Healthcare", scope: "Integrated CCTV + access for 5 wings" },
  { name: "Tata Motors Plant", type: "Industrial", scope: "Perimeter AI cameras with thermal alerts" },
  { name: "Phoenix Marketcity", type: "Retail", scope: "320 channels with cloud archive" },
  { name: "Westin Pune", type: "Hospitality", scope: "Discreet IP coverage across 230 rooms" },
];

export const BLOG = [
  { slug: "ai-cameras-2026", title: "How AI cameras are quietly replacing guard rooms in 2026", excerpt: "Edge analytics, smart zones and the new economics of surveillance.", date: "Jun 18, 2026", read: "6 min" },
  { slug: "amc-checklist", title: "The annual maintenance checklist every facility manager needs", excerpt: "A practical guide to keeping a 100+ camera deployment healthy.", date: "May 30, 2026", read: "4 min" },
  { slug: "biometric-vs-rfid", title: "Biometric vs RFID: choosing access control for modern offices", excerpt: "Cost, security, and the friction users will actually accept.", date: "May 12, 2026", read: "5 min" },
];

export const AMC_PLANS = [
  { name: "Essential", price: "₹ 18,000", period: "/ year", desc: "For small offices & homes up to 16 cameras.", features: ["Quarterly preventive visits", "48-hour response SLA", "Remote monitoring & alerts", "Free firmware upgrades"] },
  { name: "Business", price: "₹ 48,000", period: "/ year", popular: true, desc: "For multi-site businesses up to 64 cameras.", features: ["Monthly preventive visits", "12-hour response SLA", "Dedicated technician", "Quarterly health reports", "10% spare-parts discount"] },
  { name: "Enterprise", price: "Custom", period: "", desc: "For campuses, factories and societies.", features: ["On-site stationed engineer", "1-hour response SLA", "24×7 NOC monitoring", "Quarterly business reviews", "Full inventory of spares"] },
];

export const PROCESS = [
  { step: "01", title: "Free Site Survey", desc: "We map your premises and risks within 48 hours." },
  { step: "02", title: "Design & Quote", desc: "Transparent BoQ with engineering drawings." },
  { step: "03", title: "Installation", desc: "Clean cabling, label-perfect racks, zero shortcuts." },
  { step: "04", title: "Training", desc: "Your team learns the system end-to-end." },
  { step: "05", title: "Lifetime Support", desc: "AMC-backed care with 24×7 NOC monitoring." },
];

export const inr = (n: number) => `₹ ${n.toLocaleString("en-IN")}`;
