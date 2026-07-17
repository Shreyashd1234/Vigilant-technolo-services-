import fs from 'fs';
import path from 'path';

const partners = [
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

const clients = [
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
  { name: "SMC Super", domain: "smcinternational.in" },
  { name: "Privilege", domain: "privilegehospitality.com" },
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

const downloadImage = async (url, dest) => {
  const res = await fetch(url);
  if (!res.ok) {
     if (res.status === 404) throw new Error('Not Found');
     throw new Error('Status ' + res.status);
  }
  const arrayBuffer = await res.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  if (buffer.length < 300) throw new Error('Image too small');
  fs.writeFileSync(dest, buffer);
  return buffer.length;
};

const createTextSvg = (name, dest) => {
  const words = name.split(' ');
  const text = words.length > 1 ? words[0] + ' ' + words[1] : name;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><rect width="100%" height="100%" fill="transparent" /><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-weight="800" font-size="28" fill="#475569" letter-spacing="-0.5">' + text + '</text></svg>';
  fs.writeFileSync(dest, svg);
}

const processLogos = async (items, prefix) => {
  for (const item of items) {
    if (!item.domain) {
      createTextSvg(item.name, path.join(process.cwd(), 'public', 'logos', prefix + '_' + item.name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase() + '.svg'));
      continue;
    }
    const safeName = item.name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
    const pngPath = path.join(process.cwd(), 'public', 'logos', prefix + '_' + safeName + '.png');
    const svgPath = path.join(process.cwd(), 'public', 'logos', prefix + '_' + safeName + '.svg');
    
    if (fs.existsSync(pngPath)) fs.unlinkSync(pngPath);
    if (fs.existsSync(svgPath)) fs.unlinkSync(svgPath);

    try {
      console.log('Fetching ' + item.name + ' from brandfetch...');
      await downloadImage('https://cdn.brandfetch.io/' + item.domain + '/w/400/h/400', pngPath);
      console.log('Success (brandfetch): ' + item.name);
    } catch (e) {
      console.log('Brandfetch failed for ' + item.name + ': ' + e.message + '. Creating premium text SVG.');
      createTextSvg(item.name, svgPath);
    }
  }
};

(async () => {
  if (!fs.existsSync(path.join(process.cwd(), 'public', 'logos'))) {
    fs.mkdirSync(path.join(process.cwd(), 'public', 'logos'), { recursive: true });
  }
  await processLogos(partners, 'partner');
  await processLogos(clients, 'client');
  console.log('All done!');
})();
