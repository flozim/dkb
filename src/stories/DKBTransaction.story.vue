<template>
  <Story>
    <Variant title="Default">
      <DKBTransaction :transaction="transaction" color="lightblue" />
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
import DKBTransaction from '../components/DKBTransaction.vue'
import Transaction from "../model/Transaction";

const transaction = new Transaction({
  id: 'some-id',
  amount: 10000,
  description: 'some test description'
})

</script>