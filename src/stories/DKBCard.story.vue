<template>
  <Story>
    <Variant title="Private light grey">
      <DKBCard :card="privateCard" />
    </Variant>
    <Variant title="Business light blue selected">
      <DKBCard :card="businessCard" selected />
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import DKBCard from '../components/DKBCard.vue'
import Card from "../model/Card";

const privateCard = new Card({
  id: 'private-card-id',
  description: 'some description for a private card',
  color: 'lightgrey'
})

const businessCard = new Card({
  id: 'business-card-id',
  description: 'some description for a business card',
  color: 'lightblue'
})

</script>