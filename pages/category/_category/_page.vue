<template>
  <div>
    <v-card class="mb-8 py-4 px-4 d-flex align-end grey--text">
      <v-select
        :items="[
          '1مرتب سازی بر اساس',
          '2مرتب سازی بر اساس',
          '3مرتب سازی بر اساس',
          '4مرتب سازی بر اساس',
          '5مرتب سازی بر اساس',
        ]"
        label="مرتب سازی بر اساس"
        dense
        outlined
        v-if="$vuetify.breakpoint.mdAndUp"
        style="max-width: 240px"
        color="c_1"
        hide-details
        item-color="c_1"
        :append-icon="icon.MenuDown"
      ></v-select>
      <v-btn-toggle
        class="mr-2"
        color="c_1"
        mandatory
        v-model="arrangementItems"
      >
        <v-btn class="p-0" style="width: 40px; height: 40px; min-width: 40px">
          <v-icon color="c_1">{{ icon.ViewGrid }}</v-icon>
        </v-btn>
        <v-btn class="p-0" style="width: 40px; height: 40px; min-width: 40px">
          <v-icon color="c_1">{{ icon.FormatListText }}</v-icon>
        </v-btn>
      </v-btn-toggle>
      <v-spacer />
      <v-responsive max-width="240" v-if="$vuetify.breakpoint.mdAndUp">
        <v-text-field
          v-model="message4"
          @click:append="show1 = !show1"
          autocomplete="off"
          autocapitalize="off"
          :append-icon="icon.Magnify"
          placeholder="جست و جو کنید"
          dense
          filled
          outlined
          flat
          solo
          hide-details
          color="c_1"
        ></v-text-field>
      </v-responsive>
    </v-card>
    <v-alert
      type="success"
      outlined
      dense
      border="left"
      text
      class="mb-5"
      dismissible
      :icon="icon.InformationVariant"
      :close-icon="icon.Close"
    >
      <span class="body-2 mr-3">{{ 25 }} نتیجه یافت شد!</span>
    </v-alert>

    <div class="mb-8">
      <section
        style="display: flex; flex-wrap: wrap; justify-content: center"
        class="my-n2 mx-n2"
      >
        <template v-for="i in 6">
          <v-hover v-slot="{ hover }" :key="i" style="transition: 200ms">
            <v-card
              class="mx-2 my-4 overflow-hidden"
              :max-width="arrangementItems ? '100%' : '31%'"
              :width="arrangementItems ? '100%' : '31%'"
              :height="arrangementItems ? '190px' : '390px'"
              :class="{ 'd-flex': arrangementItems }"
              :elevation="hover ? 3 : 1"
            >
              <nuxt-link
                to="/course/javascript"
                :class="{ 'd-flex': arrangementItems }"
                :style="{ width: arrangementItems ? '38%' : null }"
                class="m-0"
              >
                <v-hover v-slot="{ hover }">
                  <v-img
                    lazy-src="/1.jpg"
                    src="/2.jpg"
                    max-width="500"
                    :width="arrangementItems ? '100%' : null"
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
                  v-if="!arrangementItems"
                  :style="{ color: isDark ? '#ddd' : '#000' }"
                  >آموزش جاوااسکریپت</v-card-title
                >
              </nuxt-link>

              <div class="d-flex flex-column">
                <nuxt-link to="/" v-if="arrangementItems">
                  <v-card-title
                    class="p-0 pr-5 pt-3 pb-1"
                    :style="{ color: isDark ? '#ddd' : '#000' }"
                    >آموزش جاوااسکریپت</v-card-title
                  >
                </nuxt-link>
                <v-spacer />

                <v-card-text class="body-2">
                  <v-row align="center" no-gutters class="mx-0 mb-1">
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
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله
                </v-card-text>

                <v-divider class="mx-4"></v-divider>
                <v-card-actions>
                  <div class="mr-2"></div>
                  <v-tooltip top color="c_1">
                    <template v-slot:activator="{ on, attrs }">
                      <div class="ml-2" v-bind="attrs" v-on="on">
                        <v-icon color="c_1">{{ icon.AccountMultiple }}</v-icon>
                        <span class="body-2">45</span>
                      </div>
                    </template>
                    <span class="caption">تعداد شرکت کنندگان</span>
                  </v-tooltip>
                  <v-spacer />
                  <v-tooltip top color="c_1">
                    <template v-slot:activator="{ on, attrs }">
                      <div class="ml-2" v-bind="attrs" v-on="on">
                        <span class="caption">25:11:17</span>
                        <v-icon color="c_1">{{
                          icon.ClockTimeFourOutline
                        }}</v-icon>
                      </div>
                    </template>
                    <span class="caption">مدت زمان آموزش</span>
                  </v-tooltip>
                </v-card-actions>
              </div>
            </v-card>
          </v-hover>
        </template>
      </section>
    </div>
    <div class="d-flex">
      <v-responsive
        class="mx-auto"
        :max-width="$vuetify.breakpoint.mdAndUp ? '500' : '100%'">
        <v-pagination
          v-model="pagination"
          class="my-4"
          color="c_1"
          :length="15"
          :prev-icon="icon.ChevronLeft"
          :next-icon="icon.ChevronRight"
        />
      </v-responsive>
    </div>
    <v-card class="mb-8">
      <v-card-title>موارد مرتبط</v-card-title>
      <section>
        <v-card class="py-2 px-3" elevation="0">
          <v-row no-gutters>
            <v-col cols="12" sm="4" class="flex-grow-0">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>
            </v-col>

            <v-col class="p-0 post-card-body">
              <v-card-title class="title py-2">
                آموزش جاوااسکریپت
              </v-card-title>
              <v-card-text class="post-card-body">
                <v-row class="m-0 mt-1">
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

                <div class="mt-auto body-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله
                </div>
                <v-divider class="my-2"></v-divider>
                <v-card-actions dir="ltr" class="p-0">
                  <v-btn
                    elevation="1"
                    router
                    to="/course/css"
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
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
        <v-card class="py-2 px-3" elevation="0">
          <v-row no-gutters>
            <v-col cols="12" sm="4" class="flex-grow-0">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>
            </v-col>

            <v-col class="p-0 post-card-body">
              <v-card-title class="title py-2">
                آموزش جاوااسکریپت
              </v-card-title>
              <v-card-text class="post-card-body">
                <v-row class="m-0 mt-1">
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

                <div class="mt-auto body-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله
                </div>
                <v-divider class="my-2"></v-divider>
                <v-card-actions dir="ltr" class="p-0">
                  <v-btn
                    elevation="1"
                    router
                    to="/course/java"
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
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </section>
    </v-card>
  </div>
</template>

<script>
import icon from "assets/icon";
export default {
  data: () => ({
    icon: icon,
    True: true,
    pagination:5,
    arrangementItems: 0,
    showShareBox: false,
        comments: [
      {
        "user": "رضا رمضانی",
        "profile": "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        "rating": "2",
        "date": "1400/03/15 - 09:16",
        "text": "بصورت قطعی نمیشه گفت تو چند قسمت تموم میشه، اگه بخوایم بطور تقریبی بگیم تقریبا تو 20 قسمت تموم میشه",
        "replys": [
          {
            "user": "علی",
            "profile": "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
            "rating": "2",
            "date": "1400/03/15 - 09:16",
            "text": "بصورت قطعی نمیشه گفت تو چند قسمت تموم میشه، اگه بخوایم بطور تقریبی بگیم تقریبا تو 20 قسمت تموم میشه",
            "replys": [
              {
                "user": "علی",
                "profile": "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
                "rating": "2",
                "date": "1400/03/15 - 09:16",
                "text": "بصورت قطعی نمیشه گفت تو چند قسمت تموم میشه، اگه بخوایم بطور تقریبی بگیم تقریبا تو 20 قسمت تموم میشه",
                "replys": [
                  {
                    "user": "علی",
                    "profile": "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
                    "rating": "2",
                    "date": "1400/03/15 - 09:16",
                    "text": "بصورت قطعی نمیشه گفت تو چند قسمت تموم میشه، اگه بخوایم بطور تقریبی بگیم تقریبا تو 20 قسمت تموم میشه"
                  }
                ]
              }
            ]
          },
          {
            "user": "مهدی",
            "profile": "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
            "rating": "2",
            "date": "1400/03/15 - 09:16",
            "text": "بصورت قطعی نمیشه گفت تو چند قسمت تموم میشه، اگه بخوایم بطور تقریبی بگیم تقریبا تو 20 قسمت تموم میشه"
          }
        ]
      },
      {
        "user": "مهرداد",
        "profile": "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        "rating": "2",
        "date": "1400/03/15 - 09:16",
        "text": "بصورت قطعی نمیشه گفت تو چند قسمت تموم میشه، اگه بخوایم بطور تقریبی بگیم تقریبا تو 20 قسمت تموم میشه"
      },
      {
        "user": "مهرداد",
        "profile": "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        "rating": "2",
        "date": "1400/03/15 - 09:16",
        "text": "بصورت قطعی نمیشه گفت تو چند قسمت تموم میشه، اگه بخوایم بطور تقریبی بگیم تقریبا تو 20 قسمت تموم میشه"
      }
    ],
    items: [
      {
        "text": "صفحه اصلی",
        "disabled": false,
        "href": "/"
      },
      {
        "text": "دوره های آموزشی",
        "disabled": false,
        "href": "/course"
      },
      {
        "text": "آموزش regex در جاوا اسکریپت و php",
        "disabled": true,
        "href": "breadcrumbs_link_2"
      }
    ],
  }),
  head() {
    return {
      title: this.$route.params.course,
    };
  },
  methods: {
    copyPageLink() {
      let inputDump = document.createElement("input");
      document.body.appendChild(inputDump);
      inputDump.value = window.location.href;
      inputDump.select();
      document.execCommand("copy");
      document.body.removeChild(inputDump);
      this.snackbar = {
        status: true,
        text: "لینک کپی شد!",
      };
    },
  },
  computed: {
    isDark() {
      return this.$vuetify.theme.dark;
    },
  },
  // async asyncData({ $axios, error }) {
  //   try {
  //     let { data } = await $axios.get("/learning");
  //     return {
  //       items: data.items,
  //       comments: data.comments,
  //     };
  //   } catch (e) {
  //     error({
  //       statusCode: 503,
  //       message: "reza",
  //     });
  //   }
  // },
};
</script>

<style lang="scss">
.recent-posts {
  .v-list-item__title {
    word-break: break-word !important;
    white-space: break-spaces !important;
    line-height: 19px !important;
  }
}
</style>