<template>
  <div class="dkb-card" :style="{'background-color': card.color, 'border': selected ? '2px solid red' : ''}">
    <div class="dkb-card--description">{{ props.card.description }}</div>
    <div class="dkb-card--id">Card Id: {{ props.card.id }}</div>
  </div>
</template>

<script lang="ts" setup>
import Card from "../model/Card";

const props = defineProps({
  card: { type: Card, required: true },
  selected: {type: Boolean, default: false}
})

</script>

<style lang="sass" scoped>
.dkb-card
  width: 20rem
  min-height: 10rem
  border-radius: 12px
  .dkb-card--description
    margin: 1rem 1.5rem 1rem 1.5rem
  .dkb-card--id
    margin: 1rem 0 1rem 1.5rem
</style>