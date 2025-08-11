import { execSync } from 'child_process';

try {
  console.log('Starting build process...');
  // Use node to execute vite from the node_modules directory
  execSync('node ./node_modules/vite/bin/vite.js build', { stdio: 'inherit' });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}