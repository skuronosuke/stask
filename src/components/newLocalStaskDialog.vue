<template>
  <v-form class="text-center p-8" value="rounded-lg">
    <v-icon class="mb-4 text-6xl">
      mdi-notebook-plus
    </v-icon>
    <v-list-item-title class="text-h5">
      課題を追加
    </v-list-item-title>
    <v-divider class="my-4"></v-divider>
    <v-container>
      <v-col>
        <v-text-field
          label="課題名"
          placeholder="課題名のみを入力してください"
          variant="underlined"
          prepend-icon="mdi-book-edit"
          v-model="newKadaiData.name"
        ></v-text-field>
        <div class="mt-2 flex flex-row">
          <v-text-field
            label="最初のページ"
            placeholder="1~998"
            variant="underlined"
            type="number"
            v-model="newKadaiData.startPage"
          ></v-text-field>
          <v-text-field
            class="ml-4"
            label="最後のページ"
            placeholder="2~999"
            variant="underlined"
            type="number"
            v-model="newKadaiData.lastPage"
          ></v-text-field>
        </div>
        <v-text-field
          class="mt-2"
          label="所要時間(分)"
          placeholder="分で入力してください"
          variant="underlined"
          type="number"
          v-model="newKadaiData.time"
        ></v-text-field>
      </v-col>
    </v-container>
    <v-card-actions>
      <v-btn color="primary" block @click="dialog = false">
        <v-icon>mdi-check</v-icon>
        完了
      </v-btn>
    </v-card-actions>
  </v-form>
</template>
<script>
export default{
  data(){return{
    newKadaiData: {
      name: "",
      startPage: 10,
      lastPage: 20,
      time: 60
    }
  }}
}
</script>