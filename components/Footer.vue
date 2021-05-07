<template>
  <v-footer padless class="d-flex justify-center">
    <v-col cols="12" md="12" lg="10">
      <v-row :class="{ footer: $vuetify.breakpoint.smAndDown }">
        <v-col cols="12" md="4" class="p-0">
          <v-card elevation="0" class="bg-0">
            <v-subheader class="footer-title" :inset="inset" :class="{ 'footer-title-light': !isDark }">
              آخرین مطالب
            </v-subheader>

            <v-list class="bg-0">
              <template v-for="(item, index) in items">
                <v-list-item
                  v-if="item.action"
                  :key="item.title"
                  router
                  to="/e"
                >
                  <v-list-item-action>
                    <v-icon color="c_1">{{ icon.CalendarClock }}</v-icon>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider
                  v-else-if="item.divider"
                  :key="index"
                  :inset="inset"
                ></v-divider>
              </template>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="p-0">
          <v-card elevation="0" class="bg-0">
            <v-subheader
              class="footer-title"
              :class="{ 'footer-title-light': !isDark }"
              :inset="inset"
            >
              آخرین مطالب
            </v-subheader>

            <v-list class="bg-0">
              <template v-for="(item, index) in items">
                <v-list-item
                  v-if="item.action"
                  :key="item.title"
                  router
                  to="/e"
                >
                  <v-list-item-action>
                    <v-icon color="c_1">{{ icon.CalendarClock }}</v-icon>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider
                  v-else-if="item.divider"
                  :key="index"
                  :inset="inset"
                ></v-divider>
              </template>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="p-0">
          <v-card elevation="0" class="bg-0">
            <v-subheader :class="{ 'footer-title-light': !isDark }" class="footer-title" :inset="inset">
              ما را در شبکه های اجتمائی دنبال کنید
            </v-subheader>

            <v-list class="bg-0">
              <template v-for="(item, index) in items">
                <v-list-item
                  v-if="item.action"
                  :key="item.title"
                  router
                  to="/e"
                >
                  <v-list-item-action>
                    <v-icon color="c_1">{{ icon.CalendarClock }}</v-icon>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider
                  v-else-if="item.divider"
                  :key="index"
                  :inset="inset"
                ></v-divider>
              </template>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-col>

    <v-card style="width: 100%" class="bg-0">
      <v-divider></v-divider>
      <v-card-text
        style="text-align: center; font-size: 13px; background-color: #1d1d1d"
        :style="{ color: isDark ? '' : '#FFF' }"
      >
        تمام حقوق مادی و معنوی سایت, متعلق به
        <nuxt-link to="/" style="color: #f57f17; font-size: 15px"
          >یوزرکد</nuxt-link
        >
        هست. هر گونه کپی برداری از مطالب شرعا حرام بوده و پیگرد قانونی دارد.
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import icon from 'assets/icon'
export default {
  computed: {
    isDark() {
      return this.$vuetify.theme.dark;
    },
  },
  data: () => ({
    icon: icon,
    inset: true,
    items: [
      {
        action: "mdi-label",
        title: "نکات کلیدی برای شروع برنامه نویسی",
      },
      {
        action: "mdi-label",
        title: "قالب صحیفه بهترین پوسته خبری تم فارست",
      },
      {
        action: "mdi-label",
        title: "ایده های 2021 برای راه اندازی کسب و کار پول ساز",
      },
    ],
  }),
};
</script>


<style lang="scss">

.v-list-item .v-list-item__action {
  margin-left: 8px !important;
}
.footer {
  & > div {
    margin-bottom: 25px;
  }
  &:first-child {
    margin-top: 15px;
  }
}
.v-list-item__title {
  font-size: 14px !important;
}
.footer-title {
  position: relative;
  display: inline-flex;
  font-size: 15px;
  &::before {
    content: " ";
    width: 100%;
    height: 1px;
    background-color: $c_1;
    position: absolute;
    bottom: 0;
    right: 15px;
  }
  &::after {
    content: " ";
    width: 50px;
    height: 1px;
    background: linear-gradient(270deg, $c_1 30%, rgba(0,0,0,0) 100%);
    background: -moz-linear-gradient(270deg, $c_1 30%, rgba(0,0,0,0) 100%);
    background: -webkit-gradient(linear, 270deg, color-stop(50%, $c_1), color-stop(100%, rgba(0,0,0,0)));
    background: -webkit-linear-gradient(270deg, $c_1 30%, rgba(0,0,0,0) 100%);
    background: -o-linear-gradient(270deg, $c_1 30%, rgba(0,0,0,0) 100%);
    background: -ms-linear-gradient(270deg, $c_1 30%, rgba(0,0,0,0) 100%);
    position: absolute;
    bottom: 0;
    right: 100%;
  }
}
.footer-title-light {
  color: #000 !important;
  &::before, &::after{
      height: 2px;
  }
}
</style>
