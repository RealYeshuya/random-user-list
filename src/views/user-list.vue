<template>
  <div class="container mx-auto">
    <div class="text-center m-2.5 p-4">
      <h1 class="text-7xl text-white">RANDOM USER LIST</h1>
    </div>
    <div class="mt-3">
      <div class="grid grid-col-3 gap-2">
        <generate-user-component @generate-user="submitted" />
        <div class="grid grid-cols-4 gap-2 col-span-3 p-2 my-2">
          <user-list-component :list="list" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useUserList from "@/composable/use-user-list";
import GenerateUserComponent from "@/components/generate-user-component.vue";
import UserListComponent from "@/components/user-list-component.vue";

export default defineComponent({
  components: {
    GenerateUserComponent,
    UserListComponent,
  },
  props: {
    msg: String,
  },
  setup() {
    const { list, submitted } = useUserList();

    return { list, submitted };
  },
});
</script>
