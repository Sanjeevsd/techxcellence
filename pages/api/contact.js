import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

// const transporter = {
//     auth: {
//         // Update your SendGrid API key here
//         api_key: '...'
//     }
// }
let transporter = {
  host: "mail.zameenterminal.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "support@techxcellencenpl.com", // generated ethereal user
    pass: "K8nb6+j753",
  },
};

const mailer = nodemailer.createTransport(transporter);

export default async (req, res) => {
  const { name, email, number, subject, text } = req.body;

  const data = {
    // Update your email here
    to: [
      "support@techxcellencenpl.com",
      "ankit@techxcellencenpl.com",
      "nikesh@techxcellencenpl.com",
    ],
    from: "support@techxcellencenpl.com",
    subject: `Enquiry From ${email}`,
    text: text,
    html: `
            <b>From:</b> ${name} <br /> 
            <b>Email:</b> ${email} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Message:</b> ${text} 
        `,
  };
  try {
    const response = await mailer.sendMail(data);

    res.status(200).send("Email send successfully");
  } catch (error) {
    res.status(500).send("Error proccessing charge");
  }
};
