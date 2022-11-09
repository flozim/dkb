import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import DKBCard from 'src/components/DKBCard.vue'
import Card from '../model/Card'

describe('DKBCard.vue', () => {
  it('renders ', () => {
    const wrapper = mount(DKBCard, {
      props: { card: new Card() }
    })
    expect(wrapper.exists()).toBeTruthy()
  })
})
