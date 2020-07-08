<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center"></div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <v-container grid-list-lg class="my-5 ml-auto mr-auto">
        <v-layout row wrap>
          <v-flex
            xs12
            sm6
            md4
            lg3
            v-bind:key="headline.id"
            v-for="headline in headlines"
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
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    headlines: [
      {
        title: "Headline1 veryyy long headline",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem fugiat blanditiis porro incidunt nostrum."
      },
      {
        title: "Headline2",
        description:
          "Impedit molestiae velit, alias facere minus optio corporis, sit repudiandae reiciendis at nihil."
      },
      {
        title: "Headline3",
        description:
          "Exercitationem ducimus temporibus repellendus accusamus dignissimos, est rerum iste, saepe, quis corporis odio."
      },
      {
        title: "Headline4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem fugiat blanditiis porro incidunt nostrum."
      },
      {
        title: "Headline5",
        description:
          "Impedit molestiae velit, alias facere minus optio corporis, sit repudiandae reiciendis at nihil."
      },
      {
        title: "Headline6",
        description:
          "Exercitationem ducimus temporibus repellendus accusamus dignissimos, est rerum iste, saepe, quis corporis odio."
      }
    ]
  })
};
</script>
