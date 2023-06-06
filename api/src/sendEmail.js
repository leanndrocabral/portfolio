import "dotenv/config";
import Mailgen from "mailgen"
import { createTransport } from "nodemailer"

class EmailService {

  async sendEmail({ subject, html }) {

    const transporter = createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      }
    });

    try {
      await transporter.sendMail({
        from: "leanndrocabral@gmail.com",
        subject,
        to: "leanndrocabral@gmail.com",
        html,
      });
    } catch (error) {
      console.error(error);
    };
  }

  createEmailTemplate(from_name, email, text) {

    const mailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "E-mail de proprosta de emprego",
        link: "https://mail.google.com/",
        logoHeight: "100px",
        copyright: "Direitos autorais © 2016 Leandro Lourenço. Todos os direitos reservados.",
      },
    });

    const emailBody = {
      body: {
        greeting: "Olá",
        name: "Leandro",
        intro: `Email enviado por ${email}.`,
        outro: text,
        signature: false,
      },
    };

    const emailHTML = mailGenerator.generate(emailBody);

    const EmailTemplate = {
      subject: from_name,
      html: emailHTML,
    };

    return EmailTemplate;
  }
}

const emailService = new EmailService();
export { emailService };