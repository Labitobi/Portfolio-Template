import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, phone, message } = body

    // Validate the required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Here you would typically send an email or store the contact in a database
    // For example, using a service like SendGrid, Mailgun, or your own SMTP server

    // For demonstration purposes, we'll just log the data and return success
    console.log("Contact form submission:", { name, email, company, phone, message })

    return NextResponse.json({ success: true, message: "Your message has been sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to process your request" }, { status: 500 })
  }
}

