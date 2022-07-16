<template>
  <v-container fluid>
    <v-card
      border flat class="border-2 border-l-8 max-w-2xl mx-auto"
      :class="`${card.subject}-border`">
      <v-card-item>
        <div class="flex flex-row items-center">
          <v-icon
            large
            class="mr-2"
            v-if="card.done"
          >mdi-check</v-icon>
          <div
            class="w-8"
            v-if="!card.done"
          ></div>
          <div class="grow">
            <div class="flex flex-row items-center">
              <div class="flex flex-row items-end gap-x-4">
                <v-card-title>
                  <MoreInput v-model:title="card.title"/>
                </v-card-title>
                <v-card-subtitle>所要時間:分　{{card.nowPage - card.startPage}}/{{card.lastPage - card.startPage}}</v-card-subtitle>
              </div>
              <v-spacer></v-spacer>
              <v-btn
                icon
                class="m-0"
                @click.stop="card.showSubMenu = !card.showSubMenu"
                @click="test(card.title)"
              >
                <v-icon v-if="card.showSubMenu">mdi-menu-up</v-icon> <!--詳細を表示しているとき-->
                <v-icon v-if="!card.showSubMenu">mdi-menu-down</v-icon> <!--詳細を隠しているとき-->
              </v-btn>
            </div>
            <v-progress-linear
              class="mt-2"
              background-color="blue lighten-3"
              color="blue lighten-1"
              :modelValue="getNowNumber(card.startPage, card.nowPage, card.lastPage)"
            ></v-progress-linear>
          </div>
        </div>
        <v-expand-transition>
          <div v-if="card.showSubMenu" class="mt-2">
            <v-divider></v-divider>
            <div class="mt-2 flex flex-row items-center gap-x-2">
              <p>p.{{card.startPage}}</p>
              <v-slider
                v-model="card.nowPage"
                :min="card.startPage"
                :max="card.lastPage"
                color="blue"
                thumb-label
                step="1"
              ></v-slider>
              p.{{card.lastPage}}
            </div>
          </div>
        </v-expand-transition>
      </v-card-item>
    </v-card>
  </v-container>
</template>
<script>
import MoreInput from "./moreInput.vue"

export default{
  components: {
    MoreInput
  },
  methods: {
    getNowNumber(start,now,end){
      const ue = now - start
      const sita = end - start
      return ue / sita * 100
    },
    test(a){
      console.log(a)
    }
  },
  props: ["card"]
}
</script>