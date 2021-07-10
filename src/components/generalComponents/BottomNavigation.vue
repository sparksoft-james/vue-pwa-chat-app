<template>
  <v-bottom-navigation v-model="currentTab" app>
    <v-btn value="message" @click="route('index')">
      <v-icon small>mdi-message</v-icon>
    </v-btn>
    <v-btn value="phone" @click="route('call')">
      <v-icon small> mdi-phone</v-icon>
    </v-btn>
    <v-btn value="account" @click="route('contact')">
      <v-icon small>mdi-account</v-icon>
    </v-btn>
    <v-btn value="cog" @click="route('settings')">
      <v-icon small>mdi-cog</v-icon>
    </v-btn>
    <v-btn value="cog" fab @click="route('newMessage')">
      <v-icon small>mdi-plus</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  data () {
    return {
      currentTab: 'message'
    }
  },
  methods: {
    route (url) {
      this.currentTab = url
      this.$router.push({ name: url })
    }
  }
}
</script>
<style lang=""></style>
