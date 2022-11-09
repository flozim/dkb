export default class Transaction {
  id: string
  amount: number
  description: string

  constructor ({
    id = '',
    amount = 0,
    description = ''
  } = {}) {
    this.id = id
    this.amount = amount
    this.description = description
  }
}
