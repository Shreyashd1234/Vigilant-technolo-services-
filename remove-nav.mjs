import fs from 'fs';
let c = fs.readFileSync('src/lib/site-data.ts', 'utf8');
c = c.replace(/\s*\{\s*label:\s*"Industries",\s*to:\s*"\/industries"\s*\},/g, '');
fs.writeFileSync('src/lib/site-data.ts', c);
