<template>
  <Story>
    <Variant>
      <DKBCard :card="privateCard" />
    </Variant>
    <Variant>
      <DKBCard :card="businessCard" />
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import DKBCard from '../components/DKBCard.vue'
import Card from "../model/Card";

const privateCard = new Card({
  id: 'private-card-id',
  description: 'some description for a private card',
  color: 'grey'
})

const businessCard = new Card({
  id: 'business-card-id',
  description: 'some description for a business card',
  color: 'blue'
})

</script>