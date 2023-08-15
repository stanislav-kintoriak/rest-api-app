const sgMail = require("@sendgrid/mail");

require("dotenv").config();

const { API_KEY_EMAIL_SENDGRID } = process.env;

const sendEmail = async (email) => {
  sgMail.setApiKey(API_KEY_EMAIL_SENDGRID);

  try {
    await sgMail.send(email);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = sendEmail;
