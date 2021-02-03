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

  @import url('https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@300&display=swap');

* {
    margin: 0;
    padding: 0;
  }

  #App {
    font-family: 'Saira Condensed', sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #url-list {
    margin-bottom: 0.5em;
  }

</style>
