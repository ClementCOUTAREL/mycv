import nodemailer from "nodemailer"


export default async function submitHandler(req, res) {
  try {
    const { name, email, message } = req.body

    const password = process.env.PASSWORD
    const mailData = {
      from: `${email}`,
      to: 'coutarel.clement@outlook.com',
      subject: `Message from ${name} from portfolio`,
      text: message,
      html: `<div>${message}</div>`

    }
    const transporter = nodemailer.createTransport({
      port: 587,
      host: "smtp-mail.outlook.com",
      auth: {
        user: 'coutarel.clement@outlook.com',
        pass: password
      },
      secureConnection: false,
      tls: {
        ciphers: 'SSLv3'
      }
    })

    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err)
      else return true
    })
  } catch (error) {

    res.status(500).json({ error: error.message })
    return true
  }
  return res.status(200).json({ error: "" })
}
