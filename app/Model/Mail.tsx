'use server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export interface MailProps {
    to: string,
    name: string,
    subject: string,
    body: string
}

class MailService {
    private transporter: nodemailer.Transporter;

    constructor() {
        const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            auth: {
                user: SMTP_EMAIL,
                pass: SMTP_PASSWORD
            }
        });

        this.verifyConnection();
    }

    private async verifyConnection() {
        try {
            await this.transporter.verify();
            console.log('Connected to SMTP server');
        } catch (error) {
            console.log('Failed to connect to SMTP server:', error);
        }
    }

    private loadTemplate(template: string): string {
        const templatePath = path.join(process.cwd(), 'public', 'emails', `${template}.html`);
        return fs.readFileSync(templatePath, 'utf-8');
    }

    private renderTemplate(template: string, variables: Record<string, string>): string {
        return template.replace(/{{\s*(\w+)\s*}}/g, (_, key) => variables[key] || '');
    }
    
    public async sendMail(props: MailProps) {
        const { SMTP_EMAIL } = process.env;

        // Send Mail from user
        const mailOptions = {
            from: SMTP_EMAIL,
            to: props.to,
            subject: props.subject,
            html:(
                `<p>De: ${props.name} <${props.to}></p>` +
                `<p>${props.body}</p>`
            )
        };
        try {
            const info = await this.transporter.sendMail(mailOptions);
            console.log('Mail sent:', info);
        } catch (error) {
            console.log('Failed to send mail:', error);
        }

        // Send confirmation to user
        try {
            const template = this.loadTemplate('contact_confirm');
            const htmlMessage = this.renderTemplate(template, { name: props.name, message: props.body });
    
            const confirmationOptions = {
                from: SMTP_EMAIL,
                to: props.to,
                subject: 'Confirmation de réception',
                html: (`${htmlMessage}`)
            };

            await this.transporter.sendMail(confirmationOptions);
            console.log('Confirmation email sent');
        } catch (error) {
            console.log('Failed to send confirmation email:', error);
        }

        // Send notification to admin
        try {
            const adminOptions = {
                from: SMTP_EMAIL,
                to: SMTP_EMAIL,
                subject: `Admin: Message de ${props.name} : ${props.subject}`,
                html: (
                    `<p>Un nouveau message a été reçu de la part de ${props.name} (${props.to})</p>` +
                    `<p>Objet: ${props.subject}</p>` +
                    `<p>Message: ${props.body}</p>`
                )
            };

            await this.transporter.sendMail(adminOptions);
            console.log('Admin notification sent');
        } catch (error) {
            console.log('Failed to send admin notification:', error);
        }
    }
}

export default MailService;
