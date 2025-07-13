const { writeFileSync, mkdirSync } = require('fs');
const path = require('path');

// Siempre carga el .env desde la raíz del proyecto, sin importar desde dónde ejecutes el script
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const targetPath = path.resolve(__dirname, '../environments/environment.ts');
const targetPathDev = path.resolve(__dirname, '../environments/enviroment.development.ts');

const mapboxKey = process.env['MAPBOX_KEY'];
console.log('MAPBOX_KEY:', mapboxKey); // Para depuración

if (!mapboxKey) {
  throw new Error('MAPBOX_KEY is not set');
}

const envFileContent = `
  export const environment = {
    mapboxKey: "${mapboxKey}"
  };
`;

mkdirSync(path.resolve(__dirname, '../environments'), { recursive: true });
writeFileSync(targetPath, envFileContent);
writeFileSync(targetPathDev, envFileContent);
