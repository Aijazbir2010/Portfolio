import nodemailer from 'nodemailer'
import { json } from '@remix-run/node'

const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
});

export const action = async ({ request }: {request: Request}) => {
    if (request.method !== 'POST') {
        return json({ error: 'Method Not Allowed !' }, { status: 405 })
    }

    try {
        const formData = await request.formData()
        const email = formData.get('email')
        const message = formData.get('message')

        if (!email || !message) {
            return json({ error: 'All fields are required !' }, { status: 400 })
        }

        const mailOptions = {
            from: process.env.EMAIL,
            to: 'funaijazbirs@gmail.com',
            subject: 'Message from Portfolio',
            html: `<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PokéSphere - Verification Code</title>
  </head>
  <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #101010;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #101010; padding: 250px 10px;">
      <tr>
        <td align="center">
          <!-- Main Card Container -->
          <table border="0" cellpadding="0" cellspacing="0" width="700" style="border-radius: 24px; overflow: hidden;">
            
            <tr>
              <td align="center" style="padding: 40px 20px 20px;">
                <table border="0" cellpadding="0" cellspacing="0" style="width: auto; display: inline-table;">
                    <tr>
                      <!-- Logo Column -->
                      <td style="padding-right: 10px; vertical-align: middle;">
                        <img src="https://i.ibb.co/zmZMxr5/portfoliologo.png" alt="PokéSphere Logo" style="width: 50px; height: 50px;">
                      </td>
                    </tr>
                  </table>
              </td>
            </tr>

            <tr>
              <td align="center" style="padding: 20px 0 10px; background-color: #0F171B; border-radius: 24px;">
                <h2 style="margin: 0; color: #ffffff; font-size: 32px;">${email}</h2>
              </td>
            </tr>

            <tr>
                <td style="height: 20px; background-color: transparent;"></td> <!-- Spacer row -->
            </tr>

            <tr>
              <td align="center" style="background-color: #0F171B; border-radius: 24px; height: 150px;">
                <h2 style="padding: 10px 5px; margin: 0; color: #ffffff; font-size: 32px;">${message}</h2>
              </td>
            </tr>

            <tr>
              <td align="center" style="padding: 40px 30px 20px;">
                <p style="color: #A6A6A6; font-size: 12px; margin: 0;">
                  &copy; 2025 Aijazbir Brar. All Rights Reserved.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
            </html>`
        }

        await transporter.sendMail(mailOptions)

        return json({ success: true })
    } catch (err) {
        console.error('Error Sending Verification E-mail: ', err)
        return json({ error: 'Failed to send email' }, { status: 500 })
    }
} 
