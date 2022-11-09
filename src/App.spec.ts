import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import App from 'src/App.vue';

describe('App.vue', () => {
  it('should renders is page content is correct', () => {
    const wrapper = mount(App, {
      props: { content: 'test' },
    });
    expect(wrapper.exists()).toBeTruthy();
  });
});
