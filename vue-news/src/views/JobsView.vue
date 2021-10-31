<template>
  <div>
    <p v-for="items in this.$store.state.jobs">
      <a :href="items.url"> {{ items.title }} </a>
      <small> {{ items.time_ago }}, {{ items.domain }} </small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>