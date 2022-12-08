<template>
  <div
    class="bg-white pt-10 rounded flex flex-col space-y-4 justify-between h-auto border-2 border-black shadow-lg"
  >
    <div class="flex justify-center">
      <img class="rounded-full h-36 w-36" :src="picture" />
    </div>
    <div>
      <h1 class="text-2xl mt-4 flex justify-center">
        {{ fullName }}
      </h1>
      <h2 class="text-m mb-3 flex justify-center">
        {{ email }}
      </h2>
    </div>
    <router-link :to="`/userProfile/` + index">
      <div class="h-16 text-center p-5 border border-gray-300">
        <h1>VIEW PROFILE</h1>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import IUser from "@/types/user";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    index: {
      type: Number,
      required: true,
    },
    user: {
      type: Object as PropType<IUser>,
      required: true,
    },
  },
  computed: {
    fullName() {
      return `${this.user.name.first} ${this.user.name.last}`;
    },
    email() {
      return `${this.user.email}`;
    },
    picture() {
      return `${this.user.picture.large}`;
    },
  },
});
</script>
