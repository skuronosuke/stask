<template>
  <input
    type="text"
    :value="title"
    @input="$emit('update:title', $event.target.value); getWidth();"
    id="input">
  <div
    id="dummy"
    style="
      float: left;
      "
    aria-hidden="true"
  >{{title}}</div>
</template>
<script>
export default{
  props: {
    title: String
  },
  emits: ['update:title'],
  methods: {
    getWidth(){
      const dummy = document.getElementById("dummy")
      document.getElementById("input").style.width = dummy.clientWidth
    }
  }
}
</script>