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
import calculateDistance from ./src/components/CSSMathClamp.vue;
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

//新しい猫が現れたとき、その猫の半径１キロメートル以内にいるユーザーにメールを送信する
// TODO: ちゃんとユーザーの距離とか取れるようにする。猫が新しい時だけメール送信、古い猫はisNewをFalseにする、いらないファイル消す
exports.sendMailOnNewCat = functions.firestore.document("TestCat/{catId}")
    .onCreate(async (snap, context) => {
      const catData = snap.data();
      const catLat = catData.lat;
      const catLng = catData.lng;

      const usersSnapshot = await admin.firestore().collection("users").get();
      const users = usersSnapshot.docs.map((doc) => doc.data());

      const mailPromises = users
        .filter((user) => {
          const distance = calculateDistance(user.lat, user.lng, catLat, catLng);
          return distance <= 1;
        })
        .map((user) => {
          const mailOptions = {
            from: "fumiwata2000@gmail.com",
            to: user.email, // 送信先のメールアドレス
            subject: "新しい猫のお知らせ",
            text: "近所で新しい猫が発見されました！",
          };
          return transporter.sendMail(mailOptions);
        });

      return Promise.all(mailPromises);
    });