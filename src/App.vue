<template>
  <div id="app">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  // import {getHomeContent} from "./network/home";

  export default {
    name: 'app',
    components: {
      HelloWorld
    },
    data() {
      return {
        msg: '初始数据'
      }
    },
    created() {
      // getHomeContent().then(res => {
      //   console.log('成功');
      //   console.log(res);
      //   this.msg = res;
      // }).catch(err => {
      //   console.log('请求失败');
      //   console.log('未知错误：' + err);
      // })

      // this.$axios.get("/home/content")
      //     .then(res => {
      //       console.log(res);
      //     })
      //     .catch(err => {
      //       // console.log(err);
      //     })

      this.$axios('/api/home/content', {}).then(res => {
        this.msg = res.data;
        console.log(res.data);
      })

    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
