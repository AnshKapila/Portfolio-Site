import fs from 'fs';
import path from 'path';

function fixBack(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixBack(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Let's hardcode the replacements since they got deleted
      content = content.replace(/from ["']@\/src\/views\/["']/g, (match, p1, offset, str) => {
        if (fullPath.includes('app/page.tsx')) return 'from "@/src/views/HomePage"';
        if (fullPath.includes('app/work/page.tsx')) return 'from "@/src/views/WorkPage"';
        if (fullPath.includes('app/services/page.tsx')) return 'from "@/src/views/ServicesListPage"';
        if (fullPath.includes('app/contact/page.tsx')) return 'from "@/src/views/ContactPage"';
        if (fullPath.includes('app/work/[slug]/page.tsx')) return 'from "@/src/views/ProjectPage"';
        if (fullPath.includes('app/services/[slug]/page.tsx')) return 'from "@/src/views/ServicePage"';
        return match;
      });
      
      content = content.replace(/from ["']@\/src\/data\/["']/g, (match) => {
        if (fullPath.includes('app/work/[slug]/page.tsx')) return 'from "@/src/data/projects"';
        if (fullPath.includes('app/services/[slug]/page.tsx')) return 'from "@/src/data/services"';
        return match;
      });

      content = content.replace(/from ["']@\/src\/components\/["']/g, (match) => {
        if (fullPath.includes('app/layout.tsx')) return 'from "@/src/components/Footer"';
        if (fullPath.includes('app/NavbarWrapper.tsx')) return 'from "@/src/components/Navbar"';
        return match;
      });
      
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

fixBack('app');
fixBack('src');
console.log('Fixed');
