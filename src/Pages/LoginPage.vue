<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="pa-5" elevation="10">
          <v-card-title class="justify-center">تسجيل دخول</v-card-title>
          <v-card-text>
            <v-text-field v-model="email" label="البريد الإلكتروني" outlined dense />
            <v-text-field v-model="password" label="كلمة المرور" type="password" outlined dense />
            <v-btn color="primary" block class="mt-4" @click="login">تسجيل الدخول</v-btn>
          </v-card-text>
          <v-card-actions class="justify-center">
            <small>ليس لديك حساب؟ <router-link to="/signup">سجل الآن</router-link></small>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      
      if (this.email && this.password) {
        localStorage.setItem('isLoggedIn', true);
        this.$router.push('/dashboard');
      } else {
        alert('يرجى تعبئة الحقول!');
      }
    }
  }
}
</script>
