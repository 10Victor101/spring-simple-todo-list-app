<template>
  <q-page>
    <q-card flat bordered class="q-ma-md">
      <q-card-section class="flex justify-between items-center">
        <div class="text-h6">Home</div>
        <div>
          <add-grouper/>
          <q-btn icon="add" color="positive">Tarefa</q-btn>
        </div>
      </q-card-section>
      <q-card-section>
        <q-expansion-item label="Atrasadas (0)">
          <q-table style="max-height: 350px"
                   flat
                   :hide-pagination="rows.length < 6"
                   :rows="rows"
                   :columns="columns"
                   row-key="index"
                   dense
                   v-model:pagination="pagination"
                   :rows-per-page-options="[0]"
          />
        </q-expansion-item>
        <q-separator />
        <q-expansion-item label="Hoje (0)">
          <q-table style="max-height: 350px"
                   flat
                   :rows="rows"
                   :columns="columns"
                   row-key="index"
                   virtual-scroll
                   v-model:pagination="pagination"
                   :rows-per-page-options="[0]"
          />
        </q-expansion-item>
        <q-separator />
        <q-expansion-item label="Futuras (0)">
          <q-item>
            teste
          </q-item>
        </q-expansion-item>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import CModal from "components/CModal.vue";
import AddGrouper from "components/AddGrouper.vue";

const pagination = ref({
  rowsPerPage: 5
});

const columns = [
  {
    name: "name",
    required: true,
    label: "Tarefa",
    align: "left",
    field: row => row.name,
    format: val => `${ val }`,
    sortable: true
  },
  {
    name: "name",
    required: true,
    label: "Grupo",
    align: "left",
    field: row => row.grupo,
    format: val => `${ val }`,
    sortable: true
  },
  {
    name: "name",
    required: true,
    label: "Vencimento",
    align: "left",
    field: row => row.vencimento,
    format: val => `${ val }`,
    sortable: true
  }
];

const seed = [
  {
    name: "Frozen Yogurt",
    grupo: "casa",
    vencimento: "12/12/2024"
  }
];

// we generate lots of rows here
let rows = [];
for (let i = 0; i < 6; i++) {
  rows = rows.concat(seed.slice(0).map(r => ({ ...r })));
}
rows.forEach((row, index) => {
  row.index = index;
});
</script>
