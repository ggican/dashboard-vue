<template>
  <div class="table w-full">
    <div class="bg-white border rounded-lg border-table pt-8 pb-4 w-full">
      <div class="flex justify-between w-full px-8">
        <p class="ml-3 font-bold">{{ title }}</p>
      </div>

      <div class="overflow-x-auto mt-6">
        <table class="table-auto border-collapse w-full">
          <TableHead :field="field"></TableHead>
          <TableBody :field="field" :data="data"></TableBody>
        </table>
      </div>
      <TablePagination :paginationConfig="paginationConfig"></TablePagination>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TableHead from "./TableHead.vue";
import TableBody from "./TableBody.vue";
import TablePagination from "./TablePagination.vue";

export default {
  name: "Table",
  components: {
    TableHead,
    TableBody,
    TablePagination,
  },
  props: {
    title: String,
    paginationConfig: Object,
    data: Array,
    field: Array,
  },
};
</script>

<style>
thead tr th:first-child {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
thead tr th:last-child {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

tbody tr td:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 0px;
}
tbody tr td:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 0px;
}
</style>
