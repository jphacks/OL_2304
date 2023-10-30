# 猫がにゃんさか見つかる野良猫マップ


[![IMAGE ALT TEXT HERE](https://jphacks.com/wp-content/uploads/2023/07/JPHACKS2023_ogp.png)](https://www.youtube.com/watch?v=yYRQEdfGjEg)

## 製品概要

「猫がにゃんさか見つかる野良猫マップ」は、野良猫の情報を共有し、猫への愛を広めるアプリです。
このアプリでは、近所のかわいい野良猫を見つけて共有できると同時に、迷子の猫がいた場合、近隣住民による迅速な捜索を支援し、飼い主に迷子の猫を素早く戻す手助けをします。

### 背景(製品開発のきっかけ、課題等）

飼い猫が脱走した場合、最初の 24 時間が重要です。なぜなら、時間が経つにつれて猫は遠くに移動し、発見が難しくなるからです。

しかし、従来の迷子猫情報掲示板では、利用者が「脱走した飼い猫を探している人」や「迷い猫を保護した人」ばかりであり、情報が限られた利用者にしか届かず、迅速な捜索が困難でした。
加えて、従来の掲示板では位置情報を活用した高度な検索ができないため、書き込みを見た人たちのほとんどが飼い主とは離れたところに住んでおり、捜索の助けにならないことが多いということも課題でした。

そこで、「猫がにゃんさか見つかる野良猫マップ」では、多くの人々が迅速に協力できるプラットフォームを提供し、これらの問題の解決に取り組みました。

### 製品説明（具体的な製品の説明）

「猫がにゃんさか見つかる野良猫マップ」の主要機能は、近所の野良猫情報を記録し共有することです。
ユーザーは地図上で猫の位置情報を閲覧し、近所にどの猫が生活しているかを簡単に把握できます。

さらに、地域で記録されたことがなかった新しい猫が記録されたとき、「猫がにゃんさか見つかる野良猫マップ」はその猫が迷子猫である可能性があると考え、猫が見つかった場所の近くに住むユーザーに通知を送ります。通知を受け取った猫好きのご近所さんたちはすぐに家を飛び出して、飼い主よりも早く迷い猫を見つけることでしょう！

### 特長

#### 1. 野良猫の生息域が一目で分かる、直観的な地図表示

Google Map API を利用し、猫の位置情報を地図上に表示します。
これにより、ユーザーは近所の猫の生息域を素早く簡単に知ることができます。

#### 2. 幅広い対象ユーザー層へのアプローチ

従来の迷子猫・保護猫掲示板とは異なり、本製品は猫好きな人なら誰でも楽しめるコンテンツを提供しています。
そのため、迷子猫の情報がより多くの人の目に届き、より効果的な猫の捜索ができます。

#### 3. 飼い主が捜索願を出すよりも早く猫を見つける

従来の迷子猫掲示板では、猫の脱走に気がついた飼い主が掲示板に情報を書き込みます。
しかし、猫は飼い主の仕事中に脱走することもあるので、猫が脱走してから飼い主がすぐそれに気がつけるわけではありません。
本製品は地域で今まで見られなかった猫が記録されたとき、その猫は迷い猫である可能性があると判断して付近のユーザーに通知を出し、注意を呼びかけます。これにより、飼い主がみずから注意喚起をしなくとも近所に猫の情報が行き渡り、従来よりも素早く猫の脱走に対処することができます。

### 解決出来ること

本製品により、迷子猫の素早い捜索が可能となることに加え、地域で猫を見守ることで猫と人々のより良い共生をサポートします。

### 今後の展望

将来的には、ユーザー同士の情報交換を促進するトーク機能の導入や、機械学習モデルを活用して猫の識別をより効率的かつ正確に行う技術の開発を目指しています。また、猫以外の動物への適用も視野に入れており、社会問題の 1 つである熊や猪の出没にも応用可能な製品となることを目指しています。

### 注力したこと（こだわり等）

- 新しい猫が登録された時に近所のユーザーにメールで通知を送る機能の実装に注力しました。
- シンプルで使いやすい設計にこだわり、短期間での完成を実現しました。

## 開発技術

### 活用した技術

#### API・データ

- Google Map API
- Firebase API (Cloud Firestore, Cloud Storage, Cloud Storage Authentication, Cloud Functions)

#### フレームワーク・ライブラリ・モジュール

- Vue.js 3: UIや機能の作成のため
- nodemailer: メール通知送信機能のため
- Firebase API: データベースの利用やユーザー認証、メール通知送信機能のため

#### デバイス

- PC

### 独自技術

#### ハッカソンで開発した独自機能・技術

- 単純なクエリでは処理できない、位置情報を用いた[猫](catproject/src/components/CatMap.vue)や[ユーザー](catproject/functions/index.js)の絞り込み機能を開発しました。
