import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const { name, email, message } = await req.json()

    await resend.emails.send({
      from: "Dusty Dev <onboarding@resend.dev>",
      to: process.env.RESEND_EMAIL,
      subject: `New message from ${name}`,
      text: `From: ${email}\n\n${message}`,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error("Resend error:", error)
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    )
  }
}
