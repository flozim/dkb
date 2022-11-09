<script setup lang="ts">
import { ref } from "vue";
import AButton from "./AButton.vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <div class="app">
    <AButton></AButton>
  </div>
</template>

<style lang="sass" scoped>
.app
  color: #888
</style>
