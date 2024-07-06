<template>
  <q-layout>
    <q-page-container>
      <q-page class="page-responsive">
        <q-form class="row justify-center full-width" @submit.prevent="login">
          <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md login-style">
            <p class="col-12 text-h5 text-center">ToDoNow</p>
            <q-input label="E-mail"
                     v-model="form.email"
                     lazy-rules
                     :rules="[val => (val && val.length > 0) || 'E-mail é obrigatório']"
                     type="email" />
            <q-input label="Senha"
                     v-model="form.password"
                     lazy-rules
                     type="password"
                     :rules="[val => (val && val.length > 0) || 'Senha é obrigatória']" />
            <div class="full-width q-pt-md">
              <q-btn label="Entrar"
                     color="primary"
                     class="full-width"
                     outline
                     rounded
                     type="submit" />
            </div>
            <div class="full-width q-gutter-y-sm">
              <q-btn label="Registrar"
                     color="primary"
                     class="full-width"
                     flat
                     to="/register"
                     size="sm" />
              <q-btn label="Esqueci minha senha"
                     color="primary"
                     class="full-width"
                     flat
                     :to="{ name: 'forgot-password'}"
                     size="sm" />
            </div>
          </div>
        </q-form>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>

import { reactive } from "vue";
import { useRouter } from "vue-router";
import { userAuthStore } from "stores/userAuthStore";
import axios from "axios";
import { useQuasar } from 'quasar'

const $q = useQuasar()
const authStore = userAuthStore();

const router = useRouter();

const form = reactive({
  email: "",
  password: ""
});

const login = async () => {
  try {
    const data = {
      email: form.email,
      password: form.password
    };

    const res = await axios.post("http://localhost:8080/auth/login", data);
    authStore.setAuth(res.data.user, res.data.token);
    await router.push("/home");
  } catch (e) {
    $q.notify({
      message: e?.response?.data?.message || e.message,
      color: 'negative'
    })
  }
};

</script>

<style scoped>


.page-responsive {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-style {
  background: #1D1D1D;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 7px 1px gray;
}
</style>
