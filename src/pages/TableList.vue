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
      .then(response =>
        (this.list.push(response.data))
      )
      .catch(
        alert("Error", response)
      )
  }
}
</script>
<style></style>
