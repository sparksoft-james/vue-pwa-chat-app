<template>
  <div class="settings-page d-flex align-center justify-center col-12">
    <div v-if="user">
      <h3 class="mb-3">{{ user.data.displayName }}</h3>
      <v-btn v-if="user" @click="signOutFunc">Sign Out</v-btn>
    </div>

    <v-btn v-else @click="signInFunc">Login with Google</v-btn>
  </div>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/auth'

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    signInFunc() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .catch(err => {
          console.log(err)
        })
    },
    signOutFunc() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
        })
        .catch(error => {
          // An error happened.
        })
    }
  }
}
</script>
<style lang="scss">
.settings-page {
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
