<template>
  <div class="dkb-transaction" :style="{'background-color': props.color}">
    <span class="dkb-transaction--description">{{transaction.description}}</span>
    <span class="dkb-transaction--amount">{{formattedAmount}}</span>
  </div>
</template>

<script lang="ts" setup>
import Transaction from "../model/Transaction";
import {computed} from "vue";

const props = defineProps({
  color: String,
  transaction: {
    type: Transaction,
    default: new Transaction()
  }
})

const formattedAmount = computed(()=>{
  return props.transaction.amount.toString().replace('.', ',') + ' €'
})
</script>

<style lang="sass">
.dkb-transaction
  height: 5rem
  display: flex
  justify-content: space-between
  border-radius: 10px
  .dkb-transaction--description
    margin-top: 2rem
    margin-left: 2rem
  .dkb-transaction--amount
    margin-top: 2rem
    margin-right: 2rem
</style>
