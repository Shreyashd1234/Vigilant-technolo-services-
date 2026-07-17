import fs from 'fs';

let content = fs.readFileSync('src/lib/site-data.ts', 'utf8');

content = content.replace(/"ip-cameras", "network", "amc"/g, '"ip-cameras", "network"');

content = content.replace(/Their AMC response is genuinely under an hour, every single time/g, 'Their response time is genuinely under an hour, every single time');
content = content.replace(/AMC-backed care with 24×7 NOC monitoring/g, 'Comprehensive support with 24×7 NOC monitoring');
content = content.replace(/The annual maintenance checklist every facility manager needs/g, 'The maintenance checklist every facility manager needs');
content = content.replace(/amc-checklist/g, 'maintenance-checklist');
content = content.replace(/address: "Vigilant House, Pune",/g, 'address: "HN 48/1, Pitrukrupa Building, near Datta Mandir, Satara Road, Dhankawadi, Pune - 411043",');

// Safely remove the AMC_PLANS array by finding its bounds
const start = content.indexOf('export const AMC_PLANS = [');
if (start !== -1) {
  const end = content.indexOf('];', start);
  if (end !== -1) {
    content = content.slice(0, start) + content.slice(end + 2);
  }
}

fs.writeFileSync('src/lib/site-data.ts', content);
console.log("Safe string replacements complete.");
