'use server';

import MailService, { MailProps } from '../Model/Mail';

const onSendMail = async (json: string) => {
    const { name, subject, email, message } = JSON.parse(json);
    const to = process.env.SMTP_EMAIL as string;
    const body = `De: ${name} <${email}>\n\n${message}`;
    const props = { to, name, subject, body }

    try{
        const mailService = new MailService();
        await mailService.sendMail(props as MailProps);
        console.error("Message envoyé");
    } catch (error){
        console.error("Erreur lors de l'envoi du message");
    }
}

export { onSendMail };