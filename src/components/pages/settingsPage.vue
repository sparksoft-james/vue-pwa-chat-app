<template>
  <div class="settings-page d-flex align-center justify-center">
    <div v-if="user.loggedIn">
      <h3 class="mb-3">Welcome, {{ user.data && user.data.displayName }}</h3>
      <v-btn dark @click="signOutFunc()">Sign Out</v-btn>
    </div>

    <v-btn v-else dark @click="signInFunc">Login with Google</v-btn>
  </div>
</template>
<script>
import firebase from 'firebase'

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    signInFunc () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .catch(err => {
          console.log(err)
        })
    },
    signOutFunc () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
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
