<template>
  <section class="todos" v-show="userName">
    <div class="wrapper">
      <section class="todos__body">
        <section class="todos__header">
          <h2 class="todos__userName">
            {{ `${userName.split(" ")[0]} 'S TODOS` }}
          </h2>
          <Filters @test="testt" :filterButton="filterValue" />
        </section>
        <ul class="todos__list">
          <li
            class="todos__todo"
            v-for="todo in filteredTodoList"
            :key="todo.id"
          >
            <label
              @click="toggleDone"
              :class="{ todos__item: true, done: todo.completed }"
              :for="todo.id"
            >
              <input
                @click="toggleDone"
                :class="{ todos__input: true }"
                type="checkbox"
                :id="todo.id"
                :checked="todo.completed"
              />
              {{ todo.title }}
            </label>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

import Filters from "./Filters.vue";
export default {
  name: "Todos",
  components: {
    Filters,
  },
  setup() {
    const store = useStore();
    const todos = store.state.todos;
    const filterValue = ref("All");

    const filteredTodoList = computed(() => {
      if (filterValue.value === "All") {
        return list.value;
      } else if (filterValue.value === "Completed") {
        return list.value.filter((todo) => todo.completed);
      } else if (filterValue.value === "Uncomplited") {
        return list.value.filter((todo) => !todo.completed);
      }
      return list.value;
    });

    const list = computed(() => {
      return todos.filter((x) => x.userId === store.state.userId);
    });

    const testt = (filter) => {
      filterValue.value = filter;
    };

    const userName = computed(() => store.state.userName.toUpperCase());
    const toggleDone = (e) => e.target.classList.toggle("done");

    return {
      todos,
      list,
      testt,
      filterValue,
      filteredTodoList,
      userName,
      toggleDone,
    };
  },
};
</script>

