import nodemailer from "nodemailer";
import VerificationEmail from "./mail-templates/VerificationMail";

export interface VerificationParameters {
  email: string;
  username: string;
  purpose: string;
  url: string;
}
export async function SendVerificationCode({
  username,
  email,
  purpose,
  url,
}: VerificationParameters) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  await transporter.sendMail({
    from: process.env.EMAIL_USERNAME, // sender address
    to: email, // list of receivers
    subject: "Verification Code", // Subject line
    html: VerificationEmail({ username, purpose, url }),
  });
}
