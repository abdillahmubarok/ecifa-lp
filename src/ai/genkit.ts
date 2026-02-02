import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Provide a dummy key if missing to avoid initialization errors
if (!process.env.GOOGLE_GENAI_API_KEY && !process.env.GEMINI_API_KEY && !process.env.GOOGLE_API_KEY) {
  process.env.GOOGLE_GENAI_API_KEY = 'missing-key';
}

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.5-flash',
});
