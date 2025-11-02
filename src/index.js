import { app } from './app.js';
import { colorText } from './helpers/colorText.js';
import { COLORS } from './constants/colors.js';

const args = process.argv.splice(2);

if (args.length > 0 && args[0].startsWith('--username') && args[0].includes('=')) {
  const [_, userName] = args[0].split('=');

  app(userName ? userName : 'Anonymous');
} else {
  console.log(colorText("For start program type: 'npm run start -- --username=your_username'", COLORS.fg.red));
}
