<template>
  <v-main>
    <v-responsive max-width="400" class="px-5 my-12 mx-auto">
      <v-card
        class="px-5 py-5 rounded"
        :color="isDark ? null : 'grey lighten-4'"
      >
        <v-card-title primary-title class="justify-center py-3">
          ایجاد حساب کاربری
        </v-card-title>
        <v-divider></v-divider>
        <v-alert
          dense
          color="red"
          dismissible
          v-model="error.status"
          close-text="Close Alert"
          class="mt-3 body-2"
          :close-icon="icon.Close"
          >{{ error.msg }}</v-alert
        >
        <v-form class="mt-3" ref="loginForm" v-model="valid" lazy-validation>
          <v-text-field
            v-model="user.username"
            :rules="rules.username"
            label="نام کاربری"
            color="c_1"
            counter
            required
          ></v-text-field>

          <v-text-field
            v-model="user.password"
            :rules="rules.password"
            label="رمز عبور"
            color="c_1"
            counter
            required
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? icon.Eye : icon.EyeOff"
            @click:append="showPassword = !showPassword"
          ></v-text-field>

          <v-text-field
            v-model="user.trypassword"
            :rules="[(v) => v === user.password || 'رمز عبور مطابقت ندارد.']"
            label="تکرار رمز عبور"
            color="c_1"
            counter
            required
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? icon.Eye : icon.EyeOff"
            @click:append="showPassword = !showPassword"
          ></v-text-field>

          <v-text-field
            v-model="user.email"
            :rules="rules.email"
            label="ایمیل"
            color="c_1"
            required
          ></v-text-field>

          <v-checkbox
            color="c_1"
            v-model="user.agreement"
            :rules="[ v => v || 'باید شرایط و قوانین را بپزیرید.']"
            label="با قوانین و شرایط موافق هستم."
            :off-icon="icon.CheckboxOff"
            :on-icon="icon.CheckboxOn"
          ></v-checkbox>

          <v-btn
            :disabled="!valid"
            :loading="loading"
            color="c_1"
            block
            @click="submit"
            >ثبت نام</v-btn
          >
        </v-form>
      </v-card>
    </v-responsive>
    <v-overlay :value="loading">
      <v-progress-circular
        color="c_1"
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </v-main>
</template>
<script>
import icon from 'assets/icon'
export default {
  data: () => ({
    icon:icon,
    user: {
      username: "",
      password: "",
      trypassword: "",
      email: "",
      agreement: false
    },
    rules: {
      username: [
        (v) => !!v || "نام کاربری را پر کنید",
        (v) =>
          /^[a-z0-9]+$/.test(v.toLowerCase()) ||
          "نام کاربری را به درستی وارد کنید",
      ],
      password: [
        (v) => !!v || "رمز عبور را وارد کنید.",
        (v) =>
          /^[a-z0-9]{6,10}$/.test(v.toLowerCase()) ||
          "رمز عبور را به درستی وارد کنید.",
      ],
      email:[
        v => !!v || "ایمیل خود را وارد کنید",
        v => /^[a-z0-9-]+@{1}[a-z0-9]+\.{1}[a-z]{2,5}$/.test(v.toLowerCase()) || "یک ایمیل معتر وارد کنید."
      ]
    },
    valid: true,
    checkbox: false,
    loading: false,
    showPassword: false,
    error: {
      status: false,
      msg: "رمز عبور یا نام کاربری اشتباه است",
    },
  }),
  computed: {
    isDark() {
      return this.$vuetify.theme.dark;
    },
  },

  methods: {
    submit() {
      if (this.$refs.loginForm.validate() && this.valid) {
        this.loading = true
        setTimeout(() => {
          const user = this.$store.state.userlist.find(
            (e) => e.username === this.user.username
          );
          if (typeof user === "object") {
            this.error.status = true;
            this.error.msg = "نام کاربری از قبل استفاده شده هست.";
            this.user.username = "";
          } else {
            this.$store.commit("addUser", {
              username: this.user.username,
              password: this.user.password,
            });
            this.error.status = false;
          }
          this.loading = false
        }, 2100);
      }
    },
  },
};
</script>