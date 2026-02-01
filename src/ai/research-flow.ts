import { ai } from './genkit';
import { z } from 'genkit';

export const researchAssistantFlow = ai.defineFlow(
  {
    name: 'researchAssistantFlow',
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (input) => {
    // Check if API key is missing or dummy
    const apiKey = process.env.GOOGLE_GENAI_API_KEY || process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
    if (!apiKey || apiKey === 'missing-key') {
      return "Halo! Saya adalah Asisten Riset Ecifa.id. Saat ini sistem AI sedang dalam tahap konfigurasi (API Key belum diatur). \n\nEcifa.id adalah lembaga riset independen yang berfokus pada transformasi pendidikan melalui riset Kurikulum & Pedagogi, Teknologi Pendidikan, Kebijakan Pendidikan, dan Pengembangan Pendidik. Ada yang bisa saya bantu sampaikan kepada tim kami?";
    }

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

    try {
      const response = await ai.generate({
        prompt: prompt,
      });

      return response.text;
    } catch (error: any) {
      console.error('Genkit Error:', error);

      if (error.message?.includes('API key')) {
        return "Maaf, sistem AI sedang dalam konfigurasi (API Key tidak valid). Ecifa.id tetap siap membantu Anda melalui riset di bidang Kurikulum, EdTech, dan Kebijakan Pendidikan. Silakan hubungi kami via halaman kontak!";
      }

      return "Maaf, saya sedang mengalami kendala teknis saat memproses permintaan Anda. Silakan coba lagi beberapa saat lagi.";
    }
  }
);
