import calculateDistance from ./src/components/CSSMathClamp.vue;
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// メール送信の設定
const transporter = nodemailer.createTransport({
  service: "gmail", // 使用するメールサービス。
  auth: {
    user: "fumiwata2000@gmail.com", // 送信元のメールアドレス
    pass: "dnrq pqee debw wlmu", // 送信元のメールのパスワード
  },
});



//新しい猫が現れたとき、その猫の半径１キロメートル以内にいるユーザーにメールを送信する
exports.sendMailOnNewCat = functions.firestore.document("TestCat/{catId}")
    .onCreate(async (snap, context) => {




      const catData = snap.data();
      const catLat = catData.lat;
      const catLng = catData.lng;
      if catData.newCat == 'False' {
        return;
      }

      console.log("aiueo"+catLat);
      console.log("aaaaa"+catLng);

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