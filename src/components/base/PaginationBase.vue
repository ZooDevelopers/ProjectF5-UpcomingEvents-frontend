<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
  currentPage: { type: Number, required: true },
  totalPages: { type: Number, required: true },
});

const emit = defineEmits(["pageChanged"]);

const isFirstPage = computed(() => props.currentPage === 0); // because 0-based for backend
const isLastPage = computed(() => props.currentPage === props.totalPages - 1);

const goToPreviousPage = () => {
  if (!isFirstPage.value) {
    emit("pageChanged", props.currentPage - 1);
  }
};

const goToNextPage = () => {
  if (!isLastPage.value) {
    emit("pageChanged", props.currentPage + 1);
  }
};

const goToPage = (page) => {
  emit("pageChanged", page - 1); // convert 1-based to 0-based when emitting
};

const visiblePages = computed(() => {
  const total = props.totalPages;
  const current = props.currentPage + 1;
  const pages = [];
  const maxVisiblePages = 5;

  pages.push(1);

  if (total <= maxVisiblePages) {
    for (let i = 2; i <= total; i++) {
      pages.push(i);
    }
  } else {
    if (current > 3) {
      pages.push("...");
    }

    const startPage = Math.max(2, Math.min(current - 1, total - 3));
    const endPage = Math.min(total - 1, Math.max(current + 1, 4));

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    if (current < total - 2) {
      pages.push("...");
    }
    pages.push(total);
  }

  return pages;
});
</script>

<template>
  <div class="flex justify-center items-center gap-3 mt-6">
    <!-- Previous Button -->
    <button
      class="px-4 py-2 rounded-md flex items-center gap-2 text-peach-500 font-semibold font-rubik text-sm transition hover:bg-purple-700 hover:text-peach-300 disabled:text-peach-800 disabled:cursor-not-allowed"
      :disabled="isFirstPage"
      @click="goToPreviousPage"
      >
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Previous
    </button>

    <!-- Page Numbers and Ellipsis in a Single Loop -->
    <template v-for="(page, index) in visiblePages" :key="index">
      <button
        v-if="page !== '...'"
        @click="goToPage(page)"
        class="w-10 h-10 rounded-md flex justify-center items-center font-semibold text-sm font-rubik transition hover:bg-purple-700 hover:text-peach-300"
        :class="{
          'bg-purple-700 text-peach-500': page === props.currentPage + 1, // Compare 1-based for display
          'text-peach-500': page !== props.currentPage + 1,
        }"
      >
        {{ page }}
      </button>
      <span v-else class="text-sm text-gray-400 px-2"> ... </span>
    </template>

    <!-- Next Button -->
    <button
      class="px-4 py-2 rounded-md flex items-center gap-2 text-peach-500 font-semibold font-rubik text-sm transition hover:bg-purple-700 hover:text-peach-300 disabled:text-peach-800 disabled:cursor-not-allowed"
      :disabled="isLastPage"
      @click="goToNextPage"
      >
      Next
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped></style>
