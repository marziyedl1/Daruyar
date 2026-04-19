<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    description: string
    icon?: string
  }>(),
  {
    icon: 'i-lucide-pill-bottle'
  }
)
</script>

<template>
  <Card class="text-center">
    <div class="mx-auto flex max-w-sm flex-col items-center gap-4 py-4">
      <div class="flex size-14 items-center justify-center rounded-full bg-lavender-100 text-brand-700">
        <UIcon
          :name="icon"
          class="size-6"
        />
      </div>
      <div class="space-y-2">
        <h3 class="text-lg font-semibold text-brand-950">
          {{ title }}
        </h3>
        <p class="text-sm leading-6 text-slate-600">
          {{ description }}
        </p>
      </div>
      <slot />
    </div>
  </Card>
</template>
