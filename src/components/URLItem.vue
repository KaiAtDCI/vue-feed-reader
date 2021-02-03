<template>
  <div id="container" v-bind:class="{isSelected: isSelected}">
    <div id="url" @click="$emit('select')">{{url}}</div>
    <input type="button" id="button-delete" value="Delete" @click.prevent="$emit('delete')"/>
  </div>
</template>


<script>
  export default {
    props: {
      url: { type: String, required: true },
      isSelected: { type: Boolean, required: true },
    },
  }
</script>


<style scoped>

  #container {
    height: 2em;
    margin-left: 0em;
    display: flex;
    align-items: center;
    background-color: #5280ba;
    color: whitesmoke;
    border-radius: 1em;
  }

  #url {
    overflow: hidden;
    white-space: nowrap;
    margin-left: 1em;
    flex-grow: 1;
  }

  .isSelected {
    font-weight: bold;
  }

  #button-delete {
    font-size: 1em;
    width: 6em;
    height: 1.5em;
    margin-right: 0.5em;
    border-radius: 0 1em 1em 0;
    border-width: 1px;
    background-color: #568bc6;
    color: whitesmoke;
  }
</style>