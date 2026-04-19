<script setup lang="ts">
const modelValue = defineModel<string>({ default: '' })

withDefaults(
  defineProps<{
    id?: string
    label?: string
    type?: string
    placeholder?: string
    hint?: string
    error?: string
    required?: boolean
  }>(),
  {
    id: undefined,
    label: undefined,
    type: 'text',
    placeholder: '',
    hint: undefined,
    error: undefined,
    required: false
  }
)
</script>

<template>
  <label
    :for="id"
    class="flex flex-col gap-2"
  >
    <span
      v-if="label"
      class="text-sm font-semibold text-brand-900"
    >
      {{ label }}
      <span
        v-if="required"
        class="text-brand-500"
      >
        *
      </span>
    </span>

    <input
      :id="id"
      v-model="modelValue"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      class="h-12 rounded-3xl border border-brand-100 bg-white/90 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-300 focus:ring-4 focus:ring-brand-100"
    >

    <span
      v-if="error"
      class="text-sm font-medium text-rose-600"
    >
      {{ error }}
    </span>
    <span
      v-else-if="hint"
      class="text-sm text-slate-500"
    >
      {{ hint }}
    </span>
  </label>
</template>
