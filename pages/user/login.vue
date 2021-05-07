<template>
  <v-main>
    <v-responsive max-width="400" class="px-5 my-12 mx-auto">
      <v-card
        class="px-5 py-5 rounded"
        :color="isDark ? null : 'grey lighten-4'"
      >
        <v-card-title primary-title class="justify-center py-3">
          ورود به حساب کاربری
        </v-card-title>
        <v-divider></v-divider>
        <v-alert
          dense
          color="red"
          dismissible
          :close-icon="icon.Close"
          v-model="error.status"
          close-text="Close Alert"
          class="mt-3 body-2"
          >{{ error.msg }}</v-alert
        >
        <v-alert
          dense
          outlined
          type="success"
          text
          :close-icon="icon.Close"
          :icon="icon.Fire"
          dismissible
          v-model="error.reset"
          close-text="Close Alert"
          class="mt-3 body-2"
        >
          برای بازیابی
          <strong
            >رمز عبور<nuxt-link to="/user/lost-password"> اینجا</nuxt-link>کلیک
            کنید
          </strong>
        </v-alert>

        <v-form class="mt-3" ref="loginForm" v-model="valid" lazy-validation>
          <v-text-field
            v-model="user.username"
            :rules="rules.username"
            ref="username"
            @keydown.enter="$refs.password.focus()"
            label="نام کاربری"
            color="c_1"
            counter
            required
          ></v-text-field>

          <v-text-field
            v-model="user.password"
            :rules="rules.password"
            ref="password"
            @keydown.enter="submit"
            label="رمز عبور"
            color="c_1"
            counter
            required
            type="password"
          ></v-text-field>

          <v-checkbox
            color="c_1"
            v-model="checkbox"
            label="مرا به خطر بسپار"
            :off-icon="icon.CheckboxOff"
            :on-icon="icon.CheckboxOn"
          ></v-checkbox>

          <v-btn
            :disabled="!valid"
            :loading="loading"
            color="c_1"
            block
            @click="submit"
            >ورود به حساب کاربری</v-btn
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
    icon: icon,
    user: {
      username: "",
      password: "",
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
    },
    valid: true,
    checkbox: false,
    loading: false,
    error: {
      status: false,
      reset: false,
      msg: "رمز عبور یا نام کاربری اشتباه است",
    },
  }),
  computed: {
    isDark() {
      return this.$vuetify.theme.dark;
    },
  },

  methods: {
    async submit() {
      if (this.$refs.loginForm.validate() && this.valid) {
        this.loading = true;
        try {
          let response = await this.$auth.loginWith("local", {
            data: this.user,
          });
          console.log(response);
          this.loading = false;
        } catch (err) {
          console.log(err);
        }
      }
    },
  },
};
</script>