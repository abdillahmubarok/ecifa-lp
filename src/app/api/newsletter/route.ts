import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email harus diisi' },
        { status: 400 }
      );
    }

    // Inform admin about new subscriber
    const { data, error } = await resend.emails.send({
      from: 'Ecifa Newsletter <onboarding@resend.dev>',
      to: ['info@ecifa.id'],
      subject: `Langganan Newsletter Baru: ${email}`,
      html: `
        <h2>Pendaftaran Newsletter Baru di Ecifa.id</h2>
        <p>Email: <strong>${email}</strong> ingin berlangganan update riset terbaru.</p>
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
