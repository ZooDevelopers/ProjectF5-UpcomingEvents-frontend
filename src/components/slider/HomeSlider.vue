<script setup>
import { ref, onMounted, nextTick } from "vue";
import { Swiper } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const navigationPrevRef = ref(null);
const navigationNextRef = ref(null);

let swiperInstance = null;

onMounted(async () => {
  await nextTick(); // Ensure DOM is updated
  swiperInstance = new Swiper(".mySwiper", {
    modules: [Navigation],
    navigation: {
      prevEl: navigationPrevRef.value,
      nextEl: navigationNextRef.value,
    },
    slidesPerView: 1,
    spaceBetween: 20,
  });
});
</script>

<template>
  <div>
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <swiper-slide class="swiper-slide slide-temporary">
          <div class="slide-content flex flex-col">
            <div class="p-5 bg-purple-600 max-w-[600px] rounded-[20px]">
              <span class="flex flex-row gap-5 text-grey">
                <p>05/10/2024</p>
                <p>Madrid, Recinto Ferial de IFEMA</p>
              </span>
              <h3 class="text-peach-500 text-3xl">Kalorama Madrid 2024</h3>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <div class="slide-content">Slide 2 Content</div>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <div class="slide-content">Slide 3 Content</div>
        </swiper-slide>
      </div>
    </div>
    <button ref="navigationPrevRef" class="prevBtn w-12 h-12 rounded-full bg-peach-600 rotate-180">
        <FontAwesomeIcon :icon="faArrowRight" class="text-xl text-purple-700" />
    </button>
    <button ref="navigationNextRef" class="nextBtn w-12 h-12 rounded-full bg-peach-600">
        <FontAwesomeIcon :icon="faArrowRight" class="text-xl text-purple-700" />
    </button>
  </div>
</template>

<style>
.slide-temporary {
    height: 750px;
}

.slide-temporary.slide-content {

}
</style>