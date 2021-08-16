<template>
  <div>
    <PaperTable :list="list"/>
  </div>
</template>
<script>
import axios from "axios";
import { PaperTable } from "@/components";

export default {
  components: {
    PaperTable
  },data() {
    return {
      list: [],
    }
  },
  mounted() {
    axios
      .get("/post/list")
      .then(response => {
          this.list.push(response.data)
      })
      .catch(err => {
          alert("Error", err)
      })
  }
}
</script>
<style></style>
