<template>
  <!-- <div style="text-align: left">
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/kantoku-seraph.jpg">
  </div> -->
  <!-- <router-view/>タグを追加する事でVue Routerが機能するようになる -->
  <router-view/>
  <div id="app">
    <router-link to="/components/">HelloWorld</router-link>
    <router-link to="/components/">Register</router-link>
    <router-view></router-view>
  </div>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* .fsize{
  font-size: 24px;
  text-align: center;
}

.container {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

input[type="text"],
input[type="password"] {
  width: 93%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #45a049;
} */
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600,700);

*, *:after, *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-weight: normal;
    margin: 0;
    outline: 0 none;
    font-family: "Open Sans";
    padding: 0;
}

body {
  background: #dec88c;
  font-family: "Open Sans";
}
.loading {
    margin: 10% auto 15px;
    position: relative;

    height: 40px;
    width: 40px;
}
/* .loading .circle {
    border-radius: 100%;
    position: absolute;
}
.loading .circle.dark {
    background-color: #1F5BA9;
    height: 22px;
    left: 1px;
    top: 10px;
    width: 22px;
}
.loading .circle.light {
    background-color: #61B5E4;
    height: 25px;
    right: 1px;
    top: 8px;
    width: 25px;
} */
.loading .branding {
    background: url("https://s18.postimg.org/8a4d3vj3p/db_loader.png") repeat scroll 0 0 transparent;
    height: 40px;
    width: 40px;
    position: absolute;
}

.login {
    width: 300px;
    margin: 0 auto;
}
.login form {
  width: 100%;
}
input {
    background: none repeat scroll 0 0 rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px 4px 4px 4px;
    box-shadow: 0 -5px 45px rgba(100, 100, 100, 0.2) inset, 0 1px 1px rgba(255, 255, 255, 0.2);
    color: #FFFFFF;
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 50px;
    outline: medium none;
    padding: 20px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    width: 100%;
}

button {
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
    width: 100%;
}
.paw {
  margin: auto;
  /* margin-bottom: 200px; */
  width: 500px;
  height: 300px;
}
</style>
