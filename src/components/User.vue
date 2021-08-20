<template>
  <section class="user">
    <div class="wrapper">
      <section class="user__body">
        <h2 class="user__title">PICK A USER</h2>
        <ul class="user__list">
          <button
            @click="getUserId(user)"
            v-for="user in users"
            :key="user.id"
            class="user__button"
          >
            {{ user.name }}
          </button>
        </ul>
      </section>
    </div>
  </section>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "User",

  setup() {
    const store = useStore();
    const users = store.state.users;
    const getUserId = (user) => {
      store.commit("changeUserName", user.name);
      return store.commit("changeId", user.id);
    };

    computed(getUserId);

    return {
      users,
      getUserId,
    };
  },
};
</script>
