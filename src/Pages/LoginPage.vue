<template>
  <v-container class="fill-height" fluid style="background: linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%);">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card 
          class="pa-5 rounded-xxl" 
          elevation="12"
          style="border: 1px solid rgba(106, 13, 173, 0.2); transition: transform 0.3s ease;"
          @mouseover="$event.currentTarget.style.transform = 'scale(1.02)'"
          @mouseleave="$event.currentTarget.style.transform = 'scale(1)'"
        >
          <!-- Animated title with purple gradient -->
          <v-card-title class="justify-center text-h4 mb-4" style="
            background: linear-gradient(to right, #6A0DAD, #9C27B0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 700;
          ">
            تسجيل دخول
          </v-card-title>

          <v-card-text>
            <!-- Input fields with rounded corners -->
            <v-text-field 
              v-model="email" 
              label="البريد الإلكتروني" 
              outlined 
              dense
              prepend-inner-icon="mdi-email"
              class="mb-3 rounded-pill"
              color="purple darken-2"
            />

            <v-text-field 
              v-model="password" 
              label="كلمة المرور" 
              type="password" 
              outlined 
              dense	class="mb-3 rounded-pill"
              prepend-inner-icon="mdi-lock"
              color="purple darken-2"
            />

            <!-- Animated purple button -->
            <v-btn 
               color="purple darken-3" 
              block 
              class="mt-4 rounded-pill"  
              @click="login"
              
              large
              :style="{ 
                'box-shadow': '0 4px 16px rgba(106, 13, 173, 0.3)',
                'transition': 'all 0.3s ease'
              }"
              @mouseover="$event.currentTarget.style.boxShadow = '0 6px 20px rgba(106, 13, 173, 0.4)'"
              @mouseleave="$event.currentTarget.style.boxShadow = '0 4px 16px rgba(106, 13, 173, 0.3)'"
            >
<span class="text-h6 --text-white">              تسجيل الدخول</span>
              <v-icon right dark>mdi-login</v-icon>
            </v-btn>
          </v-card-text>

          <!-- Signup link with subtle animation -->
          <v-card-actions class="justify-center text-h6">
            <small style="transition: all 0.3s ease;">
              ليس لديك حساب؟ 
              <router-link 
                to="/signup" 
                style="color: #6A0DAD; text-decoration: none; font-weight: 600;"
                class="text-h6"
              >
                سجل الآن
              </router-link>
            </small>
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
