
<script>
export default {
  data() {
    return {
      eventData: {
        content: [
          // Aquí va lista de eventos
        ],
      },
      currentPage: 0,
      totalPages: 5, // Ajusta según tu lógica
    };
  },
  methods: {
    removeEvent(id) {
      //  eliminar el evento
    },
    prevPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
        //  nueva página
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages - 1) {
        this.currentPage++;
        //  datos de la nueva página
      }
    },
  },
};
</script>

<template>
  <div class="manage-events">
    <h1>Manage Events</h1>
    <div class="events-container">
      <EventCard 
        v-for="event in eventData.content" 
        :key="event.id" 
        :event="event" 
        @eventDeleted="removeEvent" 
      />
      <p v-if="eventData.content.length === 0">No events found.</p>
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 0" class="pagination-btn">Previous</button>
      <span>Page {{ currentPage + 1 }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage >= totalPages - 1" class="pagination-btn">Next</button>
    </div>
  </div>
</template>



<style scoped>
.manage-events {
  font-family: 'Poppins', sans-serif;
  color: #ffffff;
  background-color: #1a1a3a;
  padding: 2rem;
  border-radius: 8px;
}

h1 {
  font-size: 2rem;
  color: #ff6b6b;
  margin-bottom: 1rem;
}

.events-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #2a2a5a;
  border-radius: 8px;
  padding: 1rem;
}

.no-data {
  padding: 1rem;
  text-align: center;
  color: #ff6b6b;
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.pagination-btn {
  background-color: #ff6b6b;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

