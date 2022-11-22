<template>
  <div class="col-span-3 space-y-4 mr-3.5">
    <div class="flex justify-end">
      <form @submit.prevent="generateUser(numUser, gender)">
        <select
          class="rounded px-3 mx-1"
          id="gender"
          name="gender"
          v-model="gender"
        >
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input class="rounded px-3 mx-1" v-model.number="numUser" />
        <input class="rounded px-3" type="submit" value="Generate" />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  emits: ["generate-user"],
  setup(props, { emit }) {
    const gender = ref("");
    const numUser = ref(1);

    function generateUser(numUser: number, gender: string) {
      emit("generate-user", numUser, gender);
    }

    return { gender, numUser, generateUser };
  },
});
</script>
