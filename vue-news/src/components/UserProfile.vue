<template>
  <div>
      <div class="user-container">
        <div class="user-description">
          <slot name="username"></slot>
          <div class="time"></div>
          <slot name="karma"></slot>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    info: String
  }
}
</script>

<style scoped>
.home {
  padding: 0 1.8rem;
}
.header-container {
  padding-top: 1rem;
}
.user-container {
  display: flex;
  align-items: center;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
h3 {
  margin-bottom: 0.5rem;
  margin-left: 0.2rem;
}
.content {
  border: ridge;
  padding: 0.5rem;
}
</style>
