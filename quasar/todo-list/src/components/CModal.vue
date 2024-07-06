<template>
  <q-dialog v-model="showModal"
            persistent>
    <q-card :style="$q.platform.is.mobile ? 'min-width: 80vw' : 'min-width: 30vw'">
      <q-card-section>
        <div class="text-h6">{{ title }}</div>
      </q-card-section>
      <q-separator />
      <q-card-section style="max-height: 50vh"
                      class="scroll q-pa-lg">
        <slot name="content"></slot>
      </q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <q-btn flat
               label="Cancelar"
               color="primary"
               @click="updateModelValue(false)" />
        <q-btn flat
               label="Adicionar"
               color="primary"
               @click="() => $emit('confirm')" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, defineProps, defineEmits, watchEffect } from "vue";

const props = defineProps(["modelValue", "title"]);
const emits = defineEmits(["update:modelValue", "confirm"]);

const showModal = ref(props.modelValue);

watchEffect(() => {
  showModal.value = props.modelValue;
});

const updateModelValue = (newValue) => {
  emits("update:modelValue", newValue);
};

</script>

<style scoped>
</style>
