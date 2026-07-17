import fs from 'fs';

let content = fs.readFileSync('src/lib/site-data.ts', 'utf8');

const additions = `
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

export const PROJECTS = [
  {
    slug: "lodha-belmondo",
    name: "Lodha Belmondo Estates",
    type: "Residential",
    clientBackground: "Premium 100+ acre luxury township requiring perimeter and tower security.",
    scope: "Installed 450+ Hikvision IP Cameras, central NOC, and ANPR at entry gates.",
    image: "/placeholder.png"
  },
  {
    slug: "symbiosis-campus",
    name: "Symbiosis Campus",
    type: "Education",
    clientBackground: "Multi-facility campus with high student footfall and massive perimeter.",
    scope: "End-to-end optical fiber network, 300+ Dahua Starlight cameras, and 50 biometric access control points.",
    image: "/placeholder.png"
  }
];

export const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format;
`;

if (!content.includes('export const EXPERTISE')) {
  // Insert right after BRAND
  const brandEnd = content.indexOf('};', content.indexOf('export const BRAND')) + 2;
  content = content.slice(0, brandEnd) + '\\n\\n' + additions + content.slice(brandEnd);
}

fs.writeFileSync('src/lib/site-data.ts', content);
console.log("Restored missing exports");
