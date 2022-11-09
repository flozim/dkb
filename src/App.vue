<template>
  <div class="app">
        <DKBCard class="app--dkb-card" :card="{id:'121212', description: 'Private Card', color: 'lightgrey'}"/>
        <DKBCard :card="{id:'213123', description: 'Business Card', color: 'lightblue'}"/>
  </div>
</template>

<script setup lang="ts">
import DKBCard from "./components/DKBCard.vue";

</script>

<style lang="sass" scoped>
.app
  display: flex
  justify-content: center
  .app--dkb-card
    margin-right: 10%
</style>
