<template>  
    <div class="loading">
      <div class="circle light"></div>
      <div class="circle dark"></div>
      <div class="branding"></div>
    </div>

    <div class="gotoMyPage">
      <button @click.prevent="gotoMypage">マイページ</button>
    </div>

    <div class="gotoCatProfile">
      <button @click.prevent="gotoCatProfile">猫アイコン予定</button>
    </div>

    <div class="gotoCatMap">
     
      <form method="post">
        
        <button type="submit" class="btn btn-primary btn-block btn-large" @click.prevent="gotoCatMap">投稿</button>
      </form>
    </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  methods: {
    gotoMypage() {
      this.$router.push({ name: 'MyPage' });
    },
    gotoCatMap() {
      this.$router.push({ name: 'CatMap' });
    },
    gotoCatProfile() {
      this.$router.push({ name: 'CatProfile' });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
