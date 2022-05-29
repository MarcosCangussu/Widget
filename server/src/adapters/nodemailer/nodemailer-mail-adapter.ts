import nodemailer from 'nodemailer'
import { MailAdapter, sendMailData } from "../mail-adapters";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b72d17f36e8882",
      pass: "3b4d1ef9c38085"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
   async sendMail ({subject, body}: sendMailData) {
        await transport.sendMail({
        from: 'Equipe Fidget <teste@teste.com>',
        to: 'Marcos <teste1@teste.com>',
        subject,
        html: body
    })
    };
}