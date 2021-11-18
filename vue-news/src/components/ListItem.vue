<template>
  <div>
    <ul class="items-list">
      <li v-for="item in listItems" class="post">
        <div class="points">
          {{ item.points || 0 }}
        </div>

        <div>
          <p class="items-title">
            <template v-if="item.domain">
              <a :href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link :to="`item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link
              v-if="item.user"
              :to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
            </router-link>
            <a :href="item.url" v-else>
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    listItems() {
      const name = this.$route.name
      if (name === 'news') {
        return this.$store.state.news
      }
      if (name === 'ask') {
        return this.$store.state.asks
      }
      if (name === 'jobs') {
        return this.$store.state.jobs
      }
    }
  },
  created() {
    const name = this.$route.name
    let actionName;
    if (name === 'news') {
     actionName = 'FETCH_NEWS'
    }
    if (name === 'ask') {
      actionName = 'FETCH_ASKS'
    }
    if (name === 'jobs') {
      actionName = 'FETCH_JOBS'
    }
    this.$store.dispatch(actionName)
  }
}
</script>

<style scoped>
.items-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.items-title {
  margin: 0px;
}
.link-text {
  color: #828282;
}
</style>
