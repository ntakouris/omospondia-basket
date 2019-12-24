<template>
  <Layout :title="title">
            <!-- Tweets -->
        <div class="tweetline-container">
          <Timeline class="tweetline" id="v_ntakouris" sourceType="profile" :options="{ tweetLimit: '5', width: 550, height: 200}">
            Φορτώνει ...
          </Timeline>
        </div>
  </Layout>
</template>

<script>
import {Timeline} from 'vue-tweet-embed'

export default {
  name: "Tweets",
  components: {
    Timeline
  },
  data() {
    return {
      title: "Επικαιρότητα - Tweets"
    };
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:title", content: this.title },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: this.title },
        { name: "twitter:site", content: "@v_ntakouris" },
        { name: "twitter:creator", content: "@v_ntakouris" }
      ]
    };
  }
};
</script>


<style>
</style>
