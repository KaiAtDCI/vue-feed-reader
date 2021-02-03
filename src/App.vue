<template>
  <div id="App">
    <URLList id="url-list" @urlChanged="changeUrl($event)"/>
    <FeedChannel id="feed-channel" :url="url"/>
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
        console.log('App: changeUrl() to: ' + url);
        this.url = url;
      }
    }
  }
</script>

<style scoped>

  #App {
    margin: 0;
    padding: 0;
    font-family: Verdana, sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #url-list {
    margin-bottom: 0.5em;
  }

</style>
