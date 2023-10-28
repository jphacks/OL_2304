<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="catimage">
          <img :src="imgPath" alt="catImg" width="500" style="display: block; margin: 0 auto;"/>
        </div>
        <table>
          <tr>
            <td>色：</td>
            <td>黒</td>
          </tr>
          <tr>
            <td>柄：</td>
            <td>模様</td>
          </tr>
          <tr>
            <td>種類：</td>
            <td>雑種</td>
          </tr>
          <tr>
            <td>年齢：</td>
            <td>成猫</td>
          </tr>
          <tr>
            <td>耳カット：</td>
            <td>なし</td>
          </tr>
          <tr>
            <td>首輪：</td>
            <td>なし</td>
          </tr>
          <tr>
            <td>発見日：</td>
            <td>2021年7月1日</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="uploaded">
      <form method="post">
        <button type="button" class="gotoHomePage" @click.prevent="gotoHomePage">ホームに戻る</button>
      </form>
    </div>
  </div>
</template>

<script>
import catImage from "../assets/cat1-1.jpg";
export default {
  name: 'CatProfile',
  data() {
    return {
      imgPath: catImage
    }
  },
  props: {
    msg: String
  },
  methods: {
    gotoHomePage() {
      this.$router.push({ name: 'HomePage' });
    }
  }
}
</script>

<style scoped>
.card {
  margin: 50px auto;
  max-width: 600px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
.card-body {
  padding: 20px;
}
.catimage {
  margin-bottom: 20px;
}
table {
  margin: 0 auto;
  border-collapse: collapse;
  width: 100%;
}
td {
  padding: 10px;
  border: 1px solid #ccc;
}
.gotoHomePage {
    background: linear-gradient(to bottom, #009EFF 0px, #0075BC 100%) repeat scroll 0 0 transparent;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(0, 0, 0, 0.55);
    border-radius: 6px 6px 6px 6px;
    box-shadow: 0 1px 0 #E6F5FF inset;
    color: #FFFFFF;
    cursor: pointer;
    display: block;
    margin: 0 auto;
    margin-top: 50px;
    padding: 10px 25px;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    width: 25%;
    position: absolute; /* テキストを絶対位置に配置 */
    top: 1200px; /* 上からの位置 */
    left: 580px; /* 左からの位置 */ 
}
</style>