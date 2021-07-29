<template>
  <div>
    <PaperTable :uids="uidlist"/>
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
      uidlist: [],
    }
  },
  mounted() {
    axios
      .get("http://localhost:9090/getList")
      .then(response =>
        (this.uidlist.push(response.data))
      )
      .catch(
        alert("Error", response)
      )
  }
}
</script>
<style></style>
