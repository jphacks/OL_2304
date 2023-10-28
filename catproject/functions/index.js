/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// メール送信の設定
const transporter = nodemailer.createTransport({
  service: "gmail", // 使用するメールサービス。ここではGmailを例としています。
  auth: {
    user: "fumiwata2000@gmail.com", // 送信元のメールアドレス
    pass: "dnrq pqee debw wlmu", // 送信元のメールのパスワード
  },
});

exports.sendMailOnNewCat = functions.firestore.document("TestCat/{catId}")
    .onCreate((snap, context) => {
      const mailOptions = {
        from: "fumiwata2000@gmail.com",
        to: "sabanna.taihei@gmail.com", // 送信先のメールアドレス
        subject: "新しい猫のお知らせ",
        text: "近所で新しい猫が発見されました！",
      };

      return transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(`Failed to send mail: ${error}`);
          return null;
        }
        console.log(`Sent email: ${info.response}`);
        return null;
      });
    });