import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeAll, afterAll, afterEach } from 'vitest'
import App from '.App.vue'
import Card from './model/Card'
import { setupServer } from 'msw/node'
import { handlers } from './mocks/msw'

const server = setupServer(...handlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())

describe('App.vue', () => {
  it('should renders is page content is correct', () => {
    const wrapper = mount(App)
    expect(wrapper.exists()).toBeTruthy()
  })

  it('changes selectedId on DKBCard click', async () => {
    const wrapper = mount(App, {
      props: {
        card1: new Card({
          id: 'tes-id-private'
        }),
        card2: new Card({
          id: 'test-id-business'
        })
      }
    })

    const privateDKBCard = wrapper.find('[data-test="app--dkb-card-private"]')
    expect(privateDKBCard.exists()).toBeTruthy()

    await privateDKBCard.trigger('click')

    expect(wrapper.vm.selectedCardId).toEqual('test-id-private')
  })
})
