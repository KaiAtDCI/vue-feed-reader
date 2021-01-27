<template>
  <FeedItem v-for="(item, index) in rssItems" :key="index" :title="item.title" :description="item.description"/>
</template>

<script>

import FeedItem from "@/components/FeedItem";

export default {

  name: "FeedChannel",

  components: {
    FeedItem
  },

  props: {
    url: String,
  },

  data() {
    return {
      title: String,
      rssItems: []
    }
  },

  created() {
    this.fetchFeedChannel()
  },

  watch: {
    url: function() {
      // console.log("FeedChannel: url changed to" + this.url)
      this.fetchFeedChannel();
    }
  },

  methods: {
    fetchFeedChannel() {
        const createRSSItem = data => ({
          title: data.title,
          description: data.description,
          link: data.link,
        })
        let items = [];
        fetch(this.url)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.blob();
            })
            .then(response => response.text())
            .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
            .then(data => {
              let channelTitle = data.querySelector("title").textContent;
              this.title = channelTitle;
              console.log("FeedChannel: channelTitle=" + channelTitle)
              items = data.querySelectorAll("item");
              items.forEach(item => {
                    let rssItem = createRSSItem( {
                      title: item.querySelector('title').innerHTML,
                      description: item.querySelector('description').innerHTML,
                      link: item.querySelector('link').innerHTML,
                      pubDate: item.querySelector('pubDate').innerHTML,
                    });
                    console.log('FeedChannel: pubDate=' + rssItem.pubDate)
                    this.rssItems.push(rssItem);
                  }
              );
            })
            .catch(error => {
              console.error('There has been a problem with your fetch operation:', error);
            });
        this.rssItems = items;
        return items;
      }
   }
  }
</script>

<style scoped>

</style>