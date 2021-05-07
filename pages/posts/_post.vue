<template>
  <v-main>
    <v-container grid-list-md>
      <div>
        <h1 class="headline mb-1 mt-7">10 تا از بهترین کد ادیتور های آنلاین</h1>
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
          <v-card class="mb-8">
            <v-card-title
              class="d-flex flex-column flex-md-row align-start justify-space-between pl-0 pl-md-16"
            >
              <div class="d-flex align-center my-1 my-md-0">
                <v-icon color="c_1">{{ icon.CalendarMonthOutline }}</v-icon>
                <span class="body-2 mt-1 mr-1">20/10/1399</span>
              </div>
              <div class="d-flex align-center my-1 my-md-0">
                <v-icon color="c_1">{{ icon.AccountOutline }}</v-icon>
                <span class="body-2 mt-1 mr-1"
                  >ارسال شده توسط محمد حسین نصرتی</span
                >
              </div>
              <div class="d-flex align-center my-1 my-md-0">
                <v-icon color="c_1">{{ icon.FolderOpenOutline }}</v-icon>
                <span class="body-2 mt-1 mr-1">رپورتاژ آگهی</span>
              </div>
            </v-card-title>
            <v-img
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
              lazy-src="https://picsum.photos/id/11/100/60"
              max-height="460"
              class="rounded-lg"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
          <v-card class="single-main-content py-md-3 px-md-3 mb-8">
            <v-card-title>Regex چیست؟</v-card-title>
            <v-card-text>
              Regex مخفف Regular Expression بوده و به معنی عبارات با قاعده است.
              عبارات با قاعده برای رشته های متنی مورد استفاده قرار میگیرد؛ جستجو
              در رشته های متنی، جابجایی در رشته های متنی و واکشی عبارتی خاص در
              یک رشته متنی.
            </v-card-text>
            <v-card-text>
              شاید شما بگید توابع آماده مختلفی مثل تابع search یا indexof و …
              خیلی توابع دیگه ای برای جستجو و واکشی متن وجود دارد، دیگه چه نیازی
              به regex داریم؟
            </v-card-text>
            <v-card-text>
              توابع آماده مثل search و indexOf یا هر تابع آماده دیگه ای محدود
              هستند و برنامه نویس هیچ دخالتی در الگوی جستجو ندارد.
            </v-card-text>
            <v-card-title> دوره اموزش کامل regex </v-card-title>
            <v-card-text>
              به عنوان مثال شما نمی توانید با تابع search شماره تلفنی را داخل
              رشته پیدا کنید که مثلا با 0990 شروع شده باشد.
            </v-card-text>
            <v-card-text>
              شما نمی توانید با هیچ کدام از توابع آماده مقداری را داخل یک رشته
              جستجو کنید که 11 رقمی بوده و حتما با 98 شروع شود.
            </v-card-text>
            <div class="d-flex justify-center">
              <v-img
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                max-height="460"
                max-width="500"
                class="rounded-sm"
              />
            </div>
            <v-card-text>
              اینجاست که عبارات با قاعده به کمک شما میاد. عبارات با قاعده به شما
              کمک میکنه متن مورد نظر خودتون رو با الگوی دلخواه خودتون داخل یک
              رشته متنی مثل ورودی های کاربر جستجو کنید.
            </v-card-text>
            <v-card-text>
              به عنوان مثال یک اینپوت شماره تلفن دارید و میخواهید کاربر شماره
              تلفن خود را داخل این اینپوت وارد کند. ممکن است کاربری شماره تلفن
              خود را با 09 وارد کند، ممکن است کاربر دیگری شماره تلفن خود را با
              98+ وارد کند یا کاربری با 9 وارد کند.
            </v-card-text>
            <v-card-text>
              برای همچین مواقعی حتی نمیتونین از length استفاده کنید؛ چون اگر با
              9 شروع کند طول شماره 10 کاراکتر میشود، اگر با 09 شروع کند طول
              شماره 11 کاراکتر شده و اگر با 98+ شروع کند طول شماره 12 کاراکتر می
              شود! آیا روشی سراغ دارید که در همچین مواقعی درست یا غلط بودن شماره
              تلفن کاربر رو تشخیص دهد؟ اینجاست که عبارات با قاعده به شما کمک می
              کند.
            </v-card-text>
            <v-card-text>
              ممکن است در اولین بار که با RegEx روبرو بشوید سینتکس آن برای شما
              پیچیده باشد. اما وقتی شروع به یادگیری آن می کنید متوجه می شوید که
              چقدر راحت و آسان و جذاب است.
            </v-card-text>
            <v-card-text>
              شما به کمک عبارت با قاعده می توانید یک پترن(الگو) تعریف کنید و
              ورودی های کاربر را با پترن نوشته شده بررسی کنید. اگر ورودی کاربر
              با پترن شما مطابقت داشته باشد روند اصلی برنامه ادامه پیدا کرده و
              در صورت مغایرت ورودی کاربر با پترن نوشته شده، پیغام خطا به کاربر
              نمایش داده شود.
            </v-card-text>
            <v-card-text>
              این از کل مفهوم و کاربرد regex یا همان عبارات با قاعده. regex در
              اکثر زبان های برنامه نویسی مورد استفاده قرار میگیرد. بریم برای
              ادامه توضیحات.
            </v-card-text>
          </v-card>
          <v-card class="mb-8">
            <div class="d-flex justify-space-between">
              <v-btn text router to="/" class="pt-2 pb-1 py-2">
                <v-icon>{{ icon.ArrowRight }}</v-icon>
                <span>بعدی</span>
              </v-btn>
              <v-btn text router to="/" class="pt-2 pb-1 py-2">
                <span>قبلی</span>
                <v-icon>{{ icon.ArrowLeft }}</v-icon>
              </v-btn>
            </div>
            <div class="d-flex justify-space-between">
              <nuxt-link to="/" class="v-card__subtitle caption pt-1">
                نکات کلیدی برای شروع برنامه نویسی
              </nuxt-link>
              <nuxt-link to="/" class="v-card__subtitle caption pt-1">
                ایده های 2021 برای راه اندازی کسب و کار پول ساز
              </nuxt-link>
            </div>
          </v-card>
          <v-card class="mb-8" id="comments">
            <v-card-text>
              <v-icon class="ml-2">{{ icon.ForumOutline }}</v-icon>
              <span class="subtitle-1">نظرات</span>
            </v-card-text>
            <v-divider />
            <v-row class="m-0">
              <v-col cols="12" md="4" class="item-center">
                <div class="item-center py-3">
                  <span class="display-3">4.4</span>
                  <v-rating
                    :value="3.5"
                    color="#ffe700"
                    background-color="warning lighten-1"
                    dense
                    half-increments
                    readonly
                    size="20"
                    :empty-icon="icon.StarOutline"
                    :full-icon="icon.Star"
                    :half-icon="icon.StarHalfFull"
                  ></v-rating>
                  <span class="grey--text body-2">14 نقد و بررسی</span>
                </div>
              </v-col>
              <v-col cols="12" md="8">
                <div class="progress-rating">
                  <span class="body-1 ml-4">5 ستاره</span>
                  <v-progress-linear
                    color="green accent-4"
                    height="10"
                    value="60"
                    striped
                    class="rounded-lg"
                  ></v-progress-linear>
                  <span class="body-1 mr-2">50</span>
                </div>
                <div class="progress-rating">
                  <span class="body-1 ml-4">4 ستاره</span>
                  <v-progress-linear
                    color="green darken-1"
                    height="10"
                    value="60"
                    striped
                    class="rounded-lg"
                  ></v-progress-linear>
                  <span class="body-1 mr-2">50</span>
                </div>
                <div class="progress-rating">
                  <span class="body-1 ml-4">3 ستاره</span>
                  <v-progress-linear
                    color="lime lighten-1"
                    height="10"
                    value="60"
                    striped
                    class="rounded-lg"
                  ></v-progress-linear>
                  <span class="body-1 mr-2">50</span>
                </div>
                <div class="progress-rating">
                  <span class="body-1 ml-4">2 ستاره</span>
                  <v-progress-linear
                    color="orange darken-4"
                    height="10"
                    value="60"
                    striped
                    class="rounded-lg"
                  ></v-progress-linear>
                  <span class="body-1 mr-2">50</span>
                </div>
                <div class="progress-rating">
                  <span class="body-1 ml-4">1 ستاره</span>
                  <v-progress-linear
                    color="deep-orange accent-3"
                    height="10"
                    value="60"
                    striped
                    class="rounded-lg"
                  ></v-progress-linear>
                  <span class="body-1 mr-2">50</span>
                </div>
              </v-col>
            </v-row>
            <v-divider class="my-2" />
            <div>
              <v-card class="px-2 px-sm-4" elevation="0">
                <v-form ref="newComment" v-model="newComment.form">
                  <v-card-title class="title"
                    >دیدگاه خود را بنویسید</v-card-title
                  >
                  <v-card-text class="body-2">
                    نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز
                    علامت‌گذاری شده‌اند *</v-card-text
                  >
                  <v-select
                    :items="['عالی', 'خوب', 'متوسط', 'بد', 'خیلی بد']"
                    v-model="newComment.values.rating"
                    label="امتیاز بدهید"
                    solo
                    item-color="c_1"
                    class="mt-2"
                  ></v-select>
                  <v-textarea
                    filled
                    label="دیدگاه شما *"
                    :rules="newComment.rules.text"
                    v-model="newComment.values.text"
                    :counter="1000"
                    color="c_1"
                  ></v-textarea>
                  <v-row class="m-0">
                    <v-col cols="12" sm="6">
                      <v-text-field
                        color="c_1"
                        v-model="newComment.values.name"
                        :rules="newComment.rules.name"
                        label="نام *"
                      ></v-text-field
                    ></v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        color="c_1"
                        v-model="newComment.values.email"
                        :rules="newComment.rules.email"
                        label="ایمیل *"
                      ></v-text-field
                    ></v-col>
                  </v-row>
                  <v-card-text>
                    <v-btn
                      :text="isDark"
                      @click="newCommentSubmit"
                      outlined
                      color="success"
                      ><v-icon class="ml-2" small>{{ icon.EmailSend }}</v-icon
                      >ثبت نظر
                    </v-btn>
                    <v-alert
                      border="left"
                      class="mt-3"
                      dense
                      small
                      outlined
                      text
                      dismissible
                      v-model="newComment.success"
                      type="success"
                      :close-icon="icon.Close"
                      :icon="icon.Fire"
                      >نظر شما با موفقیت ثبت شد.</v-alert
                    >
                  </v-card-text>
                </v-form>
              </v-card>
            </div>
            <v-divider></v-divider>
            <v-card-title class="title mt-15"
              >9 دیدگاه برای آموزش regex در جاوا اسکریپت و php</v-card-title
            >
            <div class="comments-container" :class="{ light: !isDark }">
              <Comments :comment="comments" />
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="aside-main">
          <v-card class="mb-8">
            <v-card-title class="font-weight-medium">
              <v-icon color="c_1" class="ml-1">{{ icon.ShapeOutline }}</v-icon>
              <span>دسته بندی ها</span>
            </v-card-title>
            <v-divider class="mx-3" />

            <v-list dense>
              <v-list-item v-for="i in 12" :key="i" router :to="`/posts/${i}`">
                <v-list-item-content>
                  <v-list-item-title class="body-2 font-weight-light"
                    >لورم ایپسوم متن ساختگی با</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
          <v-card class="sccommentnumber mb-8">
            <v-card-title>
              <v-spacer></v-spacer>
              <span>
                <v-icon small>{{ icon.ForumOutline }}</v-icon>
                <a href="#comments" class="body-2">78 دیدگاه</a>
              </span>
              <v-divider vertical class="mx-5 c_1"></v-divider>
              <span>
                <a class="body-2">1554 بازدید</a>
                <v-icon small>{{ icon.Eye }}</v-icon>
              </span>
              <v-spacer></v-spacer>
            </v-card-title>
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

          <v-card class="mb-8">
            <v-card-title class="font-weight-medium">
              <v-icon color="c_1" class="ml-1">{{
                icon.ClockTimeFourOutline
              }}</v-icon>
              <span>نوشته های تازه</span>
            </v-card-title>
            <v-divider class="mx-3" />

            <v-list dense class="recent-posts">
              <v-list-item v-for="i in 15" :key="i" router :to="`/posts/${i}`">
                <v-list-item-content>
                  <v-list-item-title class="body-2 font-weight-light"
                    >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،و
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
          <v-card class="mb-8">
            <v-card-title class="font-weight-medium">
              <v-icon color="c_1" class="ml-1">{{
                icon.ClockTimeFourOutline
              }}</v-icon>
              <span>نوشته های تازه</span>
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
  head() {
    return {
      title: this.$route.params.post,
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
.white-space-normal {
  white-space: normal !important;
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
.recent-posts {
  .v-list-item__title {
    word-break: break-word !important;
    white-space: break-spaces !important;
    line-height: 19px !important;
  }
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