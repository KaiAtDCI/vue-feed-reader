<template>
  <div class="container">
    <label id="label" for="text-url">URL</label>
    <input id="text-url" type="text" v-model="url" v-bind:class="{ disabled: disabled }" v-bind:disabled="disabled" :placeholder="placeholderText"/>
    <input id="button-add" type="button" value="Add" @click="button_add_click"/>
  </div>
</template>

<script>

function isUrl(s) {
  // https://mathiasbynens.be/demo/url-regex
  // Todo: Check escaping! Regex below is edited due to complaints of eslint
  // var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/
  return regexp.test(s);
}

export default {
  data() {
    return {
      url: "http://newsrss.bbc.co.uk/rss/newsonline_uk_edition/technology/rss.xml",
      disabled: false,
      placeholderText: `Enter URL and press 'ENTER' or click 'Add'-Button.`,
    }
  },
  methods: {
    button_add_click() {
      const lastUrl = this.url;
      let isValid = false;
      this.disabled = true;
      if (isUrl(this.url)) isValid = true;
      if (isValid){
        fetch(this.url)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.blob();
            })
            .then(response => response.text())
            // .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
            // .then(data => {
            //   let channelTitle = data.querySelector("title").textContent;
            //   this.title = channelTitle;
            //   console.log("FeedChannel: channelTitle=" + channelTitle)
            //   items = data.querySelectorAll("item");
            //   items.forEach(item => {
            //         let rssItem = createRSSItem( {
            //           title: item.querySelector('title').innerHTML,
            //           description: item.querySelector('description').innerHTML,
            //           link: item.querySelector('link').innerHTML,
            //           pubDate: item.querySelector('pubDate').innerHTML,
            //         });
            //         console.log('FeedChannel: pubDate=' + rssItem.pubDate)
            //         this.rssItems.push(rssItem);
            //       }
            //   );
            // })
            .catch(error => {
              console.error("Following error occurred:" + error);
            });
        this.$emit('add', this.url);
        this.disabled = false;
      }
      else {
        this.url = "Sorry, your URL is not valid..."
        setTimeout(() => {
          this.url = lastUrl;
          this.disabled = false
        }, 3000)
      }
    }
  }
}

</script>

<style>

  .container {
    display: flex;
    align-items: center;
    height: 2em;
    background: #5280ba;
    color: whitesmoke;
    border-radius: 1em;
  }

  #label {
    margin-left: 1em;
  }

  #text-url {
    width: 50px;
    font-size: 0.8em;
    flex-grow: 1;
    margin: 0 1em 0 1em;
  }

  #button-add {
    flex-shrink: 0;
    width: 6em;
    height: 1.5em;
    margin-right: 0.5em;
    border-radius: 0 1em 1em 0;
    border-width: 1px;
    background-color: #568bc6;
    color: whitesmoke;
    font-family: 'Saira Condensed', sans-serif;
  }

  .disabled {
    color: red;
  }

</style>
