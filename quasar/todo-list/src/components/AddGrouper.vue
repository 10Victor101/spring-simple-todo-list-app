<template>
  <q-btn class="q-mr-md"
         icon="add"
         color="positive"
         @click="toggleShowGrouper()">Grupo
  </q-btn>
  <c-modal title="Adicionar grupo"
           @confirm="addGrouper()"
           v-model="showGrouper">
    <template v-slot:content>
      <q-input label="nome"
               v-model="formGrouper.name"
               type="text" />
    </template>
  </c-modal>
</template>

<script setup>
import { ref } from "vue";
import CModal from "components/CModal.vue";
import axios from "axios";
import { useQuasar } from "quasar";

const $q = useQuasar();
const showGrouper = ref(false);

const toggleShowGrouper = () => {
  showGrouper.value = !showGrouper.value;
};

const formGrouper = {
  name: ""
};

const addGrouper = async () => {
  try {
    const data = {
      name: formGrouper.name
    };

    const res = await axios.post("http://localhost:8080/grouper", data);
    toggleShowGrouper();
    $q.notify({
      message: "Grupo adicionado com sucesso!",
      color: "positive"
    });
  } catch (e) {
    $q.notify({
      message: e?.response?.data?.message || e.message,
      color: "negative"
    });
  }
};

</script>

<style scoped>

</style>
