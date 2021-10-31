<template>
  <div>
    <section>
      <div class="user-container">
        <div>
          user profile
        </div>
        <div>
          <router-link :to="`/user/${fetchedItem.user}`"> {{ fetchedItem.user }} </router-link>
        </div>
        <h2>{{ fetchedItem.title }}</h2>
      </div>
    </section>
    <section>

    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    const id = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM', id)
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
}

</style>