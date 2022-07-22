<template>
  <v-layout class="h-screen">
    <v-app-bar prominent flat border>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Stask</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog
        v-model="dialog"
      >
        <template v-slot:activator="attrs">
          <v-btn
            icon
            v-bind="attrs"
            @click="dialog = true">
            <v-icon>
              mdi-plus
            </v-icon>
          </v-btn>
        </template>
        <v-card style="width:400px;" fluid>
          <nSDialog
            @newKadai="addKadai"></nSDialog>
        </v-card>  
      </v-dialog>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <v-list>
        
      </v-list>
    </v-navigation-drawer>

    <v-main class="overflow-y-scroll">
      <TaskCard
        v-for="card in cards"
        :key="card.id"
        :card = "card"
      />
    </v-main>
  </v-layout>
</template>

<style>
.v-input__details{
  display: none !important;
}
.v-container{
  padding: 8px;
}

.math-border{
  border-color: #60a5fa88 !important;
}
</style>

<script>
import TaskCard from "./components/taskCard.vue"
import nSDialog from "./components/newStaskDialog.vue"
import { useTheme } from "vuetify"

export default {
  name: 'App',
  components: {
    TaskCard,
    nSDialog
  },
  data: () => ({
    drawer: false,
    dialog: false,
    cards: [
      {
        title: "Apapa",
        time: 400,
        startPage: 10,
        lastPage: 100,
        nowPage: 40,
        subject: "math",
        showSubMenu: false,
        done: false
      },
      {
        title: "Apapa",
        time: 400,
        startPage: 10,
        lastPage: 100,
        nowPage: 40,
        subject: "math",
        showSubMenu: false,
        done: true
      }
    ],
    darkMode: false,
  }),
  methods: {
    addKadai(data){
      this.cards.push(data)
      this.dialog = false
    }
  },
  setup(){
    const theme = useTheme()
    return {
      theme,
      changeTheme(){
        theme.global.name.value = this.darkMode ? 'dark' : 'light'
      }
    }
  },
  mounted(){
    this.darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    this.changeTheme()
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      this.darkMode = event.matches;
      this.changeTheme()
    });
  }
}
</script>