<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string
  }>(),
  {
    label: 'Loading your plan...'
  }
)
</script>

<template>
  <Card class="text-center">
    <div class="flex flex-col items-center gap-4 py-6">
      <div class="flex size-14 items-center justify-center rounded-full bg-brand-100 text-brand-700">
        <UIcon
          name="i-lucide-loader-circle"
          class="size-6 animate-spin"
        />
      </div>
      <p class="text-sm font-medium text-slate-600">
        {{ label }}
      </p>
    </div>
  </Card>
</template>
