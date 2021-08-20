<template>
  <User />

  <Todos />
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";

import User from "./components/User";
import Todos from "./components/Todos";

export default {
  name: "App",
  components: {
    User,
    Todos,
  },

  setup() {
    const store = useStore();
    onMounted(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      data.forEach((user) => store.commit("changeUsers", user));

      const todos = await fetch("https://jsonplaceholder.typicode.com/todos");
      const todosList = await todos.json();
      todosList.forEach((todo) => store.commit("changeTodos", todo));
    });
  },
};
</script>

