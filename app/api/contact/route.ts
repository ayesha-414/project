import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, course, message } = await request.json();

    // 1. Setup the Email Transporter (Equivalent to smtplib)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    // 2. Logic for recipients (Matching your app.py)
    let targetMail = '24pw07@psgtech.ac.in';
    if (course === "B.Sc Applied Science") targetMail = '24pw35@psgtech.ac.in';
    else if (course === "M.Sc Fashion Design & Merchandising") targetMail = '24pw33@psgtech.ac.in';

    const recipients = [targetMail, 'subhaharinip@gmail.com', 'ayeshuayesha414@gmail.com', 'supreetagopal19@gmail.com'];

    // 3. Send the Email
    await transporter.sendMail({
      from: process.env.MAIL_USERNAME,
      to: recipients.join(', '),
      subject: `Course Inquiry [${course}] - ${name}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p><strong>Course:</strong> ${course}</p><div>${message}</div>`,
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed", error: String(error) }, { status: 500 });
  }
}