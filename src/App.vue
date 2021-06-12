<template>
  <div id="nav">
    <div class="flex min-h-screen w-full">
      <nav class="flex flex-col min-h-screen bg-sidebar-background w-64">
        <div class="flex flex-center items-center flex-wrap py-4 px-4">
          <div class="w-66">
            <img src="./assets/logo-gram.png" />
          </div>
          <div class="ml-5">
            <img src="./assets/logo-text.png" />
          </div>
        </div>
        <div class="mt-5 mb-4">
          <ul>
            <li>
              <router-link
                to="/about"
                class="px-4 items-center py-4 flex flex-row"
                href="#"
              >
                <span class="text-sidebar-text items-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                      stroke="#BDBDBD"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 12V9"
                      stroke="#BDBDBD"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 6H9.0075"
                      stroke="#BDBDBD"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span class="ml-2 font-normal text-sidebar-text">About</span>
              </router-link>
            </li>
            <li>
              <router-link class="px-4 py-4 items-center flex flex-row" to="/">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.75 15.8492V14.3492C12.75 13.5536 12.4339 12.7905 11.8713 12.2279C11.3087 11.6653 10.5456 11.3492 9.75 11.3492H3.75C2.95435 11.3492 2.19129 11.6653 1.62868 12.2279C1.06607 12.7905 0.75 13.5536 0.75 14.3492V15.8492"
                    stroke="#BDBDBD"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.75 8.34924C8.40685 8.34924 9.75 7.0061 9.75 5.34924C9.75 3.69239 8.40685 2.34924 6.75 2.34924C5.09315 2.34924 3.75 3.69239 3.75 5.34924C3.75 7.0061 5.09315 8.34924 6.75 8.34924Z"
                    stroke="#BDBDBD"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.25 15.8492V14.3492C17.2495 13.6845 17.0283 13.0388 16.621 12.5135C16.2138 11.9881 15.6436 11.6129 15 11.4467"
                    stroke="#BDBDBD"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 2.44672C12.6453 2.61194 13.2173 2.98724 13.6257 3.51345C14.0342 4.03966 14.2559 4.68684 14.2559 5.35297C14.2559 6.01909 14.0342 6.66628 13.6257 7.19248C13.2173 7.71869 12.6453 8.09399 12 8.25922"
                    stroke="#BDBDBD"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span class="ml-2 font-normal text-sidebar-text">User</span>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="content bg-grey">
        <div class="container py-7 px-8">
          <div
            class="
              content-header
              mb-14
              w-full
              flex flex-row
              items-center
              justify-between
            "
          >
            <div class="content-header--left w-auto inline-flex">
              <h1 class="text-xl font-bold w-auto">{{ title }}</h1>
            </div>
            <div class="content-header--right w-auto d-inline-flex">
              <div class="content-header--menu flex items-center">
                <span class="mr-3.5 font-semibold">Jones Ferdinand</span>
                <div
                  class="
                    content-header--avatar
                    w-12
                    inline-flex
                    p-0.5
                    border-2 border-table
                    rounded-full
                  "
                >
                  <img src="./assets/avatar.png" class="w-full rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <router-view @titlePage="onGetTitlePage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onGetTitlePage(values) {
      this.title = values;
    },
  },
};
</script>

<style lang="less">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content {
  width: calc(100% - 16rem);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #f7f8fc;
}
</style>
