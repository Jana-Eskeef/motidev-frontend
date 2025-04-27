<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="pa-5" elevation="10">
          <v-card-title class="justify-center">إنشاء حساب</v-card-title>
          <v-card-text>
            <v-text-field v-model="username" label="اسم المستخدم" outlined dense />
            <v-text-field v-model="email" label="البريد الإلكتروني" outlined dense />
            <v-text-field v-model="password" label="كلمة المرور" type="password" outlined dense />
            <v-btn color="primary" block class="mt-4" @click="signup">إنشاء الحساب</v-btn>
          </v-card-text>
          <v-card-actions class="justify-center">
            <small>لديك حساب بالفعل؟ <router-link to="/login">سجل دخول</router-link></small>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SignUpPage",
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signup() {
      if (this.username && this.email && this.password) {
        localStorage.setItem('isLoggedIn', true);
        this.$router.push('/dashboard');
      } else {
        alert('يرجى تعبئة الحقول!');
      }
    }
  }
}
</script>
