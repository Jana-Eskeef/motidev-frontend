<template>
  <v-app dir="rtl">
    <!-- White App Bar -->
    <v-app-bar app color="white" elevation="1">
      <v-app-bar-nav-icon @click="drawer = !drawer" color="grey darken-1"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title class="font-weight-bold grey--text text--darken-2">لوحة التحكم</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon color="grey darken-1">
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-avatar color="purple lighten-4" size="36" class="mr-2">
        <span class="purple--text text--darken-2">MD</span>
      </v-avatar>
    </v-app-bar>

    <!-- White Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      app
      color="white"
      mini-variant-width="80"
      right
    >
      <!-- Purple Logo Section -->
      <v-list-item class="logo-section px-2 py-4">
        <v-list-item-content class="text-center">
          <div class="logo-text purple--text text--darken-2">
            <span class="font-weight-bold">MOTIDEV</span> <span class="code-symbols">&lt;/&gt;</span>
          </div>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="grey lighten-3"></v-divider>

      <!-- Grey Navigation Items -->
      <v-list dense nav>
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          link
          :to="item.to"
          active-class="active-nav-item"
          class="grey--text text--darken-1"
        >
          <v-list-item-icon class="ml-2">
            <v-icon color="grey darken-1">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-4">
          <v-btn
            block
            rounded
            color="purple"
            dark
            @click="logout"
          >
            <v-icon right>mdi-logout</v-icon>
            <span>تسجيل الخروج</span>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <v-container fluid class="pa-6">
        <v-row>
          <v-col cols="12">
            <v-card rounded="lg" elevation="4" class="pa-6">
              <div class="d-flex justify-space-between align-center mb-6">
                <h1 class="text-h4 font-weight-bold purple--text text--darken-2">مرحبًا بك في MotiDev</h1>
                <v-chip color="purple lighten-4" text-color="purple darken-2">
                  <v-icon left small>mdi-account</v-icon>
                  لوحة التحكم
                </v-chip>
              </div>

              <!-- Stats Cards -->
              <v-row class="mb-6">
                <v-col v-for="stat in stats" :key="stat.title" cols="12" sm="6" md="3">
                  <v-card
                    :color="stat.color"
                    dark
                    rounded="lg"
                    elevation="2"
                    class="pa-4 stat-card"
                  >
                    <div class="d-flex align-center">
                      <v-avatar :color="stat.avatarColor" size="56" class="ml-4">
                        <v-icon large>{{ stat.icon }}</v-icon>
                      </v-avatar>
                      <div>
                        <div class="text-h5 font-weight-bold">{{ stat.value }}</div>
                        <div class="text-subtitle-1">{{ stat.title }}</div>
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>

              <!-- Recent Activity -->
              <v-card rounded="lg" elevation="2" class="mb-6">
                <v-card-title class="purple--text text--darken-2">
                  <v-icon left color="purple darken-2">mdi-clock</v-icon>
                  النشاط الأخير
                </v-card-title>
                <v-divider></v-divider>
                <v-list>
                  <v-list-item
                    v-for="(activity, i) in activities"
                    :key="i"
                  >
                    <v-list-item-icon class="ml-2">
                      <v-icon :color="activity.color">{{ activity.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{ activity.text }}</v-list-item-title>
                      <v-list-item-subtitle>{{ activity.time }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>

              <!-- Quick Actions -->
              <v-card rounded="lg" elevation="2">
                <v-card-title class="purple--text text--darken-2">
                  <v-icon left color="purple darken-2">mdi-rocket</v-icon>
                  إجراءات سريعة
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <v-row>
                    <v-col
                      v-for="action in quickActions"
                      :key="action.title"
                      cols="6"
                      sm="3"
                    >
                      <v-btn
                        block
                        :color="action.color"
                        dark
                        height="100"
                        rounded="lg"
                        @click="actionClick(action.action)"
                      >
                        <div>
                          <v-icon x-large class="mb-2">{{ action.icon }}</v-icon>
                          <div>{{ action.title }}</div>
                        </div>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DashboardPage',
  data: () => ({
    drawer: true,
    navItems: [
      { title: 'الرئيسية', icon: 'mdi-view-dashboard', to: '/' },
      { title: 'المشاريع', icon: 'mdi-folder', to: '/projects' },
      { title: 'المهام', icon: 'mdi-checkbox-marked', to: '/tasks' },
      { title: 'الفريق', icon: 'mdi-account-group', to: '/team' },
      { title: 'الإعدادات', icon: 'mdi-cog', to: '/settings' },
    ],
    stats: [
      {
        title: 'المشاريع النشطة',
        value: '12',
        icon: 'mdi-folder-multiple',
        color: 'purple darken-1',
        avatarColor: 'purple darken-3'
      },
      {
        title: 'المهام المكتملة',
        value: '34',
        icon: 'mdi-check-all',
        color: 'purple',
        avatarColor: 'purple darken-2'
      },
      {
        title: 'أعضاء الفريق',
        value: '8',
        icon: 'mdi-account-group',
        color: 'deep-purple',
        avatarColor: 'deep-purple darken-2'
      },
      {
        title: 'الإشعارات',
        value: '5',
        icon: 'mdi-bell',
        color: 'purple lighten-1',
        avatarColor: 'purple darken-1'
      }
    ],
    activities: [
      {
        text: 'تم إنشاء مشروع جديد',
        time: 'منذ 15 دقيقة',
        icon: 'mdi-folder-plus',
        color: 'purple'
      },
      {
        text: 'تم إكمال المهمة #123',
        time: 'منذ ساعة',
        icon: 'mdi-check-bold',
        color: 'purple lighten-1'
      },
      {
        text: 'تعليق جديد على المشروع',
        time: 'منذ 3 ساعات',
        icon: 'mdi-comment',
        color: 'purple lighten-2'
      }
    ],
    quickActions: [
      {
        title: 'مشروع جديد',
        icon: 'mdi-plus-box',
        color: 'purple darken-1',
        action: 'newProject'
      },
      {
        title: 'إضافة مهمة',
        icon: 'mdi-playlist-plus',
        color: 'purple',
        action: 'newTask'
      },
      {
        title: 'دعوة عضو',
        icon: 'mdi-account-plus',
        color: 'deep-purple',
        action: 'invite'
      },
      {
        title: 'تقرير',
        icon: 'mdi-chart-bar',
        color: 'purple lighten-1',
        action: 'report'
      }
    ]
  }),
  methods: {
    logout() {
      // Logout logic
      console.log('Logging out...');
    },
    actionClick(action) {
      console.log('Action:', action);
      // Handle quick actions
    }
  }
};
</script>

<style scoped>
/* Logo styling */
.logo-section {
  background-color: white !important;
  border-bottom: 1px solid #eee;
}
.logo-text {
  font-size: 1.5rem;
  letter-spacing: 1px;
}
.code-symbols {
  font-weight: normal;
  opacity: 0.8;
}

/* Active nav item style - turns purple */
.active-nav-item {
  background-color: #F3E5F5 !important;
  border-right: 4px solid #6A0DAD !important;
}
.active-nav-item .v-list-item__title,
.active-nav-item .v-icon {
  color: #6A0DAD !important;
  font-weight: bold;
}

/* Grey navigation items with hover effect */
.v-list-item:not(.active-nav-item) {
  transition: all 0.3s ease;
}
.v-list-item:not(.active-nav-item):hover {
  background-color: #FAFAFA !important;
}
.v-list-item:not(.active-nav-item):hover .v-list-item__title,
.v-list-item:not(.active-nav-item):hover .v-icon {
  color: #424242 !important;
}

/* Stat cards hover effect */
.stat-card {
  transition: transform 0.3s ease;
}
.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1) !important;
}

/* RTL specific adjustments */
.v-list-item__icon {
  margin-left: 12px !important;
  margin-right: 0 !important;
}
.v-btn__content {
  flex-direction: row-reverse;
}
</style>