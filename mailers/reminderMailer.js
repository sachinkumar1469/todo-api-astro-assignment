
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: 'ny72161100@gmail.com',
      clientId: "627929553880-efllaqu7vk9j105vo9mjkn844l6aj4n1.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken: "1//04zCBowA395lJCgYIARAAGAQSNwF-L9IrQPho0-jHLMYZlp2CtIg6u7fQxgpFvfPy6BqKoJ6zSBkIQXrJxsuuxLQ9wPBDPjvK1LU",
      accessToken: "ya29.a0AVvZVsqiI3mm0OZN_2fUJGmyomcLH0h0PQJYHQFa2feUUHy38F--QvhZCPZG7RBwV8n54mMDJdiWTzzWs0wKohe3Ijxsk3eti6Pt3TRI0YBN0wXfyePbTV9aCyCFRyoDreksrnSoLe7wqRbls3-TXnjh4N4JaCgYKARcSARMSFQGbdwaI-JrdCLT6iFfjWjyeETTd4w0163"
    }
});

exports.sendReminderEmail = (email, task) => {
    const mailOptions = {
        from: 'ny72161100@gmail.com',
        to: email,
        subject: 'Reminder for your task',
        text: `Hi, this is a reminder for your task: ${task}`
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
}