<template>
  <div class="text-center">
    <v-card-item class="p-8" value="rounded-lg">
      <v-icon class="mb-4 text-6xl">
        mdi-notebook-plus
      </v-icon>
      <v-list-item-title class="text-h5">
        ローカルの課題を追加
      </v-list-item-title>
      <v-divider class="my-4"></v-divider>
      <v-text-field
        label="課題名を入力..."
        placeholder="課題名のみを入力してください"
        variant="underlined"
        prepend-icon="mdi-book-edit"
      ></v-text-field>
    </v-card-item>
  </div>
</template>