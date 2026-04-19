<script setup lang="ts">
type Option = {
  label: string
  value: string
  icon?: string
}

const modelValue = defineModel<string>({ default: '' })

defineProps<{
  options: Option[]
}>()
</script>

<template>
  <div class="inline-flex rounded-full bg-brand-100/80 p-1">
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      class="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition"
      :class="
        modelValue === option.value
          ? 'bg-white text-brand-800 shadow-sm'
          : 'text-brand-500 hover:text-brand-700'
      "
      @click="modelValue = option.value"
    >
      <UIcon
        v-if="option.icon"
        :name="option.icon"
        class="size-4"
      />
      {{ option.label }}
    </button>
  </div>
</template>
