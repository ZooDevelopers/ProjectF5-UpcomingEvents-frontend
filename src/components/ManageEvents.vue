<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Button from './base/Button.vue'; 
import { useRouter } from 'vue-router';
import EditEventForm from './EditEventForm.vue';
import DeleteConfirmationForm from './DeleteConfirmationForm.vue';

const router = useRouter();
const events = ref([]); 

//  eventos desde el backend
const fetchEvents = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/v1/events');
    if (response.data && Array.isArray(response.data)) {
      events.value = response.data;
    } else {
      console.error('The response from the backend does not have the expected structure.');
    }
  } catch (error) {
    console.error('Error retrieving the list of events:', error);
  }
};

onMounted(fetchEvents);


const deleteEvent = (id) => {
  router.push({ name: 'deleteconfirmationform', params: { id } });
};


const editEvent = (id) => {
  router.push({ name: 'editeventform' });
};


const addNewEvent = () => {
  router.push({ name: 'addeventform' }); 
};
</script>

<template>
  <div class="p-8 bg-purple-800 text-purple-50 rounded-lg">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-4xl font-rubik text-pink">MANAGE EVENTS</h1>
      <Button label="Add New Event" @click="addNewEvent" /> 
    </div>
    <div class="overflow-x-auto bg-purple-600 rounded-lg border border-purple-800">
      <table class="min-w-full text-left border-collapse">
        <thead class="bg-purple-400">
          <tr>
            <th class="px-6 py-4 text-pink border-purple-700">Title</th>
            <th class="px-6 py-4 text-pink border-purple-700">Date</th>
            <th class="px-6 py-4 text-pink border-purple-700">Time</th>
            <th class="px-6 py-4 text-pink border-purple-700">Spots Left</th>
            <th class="px-6 py-4 text-pink border-purple-700">Featured</th>
            <th class="px-6 py-4 text-pink border-purple-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in events" :key="event.id" class="hover:bg-purple-100">
            <td class="px-6 py-4 border-b border-purple-700">{{ event.title }}</td>
            <td class="px-6 py-4 border-b border-purple-700">{{ event.date }}</td>
            <td class="px-6 py-4 border-b border-purple-700">{{ event.time }}</td>
            <td class="px-6 py-4 border-b border-purple-700">{{ event.maxparticipants }}</td>
            <td class="px-6 py-4 border-b border-purple-700">{{ event.is_featured ? 'Yes' : 'No' }}</td>
            <td class="px-6 py-4 flex space-x-2 border-b border-purple-700">
              <button @click="editEvent(event.id)" class="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded">
                ✏️
              </button>
              <button @click="deleteEvent(event.id)" class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                🗑️
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
