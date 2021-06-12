<template>
  <div v-if="dataDetail.status" class="user-detail w-full">
    <div class="w-2/4">
      <div class="bg-white border rounded-lg border-table px-14 py-14 w-full">
        <div class="flex justify-between w-full mb-5">
          <p class="font-semibold text-2xl">
            {{ `${dataDetail.last_name} ${dataDetail.last_name}` }}
          </p>
        </div>
        <div class="w-full flex flex-row">
          <div class="w-3/5">
            <img :src="dataDetail.avatar" class="w-full rounded-lg" alt="" />
          </div>
          <div class="ml-8">
            <div class="column flex flex-col mb-11">
              <span class="font-semibold text-base text-left mb-2.5">
                First Name
              </span>
              <span class="text-detail font-normal text-base text-left">
                {{ dataDetail.first_name }}
              </span>
            </div>
            <div class="column flex flex-col mb-11">
              <span class="font-semibold mb-2.5 text-base text-left">
                First Name
              </span>
              <span class="text-detail font-normal text-base text-left">
                {{ dataDetail.last_name }}
              </span>
            </div>
            <div class="column flex flex-col mb-11">
              <span class="font-semibold mb-2.5 text-base text-left">
                Full Name
              </span>
              <span class="text-detail font-normal text-base text-left">
                {{ `${dataDetail.email}` }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mt-10">
        <button
          v-on:click="onBack"
          class="
            rounded-full
            bg-button-detail
            text-xs
            hover:bg-blue-700
            text-white
            font-bold
            py-3
            px-10
          "
        >
          BACK
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router/";

export default {
  name: "Home",
  emits: ["titlePage"],
  methods: {
    async onBack() {
      this.dataDetail = { status: false };
      router.go(-1);
    },
    async onGetData(id) {
      if (id && id !== "") {
        const result = await this.axios.get(
          `https://reqres.in/api/users/${id}`,
        );
        const { data, status } = result;
        if (status === 200) {
          this.dataDetail = { status: true, ...data.data };
        }
      }
    },
  },
  data() {
    return {
      dataDetail: {
        status: false,
      },
    };
  },
  async mounted() {
    this.onGetData(this.$route.params.id);
    this.$emit("titlePage", "Users");
  },
};
</script>
