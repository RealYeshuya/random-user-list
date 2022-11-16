<template>
  <user-list msg="RANDOM USER LIST" />
</template>

<script lang="ts">
import UserList from "@/views/user-list.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    UserList,
  },
});
</script>
