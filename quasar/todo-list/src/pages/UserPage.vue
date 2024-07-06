<template>
  <q-card flat bordered class="q-ma-md">
    <q-card-section>
      <div class="text-h6">Informações da conta</div>
    </q-card-section>
    <q-card-section>
      <div class="q-mb-md"><span class="text-bold">Nome: </span>{{ user.name }}</div>
      <div class="q-mb-md"><span class="text-bold">E-mail: </span>{{ user.email }}</div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { userAuthStore } from "stores/userAuthStore";

const user = userAuthStore().getUser() || {};

</script>
