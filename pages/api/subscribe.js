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
  const { email } = req.body;

  const data = {
    // Update your email here
    to: [
      "support@techxcellencenpl.com",
      "ankit@techxcellencenpl.com",
      "nikesh@techxcellencenpl.com",
    ],
    from: "support@techxcellencenpl.com",
    subject: `Subscribed:${email}`,
    text: "From:" + email,
    html: `
            <b>From:</b> ${email} <br /> 
           
        `,
  };
  try {
    const response = await mailer.sendMail(data);
    console.log(response);
    res.status(200).send("Email send successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error proccessing charge");
  }
};
