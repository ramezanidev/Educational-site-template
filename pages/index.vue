<template>
  <v-main>
    <v-container grid-list-lg class="mx-auto">
      <section>
        <div>
          <p class="headline sectionTitle">دوره های آموزشی</p>
          <v-divider></v-divider>

          <h1>{{ testVuex }}</h1>
        </div>
        <section
          style="display: flex; flex-wrap: wrap; justify-content: center"
        >
          <template v-for="i in 6">
            <v-hover v-slot="{ hover }" :key="i" style="transition: 200ms">
              <v-card
                class="mx-6 my-4 overflow-hidden"
                max-width="300"
                :elevation="hover ? 3 : 1"
              >
                <nuxt-link to="/course/javascript" class="m-0">
                  <v-hover v-slot="{ hover }">
                    <v-img
                      lazy-src="./1.jpg"
                      src="./2.jpg"
                      max-width="500"
                      max-height="300"
                      style="transition: 200ms"
                      :style="[
                        { filter: hover ? 'brightness(0.8)' : null },
                        { transform: hover ? 'scale(1.03)' : null },
                      ]"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="c_1"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-hover>
                  <v-card-title
                    class="p-0 pr-5 pt-3 pb-1"
                    :style="{ color: isDark ? '#ddd' : '#000' }"
                    >آموزش جاوااسکریپت</v-card-title
                  >
                </nuxt-link>

                <v-card-text>
                  <v-row align="center" class="mx-0">
                    <v-rating
                      :value="3.5"
                      color="#ffe700"
                      background-color="warning lighten-1"
                      dense
                      half-increments
                      readonly
                      size="18"
                      :empty-icon="icon.StarOutline"
                      :full-icon="icon.Star"
                      :half-icon="icon.StarHalfFull"
                    ></v-rating>
                    <div class="grey--text">3.5 (413)</div>
                  </v-row>

                  <div class="mt-10 body-2">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله
                  </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>
                <v-card-actions dir="ltr">
                  <v-btn
                    elevation="1"
                    router
                    to="/course/javascript"
                    color="c_1"
                    class="ml-3 mb-1"
                    text
                  >
                    ادامه مطالب
                  </v-btn>
                  <div class="ml-auto mr-2">
                    <span class="body-2">45</span>
                    <v-icon color="c_1">{{ icon.AccountMultiple }}</v-icon>
                  </div>
                </v-card-actions>
              </v-card>
            </v-hover>
          </template>
        </section>
      </section>
    </v-container>
  </v-main>
</template>


<script>
import icon from "assets/icon";

export default {
  data: () => ({
    icon: icon,
  }),
  computed: {
    isDark() {
      return this.$vuetify.theme.dark;
    },
  },
};
</script>
<style lang="scss">
.sectionTitle {
  margin: 0 10px 25px;
  position: relative;
  &::before {
    content: " ";
    position: absolute;
    width: 221px;
    height: 2px;
    background-color: #f57f17;
    bottom: -16px;
    transition: 0.2s;
    right: -10px;
  }
}
</style>