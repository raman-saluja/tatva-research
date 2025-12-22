import { NextResponse } from "next/server";
import { transporter } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📨 Received contact form submission:", body);

    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          status: "error",
          message: "All fields are required: name, email, message",
        },
        { status: 400 },
      );
    }

    // Create email content
    const mailOptions = {
      from: `"Tatav Research Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}

Timestamp: ${new Date().toLocaleString()}
      `,
      html: `
<div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
  <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">New Contact Form Submission</h2>
    
    <div style="margin: 20px 0;">
      <p><strong style="color: #555;">Name:</strong> ${name}</p>
      <p><strong style="color: #555;">Email:</strong> <a href="mailto:${email}" style="color: #4CAF50;">${email}</a></p>
      <p><strong style="color: #555;">Submitted at:</strong> ${new Date().toLocaleString()}</p>
    </div>
    
    <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #4CAF50; margin: 20px 0;">
      <h3 style="color: #333; margin-top: 0;">Message:</h3>
      <p style="color: #666; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
    </div>
    
    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #777; font-size: 12px;">
      <p>This email was sent from your Tatav Research contact form.</p>
    </div>
  </div>
</div>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Email sent successfully:", info.messageId);

    return NextResponse.json({
      status: "success",
      message: "Thank you! Your message has been sent successfully.",
      data: {
        name,
        email,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error: any) {
    console.error("❌ Error sending email:", error);

    let errorMessage = "Failed to send message. Please try again later.";

    if (error.code === "EAUTH") {
      errorMessage =
        "Email configuration error. Please check your credentials.";
    } else if (error.code === "EENVELOPE") {
      errorMessage = "Invalid email address provided.";
    }

    return NextResponse.json(
      {
        status: "error",
        message: errorMessage,
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 },
    );
  }
}
