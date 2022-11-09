import { rest, setupWorker } from 'msw'
export const BACKEND_URL = 'http://localhost:5173'

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
  })

]

export const worker = setupWorker(...handlers)
