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
    padding: 1em;
    border-style: solid;
    border-width: 1px;
    border-radius: 1em;
    margin-bottom: 0.5em;
    background-color: #5280ba;
    font-size: 0.8em;
    color: whitesmoke;
    text-align: justify;
  }

  #title {
    overflow: hidden;
    white-space: nowrap;

    color: whitesmoke;
    font-weight: bold;


  }

  .description {
    margin-top: 5px;
  }

</style>