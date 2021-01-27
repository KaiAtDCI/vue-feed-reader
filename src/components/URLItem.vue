<template>
  <div id="container" v-bind:class="{isSelected: isSelected}">
    <div id="url" @click="$emit('select')">{{channelTitle}}</div>
    <input type="button" id="delete" value="Delete" @click.prevent="$emit('delete')"/>
  </div>
</template>

<script>
  export default {
    props: {
      url: { type: String, required: true },
      isSelected: { type: Boolean, required: true },
      channelTitle: { type: String, required: true },
    },
  }
</script>

<style scoped>
  #container {
    box-sizing: border-box;
    padding: 10px;
    /*margin: 5px;*/
  }

  #url {
    flex-grow: 1;
    font-size: larger;
  }

  .isSelected {
    font-weight: bold;
    box-shadow: steelblue 4px 4px 10px 0px;
  }

  input {
    background-color: white;
    border-color: black;
    border-radius: 10px;
    border-width: 1px;
    box-shadow: black 1px 1px 0px 0px;
  }
</style>