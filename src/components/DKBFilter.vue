<template>
  <div class="dkb-filter">
    <span class="dkb-filter--header">Amount Filter</span>
    <input type="text" pattern="[0-9]+" v-model="amount">
    <span class="dkb-filter-warning" v-if="invalidAmount">Please enter a valid amount.</span>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref} from "vue";

const emit = defineEmits<{
  (e: 'update:amount', value: string| undefined): void
}>()

const invalidAmount = ref(false)
const props = defineProps({amount: String})

const amount = computed({
  get: () => props.amount,
  set: (value) => {
    const convertedAmount = parseInt(value as string)
    if(!isNaN(convertedAmount)){
      invalidAmount.value = false
      emit('update:amount', value);
    }else{
      invalidAmount.value = true
    }
  }
})

</script>

<style lang="sass">
.dkb-filter
  width: 25rem
  input
    width: 100%
    border-radius: 3px
  .dkb-filter--header
    font-weight: 400
  .dkb-filter-warning
    color: red
</style>