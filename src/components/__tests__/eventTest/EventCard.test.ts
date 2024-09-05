import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import EventCard from '@/components/events/EventCard.vue'; // Ajusta la ruta según sea necesario

// Mock del componente Button
vi.mock('@/components/base/Button.vue', () => {
  return {
    default: {
      name: 'Button',
      props: ['label'],
      template: '<button>{{ label }}</button>',
    }
  };
});

describe('EventCard.vue', () => {
  it('renders correctly', () => {
    const eventData = {
      date: '2024-09-05',
      time: '18:00',
      title: 'Sample Event',
      description: 'This is a sample event description that should be truncated.',
      location: 'Sample Location',
      maxparticipants: 10,
    };

    const wrapper = mount(EventCard, {
      props: {
        eventData,
      },
    });

    // Verifica que el contenido del componente se renderiza correctamente
    expect(wrapper.text()).toContain('Sample Event');
    expect(wrapper.text()).toContain('2024-09-05');
    expect(wrapper.text()).toContain('18:00');
    expect(wrapper.text()).toContain('Sample Location');
    expect(wrapper.text()).toContain('Spots Left: 10');
  });

 

  it('emits openModal event with eventData when handleOpenModal is called', async () => {
    const eventData = {
      date: '2024-09-05',
      time: '18:00',
      title: 'Sample Event',
      description: 'This is a sample event description that should be truncated.',
      location: 'Sample Location',
      maxparticipants: 10,
    };

    const wrapper = mount(EventCard, {
      props: {
        eventData,
      },
    });

    // Simula el clic en la imagen
    await wrapper.find('div.cursor-pointer').trigger('click');

    // Verifica que el evento openModal se emite con el payload correcto
    expect(wrapper.emitted('openModal')).toBeTruthy();
    expect(wrapper.emitted('openModal')![0]).toEqual([eventData]);
  });
});
