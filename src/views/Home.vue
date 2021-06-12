<template>
  <div class="home w-full">
    <Table
      :field="field"
      :paginationConfig="paginationConfig"
      :data="users"
      :title="title"
    ></Table>
  </div>
</template>

<script>
import Table from "@/components/Table/Table.vue";

export default {
  name: "Home",
  components: { Table },
  methods: () => {},
  data() {
    return {
      title: "All Users",
      users: [],
      paginationConfig: {
        page: 0,
        per_page: 0,
        total: 0,
        total_pages: 0,
      },
      field: [
        {
          key: "avatar",
          label: "",
          component: "image",
          class: "w-14 rounded-full",
        },
        {
          key: "full_name",
          label: "Full Name",
          component: "text",
        },
        {
          key: "email",
          label: "Email",
          component: "text",
        },
        {
          key: "action",
          label: "",
          component: "button",
          componentLabel: "View Detail",
          class:
            "rounded-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4",
        },
      ],
    };
  },
  async mounted() {
    const { data } = await this.axios.get("https://reqres.in/api/users/");
    const resultData =
      data.data.length > 0
        ? data.data.map((item) => {
            return {
              ...item,
              full_name: `${item.first_name} ${item.last_name}`,
            };
          })
        : [];
    console.log(data, "data");
    this.users = resultData;
    this.paginationConfig = {
      page: data.page,
      per_page: data.per_page,
      total: data.total,
      total_pages: data.total_pages,
    };
  },
};
</script>
