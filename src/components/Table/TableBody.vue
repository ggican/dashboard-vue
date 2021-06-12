<template>
  <tbody class="text-sm font-normal text-gray-700">
    <tr
      v-for="item in data"
      :key="item.key"
      class="hover:bg-gray-100 border-b border-gray-200 py-10"
    >
      <td
        v-for="fieldItem in field"
        :key="fieldItem.key"
        class="px-4 py-4 text-left font-semibold text-sm"
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
  props: {
    data: Array,
    field: Array,
  },
};
</script>
