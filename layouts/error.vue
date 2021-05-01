<template>
  <v-app>
    <v-row class="d-flex justify-center">
      <v-col
        class="d-flex justify-center"
        style="flex-direction: column"
        cols="5"
      >
        <h1 class="mx-auto mb-5 display-1">
          {{ error.statusCode === 404 ? pageNotFound : error.message }}
        </h1>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-on="on"
              v-bind="attrs"
              x-large
              outlined
              color="success"
              icon
              fab
              class="mx-auto"
              router
              to="/"
            >
              <v-icon>mdi-home</v-icon>
            </v-btn>
          </template>
          <span>صفحه اصلی</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    pageNotFound: "404 Not Found",
  }),
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
