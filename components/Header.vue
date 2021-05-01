<template>
  <nav :class="{ lightTheme: !isDark }">
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.smAndDown"
      v-model="drawer"
      fixed
      right
      temporary
      style="width: calc(100% - 100px)"
    >
      <v-card :color="isDark ? null : 'c_1'">
        <v-card-actions>
          <nuxt-link to="/">
            <v-card-title
              primary-title
              class="mb-8 mt mr-2 logo"
              style="padding: 35px"
            ></v-card-title>
          </nuxt-link>
        </v-card-actions>
        <v-divider class="mx-2" />
        <div :style="{ backgroundColor: isDark ? '' : 'rgb(255 240 226)' }">
          <v-text-field
            ref="searchFild"
            append-icon=""
            placeholder="دنبال چی هستی؟"
            class="py-2"
            autocomplete="off"
            autocapitalize="off"
            type="search"
            :prepend-inner-icon="icon.Magnify"
            @click:prepend-inner="searching"
            v-model="searchText"
            @keydown.enter="searching"
            clearable
            hide-details
            rounded
            cache-items
            hide-selected
            no-data-text="نتیجه ای یافت نشد."
            elevation="0"
            :color="isDark ? 'c_1' : '#fff'"
          ></v-text-field>
        </div>
      </v-card>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
        </v-list-item-group>

        <v-list-group
          color="c_1"
          v-for="el in nav.items"
          :key="el.title"
          :prepend-icon="icon.SchoolOutline"
          :append-icon="icon.ChevronDown"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ el.title }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in el.items"
            :key="child.title"
            router
            :to="child.url"
          >
            <v-list-item-content>
              <v-list-item-title>{{ child.item }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>

      <v-card
        :color="isDark ? null : 'c_1'"
        class="d-flex justify-center"
        style="
          position: absolute;
          bottom: 0;
          right: 0;
          left: 0;
          padding: 6px 20px;
        "
      >
        <a
          v-for="(item, index) in nav.socialNetwork"
          :key="index"
          :href="item.link"
          tag="a"
        >
          <v-btn icon color="#fff">
            <v-icon>{{ icon[item.icon] }}</v-icon>
          </v-btn>
        </a>
      </v-card>
    </v-navigation-drawer>

    <v-app-bar fixed app hide-on-scroll :color="isDark ? null : 'c_1'">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
        ><v-icon>{{ icon.Menu }}</v-icon></v-app-bar-nav-icon
      >
      <nuxt-link to="/" class="logo">
        <v-toolbar-title />
      </nuxt-link>
      <v-spacer class="hidden-md-and-up" />
      <v-btn icon fab v-if="$vuetify.breakpoint.smAndDown" @click="openSearch">
        <v-icon>{{ icon.Magnify }}</v-icon>
      </v-btn>
      <v-toolbar
        elevation="0"
        v-if="$vuetify.breakpoint.mdAndUp"
        :color="isDark ? null : 'c_1'"
      >
        <v-toolbar-items>
          <v-menu
            transition="slide-y-transition"
            bottom
            left
            open-on-hover
            offset-y
            v-for="el in nav.items"
            :key="el.title"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn elevation="0" v-bind="attrs" v-on="on" router :to="el.url">
                <span>{{ el.title }}</span>
                <v-icon v-if="el.items">{{ icon.ChevronDown }}</v-icon>
              </v-btn>
            </template>
            <v-list v-if="el.items">
              <v-list-item-group>
                <v-list-item
                  v-for="item in el.items"
                  :key="item.item"
                  router
                  :to="item.url"
                >
                  <v-list-item-title class="body-2">{{
                    item.item
                  }}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </v-toolbar-items>
        <v-spacer />

        <v-responsive max-width="310" v-if="$vuetify.breakpoint.lgAndUp">
          <v-autocomplete
            :loading="true"
            append-icon=""
            placeholder="search . . ."
            clearable
            autocomplete="off"
            autocapitalize="off"
            type="search"
            :prepend-inner-icon="icon.Magnify"
            @click:prepend-inner="searching"
            @keydown.enter="searching"
            v-model="searchText"
            dense
            hide-details
            rounded
            solo
            color="c_1"
            cache-items
            hide-selected
            no-data-text="نتیجه ای یافت نشد."
          ></v-autocomplete>
        </v-responsive>
      </v-toolbar>

      <v-tooltip bottom :disabled="$vuetify.breakpoint.mdAndDown">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon fab @click="changeTheme" v-bind="attrs" v-on="on">
            <v-icon>{{
              $vuetify.theme.dark ? icon.Brightness6 : icon.WeatherNight
            }}</v-icon>
          </v-btn>
        </template>
        <span>{{ $vuetify.theme.dark ? "تم روشن" : "حالت شب" }}</span>
      </v-tooltip>

      <v-tooltip bottom :disabled="$vuetify.breakpoint.mdAndDown">
        <template v-slot:activator="{ on, attrs }">
          <v-badge
            overlap
            left
            offset-x="17"
            transition="slide-x-transition"
            offset-y="16"
            dot
            :value="orders"
            :color="isDark ? 'c_1' : '#fff'"
          >
            <v-btn
              @click="openCart"
              icon
              fab
              v-bind="attrs"
              v-on="on"
              class="ml-1"
            >
              <v-icon>{{ icon.Basket }}</v-icon>
            </v-btn>
          </v-badge>
        </template>
        <span>سبد خرید</span>
      </v-tooltip>

      <v-divider vertical inset></v-divider>
      <v-menu
        transition="slide-y-transition"
        bottom
        left
        open-on-hover
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            :color="isDark ? 'c_1' : '#fff'"
            class="mr-2"
            elevation="0"
            v-bind="attrs"
            v-on="on"
            v-if="$auth.loggedIn"
            router
            to="/account"
          >
            <v-icon>{{ icon.Account }}</v-icon>
            <span>پروفایل</span>
          </v-btn>

          <v-btn
            :color="isDark ? 'c_1' : '#fff'"
            class="mr-2"
            icon
            elevation="0"
            v-bind="attrs"
            v-on="on"
            v-if="!$auth.loggedIn"
          >
            <v-icon>{{ icon.Account }}</v-icon>
          </v-btn>
        </template>
        <v-list width="180" v-if="!$auth.loggedIn">
          <v-list-item-group>
            <nuxt-link to="/user/login">
              <v-list-item>
                <v-icon color="c_1" class="ml-1">{{
                  icon.LoginVariant
                }}</v-icon>
                <v-list-item-title>ورود</v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <v-divider class="mx-2" />
            <nuxt-link to="/user/signup">
              <v-list-item>
                <v-icon color="c_1" class="ml-1">{{
                  icon.ClipboardCheck
                }}</v-icon>
                <v-list-item-title>ثبت نام</v-list-item-title>
              </v-list-item>
            </nuxt-link>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-app-bar>
    <OrderCard
      :option="isActiveOrderCard"
      @closed="isActiveOrderCard = false"
    />
    <Snackbars :options="Snackbars" />
  </nav>
</template>

<script>
import {
  mdiTelegram,
  mdiMenu,
  mdiAccount,
  mdiBasket,
  mdiClipboardCheck,
  mdiLoginVariant,
  mdiBrightness6,
  mdiWeatherNight,
  mdiMagnify,
  mdiChevronDown,
  mdiSchoolOutline,
} from "@mdi/js";

const icon = {
  Account: mdiAccount,
  ClipboardCheck: mdiClipboardCheck,
  LoginVariant: mdiLoginVariant,
  Brightness6: mdiBrightness6,
  WeatherNight: mdiWeatherNight,
  Magnify: mdiMagnify,
  ChevronDown: mdiChevronDown,
  SchoolOutline: mdiSchoolOutline,
  Basket: mdiBasket,
  Menu: mdiMenu,
  Telegram: mdiTelegram,
};

export default {
  computed: {
    isDark() {
      return this.$vuetify.theme.dark;
    },
    hasLogin() {
      return this.$auth.loggedIn;
    },
  },
  data: () => ({
    icon: icon,
    drawer: false,
    group: null,
    active: null,
    orders: 2,
    isActiveOrderCard: false,
    Snackbars: {},
    searchText: "",
    nav: {
      socialNetwork: [
        {
          link: "#",
          icon: "Telegram",
        },
        {
          link: "#",
          icon: "Telegram",
        },
        {
          link: "#",
          icon: "Telegram",
        },
        {
          link: "#",
          icon: "Telegram",
        },
      ],
      items: [
        {
          title: "طراحی وب",
          items: [
            {
              item: "html",
              url: "/category/html",
            },
            {
              item: "css",
              url: "/category/css",
            },
            {
              item: "جاوااسکریپت",
              url: "/category/javascript",
            },
            {
              item: "بوت استرپ",
              url: "/category/bootstrap",
            },
            {
              item: "وردپرس",
              url: "/category/wordpress",
            },
          ],
        },
        {
          title: "برنامه نویسی وب",
          items: [
            {
              item: "php",
              url: "/category/php",
            },
            {
              item: "لاراول",
              url: "/category/laravel",
            },
          ],
        },
        {
          title: "برنامه نویسی تحت ویندوز",
          items: [
            {
              item: "سی شارپ",
              url: "/category/c-sharp",
            },
          ],
        },
        {
          title: "بلاگ",
          items: [
            {
              item: "سئو",
              url: "/category/seo",
            },
          ],
        },
      ],
    },
  }),
  watch: {
    group() {
      this.drawer = false;
    },
    drawer() {
      this.searchText = "";
    },
  },
  methods: {
    searching() {
      alert(1);
    },
    openSearch() {
      this.drawer = true;
      setTimeout((e) => e.$refs.searchFild.focus(), 400, this);
    },
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.darkTheme = this.$vuetify.theme.dark ? true : "";
    },
    openCart() {
      if (this.orders === 0) {
        this.Snackbars = {
          text: "سبد خرید شما خالی هست!",
          delay: 3000,
        };
      } else if (this.orders > 0) {
        this.isActiveOrderCard = true;
      }
    },
  },
  mounted() {
    if (localStorage.darkTheme) {
      this.$vuetify.theme.dark = true;
    }
  },
};
</script>


<style lang="scss">
.logo {
  -webkit-mask-image: url(static/logo.png);
  width: 125px;
  background-color: $c_1;
  height: 100%;
  -webkit-mask-size: 100%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
}
@media (max-width: 768px) {
  .logo {
    width: 100px;
  }
}
.lightTheme {
  .v-toolbar__content button {
    color: #fff !important;
    text-shadow: 1px 1px 2px #0000007c !important;
  }
  .v-input__slot button {
    color: $c_1 !important;
  }
  .logo {
    background-color: #ffffff;
  }
}
.v-navigation-drawer
  .v-list-item__icon.v-list-group__header__prepend-icon
  > .v-icon.notranslate.mdi {
  color: $c_1 !important;
}
.v-navigation-drawer .v-list-item__icon.v-list-group__header__prepend-icon {
  margin-left: 8px !important;
}
</style>
