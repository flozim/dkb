export default class Card {
  id: string
  description: string
  color: string

  constructor ({
    id = '',
    description = '',
    color = 'white'
  } = {}) {
    this.id = id
    this.description = description
    this.color = color
  }
}
