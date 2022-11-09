import { rest, setupWorker } from 'msw'
import Transaction from '../model/Transaction'
export const BACKEND_URL = 'http://localhost:5173'

const privateTransactions = [
  new Transaction({
    id: 'private-transaction-1',
    amount: 1000.09,
    description: 'first private transaction'
  }),
  new Transaction({
    id: 'private-transaction-2',
    amount: 2000.09,
    description: 'second private transaction'
  })
]

const businessTransactions = [
  new Transaction({
    id: 'business-transaction-1',
    amount: 67800.09,
    description: 'first business transaction'
  }),
  new Transaction({
    id: 'business-transaction-2',
    amount: 20300.09,
    description: 'second business transaction'
  })
]

export const handlers = [
  rest.get('/initialCards', (req, res, ctx) => {
    return res(
      ctx.status(202, 'Mocked status'),
      ctx.json({
        cards: [
          {
            id: 'test-id-private',
            description: 'Private Card',
            color: 'lightgrey'
          },
          {
            id: 'test-id-business',
            description: 'Business Card',
            color: 'lightblue'
          }
        ]
      })
    )
  }),
  rest.get('/transactionsByCardId', (req, res, ctx) => {
    console.log('req', req.url.searchParams.get('id'))
    return res(
      ctx.status(202, 'Mocked status'),
      ctx.json({
        transactions: req.url.searchParams.get('id') === 'test-id-private' ? privateTransactions : businessTransactions
      })
    )
  })
]

export const worker = setupWorker(...handlers)
