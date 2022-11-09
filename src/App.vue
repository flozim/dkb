<template>
  <div class="app">
    <div class="app--card-wrapper">
      <DKBCard v-for="card in shownCards"
               data-test="app--dkb-card-private"
               class="app--dkb-card"
               :selected="selectedCardId === card.id"
               :card="card"
               @click="selectedCardId=card.id"
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

  </div>
</template>

<script setup lang="ts">
import DKBCard from "./components/DKBCard.vue";
import useStore from "./composites/store";
import DKBFilter from "./components/DKBFilter.vue";
import {ref} from "vue";

const {selectedCardId, transactionsByCardId, shownCards, fetchInitialCards, loadingTransactions} = useStore()

const selectedAmount = ref('')

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
</style>
