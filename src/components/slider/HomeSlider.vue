<script setup>
import { ref, onMounted, nextTick } from "vue";
import { Swiper } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRight, faLocationDot, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useEventStore } from "@/stores/events";

const navigationPrevRef = ref(null);
const navigationNextRef = ref(null);
const swiperInstance = ref(null);
const isBeginning = ref(true);
const isEnd = ref(false);

const eventStore = useEventStore();
const events = ref([]);

const updateButtonState = () => {
  if (!swiperInstance.value) return;

  isBeginning.value = swiperInstance.value.isBeginning;
  isEnd.value = swiperInstance.value.isEnd;
};

onMounted(async () => {
  try {
    await eventStore.setEvents();
    events.value = eventStore.events.filter((event) => event.getIs_Featured());

    await nextTick();

    swiperInstance.value = new Swiper(".mySwiper", {
      modules: [Navigation],
      navigation: {
        prevEl: navigationPrevRef.value,
        nextEl: navigationNextRef.value,
      },
      slidesPerView: 1,
      spaceBetween: 20,
      on: {
        slideChange: updateButtonState,
        init: updateButtonState
      }
    });
  } catch (error) {
    console.error('Error initializing Swiper:', error);
  }
});

const openModal = (event) => {
  console.log(event); // TODO: modal opening logic here
};
</script>

<template>
  <div class="relative">
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <swiper-slide
          v-for="event in events"
          :key="event.title"
          class="swiper-slide slide-temporary cursor-pointer"
          @click="openModal(event)"
        >
          <div class="slide-content flex flex-col max-w-[1290px] mx-auto py-16">
            <div class="p-5 bg-purple-600 max-w-[600px] rounded-[20px] flex flex-col gap-5">
              <span class="flex gap-8 text-grey font-rubik">
                <p><FontAwesomeIcon :icon="faCalendar" class="text-xl text-pink mr-1" /> {{ event.getDate() }}</p>
                <p><FontAwesomeIcon :icon="faLocationDot" class="text-xl text-pink mr-1" /> {{ event.getLocation() }}</p>
              </span>
              <h3 class="text-peach-500 text-3xl font-rubik font-semibold uppercase">{{ event.getTitle() }}</h3>
            </div>
          </div>
        </swiper-slide>
      </div>
    </div>

    <button
      ref="navigationPrevRef"
      :class="[
        'absolute top-1/2 -translate-y-1/2 left-4 z-10 w-12 h-12 rounded-full flex items-center justify-center',
        isBeginning
          ? 'bg-peach-600/60 cursor-not-allowed text-purple-700/50'
          : 'bg-peach-600 text-purple-700'
      ]"
    >
      <FontAwesomeIcon :icon="faArrowRight" class="text-xl rotate-180" />
    </button>
    <button
      ref="navigationNextRef"
      :class="[
        'absolute top-1/2 -translate-y-1/2 right-4 z-10 w-12 h-12 rounded-full flex items-center justify-center',
        isEnd
          ? 'bg-peach-600/60 cursor-not-allowed text-purple-700/50'
          : 'bg-peach-600 text-purple-700'
      ]"
    >
      <FontAwesomeIcon :icon="faArrowRight" class="text-xl" />
    </button>
  </div>
</template>

<style>
.slide-temporary {
  height: 750px;
}

</style>