const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Reemplaza las comillas simples: 'http://localhost:3031/ruta' -> `${import.meta.env.VITE_API_URL || 'http://localhost:3031'}/ruta`
    content = content.replace(/'http:\/\/localhost:3031([^']*)'/g, "`${import.meta.env.VITE_API_URL || 'http://localhost:3031'}$1`");
    
    // Reemplaza los template literals: `http://localhost:3031/ruta` -> `${import.meta.env.VITE_API_URL || 'http://localhost:3031'}/ruta`
    content = content.replace(/`http:\/\/localhost:3031([^`]*)`/g, "`${import.meta.env.VITE_API_URL || 'http://localhost:3031'}$1`");
    
    fs.writeFileSync(filePath, content, 'utf8');
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
            replaceInFile(fullPath);
        }
    }
}

walkDir(path.join(__dirname, 'src'));
console.log('URLs actualizadas exitosamente.');
