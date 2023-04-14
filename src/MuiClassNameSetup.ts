import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className';

ClassNameGenerator.configure((componentName) => `pixel-${componentName.replace('Mui', 'Pixel')}`);
