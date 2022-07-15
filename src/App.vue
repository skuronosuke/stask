<template>
  <v-theme-provider theme="dark" with-background>
    <v-layout class="h-screen">
      <v-app-bar prominent flat border>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Stask</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer">
        <v-list>
          
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <TaskCard
          v-for="card in cards"
          :key="card.id"
          :card = "card"
        />
      </v-main>
    </v-layout>
  </v-theme-provider>
</template>

<style>
.v-input__details{
  display: none !important;
}
.v-container{
  padding: 8px;
}

.math-border{
  border-color: #60a5fa !important;
}
</style>

<script>
import TaskCard from "./components/taskCard.vue"

export default {
  name: 'App',
  components: {
    TaskCard
  },
  data: () => ({
    drawer: false,
    cards: [
      {
        title: "Apapa",
        time: "400",
        startPage: 10,
        lastPage: 100,
        nowPage: 40,
        subject: "math",
        showSubMenu: false
      },
      {
        title: "Apapa",
        time: "400",
        startPage: 10,
        lastPage: 100,
        nowPage: 40,
        subject: "math",
        showSubMenu: false
      },
      {
        title: "Apapa",
        time: "400",
        startPage: 10,
        lastPage: 100,
        nowPage: 40,
        subject: "math",
        showSubMenu: false
      },
      {
        title: "Apapa",
        time: "400",
        startPage: 10,
        lastPage: 100,
        nowPage: 40,
        subject: "math",
        showSubMenu: false
      }
    ]
  }),
}
</script>