<template>
  <div>
    <h2>list</h2>
    <ul class="wrap">
      <li class="item" v-for="(item, idx) in uids" :key="{idx}">
          <span class="uid">UID: {{item.id}}</span>
          <span class="title">title: {{item.title}}</span>
          <span class="author">author: {{item.author}}</span>
          <span class="modifiedDate">modifiedDate: {{item.modifiedDate}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    uids: {type: Array, default: () => []}
  }
};
</script>
<style>
</style>
