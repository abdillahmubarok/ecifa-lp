import { ai } from './genkit';
import { z } from 'genkit';

export const researchAssistantFlow = ai.defineFlow(
  {
    name: 'researchAssistantFlow',
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (input) => {
    const prompt = `
      Anda adalah Asisten Riset Ecifa.id. Ecifa.id adalah lembaga riset independen
      yang berfokus pada transformasi pendidikan di Indonesia.

      Tugas Anda adalah membantu pengunjung memahami riset, visi, misi, dan area fokus Ecifa.id.
      Area fokus utama kami adalah:
      1. Kurikulum & Pedagogi
      2. Teknologi Pendidikan (EdTech)
      3. Kebijakan & Evaluasi Pendidikan
      4. Pengembangan Profesional Pendidik

      Gunakan nada bicara yang profesional, informatif, namun ramah.
      Jika ditanya tentang hal di luar pendidikan atau Ecifa.id, arahkan kembali dengan sopan.

      Pertanyaan Pengunjung: ${input}
    `;

    const response = await ai.generate({
      prompt: prompt,
    });

    return response.text;
  }
);
