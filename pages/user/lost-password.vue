<template>
  <v-main>

  
    <v-responsive max-width="650" class="px-5 my-12 mx-auto">
      <v-card
        class="px-5 py-5 rounded"
        :color="isDark ? null : 'grey lighten-4'"
      >
        <v-card-title primary-title class="py-3">
          گذرواژه خود را فراموش کرده اید؟
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
        <v-alert
          dense
          :icon="icon.InformationVariant"
          :outlined="isDark"
          :text="isDark"
          type="success"
          class="mt-3 body-2"
        >
          {{ massage }}
        </v-alert>

        <div>
          <v-text-field
            v-model="username"
            placeholder="نام کاربری یا ایمیل را وارد کنید"
            color="c_1"
            v-if="level === 1"
          ></v-text-field>

          <v-text-field
            v-model="recoveryCode"
            placeholder="کد ارسال شده به ایمیلتان را وارد کنید"
            color="c_1"
            v-if="level === 2"
          ></v-text-field>
          <div v-if="level === 3">
            <v-text-field
              v-model="password"
              @keydown.enter="$refs.trypassword.focus()"
              placeholder="رمز عبور جدید را وارد کنید"
              color="success"
            ></v-text-field>

            <v-text-field
              v-model="trypassword"
              ref="trypassword"
              placeholder="رمز عبور را تکرار کنید."
              color="success"
            ></v-text-field>
          </div>
          <v-btn
            :loading="loading"
            ref="submit"
            :color="level === 4 ? 'success' : 'c_1'"
            class="mt-3"
            block
            @click="submit"
            >{{ level === 4 ? 'ورود به حساب کاربری' : 'بازگردانی گذرواژه' }}</v-btn
          >
        </div>
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
import { mdiClose, mdiInformationVariant  } from '@mdi/js'

const icon = {
  Close:mdiClose,
  InformationVariant:mdiInformationVariant
};
export default {
  validate: function (){
      return 1
  },
  data: () => ({
    icon: icon,
    username: "",
    recoveryCode: "",
    password: "",
    trypassword: "",
    loading: false,
    level: 1,
    massage: "نام کاربری یا ایمیل خود را وارد کنید. یک کد 6 رقمی به ایمیل شما ارسال خواهیم کرد.",
    error: {
      status: false,
      reset: false,
      msg: "رمز عبور یا نام کاربری اشتباه است",
    }
  }),
  computed: {
    isDark() {
      return this.$vuetify.theme.dark;
    },
  },

  methods: {
    submit() {
        let user;
        if(this.username && this.level === 1){
            user = this.$store.state.userlist.find(e => (e.username === this.username || e.email === this.username))
            if(user){
                this.error.status = false;
                this.massage = "رمز عبور ارسال شده به ایمیل خود را وارد کنید."
                this.level = 2;
            }else{
                this.error.status = true;
                this.error.msg = "حساب کاربری با این مشخصات یافت نشد."
            }
        }else if(this.level === 2 && this.recoveryCode){
            if(this.recoveryCode === '000000'){
                this.error.status = false;
                this.massage = "رمز عبور جدید خود را وارد کرده و آن را تکرار کنید."
                this.level = 3;
            }else{
                this.error.status = true;
                this.error.msg = "کد وارد شده نادرست هست"
            }
        }else if(this.level === 3 && this.password){
            if(this.password === this.trypassword){
                this.error.status = false;
                this.massage = "رمز عبور حساب کاربری شما با موفقیت تغییر کرد."
                this.level = 4;
                alert(1)
            }else{
                this.error.status = true;
                this.error.msg = "رمز عبور با هم مطابقت ندارد"
            }
        }else if(this.level === 4){
            this.$router.push('/login')
        }
    },
  },
};
</script>