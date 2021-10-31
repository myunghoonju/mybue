<template>
  <div>
    <p v-for="items in this.$store.state.asks">
      <a :href="items.url"> {{ items.title }} </a>
      <small> {{ items.time_ago }}, <router-link :to="`/item/${items.id}`"> {{ items.user }} </router-link> </small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['fetchedAsk'])
  },
  created() {
    this.$store.dispatch('FETCH_ASKS')
  }
}
</script>

<style scoped>

</style>