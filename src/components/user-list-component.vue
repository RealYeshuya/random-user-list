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
    v-for="(user, index) in list.slice(startList, startList + perPage)"
    :key="index"
  >
    <single-card-component
      :index="(currentPage - 1) * perPage + index"
      :user="user"
    />
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
    let currentPage = ref(1);
    const perPage = ref(8);
    let startList = ref(0);

    const pageChange = (pageNumber: number) => {
      currentPage.value = pageNumber;
      startList.value = (currentPage.value - 1) * perPage.value;
      // eslint-disable-next-line prettier/prettier
    };

    return { currentPage, perPage, props, pageChange, startList };
  },
  mounted() {
    this.currentPage = 1;
  },
});
</script>
