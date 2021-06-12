<template>
  <thead class="border-b border-table">
    <tr
      class="rounded-lg text-sm font-medium text-gray-700 text-left"
      style="font-size: 0.9674rem"
    >
      <th
        v-for="fieldItem in field"
        :key="fieldItem.key"
        class="px-4 py-2 text-table-head font-weight-bold text-sm"
      >
        {{ fieldItem.label }}
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: "TableHead",
  props: {
    field: Array,
  },
};
</script>
