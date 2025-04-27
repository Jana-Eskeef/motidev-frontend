<template>
  <v-container class="fill-height" fluid style="background: linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%);">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card 
          class="pa-5" 
          elevation="12"
          rounded="lg"
          style="border: 1px solid rgba(106, 13, 173, 0.2); transition: transform 0.3s ease;"
          @mouseover="$event.currentTarget.style.transform = 'scale(1.02)'"
          @mouseleave="$event.currentTarget.style.transform = 'scale(1)'"
        >
          <!-- Gradient title -->
          <v-card-title class="justify-center text-h4 mb-4" style="
            background: linear-gradient(to right, #6A0DAD, #9C27B0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 700;
          ">
            إنشاء حساب
          </v-card-title>

          <v-card-text>
            <!-- Username field -->
            <v-text-field 
              v-model="username" 
              label="اسم المستخدم" 
              outlined 
              dense
              rounded
              prepend-inner-icon="mdi-account"
              class="mb-3"
              color="purple darken-2"
            />

            <!-- Email field -->
            <v-text-field 
              v-model="email" 
              label="البريد الإلكتروني" 
              outlined 
              dense
              rounded
              prepend-inner-icon="mdi-email"
              class="mb-3"
              color="purple darken-2"
            />

            <!-- Password field -->
            <v-text-field 
              v-model="password" 
              label="كلمة المرور" 
              type="password" 
              outlined 
              dense
              rounded
              prepend-inner-icon="mdi-lock"
              color="purple darken-2"
            />

            <!-- Signup button -->
            <v-btn 
              color="purple darken-2"
              block 
              class="mt-4" 
              @click="signup"
              rounded="pill"
              large
              :style="{ 
                'box-shadow': '0 4px 16px rgba(106, 13, 173, 0.3)',
                'transition': 'all 0.3s ease'
              }"
              @mouseover="$event.currentTarget.style.boxShadow = '0 6px 20px rgba(106, 13, 173, 0.4)'"
              @mouseleave="$event.currentTarget.style.boxShadow = '0 4px 16px rgba(106, 13, 173, 0.3)'"
            >
           <span class=" --text-white text-h6"> إنشاء 
            الحساب</span>
              <v-icon right dark>mdi-account-plus</v-icon>
            </v-btn>
          </v-card-text>

          <!-- Login link -->
          <v-card-actions class="justify-center text-h6">
            <small style="transition: all 0.3s ease;">
              لديك حساب بالفعل؟ 
              <router-link 
                to="/login" 
                style="color: #6A0DAD; text-decoration: none; font-weight: 600;"
                class=" text-h6"
              >
                سجل دخول
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
