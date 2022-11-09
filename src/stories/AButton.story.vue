<template>
  <Story>
    <Variant>
      <AButton :content="'a'" />
    </Variant>
    <Variant>
      <AButton :content="'b'" />
    </Variant>
  </Story>
</template>
<!-- Meow.story.vue -->
<script setup lang="ts">
import AButton from "../components/AButton.vue";
</script>
