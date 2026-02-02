import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { nama, email, subjek, pesan } = await request.json();

    if (!nama || !email || !subjek || !pesan) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Ecifa Contact Form <onboarding@resend.dev>',
      to: ['musringudin@gmail.com'], // Email tujuan
      subject: `Kontak Baru: ${subjek}`,
      replyTo: email,
      html: `
        <h2>Pesan Baru dari Kontak Form Ecifa.id</h2>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subjek:</strong> ${subjek}</p>
        <p><strong>Pesan:</strong></p>
        <div style="padding: 10px; border: 1px solid #ccc; background: #f9f9f9;">
          ${pesan.replace(/\n/g, '<br/>')}
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
