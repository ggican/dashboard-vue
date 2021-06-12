<template>
  <tbody class="text-sm font-normal text-gray-700">
    <tr v-for="item in data" :key="item.key" v-bind:class="table_row_class">
      <td
        v-for="fieldItem in field"
        :key="fieldItem.key"
        v-bind:class="[
          fieldItem.table_row_class ? fieldItem.table_row_class : '',
          table_row_class,
        ]"
      >
        <img
          v-bind:class="fieldItem.class"
          v-if="fieldItem.component === 'image'"
          v-bind:src="item[fieldItem.key]"
          alt=""
        />
        <span
          v-bind:class="fieldItem.class"
          v-if="fieldItem.component === 'text'"
        >
          {{ item[fieldItem.key] }}
        </span>
        <button
          v-on:click="fieldItem.onClick ? fieldItem.onClick(item) : defaultFn"
          v-bind:class="fieldItem.class"
          v-if="fieldItem.component === 'button'"
        >
          {{ fieldItem.componentLabel }}
        </button>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: "TableBody",
  data() {
    return {
      defaultFn: () => {},
      table_row_class:
        "hover:bg-gray-100 border-b border-gray-200 py-6 px-4 text-left",
    };
  },
  props: {
    data: Array,
    field: Array,
    paginationFn: Function,
  },
};
</script>
