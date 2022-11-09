import { computed, reactive, ref } from 'vue'
import Card from '../model/Card'
// import fetch from 'cross-fetch'

const transactionsByCardId: Record<string, any> = reactive([])
const selectedCardId = ref('')
// eslint-ignore next-line
const shownCards = reactive([])
const loadingTransactions = false

async function fetchInitialCards (): Promise<void> {
  await fetch('/initialCards').then(async response => {
    const data = await response.json()
    const tmpArray = data.cards.map((card: object) => new Card({ ...card }))
    Object.assign(shownCards, tmpArray)
  }).catch(e => {
    console.error(`Could not fetch initial cards: ${e}`)
  })
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function useStore () {
  return {
    transactionsByCardId: computed(() => transactionsByCardId),
    selectedCardId,
    shownCards: computed(() => shownCards),
    fetchInitialCards,
    loadingTransactions
  }
}
