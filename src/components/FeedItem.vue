<template>
  <div id="container" @click="sayText">
    <div>
      <a id="title" href="link">{{title}}</a>
    </div>
    <div class="description">{{description}}</div>
  </div>
</template>

<script>

import textToSpeech from './text-to-speech.js'

export default {

  name: "FeedItem",

  props: {
    title: String,
    description: String,
    link: String,
    pubDate: String,
  },

  methods: {
    sayText: function(){
      textToSpeech(this.title + this.description)
    }
  }
}
</script>

<style scoped>

  #container {
    /*width: 100%;*/
    border-style: solid;
    border-width: 1px;
    border-radius: 20px;
    margin-bottom: 10px;
    padding: 10px;
  }

  #title {
    color: black;
  }

  .description {
    margin-top: 5px;
  }

</style>