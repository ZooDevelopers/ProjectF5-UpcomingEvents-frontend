import { describe, it, expect, vi, afterEach } from 'vitest';
import EventsRepository from '@/core/api/eventsRepository';

// Mock de la función global fetch
global.fetch = vi.fn();

describe('EventsRepository', () => {
    const uri = 'https://api.example.com/events';
    const repository = new EventsRepository(uri);

    afterEach(() => {
        vi.resetAllMocks();
    });

    it('should fetch events by type successfully', async () => {
        const mockData = { events: [] };
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        });

        const query = 'type=conference';
        const data = await repository.getByType(query);

        expect(fetch).toHaveBeenCalledWith(`${uri}?${query}`);
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(data).toEqual(mockData);
    }); 
  
});
