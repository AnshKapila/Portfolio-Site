import fs from 'fs';
import path from 'path';

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(/from ["']@\/pages\/(.*?)["']/g, 'from "@/views/$1"');
      content = content.replace(/from ["']\.\.\/pages\/(.*?)["']/g, 'from "../views/$1"');
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

replaceInDir('app');
replaceInDir('src');
console.log('Done!');

