<template>
  <v-main>
    <v-container grid-list-md>
      <div>
        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon>{{ icon.ChevronLeft }}</v-icon>
          </template>
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item
              :href="item.href"
              :disabled="item.disabled"
              :class="{ breadcrumbsLink: !item.disabled }"
            >
              {{ item.text }}
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
      </div>

      <v-row class="section-container mt-10">
        <v-col cols="12" md="8" class="single-main">
          <nuxt-child />
        </v-col>
        <v-col cols="12" md="4" class="aside-main">
          <v-card class="mb-8">
            <v-card-title class="font-weight-medium">
              <v-icon color="c_1" class="ml-1">{{ icon.ShapeOutline }}</v-icon>
              <span>دسته بندی ها</span>
            </v-card-title>
            <v-divider class="mx-3" />
            <v-timeline dense align-top class="category-list pb-3">
              <nuxt-link :to="`/category/${i*i}`" v-for="i in 8" :key="i">
                <v-timeline-item
                  v-ripple
                  color="rgb(117 117 117)"
                  class="py-2 pointer"
                  small
                  >timelissne item</v-timeline-item>
              </nuxt-link>
            </v-timeline>
          </v-card>
          <v-card class="mb-8">
            <v-card-title class="font-weight-medium">
              <v-icon color="c_1" class="ml-1">{{
                icon.ClockTimeFourOutline
              }}</v-icon>
              <span>دوره ها</span>
            </v-card-title>
            <v-divider class="mx-3" />

            <v-list dense class="recent-course">
              <v-list-item
                class="my-3"
                v-for="i in 15"
                :key="i"
                router
                :to="`/posts/${i}`"
              >
                <div class="d-flex">
                  <v-img
                    height="70"
                    max-width="100"
                    class="rounded"
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                  ></v-img>
                  <div class="pr-2 py-1">
                    <v-list-item-title
                      class="body-1 white-space-normal font-weight-light"
                      >آموزش جاوااسکریپت</v-list-item-title
                    >
                    <v-list-item-subtitle
                      class="white-space-normal caption mt-2"
                    >
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    </v-list-item-subtitle>
                  </div>
                </div>
              </v-list-item>
            </v-list>
          </v-card>


          <v-card class="mb-8">
            <div class="share-page-box">
              <span>https://usercode.ir/course/learn</span>
              <v-btn icon text @click="copyPageLink">
                <v-icon>{{ icon.ContentCopy }}</v-icon>
              </v-btn>
            </div>
            <transition name="shareBox">
              <div
                ref="shareBox"
                class="shareBox d-flex justify-space-around align-center"
                v-if="showShareBox"
              >
                <v-btn icon text>
                  <v-icon>{{ icon.Facebook }}</v-icon>
                </v-btn>
                <v-btn icon text>
                  <v-icon>{{ icon.FacebookMessenger }}</v-icon>
                </v-btn>
                <v-btn icon text>
                  <v-icon>{{ icon.Twitter }}</v-icon>
                </v-btn>
                <v-btn icon text>
                  <v-icon>{{ icon.Instagram }}</v-icon>
                </v-btn>
                <v-btn icon text>
                  <v-icon>{{ icon.At }}</v-icon>
                </v-btn>
              </div>
            </transition>
            <v-btn block class="py-10" @click="showShareBox = !showShareBox">
              <v-icon large color="#FFF">{{ icon.ShareVariant }}</v-icon>
            </v-btn>
          </v-card>

          <v-card class="sidebar-widgets-wrapper mb-8">
            <v-subheader inset="inset"> صفحات مهم سایت </v-subheader>
            <v-list>
              <v-list-item v-for="i in 5" :key="i" router to="/">
                <v-list-item-action>
                  <v-icon color="c_1">{{ icon.Link }}</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>آموزش جاوا اسکریپت</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      <v-snackbar v-model="snackbar.status">
        {{ snackbar.text }}
        <template v-slot:action="{ attrs }">
          <v-btn
            color="c_1"
            text
            icon
            v-bind="attrs"
            @click="snackbar.status = false"
          >
            <v-icon color="c_1">{{ icon.InformationVariant }}</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </v-main>
</template>

<script>
import icon from 'assets/icon'
export default {
  data: () => ({
    icon: icon,
    True: true,
    showShareBox: false,
    snackbar: {
      text: "",
      status: false,
    },
    newComment: {
      form: null,
      success: false,
      values: {
        rating: "",
        text: "",
        name: "",
        email: "",
      },
      rules: {
        text: [(v) => !!v || "لطفا نظر خود را واردکنید."],
        name: [(v) => !!v || "نام خود را وارد کنید."],
        email: [
          (v) => !!v || "ایمیل خود را وارد کنید.",
          (v) =>
            /^[a-z0-9-]+@[a-z]{3,5}\.[a-z]{2,5}$/.test(v.toLowerCase()) ||
            "ایمیل خود را به درستی وارد کنید.",
        ],
      },
    },
  }),
  middleware: "test",
  head() {
    return {
      title: this.$route.params.course,
    };
  },
  methods: {
    test() {
      alert(2);
    },
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
    newCommentSubmit() {
      if (this.newComment.form && this.$refs.newComment.validate()) {
        alert(1);
        this.newComment.values = { rating: "", text: "", name: "", email: "" };
        this.newComment.success = true;
        this.$refs.newComment.resetValidation();
      }
    },
  },
  computed: {
    isDark() {
      return this.$vuetify.theme.dark;
    },
  },
  async asyncData({ $axios, error }) {
    try {
      let { data } = await $axios.get("/learning");
      return {
        items: data.items,
        comments: data.comments,
      };
    } catch (e) {
      error({
        statusCode: 503,
        message: "reza",
      });
    }
  },
};
</script>

<style lang="scss">
.pointer {
  cursor: pointer;
  user-select: none;
}

.category-list {
  .nuxt-link-active{
  .v-timeline-item{
    background-color: rgb(128 128 128 / 23%) !important;
  }
  .v-timeline-item__inner-dot{
    background-color: $c_1 !important;
  }
}
  .v-timeline-item {
    transition: all 0.4s ease-in-out;
    &:hover {
      background-color: rgb(128 128 128 / 23%);
    }
  }
}
.v-breadcrumbs__divider {
  padding: 0 !important;
}
.breadcrumbsLink {
  color: #1794ff !important;
  &:hover {
    color: #1274ca !important;
  }
}
.item-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.section-container {
  display: flex;
  flex-direction: row;
}
.share-page-box {
  position: relative;
  height: 45px;
  border-bottom: 1px solid #737373a8;
  background-color: #73737345;
  button {
    position: absolute;
    top: 4px;
    right: 6px;
  }
  & > span {
    position: absolute;
    top: 13px;
    left: 13px;
    font-size: 14px;
    opacity: 0.7;
    width: calc(100% - 60px);
    white-space: nowrap;
    overflow: hidden;
    text-align: end !important;
    direction: ltr !important;
    text-overflow: ellipsis;
  }
}
.course-info-box {
  padding: 15px;
  .price {
    border-left: 1px dotted rgba(139, 139, 139, 0.274);
    border-top: 1px dotted rgba(139, 139, 139, 0.274);
    border-right: 1px dotted rgba(139, 139, 139, 0.274);
    border-radius: 4px;
    margin-bottom: 15px;
    span {
      display: block;
      padding: 4px 10px;
      opacity: 0.8;
    }
    div {
      font-size: 24px;
      position: relative;
      text-align: center;
      del {
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate(-8px, 50%);
        font-size: 13px;
        opacity: 0.5;
      }
    }
  }
  ul {
    padding: 0;
    margin-top: 18px;
    li {
      list-style: none;
      font-size: 14px;
      padding: 12px 0;
      border-bottom: 1px solid #8282827d;
      &:last-child {
        border: none;
      }
      & span {
        cursor: help;
        transition: 0.3s;
        display: initial;
        opacity: 0.9;
      }
      & > span:nth-of-type(1) {
        margin-left: 5px;
        width: 22px;
      }
      &:hover {
        & > span:nth-of-type(1) {
          transform: scale(1.15);
        }
      }
    }
  }
}
.sidebar-widgets-wrapper {
  & > .v-list > .v-list-item:last-child {
    .v-list-item__content {
      border-bottom: none;
    }
  }
  .v-list-item__content {
    border-bottom: 1px solid #80808057;
  }
}
.sccommentnumber {
  span {
    transition: 0.15s;
  }
  span:hover {
    color: $c_1;
  }
}
.course-teacher {
  padding: 15px;
  .profile {
    height: 100px;
    display: flex;
    align-items: flex-start;
    picture {
      position: relative;
      width: 95px;
      height: 95px;
      display: inline-block;
      margin-left: 8px;
      img {
        width: 95px;
        height: 95px;
        border-radius: 29px 3px;
        position: relative;
        z-index: 1;
      }
      &::before {
        content: " ";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #80808087;
        border-radius: 29px 3px;
        transform: translate(-8px, 3px) rotate(-8deg);
      }
    }
  }
  .divider {
    display: flex;
    position: relative;
    margin: 0 5px;
    span:not(:empty) {
      position: relative;
      z-index: 1;
      margin: 0 auto;
      background-color: #1e1e1e;
      border: 1px solid #80808063;
      padding: 4px 14px;
      font-size: 13px;
      border-radius: 10px 2px;
      box-shadow: 1px 1px 0px 0px #80808063;
    }
    span:empty {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      transform: translate(0, -50%);
      height: 1px;
      background-color: #80808063;
    }
  }
}
.aside-main {
}
.single-main {
  display: flex;
  flex-direction: column;
}
.progress-rating {
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin: 12px 0;
}
.downlod-card-item {
  padding: 5px 50px 7px 5px !important;
  position: relative;
  &::before {
    content: " ";
    position: absolute;
    bottom: 0;
    left: 6px;
    width: calc(100% - 55px);
    background-color: #848484;
    opacity: 0.3;
    height: 1px;
  }
  &:last-child::before {
    display: none;
  }
}
.mt-auto {
  margin-top: auto;
}
.post-card-body {
  flex: 2;
  display: flex;
  flex-direction: column;
}
.flex-grow-0 {
  flex-grow: 0 !important;
}

.comment-bottem {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.comment-container {
  margin-right: 50px;
  padding: 25px 0 8px;
}
.comments-container {
  margin-right: -50px;
  & > div > .comment-container {
    position: relative;
  }
  & > div > .comment-container::before {
    content: " ";
    position: absolute;
    bottom: 0;
    right: 10px;
    width: calc(100% - 50px);
    height: 1px;
    background-color: #88888852;
  }
  & > div > .comment-container:last-child::before {
    display: none;
  }
}
.comment {
  display: flex;
  margin-bottom: 5px;
  .profile {
    padding: 18px 8px;
  }

  & + div > div {
    background-color: #ffffff0a;
    border-radius: 4px;
    padding-right: 8px;
  }
}

.comments-container.light .comment {
  & + div > div {
    background-color: #0000000a;
  }
}
.comments-container {
  .comment-body {
    color: #9e9e9e !important;
    caret-color: #9e9e9e !important;
  }
}
.comments-container.light {
  .comment-body {
    color: #585858 !important;
  }
}

@media (max-width: 1265px) {
  .container {
    max-width: 100%;
    width: 100%;
  }
}
@media (max-width: 1020px) {
  .downlod-card-item {
    padding: 5px !important;
  }
}

.shareBox {
  overflow: hidden;
  height: 44px;
  transition: 0.5s;
}
.shareBox-enter,
.shareBox-leave-to {
  opacity: 0;
  height: 0px;
}
.shareBox-enter-to,
.shareBox-leave {
  opacity: 1;
  height: 44px;
}
</style>