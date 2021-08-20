<template>
  <section class="filters">
    <button
      :class="{ filters__button: true, active: filterButton === filter }"
      v-for="(filter, index) in filters"
      :key="index"
      @click="sendFilter"
    >
      {{ filter }}
    </button>
  </section>
</template>

<script>
export default {
  name: "Filters",
  props: ["filterButton"],

  setup(props, { emit }) {
    const filters = ["All", "Completed", "Uncomplited"];
    const sendFilter = (event) => {
      emit("test", event.target.innerHTML);
    };
    return {
      filters,
      sendFilter,
    };
  },
};
</script>
