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
          <button class="user__button" v-show="false"></button>
        </ul>
      </section>
    </div>
  </section>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "User",

  setup() {
    const store = useStore();
    const users = store.state.users;
    const getUserId = (user) => {
      getButtons();
      store.commit("changeUserName", user.name);
      return store.commit("changeId", user.id);
    };

    const getButtons = () => {
      const buttons = [...document.querySelectorAll(".user__button")];

      buttons.forEach((button) => {
        if (button.classList.contains("user__button--active")) {
          button.classList.remove("user__button--active");
        } else {
          event.target.classList.add("user__button--active");
        }
      });
    };

    return {
      users,
      getUserId,
    };
  },
};
</script>
