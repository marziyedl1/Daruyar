<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  eyebrow?: string
}>()
</script>

<template>
  <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
    <div class="space-y-2">
      <p
        v-if="eyebrow"
        class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500"
      >
        {{ eyebrow }}
      </p>
      <div class="space-y-1">
        <h2 class="text-2xl font-semibold tracking-tight text-brand-950 md:text-3xl">
          {{ title }}
        </h2>
        <p
          v-if="description"
          class="max-w-2xl text-sm leading-6 text-slate-600 md:text-base"
        >
          {{ description }}
        </p>
      </div>
    </div>

    <div v-if="$slots.actions">
      <slot name="actions" />
    </div>
  </div>
</template>
