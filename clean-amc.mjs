import fs from 'fs';

let content = fs.readFileSync('src/lib/site-data.ts', 'utf8');

// 1. Remove AMC from relatedSolutions
content = content.replace(/"ip-cameras", "network", "amc"/g, '"ip-cameras", "network"');
content = content.replace(/"ip-cameras", "amc"/g, '"ip-cameras"');

// 2. Remove AMC solution block entirely
const amcStart = content.indexOf('  {\n    slug: "amc",');
if (amcStart !== -1) {
    const nextStart = content.indexOf('  {\n    slug: "biometric",', amcStart);
    if (nextStart !== -1) {
        content = content.slice(0, amcStart) + content.slice(nextStart);
    }
}

// 3. Remove AMC FAQ entries
content = content.replace(/      { q: "What is the standard response time\?", a: "Our business AMC plans include a 12 to 24-hour response SLA, while enterprise plans feature 1 to 4-hour critical response." },\n/g, '');
content = content.replace(/      { q: "Do you take over existing installations\?", a: "Yes, we can conduct a full system audit, repair underlying issues, and take over AMC for systems installed by third parties." },?\n/g, '');
content = content.replace(/      { q: "Do you offer post-installation support\?", a: "Yes, we provide 24x7 support and AMC packages." },?\n/g, '      { q: "Do you offer post-installation support?", a: "Yes, we provide 24x7 support." },\n');

// 4. Update Testimonial
content = content.replace(/Their AMC response is genuinely under an hour, every single time/g, 'Their response time is genuinely under an hour, every single time');

// 5. Update Process
content = content.replace(/AMC-backed care with 24×7 NOC monitoring/g, 'Comprehensive support with 24×7 NOC monitoring');

// 6. Update Blog
content = content.replace(/The annual maintenance checklist every facility manager needs/g, 'The maintenance checklist every facility manager needs');
content = content.replace(/amc-checklist/g, 'maintenance-checklist');

// 7. Remove AMC PLANS safely
const amcPlansStart = content.indexOf('export const AMC_PLANS = [');
if (amcPlansStart !== -1) {
    const endBracket = content.indexOf('];', amcPlansStart);
    if (endBracket !== -1) {
        content = content.slice(0, amcPlansStart) + content.slice(endBracket + 2);
    }
}

// Update address to the real address
content = content.replace(/address: "Vigilant House, Pune",/g, 'address: "HN 48/1, Pitrukrupa Building, near Datta Mandir, Satara Road, Dhankawadi, Pune - 411043",');

fs.writeFileSync('src/lib/site-data.ts', content);
console.log("Scrubbed AMC from site-data.ts");
