// File: app/api/contact/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/app/lib/validations/contact';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    console.log('Attempting to send email:', {
  from: 'onboarding@resend.dev',
  to: 'nitinemailss@gmail.com',
  subject: validatedData.service,
});
console.log('Resend response:', data);


    // Use Resend's test domain for development
    const data = await resend.emails.send({
      from: 'C3 Career Consultants <onboarding@resend.dev>', // ✅ Resend's test domain
      to: ['nitinemailss@gmail.com'],
      replyTo: validatedData.email, // User's email for replies
      subject: `New Contact Form Submission - ${validatedData.service}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #1e3a8a; margin-bottom: 5px; }
              .value { background: white; padding: 12px; border-radius: 6px; border-left: 4px solid #d97706; }
              .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">New Contact Form Submission</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">C3 Career Consultants</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Full Name:</div>
                  <div class="value">${validatedData.name}</div>
                </div>
                
                <div class="field">
                  <div class="label">Email Address:</div>
                  <div class="value">${validatedData.email}</div>
                </div>
                
                <div class="field">
                  <div class="label">Phone Number:</div>
                  <div class="value">+91 ${validatedData.phone}</div>
                </div>
                
                <div class="field">
                  <div class="label">Service Interested In:</div>
                  <div class="value">${validatedData.service}</div>
                </div>
                
                ${validatedData.message ? `
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${validatedData.message.replace(/\n/g, '<br>')}</div>
                </div>
                ` : ''}
                
                <div class="footer">
                  <p>This email was sent from the contact form on C3 Career Consultants website.</p>
                  <p>Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                  <p style="margin-top: 10px;">
                    <strong>Reply to:</strong> ${validatedData.email}
                  </p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log('Email sent successfully:', data); // Add logging

    return NextResponse.json(
      { message: 'Email sent successfully', id: data.id },
      { status: 200 }
    );
  } catch (error) {
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { 
          message: 'Validation failed', 
          errors: error.errors.map(err => ({
            field: err.path[0],
            message: err.message
          }))
        },
        { status: 400 }
      );
    }

    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Failed to send email. Please try again later.', error: error.message },
      { status: 500 }
    );
  }
}
