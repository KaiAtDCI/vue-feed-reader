<template>
  <div id="url-list">
    <AddUrl id="add-url" @add="addUrl"></AddUrl>
    <div id="urlId">
      <URLItem class="urlItem" v-for="(item, index) in urlList" :key="index" :url="item.url" :channel-title="item.channelTitle" :isSelected="item.isSelected" @delete="deleteUrl(item)" @select="toggleSelectStatus(item)"/>
    </div>
  </div>
</template>

<script>
import AddUrl from "@/components/AddUrl";
import URLItem from "@/components/URLItem.vue";
import textToSpeech from "./text-to-speech"

export default {
  components: {
    URLItem,
    AddUrl
  },

  data() {
    return {
      urlList: [
        { url: 'http://feeds.nytimes.com/nyt/rss/Technology', channelTitle: 'The New York Times » Technology RSS Feed', isSelected: false },
        { url: 'https://www.tagesschau.de/xml/rss2_https/', channelTitle: 'tagesschau.de', isSelected: false },
        { url: 'https://rss.dw.com/xml/rss-de-all', channelTitle: 'Deutsche Welle (DW.com)', isSelected: false },
      //   { url: 'https://feeds.simplecast.com/6HzeyO6b', channelTitle: '1619', isSelected: false },
      //   { url: 'http://feeds.bbci.co.uk/news/world/europe/rss.xml', channelTitle: 'DateLine (NBC)', isSelected: false },
      //   { url: 'http://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml', channelTitle: 'test', isSelected: false },
      ],
      selectedItem: {},
      urlNew: '',
    }
  },

  created() {
    this.selectedItem = this.urlList[0];
    this.toggleSelectStatus(this.selectedItem)
  },

  computed: {
    url: function() {return this.selectedItem.url}
  },

  watch: {
    url: function() {
      console.log("URLList: url changed to: " + this.url)
      return this.selectedItem.url;
    }
  },

  methods: {
    addUrl(url) {
      this.urlList.push(
          {
            url: url,
            isSelected: false,
          });
      this.urlNew = '';
    },

    deleteUrl(deleteItem) {
      console.log("URLList delete item with url: " + deleteItem.url);
      this.urlList = this.urlList.filter(item => item !== deleteItem)
    },

    toggleSelectStatus(item) {
      this.selectedItem.isSelected = false;
      this.selectedItem = item;
      item.isSelected = true;
      this.$emit('urlChanged', item.url);
      // console.log('URLList.selectedUrl = ' + item.url)
      textToSpeech(item.channelTitle);
    }
  }
}
</script>

<style>

  .urlItem {
    margin-top: 0.5em;
  }

</style>
