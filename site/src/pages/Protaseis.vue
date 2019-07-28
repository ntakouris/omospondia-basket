<template>
  <Layout :title="'12 Προτάσεις για μια Ομοσπονδία συμμετοχής και ανάπτυξης'">
    <div class="grid">
      <ProtasiCard v-for="protasi in protaseis" :key="protasi.title" class="card" :protasi="protasi" />
    </div>

  </Layout>
</template>

<script>
import ProtasiCard from '~/components/ProtasiCard.vue'
import protaseis from '~/data/protaseis.json'

export default {
  name: 'Protaseis',
  components: {
    ProtasiCard
  },
  data () {
    return {
      protaseis
    }
  }
}
</script>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
}

.card {
  margin: 5px;
}
</style>