<template>
  <v-content>
    <v-container grid-list-xl class="my-5 ml-auto mr-auto">
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          lg4
          :key="headline.id"
          v-for="headline in allHeadlines"
        >
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                class="mx-auto"
                color="#212121"
                dark
                max-width="400"
                style="position: relative;"
              >
                <v-img
                  :aspect-ratio="16 / 9"
                  dark
                  v-bind:src="headline.urlToImage"
                  gradient="to bottom, rgba(100,115,201,.33), rgba(34, 34, 34,1)"
                >
                  <v-card-text
                    class="subtitle-1 font-weight-medium"
                    style="position: absolute; bottom: 0;"
                  >
                    {{ headline.title }}
                  </v-card-text>

                  <v-fade-transition>
                    <v-overlay v-if="hover" absolute color="#26c6da">
                      <v-btn>Read more</v-btn>
                    </v-overlay>
                  </v-fade-transition>
                </v-img>
              </v-card>
            </template>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Headlines",
  methods: {
    ...mapActions(["fetchHeadlines"])
  },
  computed: mapGetters(["allHeadlines"]), //import headlines
  created() {
    this.fetchHeadlines();
  }
};
</script>
