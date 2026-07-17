import fs from 'fs';

let content = fs.readFileSync('src/lib/site-data.ts', 'utf8');

// Find the first instance of export const PROJECTS
const p1 = content.indexOf('export const PROJECTS = [');
if (p1 !== -1) {
  // Find the second instance
  const p2 = content.indexOf('export const PROJECTS = [', p1 + 10);
  if (p2 !== -1) {
    // Delete the FIRST instance since it's the one I just injected improperly
    const end1 = content.indexOf('];', p1);
    content = content.slice(0, p1) + content.slice(end1 + 2);
  }
}

// Do the same for `export const inr`
const i1 = content.indexOf('export const inr = ');
if (i1 !== -1) {
  const i2 = content.indexOf('export const inr = ', i1 + 10);
  if (i2 !== -1) {
    // Delete the first instance
    const endI = content.indexOf(';', i1);
    content = content.slice(0, i1) + content.slice(endI + 1);
  }
}

fs.writeFileSync('src/lib/site-data.ts', content);
