import fs from 'fs';

let content = fs.readFileSync('src/lib/site-data.ts', 'utf8');

content = content.replace(/"ip-cameras", "network", "amc"/g, '"ip-cameras", "network"');
content = content.replace(/"ip-cameras", "amc"/g, '"ip-cameras"');

content = content.replace(/      { q: "What is the standard response time\?", a: "Our business AMC plans include a 12 to 24-hour response SLA, while enterprise plans feature 1 to 4-hour critical response." },\n/g, '');
content = content.replace(/      { q: "Do you take over existing installations\?", a: "Yes, we can conduct a full system audit, repair underlying issues, and take over AMC for systems installed by third parties." },?\n/g, '');
content = content.replace(/      { q: "Do you offer post-installation support\?", a: "Yes, we provide 24x7 support and AMC packages." },?\n/g, '      { q: "Do you offer post-installation support?", a: "Yes, we provide 24x7 support." },\n');

content = content.replace(/Their AMC response is genuinely under an hour, every single time/g, 'Their response time is genuinely under an hour, every single time');
content = content.replace(/AMC-backed care with 24×7 NOC monitoring/g, 'Comprehensive support with 24×7 NOC monitoring');
content = content.replace(/The annual maintenance checklist every facility manager needs/g, 'The maintenance checklist every facility manager needs');
content = content.replace(/amc-checklist/g, 'maintenance-checklist');
content = content.replace(/address: "Vigilant House, Pune",/g, 'address: "HN 48/1, Pitrukrupa Building, near Datta Mandir, Satara Road, Dhankawadi, Pune - 411043",');

const lines = content.split('\n');
const newLines = [];
let skip = false;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('slug: "amc"')) {
    // We want to skip this solution object. Go backwards to remove the opening brace
    while(newLines.length > 0 && !newLines[newLines.length - 1].includes('{')) {
      newLines.pop();
    }
    if (newLines.length > 0) newLines.pop(); // pop the '{' line
    skip = true;
    continue;
  }
  
  if (skip) {
    if (lines[i].includes('  },')) {
      skip = false;
    }
    continue;
  }
  
  if (lines[i].includes('export const AMC_PLANS')) {
    skip = true;
    continue;
  }
  if (skip && lines[i].includes('];')) {
    skip = false;
    continue;
  }

  newLines.push(lines[i]);
}

fs.writeFileSync('src/lib/site-data.ts', newLines.join('\n'));
console.log("Safely scrubbed AMC from site-data.ts");
