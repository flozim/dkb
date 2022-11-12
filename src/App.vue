<template>
  <div class="app">
    <div class="app--card-wrapper">
      <DKBCard v-for="card in shownCards"
               data-test="app--dkb-card-private"
               class="app--dkb-card"
               :selected="selectedCardId === card.id"
               :card="card"
               @click="selectNewCardId(card.id)"
      />
    </div>
    <div class="app--transactions-wrapper">
      <DKBFilter v-if="selectedCardId" :amount="selectedAmount" @update:amount="selectedAmount = $event"/>
      <div v-if="!selectedCardId">
        <!--        TODO: empty state message-->
      </div>
      <div v-else-if="loadingTransactions">
        <!--        TODO: loading spinner-->
      </div>
    </div>
    <DKBTransaction
        class="app--transaction"
        v-for="transaction in filteredTransactions"
        :color="currentTransactionColor"
        :transaction="transaction"
    />
  </div>
</template>

<script setup lang="ts">
import DKBCard from "./components/DKBCard.vue"
import DKBTransaction from './components/DKBTransaction.vue'
import useStore from "./composites/store";
import DKBFilter from "./components/DKBFilter.vue";
import {computed, ref} from "vue";

let {
  selectedCardId,
  shownCards,
  fetchInitialCards,
  loadingTransactions,
  fetchTransactions,
  transactionsByCardId
} = useStore()
const selectedAmount = ref('0')
const currentTransactionColor = ref('white')

const filteredTransactions = computed(() => {
  return parseInt(selectedAmount.value) < 0 || transactionsByCardId.value[selectedCardId.value]?.filter(
      (transaction: { amount: number; }) => transaction.amount >= parseInt(selectedAmount.value));
})

function selectNewCardId(id: string) {
  selectedCardId.value = id
  console.log("shownCards.vlaue", shownCards.value)
  shownCards.value.forEach(card => {
    if (card.id === selectedCardId.value) {
      currentTransactionColor.value = card.color
    }
  })
  fetchTransactions()
}

fetchInitialCards()
</script>

<style lang="sass" scoped>
.app
  display: inline
  justify-content: center

  .app--card-wrapper
    display: flex
    justify-content: center

    .app--dkb-card
      margin-left: 5%
      margin-right: 5%

  .app--transactions-wrapper
    margin-top: 4rem
    display: flex
    justify-content: center

  .app--transaction
    margin-left: auto
    margin-right: auto
    margin-top: 2rem
    width: 40rem
</style>
