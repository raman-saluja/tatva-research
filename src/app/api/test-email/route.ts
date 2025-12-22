import { NextResponse } from "next/server";
import { transporter } from "@/lib/email";

export async function POST() {
  try {
    const testMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: "Test Email from Tatav Research Backend (Next.js)",
      text: "This is a test email sent at " + new Date().toLocaleString(),
      html: "<p>This is a <strong>test email</strong> sent from Tatav Research backend (Next.js).</p>",
    };

    const info = await transporter.sendMail(testMailOptions);

    return NextResponse.json({
      status: "success",
      message: "Test email sent successfully!",
      messageId: info.messageId,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to send test email: " + error.message,
      },
      { status: 500 },
    );
  }
}
