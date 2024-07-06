<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated
              class="header-border"
              height-hint="58">
      <q-toolbar>
        <q-btn flat
               dense
               round
               @click="toggleLeftDrawer"
               aria-label="Menu"
               icon="menu" />
        <q-btn flat
               no-caps
               no-wrap
               class="q-ml-xs">
          <q-toolbar-title shrink
                           class="text-weight-bold"
                           @click="$router.push('/home')">
            ToDoNow
          </q-toolbar-title>
        </q-btn>
        <q-space />
        <div class="q-gutter-sm row items-center no-wrap"
             @click="$router.push('/user')">
          <q-btn round
                 flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>
              Informações
            </q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen"
              show-if-above
              bordered
              :width="240">
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item @click="$router.push('/home')"
                  v-ripple
                  clickable>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Home</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator class="q-my-md" />
          <q-expansion-item icon="category"
                            v-model="expanded"
                            label="Grupo(s)">
            <q-list>
              <q-item v-for="(grouper, index) in groupers" :key="index"
                      v-ripple
                      clickable>
                <q-item-section avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ grouper?.name }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
          <q-separator class="q-my-md" />
          <q-item @click="logout"
                  v-ripple
                  clickable>
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Sair</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { userAuthStore } from "stores/userAuthStore";
import { useQuasar } from "quasar";
import axios from "axios";

const router = useRouter();
const leftDrawerOpen = ref(false);
const expanded = ref(true);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const logout = () => {
  userAuthStore().clearAuth();
  router.push("/login");
};

const $q = useQuasar();

$q.screen.setSizes({ sm: 300, md: 500, lg: 1000, xl: 2000 });

const getGroupers = async () => {
  try {
    const res = await axios.get("http://localhost:8080/grouper");
    console.log(res?.data)
    return res?.data || [];
  } catch (e) {
    $q.notify({
      message: e?.response?.data?.message || e.message,
      color: "negative"
    });
  }
};

const groupers = ref([]);
(async () => {
  groupers.value = await getGroupers();
})();


</script>

<style scoped>
.q-toolbar {
  background-color: #212121;
}

.header-border {
  border-bottom: 1px solid #5C5C5C !important;
}

</style>
