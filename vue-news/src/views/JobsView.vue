<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem'
import bus from "@/utils/bus";

export default {
  components: {
    ListItem
  },
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store.dispatch('FETCH_JOBS')
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
        })
    }, 3000)
  }
}
</script>
