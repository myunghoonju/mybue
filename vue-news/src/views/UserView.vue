<template>
  <div>
    <user-profile info="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <span slot="time">{{ userInfo.created }}, </span>
      <span slot="karma">{{ userInfo.karma }}</span>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile'

export default {
  components: {
    UserProfile
  },
  computed: {
    userInfo() {
      return this.$store.state.user
    }
  },
  created() {
    const userName = this.$route.params.id
    this.$store.dispatch('FETCH_USER', userName)
  }
}
</script>

<style scoped>

</style>
