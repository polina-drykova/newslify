<template>
  <v-content>
    <v-container grid-list-lg class="my-5 ml-auto mr-auto">
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          lg3
          :key="headline.id"
          v-for="headline in allHeadlines"
        >
          <v-card class="mx-auto" color="grey.lighten-4" max-width="350">
            <v-card-title>
              <span
                class="d-inline-block text-truncate title font-weight-light"
                style="max-width: 300px;"
              >
                {{ headline.title }}
              </span>
            </v-card-title>

            <v-card-text class="body-2">
              <span>{{ headline.description.slice(0, 90) }}..</span>
            </v-card-text>

            <v-card-actions class="ml-2">
              <v-list-item-content>
                <v-list-item-title>SourceName</v-list-item-title>
              </v-list-item-content>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Headlines",
  computed: mapGetters(["allHeadlines"]) //import headlines
};
</script>
