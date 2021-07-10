<template>
  <v-app>
    <v-content>
      <div id="app">
        <main>
          <router-view></router-view>
        </main>
        <BottomNavigation v-if="$route.name !== 'chat'" />
      </div>
    </v-content>
  </v-app>
</template>

<script>
import BottomNavigation from '@/components/generalComponents/BottomNavigation'
export default {
  name: 'app',
  components: { BottomNavigation }
}
</script>

<style>
body {
  margin: 0 20px;
}
</style>
