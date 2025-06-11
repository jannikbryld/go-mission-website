import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const { firstName, lastName, email, organization, message } = body
        const config = useRuntimeConfig()

        // Validate required fields
        if (!firstName || !lastName || !email || !message) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Alle påkrævede felter skal udfyldes'
            })
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Ugyldig email adresse'
            })
        }

        // Check if email configuration is complete
        if (!config.emailPassword || !config.emailFrom || !config.emailTo || !config.smtpHost || !config.smtpUser) {
            throw createError({
                statusCode: 500,
                statusMessage: 'Email konfiguration mangler. Kontakt administratoren.'
            })
        }

        // Create transporter with configurable SMTP settings
        const transporter = nodemailer.createTransport({
            host: config.smtpHost,
            port: parseInt(config.smtpPort),
            secure: parseInt(config.smtpPort) === 465, // true for 465, false for other ports
            auth: {
                user: config.smtpUser,
                pass: config.emailPassword
            },
        })

        // Email content
        const mailOptions = {
            from: config.emailFrom,
            to: config.emailTo,
            subject: `Ny besked fra ${firstName} ${lastName} via Go Mission kontaktformular`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0d9488;">Ny kontaktformular besked</h2>
          
          <div style="background-color: #f0fdfa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0d9488; margin-top: 0;">Kontaktoplysninger</h3>
            <p><strong>Navn:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${organization ? `<p><strong>Organisation:</strong> ${organization}</p>` : ''}
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Besked</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #fef3c7; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #92400e;">
              <strong>Bemærk:</strong> Denne besked er sendt via Go Mission kontaktformular på go-mission.dk
            </p>
          </div>
        </div>
      `,
            text: `
Ny besked fra Go Mission kontaktformular

Navn: ${firstName} ${lastName}
Email: ${email}
${organization ? `Organisation: ${organization}` : ''}

Besked:
${message}

---
Denne besked er sendt via Go Mission kontaktformular på go-mission.dk
      `.trim()
        }

        // Send email
        await transporter.sendMail(mailOptions)

        return {
            success: true,
            message: 'Besked sendt succesfuldt!'
        }

    } catch (error) {
        console.error('Email send error:', error)

        throw createError({
            statusCode: 500,
            statusMessage: 'Der opstod en fejl ved afsendelse af besked. Prøv igen senere.'
        })
    }
}) 