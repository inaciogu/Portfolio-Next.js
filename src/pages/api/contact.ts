/* eslint-disable @typescript-eslint/naming-convention */
import nodemailer from 'nodemailer';
import sendGridTransport from 'nodemailer-sendgrid-transport';
import { NextApiRequest, NextApiResponse } from 'next';

const email = process.env.MAILADRESS;

const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key:
        process.env.SENDGRID_API_KEY ||
        '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'
    }
  })
);

console.log(process.env.SENDGRID_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { senderMail, name, content } = req.body;

    if (!senderMail.trim() || !name.trim() || !content.trim()) {
      return res.status(403).send('');
    }

    const message = {
      from: email,
      to: email,
      subject: `Nova mensagem de: ${name}`,
      html: `<p><b>email: </b>${senderMail}<br /> <b>Mensagem: </b> <br /> ${content}</p>`,
      replyTo: senderMail
    };

    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
    return res.send('Email sent!');
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: error.message
    });
  }
};
