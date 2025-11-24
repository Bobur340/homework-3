import { sendSms } from './src/sendSms.js';

async function main() {
  try {
    const result = await sendSms('998940939212', 'Salom!');
    console.log(result);
  } catch (err: unknown) {
    const error = err as { message?: string };
    console.error('Xatolik:', error.message ?? err);
  }
}

main();
