import nodemailer from 'nodemailer'
import { host, userEmail, userEmailPassword } from '../config/index.js'

const transporter = nodemailer.createTransport({
  host: host,
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: userEmail,
    pass: userEmailPassword,
  },
})

const sendEmail = async (options) => {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Tech Nest" <noreply@technest.com>', // sender address
    to: options.email, // list of receivers
    subject: 'Reset Passwrod for Tech Nest Account', // Subject line
    text: '', // plain text body
    html: options.html, // html body
  })
}

export default sendEmail
