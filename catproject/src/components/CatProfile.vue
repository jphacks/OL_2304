<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="catimage">
          <img :src="imgPath" alt="catImg" style="display: block; margin-left: auto; margin-right: auto;"/>
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
        <button type="button" class="btn btn-primary btn-block btn-large" @click.prevent="gotoHomePage">ホームに戻る</button>
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
</style>