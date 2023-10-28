<template>

    <div class="loading">
      <div class="circle light"></div>
      <div class="circle dark"></div>
      <div class="branding"></div>
    </div>

    <div class="uploaded">
      <form method="post">
        <center><GoogleMap></GoogleMap></center>
        <button type="button" class="btn btn-primary btn-block btn-large" @click.prevent="gotoUploadExistCat">既存猫</button>
        <button type="button" class="btn btn-primary btn-block btn-large" @click.prevent="gotoUploadNewCat">新規猫</button>
        </form>
    </div>
</template>

<script>
import GoogleMap from './GmapPost.vue'
export default {
  name: 'CatMap',
  props: {
    msg: String
  },
  methods: {
    gotoUploadExistCat() {
      this.$router.push({ name: 'UploadExistCat' });
    },
    gotoUploadNewCat() {
      this.$router.push({ name: 'UploadNewCat' });
    }
  },
  components:{
    GoogleMap,
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
