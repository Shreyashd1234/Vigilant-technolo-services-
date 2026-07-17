import fs from 'fs';

let content = fs.readFileSync('src/lib/site-data.ts', 'utf8');

// 1. Remove Industries from NAV
content = content.replace('{ label: "Industries", to: "/industries" },\n  ', '');

// 2. Add imports
const imports = `
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
`;

if (!content.includes('iTurnstile')) {
  content = content.replace('import iRet from "@/assets/generated/vg_ind_retail_1782929149260.png";', 'import iRet from "@/assets/generated/vg_ind_retail_1782929149260.png";\n' + imports);
}

// 3. New SOLUTIONS array
const newSolutions = `export const SOLUTIONS: Solution[] = [
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
];`;

const solStart = content.indexOf('export const SOLUTIONS: Solution[] = [');
const solEnd = content.indexOf('];', solStart);
content = content.slice(0, solStart) + newSolutions + content.slice(solEnd + 2);

fs.writeFileSync('src/lib/site-data.ts', content);
