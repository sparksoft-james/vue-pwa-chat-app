<template lang="">
  <div class="d-flex flex-row justify-space-between header align-center">
    <h1 class="chat-list-title">{{ headerName }}</h1>
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="routeToNewMessage"
    >
      <g opacity="0.9">
        <circle cx="9.5" cy="9.5" r="8.5" stroke="black" stroke-width="2" />
        <path
          d="M18.4554 18.5L16 16"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
        />
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  props: { headerName: { type: String, required: true } },
  methods: {
    routeToNewMessage() {
      this.$router.push('/newMessage')
    }
  }
}
</script>
<style lang="scss">
.header {
  margin: 20px 0;
  .chat-list-title {
    width: 111px;
    height: 36px;

    /* H1 */

    font-family: Space Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 36px;
    /* identical to box height, or 100% */

    text-transform: capitalize;

    color: #000000;

    opacity: 0.9;
  }
  .magnify-icon {
    font-size: 40px;
  }
}
</style>
