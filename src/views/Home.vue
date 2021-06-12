<template>
  <div class="home w-full">
    <Loading></Loading>
    <Table
      :field="field"
      :paginationConfig="paginationConfig"
      :data="users"
      :title="title"
      :paginationFn="paginationFn"
    ></Table>
  </div>
</template>

<script>
import Table from "@/components/Table/Table.vue";
import router from "../router/";

export default {
  name: "Home",
  components: { Table },
  methods: {
    async onViewDetail({ id }) {
      router.push({ path: `/user-detail/${id}` });
    },
    paginationFn(type) {
      let nextPage = this.page;
      if (type === "next") {
        if (this.page === 1) {
          nextPage = 2;
        }
      }
      if (type === "prev") {
        if (this.page > 1) {
          nextPage = 1;
        }
      }
      this.onGetData(nextPage);
    },
    async onGetData(page) {
      const { data } = await this.axios.get(
        `https://reqres.in/api/users/?page=${page}`,
      );
      const resultData =
        data.data.length > 0
          ? data.data.map((item) => {
              return {
                ...item,
                full_name: `${item.first_name} ${item.last_name}`,
              };
            })
          : [];
      this.users = resultData;
      this.paginationConfig = {
        page: data.page,
        wording: `${data.page === 1 ? data.page : "6"} - ${
          data.page * data.per_page
        } of ${data.total}`,
        per_page: data.per_page,
        total: data.total,
        total_pages: data.total_pages,
      };
    },
  },
  data() {
    return {
      dataDetail: {
        status: false,
      },
      title: "All Users",
      users: [],
      page: 1,
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
          table_row_class: "w-24",
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
          onClick: this.onViewDetail,
          component: "button",
          componentLabel: "VIEW DETAIL",
          table_row_class: "text-right",
          class:
            "rounded-full bg-button-detail text-xs hover:bg-blue-700 text-white font-bold py-3 px-7",
        },
      ],
    };
  },
  emits: ["titlePage"],
  async mounted() {
    this.onGetData(1);
    this.$emit("titlePage", "Users");
  },
};
</script>
