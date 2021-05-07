<template>
  <div>
    <v-img
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      lazy-src="https://picsum.photos/id/11/100/60"
      max-height="460"
      class="mb-8 rounded-lg"
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
    <v-card class="single-main-content py-md-3 px-md-3 mb-8">
      <v-card-title>{{ $route.params.category }}</v-card-title>
      <v-card-text>
        Regex مخفف Regular Expression بوده و به معنی عبارات با قاعده است. عبارات
        با قاعده برای رشته های متنی مورد استفاده قرار میگیرد؛ جستجو در رشته های
        متنی، جابجایی در رشته های متنی و واکشی عبارتی خاص در یک رشته متنی.
      </v-card-text>
      <v-card-text>
        شاید شما بگید توابع آماده مختلفی مثل تابع search یا indexof و … خیلی
        توابع دیگه ای برای جستجو و واکشی متن وجود دارد، دیگه چه نیازی به regex
        داریم؟
      </v-card-text>
      <v-card-text>
        توابع آماده مثل search و indexOf یا هر تابع آماده دیگه ای محدود هستند و
        برنامه نویس هیچ دخالتی در الگوی جستجو ندارد.
      </v-card-text>
      <v-card-title> دوره اموزش کامل regex </v-card-title>
      <v-card-text>
        به عنوان مثال شما نمی توانید با تابع search شماره تلفنی را داخل رشته
        پیدا کنید که مثلا با 0990 شروع شده باشد.
      </v-card-text>
      <v-card-text>
        شما نمی توانید با هیچ کدام از توابع آماده مقداری را داخل یک رشته جستجو
        کنید که 11 رقمی بوده و حتما با 98 شروع شود.
      </v-card-text>
      <v-card-text>
        اینجاست که عبارات با قاعده به کمک شما میاد. عبارات با قاعده به شما کمک
        میکنه متن مورد نظر خودتون رو با الگوی دلخواه خودتون داخل یک رشته متنی
        مثل ورودی های کاربر جستجو کنید.
      </v-card-text>
      <v-card-text>
        به عنوان مثال یک اینپوت شماره تلفن دارید و میخواهید کاربر شماره تلفن خود
        را داخل این اینپوت وارد کند. ممکن است کاربری شماره تلفن خود را با 09
        وارد کند، ممکن است کاربر دیگری شماره تلفن خود را با 98+ وارد کند یا
        کاربری با 9 وارد کند.
      </v-card-text>
      <v-card-text>
        برای همچین مواقعی حتی نمیتونین از length استفاده کنید؛ چون اگر با 9 شروع
        کند طول شماره 10 کاراکتر میشود، اگر با 09 شروع کند طول شماره 11 کاراکتر
        شده و اگر با 98+ شروع کند طول شماره 12 کاراکتر می شود! آیا روشی سراغ
        دارید که در همچین مواقعی درست یا غلط بودن شماره تلفن کاربر رو تشخیص دهد؟
        اینجاست که عبارات با قاعده به شما کمک می کند.
      </v-card-text>
      <v-card-text>
        ممکن است در اولین بار که با RegEx روبرو بشوید سینتکس آن برای شما پیچیده
        باشد. اما وقتی شروع به یادگیری آن می کنید متوجه می شوید که چقدر راحت و
        آسان و جذاب است.
      </v-card-text>
      <v-card-text>
        شما به کمک عبارت با قاعده می توانید یک پترن(الگو) تعریف کنید و ورودی های
        کاربر را با پترن نوشته شده بررسی کنید. اگر ورودی کاربر با پترن شما
        مطابقت داشته باشد روند اصلی برنامه ادامه پیدا کرده و در صورت مغایرت
        ورودی کاربر با پترن نوشته شده، پیغام خطا به کاربر نمایش داده شود.
      </v-card-text>
      <v-card-text>
        این از کل مفهوم و کاربرد regex یا همان عبارات با قاعده. regex در اکثر
        زبان های برنامه نویسی مورد استفاده قرار میگیرد. بریم برای ادامه توضیحات.
      </v-card-text>
    </v-card>
    <v-card class="mb-8 px-1 py-1 py-md-3 px-md-3">
      <v-list>
        <v-list-group
          no-action
          color="c_1"
          v-model="True"
          :prepend-icon="icon.FolderZipOutline"
          :append-icon="icon.ChevronDown"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>دانلود جلسات آموزش regex</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item class="downlod-card-item" v-for="i in 15" :key="i">
            <v-icon class="ml-3" large color="c_1">{{
              icon.SchoolOutline
            }}</v-icon>
            <v-list-item-title>1. معرفی دوره آموزش regex</v-list-item-title>
            <v-tooltip top color="c_1">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>{{ icon.CloudDownloadOutline }}</v-icon>
                </v-btn>
              </template>
              <span>دانلود</span>
            </v-tooltip>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>

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
              :value="60"
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
              :value="60"
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
              :value="60"
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
              :value="60"
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
              :value="60"
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
            <v-card-title class="title">دیدگاه خود را بنویسید</v-card-title>
            <v-card-text class="body-2">
              نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری
              شده‌اند *</v-card-text
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
  </div>
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

<style>
</style>