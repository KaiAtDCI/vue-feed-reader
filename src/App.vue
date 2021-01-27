<template>
  <div id="App">
    <URLList id="urlList" @urlChanged="changeUrl($event)"/>
    <FeedChannel :url="url"/>
  </div>
</template>

<script>
  import URLList from './components/URLList.vue'
  import FeedChannel from "@/components/FeedChannel";


  export default {

    name: 'App',

    components: {
      URLList,
      FeedChannel,
    },

    data() {
      return {
        url: ''
      }
    },

    // watch: {
    //   url: function() {
    //     console.log('App: url changed to:' + this.url)
    //   }
    // },

    methods: {
      changeUrl (url) {
        this.url = url;
      }
    }
  }
</script>

<style scoped>

  #App {
    /*background-color: whitesmoke;*/
    margin: 0;
    padding: 0;
    /*width: 500px;*/
    font-family: Verdana, sans-serif;
    font-size: medium;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

</style>
