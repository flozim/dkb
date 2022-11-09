<template>
  <div class="a-button">
    <button @click="clickEvent">{{ content }}</button>
  </div>
</template>

<script setup lang="ts">
import { addListener } from "process";

const props = defineProps({
  content: {
    type: String,
    default: "text",
  },
});

function clickEvent() {
  alert(props.content);
}
</script>

<style lang="sass">
.a-button
    background-color: green
</style>
