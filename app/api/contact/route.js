import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/app/lib/validations/contact';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    const data = await resend.emails.send({
      from: 'C3 Career Consultants <noreply@c3consultants.in>',
      to: ['c3consultants.in@gmail.com', 'manikrajsingla@gmail.com'],
      replyTo: validatedData.email,
      subject: `New Contact Form - ${validatedData.service}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 0 auto; }
              .header { background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%); color: white; padding: 30px; text-align: center; }
              .content { background: #f9fafb; padding: 30px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #1e3a8a; margin-bottom: 5px; display: block; }
              .value { background: white; padding: 12px; border-radius: 6px; border-left: 4px solid #d97706; }
              .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px;">🎯 New Contact Form Submission</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 14px;">C3 Career Consultants</p>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">👤 Full Name:</span>
                  <div class="value">${validatedData.name}</div>
                </div>
                
                <div class="field">
                  <span class="label">📧 Email Address:</span>
                  <div class="value"><a href="mailto:${validatedData.email}">${validatedData.email}</a></div>
                </div>
                
                <div class="field">
                  <span class="label">📱 Phone Number:</span>
                  <div class="value"><a href="tel:+91${validatedData.phone}">+91 ${validatedData.phone}</a></div>
                </div>
                
                <div class="field">
                  <span class="label">🎓 Service Interested In:</span>
                  <div class="value">${validatedData.service}</div>
                </div>
                
                ${validatedData.message ? `
                <div class="field">
                  <span class="label">💬 Message:</span>
                  <div class="value">${validatedData.message.replace(/\n/g, '<br>')}</div>
                </div>
                ` : ''}
                
                <div class="footer">
                  <p>📅 Received: ${new Date().toLocaleString('en-IN', { 
                    timeZone: 'Asia/Kolkata',
                    dateStyle: 'full',
                    timeStyle: 'short'
                  })}</p>
                  <p style="margin-top: 10px; font-size: 14px; background: #fef3c7; padding: 10px; border-radius: 5px;">
                    <strong>💡 Quick Action:</strong> Click "Reply" to respond directly to the customer
                  </p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { 
        message: 'Email sent successfully', 
        id: data.id,
        success: true 
      },
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
          })),
          success: false
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Failed to send email. Please try again later.',
        success: false
      },
      { status: 500 }
    );
  }
}
