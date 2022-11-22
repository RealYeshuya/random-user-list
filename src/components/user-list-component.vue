<template>
  <div class="col-span-4 p-2">
    <VueTailwindPagination
      :current="currentPage"
      :total="list.length"
      :per-page="perPage"
      @page-changed="pageChange($event)"
    />
  </div>
  <div class="col-span-4" v-if="list.length === 0">
    <empty-list-component />
  </div>
  <div
    v-else
    class="text-m p-1 overflow-y-auto"
    v-for="(user, index) in list"
    :key="index"
  >
    <single-card-component :index="index" :user="user" />
  </div>
</template>

<script lang="ts">
import IUser from "@/types/user";
import EmptyListComponent from "@/components/empty-list-component.vue";
import SingleCardComponent from "./single-card-component.vue";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  components: {
    EmptyListComponent,
    SingleCardComponent,
    VueTailwindPagination,
  },
  props: {
    list: {
      type: Object as PropType<IUser[]>,
      required: true,
    },
  },
  setup(props) {
    let currentPage = ref(0);
    const perPage = ref(8);

    const pageChange = (pageNumber: number) => {
      currentPage.value = pageNumber;
    };

    return { currentPage, perPage, props, pageChange };
  },
  mounted() {
    this.currentPage = 1;
  },
});
</script>
