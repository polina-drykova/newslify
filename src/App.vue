<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center"></div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <Headlines />
  </v-app>
</template>

<script>
import Headlines from "./components/Headlines";

export default {
  name: "App",

  components: {
    Headlines
  },

  data: () => ({})
};
</script>
