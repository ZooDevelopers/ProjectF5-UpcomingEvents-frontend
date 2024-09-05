import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import EventModal from '@/components/events/EventModal.vue'; 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Mock del componente Button
vi.mock('@/components/base/Button.vue', () => ({
  default: {
    name: 'Button',
    props: ['label'],
    template: '<button>{{ label }}</button>',
  },
}));

// Mock del componente FontAwesomeIcon
vi.mock('@fortawesome/vue-fontawesome', () => ({
  FontAwesomeIcon: {
    name: 'FontAwesomeIcon',
    props: ['icon'],
    template: '<i :class="icon"></i>',
  },
}));

describe('EventModal.vue', () => {
  it('renders correctly when showModal is true', () => {
    const eventData = {
      imgUrl: 'https://example.com/image.jpg',
      title: 'Sample Event',
      description: 'This is a sample event description.',
      location: 'Sample Location',
      maxparticipants: 10,
    };

    const wrapper = mount(EventModal, {
      props: {
        showModal: true,
        eventData,
      },
    });

    // Verifica que el modal se renderiza
    expect(wrapper.find('div.fixed').exists()).toBe(true);
    expect(wrapper.find('img').attributes('src')).toBe(eventData.imgUrl);
    expect(wrapper.text()).toContain(eventData.title);
    expect(wrapper.text()).toContain(eventData.description);
    expect(wrapper.text()).toContain(eventData.location);
    expect(wrapper.text()).toContain(`Spots Left: ${eventData.maxparticipants}`);
  });

  it('emits close event when closeModal is called', async () => {
    const wrapper = mount(EventModal, {
      props: {
        showModal: true,
        eventData: {},
      },
    });

    // Simula el clic en el área de fondo
    await wrapper.find('div.fixed').trigger('click');

    // Verifica que el evento close se emite
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  it('emits close event when close icon is clicked', async () => {
    const wrapper = mount(EventModal, {
      props: {
        showModal: true,
        eventData: {},
      },
    });

    // Simula el clic en el icono de cerrar
    await wrapper.find('div.relative .cursor-pointer').trigger('click');

    // Verifica que el evento close se emite
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  
});
